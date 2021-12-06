import { Request } from 'express';
import cookie from 'cookie';

import Logger from './helpers/Logger';
const log = new Logger('H5PUser');
import {
    checkAuthenticationToken,
    KidsloopAuthenticationToken
} from 'kidsloop-token-validation';

/**
 * The H5PUser is a representation of the user that's viewing H5P content.
 * Unique information may be required in order to store the state of a content
 * for a user or to use it for xAPI statements.
 *
 * getFromRequest is a function to retrieve the current user id from a JWT, but
 * this function will need to get put into an interface so people can override
 * it in a different way.
 */
export default class H5PUser {
    /**
     * @constructor
     * @param {Request} source Source of user
     */
    constructor(source: Request) {
        this.userPromise = this.getFromRequest(source);
    }

    private readonly userPromise: Promise<IH5PUser | null>;

    /**
     * Get user id.
     * @return {string|null} User id or null if not set.
     */
    async getId(): Promise<string | null> {
        const user = await this.userPromise;
        return user?.id ?? null;
    }

    /**
     * Get data appropriate for setting in H5PIntegration.
     * @return {IH5PIntegrationUser|undefined} Data for H5PIntegration.
     */
    async getH5PIntegrationUser(): Promise<IH5PIntegrationUser | undefined> {
        const user = await this.userPromise;
        if (!user || (!user.name && !user.mail)) {
            return;
        }

        return {
            mail: user.mail,
            name: user.name
        };
    }

    /**
     * Get user data from request.
     * This will need to be individualizable so people can override it!
     * @param {Request} req Express Request.
     * @return {IH5PUser} User data from request.
     */
    private async getFromRequest(req: Request): Promise<IH5PUser> {
        return null;
        const cookieString: string = req.headers.cookie;
        if (!cookieString) {
            return null; // No cookies
        }

        const accessCookie = cookie.parse(cookieString)?.access;
        if (!accessCookie) {
            return null;
        }

        let authenticationToken: KidsloopAuthenticationToken = null;
        try {
            authenticationToken = await checkAuthenticationToken(accessCookie);
        } catch (error) {
            log.debug('JWT validation failed.');
            return null;
        }

        const user: IH5PUser = {};

        for (let key in authenticationToken) {
            if (!['id', 'email'].includes(key)) {
                continue;
            }

            if (key === 'email') {
                user.mail = authenticationToken.email;
                user.name = authenticationToken.email;
            } else {
                user[key] = authenticationToken[key];
            }
        }

        if (Object.keys(user).length === 0) {
            return null;
        }

        return user;
    }
}

/**
 * Current user for H5P
 */
export interface IH5PUser {
    /**
     * User id set by integration
     */
    id?: string;
    /**
     * May be required for IH5PIntegrationUser mail
     */
    mail?: string;
    /**
     * May be required for IH5PIntegrationUser name
     */
    name?: string;
}

/**
 * User for H5PIntegration
 * Used to fill in xAPI actor info within xAPI statements.
 */
export interface IH5PIntegrationUser {
    /**
     * User `mbox` for xAPI actor/name property.
     * @see https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#details-4
     */
    mail: string;
    /**
     * User name for xAPI actor/name property.
     * @see https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#actor
     */
    name: string;
}

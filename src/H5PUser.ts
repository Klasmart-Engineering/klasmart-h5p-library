import { Request } from 'express';
import jwt_decode from 'jwt-decode';
import jwt from 'jsonwebtoken';

import Logger from './helpers/Logger';
const log = new Logger('H5PUser');

/**
 * Scheme for required JWT payload as issued by KidsLoop.
 */
interface IKidsLoopJWT {
    /**
     * User email address.
     */
    email: string;
    /**
     * User id.
     */
    id: string;
}

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
        this.user = this.getFromRequest(source);
    }

    private user: IH5PUser | null = null;

    /**
     * Get user id.
     * @return {string|null} User id or null if not set.
     */
    getId(): string | null {
        return this.user && this.user.id ? this.user.id : null;
    }

    /**
     * Get data appropriate for setting in H5PIntegration.
     * @return {IH5PIntegrationUser|undefined} Data for H5PIntegration.
     */
    getH5PIntegrationUser(): IH5PIntegrationUser | undefined {
        if (!this.user || (!this.user.name && !this.user.mail)) {
            return;
        }

        return {
            mail: this.user.mail,
            name: this.user.name
        };
    }

    /**
     * Get user data from request.
     * This will need to be individualizable so people can override it!
     * @param {Request} req Express Request.
     * @return {IH5PUser} User data from request.
     */
    private getFromRequest(req: Request): IH5PUser {
        const cookieString: string = req.headers.cookie;
        if (!cookieString) {
            return null; // No cookies
        }

        const rawCookies: string[] = cookieString.split('; ');
        const user: IH5PUser = rawCookies.reduce(
            (userResult: IH5PUser, rawCookie: string): IH5PUser => {
                if (userResult !== null) {
                    return userResult;
                }

                const parsedCookie = rawCookie.split('=');
                if (parsedCookie[0] !== 'access') {
                    return null;
                }

                // Validate JWT signature
                if (!process.env.JWT_SECRET) {
                    log.warn(
                        'The JWT secret should be set in process.env.JWT_SECRET to prevent JWT forgery!'
                    );
                    console.warn(
                        'The JWT secret should be set in process.env.JWT_SECRET to prevent JWT forgery!'
                    );
                } else {
                    // Validate JWT by signature
                    try {
                        jwt.verify(parsedCookie[1], process.env.JWT_SECRET);
                    } catch (error) {
                        return null; // JWT not valid
                    }
                }

                // Get payload from JWT
                const payload: IKidsLoopJWT = jwt_decode(parsedCookie[1]);
                const response: IH5PUser = {};

                for (let key in payload) {
                    if (!['id', 'email'].includes(key)) {
                        continue;
                    }

                    if (key === 'email') {
                        response.mail = payload.email;
                        response.name = payload.email;
                    } else {
                        response[key] = payload[key];
                    }
                }

                if (Object.keys(response).length === 0) {
                    return null;
                }

                return response;
            },
            null
        );

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

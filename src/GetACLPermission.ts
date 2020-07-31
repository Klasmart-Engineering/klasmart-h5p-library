import { 
    ContentId, 
    IUser, 
    Permission 
} from './types';
import H5pError from './helpers/H5pError';
import ACLPermission from './ACLPermission';
import Logger from './helpers/Logger';
const log = new Logger('GetACLPermission');

export const GetACLPermission = async (
    contentId: ContentId, 
    user: IUser
): Promise<Permission[]> => {
    let perms: Permission[];

    // If either contentId or user obj are not present, there is nothing to validate. Send full access
    if(undefined === contentId || 'undefined' === contentId || undefined === user) {
        return [Permission.Delete, Permission.Download, Permission.Edit, Permission.Embed, Permission.List, Permission.View];
    }

    try {
        const aclAPI = new ACLPermission(user.token);
        const apiPermission = await aclAPI.getMyAcessLevel(contentId);

        const response = apiPermission['getMyAccessLevel'];
        
        if ('Read' === response) {
            perms = [Permission.Embed, Permission.List, Permission.View];
        } else if ('ReadWrite' === response || 'Full' === response) {
            perms = [Permission.Delete, Permission.Download, Permission.Edit, Permission.Embed, Permission.List, Permission.View];
        } else {
            perms = []; // No permissions
        }
        return perms;
    } catch(e) {
        log.error(e);
        throw new H5pError(
            'h5p-permission:server-error',
            {},
            500
        );
    }
}
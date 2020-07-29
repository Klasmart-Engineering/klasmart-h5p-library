import { 
    ContentId, 
    IUser, 
    Permission 
} from './types';
import ACLPermission from './ACLPermission';

export const GetACLPermission = async (
    contentId: ContentId, 
    user: IUser
): Promise<Permission[]> => {
    let perms: Permission[];

    if(undefined === contentId || 'undefined' === contentId || undefined === user) {
        console.info(`GetACLPermission not needed. Sending full access.`);
        perms = [Permission.Delete, Permission.Download, Permission.Edit, Permission.Embed, Permission.List, Permission.View];
        return new Promise<Permission[]>((resolve) => {
            resolve(perms);
        });
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
            console.log("No permission: ", response, apiPermission);
            perms = [];
        }
        return new Promise<Permission[]>((resolve) => {
            resolve(perms);
        });
    } catch(e) {
        return new Promise<Permission[]>((resolve, reject) => {
            console.log(`GetACLPermission error: ${e}`);
            reject(new Error(`GetACLPermission error. Make sure that the token is part of the user object, that a valid contentId value was sent, and that the ACL API is online.`));
        });
    }
}
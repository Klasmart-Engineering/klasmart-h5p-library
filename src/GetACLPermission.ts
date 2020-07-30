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

    // If either contentId or user obj are not present, there is nothing to validate. Send full access
    if(undefined === contentId || 'undefined' === contentId || undefined === user) {
        perms = [Permission.Delete, Permission.Download, Permission.Edit, Permission.Embed, Permission.List, Permission.View];
        return new Promise<Permission[]>((resolve) => {
            resolve(perms);
        });
    }

    console.info(contentId, user);

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
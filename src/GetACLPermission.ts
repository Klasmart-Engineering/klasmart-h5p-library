import { 
    ContentId, 
    IUser, 
    Permission 
} from './types';
import ACLPermission from './ACLPermission';

export default async(contentId: ContentId, user: IUser): Promise<Permission[]> => {
    const aclAPI = new ACLPermission(user.token);

    const apiPermission = await aclAPI.getMyAcessLevel(contentId);
    const response = apiPermission['getMyAccessLevel'];

    if ('Read' === response) {
        return [Permission.Embed, Permission.List, Permission.View];
    } else if ('ReadWrite' === response || 'Full' === response) {
        return [Permission.Delete, Permission.Download, Permission.Edit, Permission.Embed, Permission.List, Permission.View];
    } else {
        console.log("No permission: ", response, apiPermission);
        return [];
    }
}
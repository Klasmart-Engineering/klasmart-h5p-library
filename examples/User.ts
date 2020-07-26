import { IUser } from '../src';

/**
 * Example user object
 */
export default class User implements IUser {
    constructor() {
        this.id = '1';
        this.name = 'Firstname Surname';
        this.canInstallRecommended = true;
        this.canUpdateAndInstallLibraries = true;
        this.canCreateRestricted = true;
        this.type = 'local';
        this.token = '';
        this.groupId = '';
    }

    public canCreateRestricted: boolean;
    public canInstallRecommended: boolean;
    public canUpdateAndInstallLibraries: boolean;
    public id: string;
    public name: string;
    public type: 'local';
    public token: string; // For usage with ACL API 
    public groupId: string; // For usage with ACL API
}

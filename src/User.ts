import { IUser } from '@lumieducation/h5p-server';

/**
 * Example user object
 */
export default class User implements IUser {
    constructor() {
        this.id = '1';
        this.name = 'Firstname Surname';
        this.canInstallRecommended = false; // KidsLoop custom
        this.canUpdateAndInstallLibraries = false; // KidsLoop custom
        this.canCreateRestricted = false; // KidsLoop custom
        this.type = 'local';
        this.email = 'test@example.com';
    }

    public canCreateRestricted: boolean;
    public canInstallRecommended: boolean;
    public canUpdateAndInstallLibraries: boolean;
    public email: string;
    public id: string;
    public name: string;
    public type: 'local';
}

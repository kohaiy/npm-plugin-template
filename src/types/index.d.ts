export interface User {
    getName: () => string;
}

// declare type NpmPluginTemplate = {
//     User: User;
//     getUser: () => User;
//     userName: string;
// }

// declare namespace NpmPluginTemplate {
//     type User = User;
//     type getUser = () => User;
//     type userName = string;
// }

// declare module 'npm-plugin-template' {
//     export = NpmPluginTemplate;
// }

export const getUser = () => User;

export const userName = string;


import User from './model/user';

const getUser:() => any = () => new User();
const userName:string = 'admin';

export {
    User,
    getUser,
    userName,
};

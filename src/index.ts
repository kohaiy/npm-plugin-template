import User from './model/user';

const getUser = () => new User();
const userName = 'admin';

export {
    User,
    getUser,
    userName,
};
/**
 * Author: keli.yu@accentrix.com
 * Date: 2020/7/27 15:07
 */
const { getUser, userName, User } = require('..');

console.log(getUser().getName());

console.log(userName);

console.log(new User().getName());

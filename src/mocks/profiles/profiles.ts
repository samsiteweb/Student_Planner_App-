import {Profile} from '../../models/profile/profile.interface';

const userList: Profile[] = [
    {firstName: 'Lawal', lastName: 'Samuel', email: 'lawalsamuel@gmail.com', avatar: 'assets/imgs/avatar.png', dateOfBirth: new Date(), },
    {firstName: 'Odelola', lastName: 'Oladayo', email: 'odeloladayo@gmail.com', avatar: 'assets/imgs/avatar.png',dateOfBirth: new Date()},
    {firstName: 'Olaniyan', lastName: 'Victor', email: 'olaniyanvictor@gmail.com', avatar: 'assets/imgs/avatar.png',dateOfBirth: new Date()},
    {firstName: 'Fayemi', lastName: 'Olaide', email: 'fayemiolaide@gmail.com', avatar: 'assets/imgs/avatar.png',dateOfBirth: new Date()},
    {firstName: 'Ipoola', lastName: 'Taiwo', email: 'ippolataiwo@gmail.com', avatar: 'assets/imgs/avatar.png',dateOfBirth: new Date()},

]
export const USER_LIST = userList;
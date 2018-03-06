import {Profile} from '../profile/profile.interface';

export interface Message {
    User: Profile;
    date: Date;
    lastMessage: string;
}
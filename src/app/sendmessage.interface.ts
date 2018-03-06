export interface Message{
    $key?: string,
    messageTitle?: string;
    senderName?:string;
    sendTime?: string;
    messageContent: string;
}
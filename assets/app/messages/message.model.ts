export class Message {
    constructor(public title: string,
                public content: string,
                public username: string,
                public date?: string,
                public messageId?: string,
                public userId?: string) {}
}


/*
export class Message {
    content: string;
    username: string;
    messageId?: string;
    userId?: string;

    constructor(content: string, username: string, messageId?: string, userId?: string) {
        this.content = content;
        this.username = username;
        this.messageId = messageId;
        this.userId = userId;
    }
}
*/
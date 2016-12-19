export class Message {
    constructor(public title: string,
                public content: string,
                public username: string,
                public date?: string,
                public messageId?: string,
                public userId?: string) {}
}



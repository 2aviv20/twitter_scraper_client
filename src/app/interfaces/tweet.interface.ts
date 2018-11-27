export interface Tweet {
    screenName: string,
    id: string,
    time: string,
    isRetweet: boolean,
    isPinned: boolean,
    isReplyTo: boolean,
    text: string,
    userMentions: string[],
    hashtags: string[],
    images: string[],
    urls: string[],
    replyCount: number,
    retweetCount: number,
    favoriteCount: number 
}

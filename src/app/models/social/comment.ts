export class Comment {
    // from server
    id:string;
    createdAt?:Date;

    body:string;
    
    // from token
    username?:string;
    displayName?:string;
    image?:string;
    // activity
    activity:string;
}
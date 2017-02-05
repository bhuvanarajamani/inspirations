export class Quote {
    constructor(
        public id : number,
        public saying: string,
        public author: string,
        public tags: string,
        public bgcolor?: string,
        public font?: string,
        public fontcolor?: string
    ){}
    
}
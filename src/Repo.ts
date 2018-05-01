export class Repo{
    name:string;
    description:string;
    url:string;
    size:number;
    forkCount:number;

    constructor(repoObject:any){
        this.name=repoObject.name,
        this.description=repoObject.description,
        this.url=repoObject.html_url,
        this.size=repoObject.size,
        this.forkCount=repoObject.forks_count
    }
}
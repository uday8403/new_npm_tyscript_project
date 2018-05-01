import * as request from 'request';
import { User } from './User';
import { Repo } from './Repo';


const OPTIONS: any = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
};


export class GitHubApiService {
    getUserInfo(userName: string, cb: (user: User) => any) {

        request.get('https://api.github.com/users/' + userName, OPTIONS, function (error: any, response: any, body: any) {
            /* console.log('response:'+response);
            console.log('error:'+  error);
            console.log('body'+body); */
            let user = new User(body);
            cb(user);
        });
    }

     getRepoInfo(userName: string, cb: (repos: Repo[]) => any){
        request.get('https://api.github.com/users/' + userName +"/repos", OPTIONS, function (error: any, response: any, body: any) {
            let repos=body.map((repo:any) => new Repo(repo));
            cb(repos);
        });
    } 
}


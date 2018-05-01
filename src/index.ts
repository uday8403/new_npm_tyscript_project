import * as _ from 'lodash';
import {GitHubApiService} from './GitHubApiService'
import { User } from './User';
import { Repo } from './Repo';
console.log('Hello');

let userName= process.argv[2];
let a= new GitHubApiService();
a.getUserInfo(userName, function(user:User){
    a.getRepoInfo('koushikkothagal', function(repo:Repo[]){
        
        let sortedRepos=_.sortBy(repo,[function(repo:Repo){
          return repo.forkCount * -1;
        }]);
        let filteredRepos=_.take(sortedRepos,5);

        user.repos=filteredRepos;
        console.log(user);
    });
});


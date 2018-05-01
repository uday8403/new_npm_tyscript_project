import * as _ from 'lodash';
import {GitHubApiService} from './GitHubApiService'
import { User } from './User';
console.log('Hello');

let a= new GitHubApiService();
let responseObj=a.getUserInfo("uday8403");
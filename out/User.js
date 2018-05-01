"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    /* constructor(login:string,fullName:string,repocount:number,followers:number){
        this.login=login;
        this.fullName=fullName;
        this.followerCount=followers
        this.repoCount=repocount;
    } */
    function User(userResponse) {
        this.login = userResponse.login;
        this.fullName = userResponse.name;
        this.followerCount = userResponse.followers;
        this.repoCount = userResponse.public_repos;
    }
    return User;
}());
exports.User = User;

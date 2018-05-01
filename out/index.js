"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __importStar(require("lodash"));
var GitHubApiService_1 = require("./GitHubApiService");
console.log('Hello');
var userName = process.argv[2];
var a = new GitHubApiService_1.GitHubApiService();
a.getUserInfo(userName, function (user) {
    a.getRepoInfo('koushikkothagal', function (repo) {
        var sortedRepos = _.sortBy(repo, [function (repo) {
                return repo.forkCount * -1;
            }]);
        var filteredRepos = _.take(sortedRepos, 5);
        user.repos = filteredRepos;
        console.log(user);
    });
});

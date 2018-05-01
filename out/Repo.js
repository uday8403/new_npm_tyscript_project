"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Repo = /** @class */ (function () {
    function Repo(repoObject) {
        this.name = repoObject.name,
            this.description = repoObject.description,
            this.url = repoObject.html_url,
            this.size = repoObject.size,
            this.forkCount = repoObject.forks_count;
    }
    return Repo;
}());
exports.Repo = Repo;

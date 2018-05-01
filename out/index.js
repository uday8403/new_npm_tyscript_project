"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GitHubApiService_1 = require("./GitHubApiService");
console.log('Hello');
var a = new GitHubApiService_1.GitHubApiService();
var responseObj = a.getUserInfo("uday8403");

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
var Person_1 = require("./Person");
var peron = new Person_1.Person("Saurabh", "Dubey");
console.log(peron.getFullName());
var array = [1, 2, 3, 4, 5];
console.log(_.reverse(array));

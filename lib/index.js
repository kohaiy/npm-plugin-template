"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userName = exports.getUser = exports.User = void 0;
var user_1 = __importDefault(require("./model/user"));
exports.User = user_1.default;
var getUser = function () { return new user_1.default(); };
exports.getUser = getUser;
var userName = 'admin';
exports.userName = userName;

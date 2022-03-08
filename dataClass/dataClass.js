"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Request = void 0;
var Request = /** @class */ (function () {
    function Request(method, uri, version, message) {
        this.response = undefined;
        this.fulfilled = false;
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
    }
    return Request;
}());
exports.Request = Request;
var myData = new Request('GET', 'http://google.com', 'HTTP/1.1', 'OK');
console.log(myData);
//# sourceMappingURL=dataClass.js.map
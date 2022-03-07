export class Request {
    response: string = undefined;
    fulfilled: boolean = false; 
    method: string;
    uri: string;
    version: string;
    message: string;

    constructor(method: string, uri: string, version: string, message: string) {
        this.method = method; 
        this.uri = uri;
        this.version = version;
        this.message = message;
    }
}

let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', 'OK');
console.log(myData);
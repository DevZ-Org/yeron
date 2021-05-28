import fetch from "node-fetch";
export default class Brainshop {
    apikey?: String;
    id?: String;
    uid?: String;
    fetch: typeof fetch;
    constructor(option?: {
        id: string;
        key: string;
        uid: string;
    });
    get(message?: String): Promise<any>;
}

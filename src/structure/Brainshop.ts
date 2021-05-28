import fetch from "node-fetch";
import error from "../error/index";

export default class Brainshop {
    /**
     * Api Key
     */
    public apikey?: String;
    /**
     * Brainshop ID
     */
    public id?: String;
    /**
     * UID of the client
     */
    public uid?: String;
    /**
     * Node-fetch
     */
    public fetch;

    constructor(option = {
        id: "",
        key: "",
        uid: "12345"
    }) {
        this.apikey = option.key;
        this.id = option.id;
        this.uid = option.uid;
        this.fetch = fetch;
    };
    /**
     * Your message for getting a text from the api
     * @param message
     * @returns 
     */
    async get(message?: String) {
        if (!message) throw new ReferenceError(error.Message_Missing);

        if (!this.id) throw new ReferenceError(error.Bad_Auth);

        if (!this.apikey) throw new ReferenceError(error.Bad_Auth);

        const get = this.fetch(`http://api.brainshop.ai/get?bid=${this.id}&key=${this.apikey}&uid=${this.uid}&msg=${message}`);
        const text = (await (await get).json()).cnt;

        return text;
    };
};

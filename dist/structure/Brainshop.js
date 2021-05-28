"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const index_1 = __importDefault(require("../error/index"));
class Brainshop {
    constructor(option = {
        id: "",
        key: "",
        uid: "12345"
    }) {
        this.apikey = option.key;
        this.id = option.id;
        this.uid = option.uid;
        this.fetch = node_fetch_1.default;
    }
    ;
    get(message) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!message)
                throw new ReferenceError(index_1.default.Message_Missing);
            if (!this.id)
                throw new ReferenceError(index_1.default.Bad_Auth);
            if (!this.apikey)
                throw new ReferenceError(index_1.default.Bad_Auth);
            const get = this.fetch(`http://api.brainshop.ai/get?bid=${this.id}&key=${this.apikey}&uid=${this.uid}&msg=${message}`);
            const text = (yield (yield get).json()).cnt;
            return text;
        });
    }
    ;
}
exports.default = Brainshop;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJhaW5zaG9wLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3N0cnVjdHVyZS9CcmFpbnNob3AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBK0I7QUFDL0IsMkRBQW1DO0FBRW5DLE1BQXFCLFNBQVM7SUFrQjFCLFlBQVksTUFBTSxHQUFHO1FBQ2pCLEVBQUUsRUFBRSxFQUFFO1FBQ04sR0FBRyxFQUFFLEVBQUU7UUFDUCxHQUFHLEVBQUUsT0FBTztLQUNmO1FBQ0csSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxvQkFBSyxDQUFDO0lBQ3ZCLENBQUM7SUFBQSxDQUFDO0lBTUksR0FBRyxDQUFDLE9BQWdCOztZQUN0QixJQUFJLENBQUMsT0FBTztnQkFBRSxNQUFNLElBQUksY0FBYyxDQUFDLGVBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUU5RCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQUUsTUFBTSxJQUFJLGNBQWMsQ0FBQyxlQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFdkQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO2dCQUFFLE1BQU0sSUFBSSxjQUFjLENBQUMsZUFBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRTNELE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsbUNBQW1DLElBQUksQ0FBQyxFQUFFLFFBQVEsSUFBSSxDQUFDLE1BQU0sUUFBUSxJQUFJLENBQUMsR0FBRyxRQUFRLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDdkgsTUFBTSxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUU1QyxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO0tBQUE7SUFBQSxDQUFDO0NBQ0w7QUE3Q0QsNEJBNkNDO0FBQUEsQ0FBQyJ9
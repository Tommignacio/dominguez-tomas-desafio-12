import MongoClass from "../../contenedores/MongoClass.js";
import { authorSchema } from "../../models/AuthorsSchema.js";

export class MongoDBAuthors extends MongoClass {
    constructor() {
        super("usuarios", authorSchema)
    }


    // async getByEmail(email) {
    //     return await this.collection.findOne({ email }, { __v: 0 }).lean()//hace un parse
    // }


}
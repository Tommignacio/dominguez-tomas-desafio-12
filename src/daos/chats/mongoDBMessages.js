import MongoClass from "../../contenedores/MongoClass.js";
import { messagesSchema } from "../../models/MessagesSchema.js";


export class MongoDBMessages extends MongoClass {
    constructor() {
        super("mensajes", messagesSchema)
    }

    //agrega id autor al mensaje
    async addIdAuthor(message, idAuthor) {
        message.autor = idAuthor
        //actualiza mensaje
        const messageUpdated = await this.collection.findByIdAndUpdate(message._id, { autor: message.autor });
        return messageUpdated

    }


    async getAll() {
        try {
            const all = await this.collection.find({}).populate("autor", { nombre: 1 });
            return all
        } catch (error) {
            throw new Error("error:", err);
        }

    }


}
import mongoose from "mongoose";

export const messagesSchema = new mongoose.Schema({
    autor: {
        type: mongoose.Schema.Types.ObjectId, //id del usuario
        ref: "usuarios"
    },
    mensaje: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)
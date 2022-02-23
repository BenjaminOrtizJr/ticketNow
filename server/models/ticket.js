const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ticketSchema = new Schema({
    ticketNumber: {
        type: Number,
        required: true
    },
    caller: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    knowledge: {
        type: String,
        required: true
    },
    callType: {
        type: String,
        required: true
    },
    contactType: {
        type: String,
        required: true
    },
    openedBy: {
        type: String,
        required: true
    },
    opened: {
        type: Date,
        default: Date.now
    },
    shortDescription: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("Ticket", ticketSchema)
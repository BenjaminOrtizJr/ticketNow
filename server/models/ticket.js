const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ticketSchema = new Schema({
    _id: {
        type: String,
    },
    ticketNumber: {
        type: String
    },
    caller: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    priority: {
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
        type: String
    },
    opened: {
        type: String
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
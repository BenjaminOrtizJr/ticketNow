const express = require('express')
const ticketRouter = express.Router()
const ticket = require('../models/ticket')

// Get All Tickets
ticketRouter.get("/", (req, res, next) => {
    ticket.find((err, allTickets) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(allTickets)
    })
})

// Get Tickets By User Id
ticketRouter.get("/user", (req, res, next) => {
    ticket.find({ user: req.user._id }, (err, tickets) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(tickets)
    })
})

// Get Ticket
ticketRouter.get("/:ticketId", (req, res, next) => {
    ticket.findOne((err, oneTicket) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(oneTicket)
    })
})

// Post Ticket
ticketRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    const newTicket = new ticket(req.body)
    newTicket.save((err, saveTicket) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(saveTicket)
    })
})

// Edit Ticket
ticketRouter.put("/:ticketId", (req, res, next) => [
    ticket.findOneAndUpdate(
        { _id: req.params.ticketId, user: req.user._id },
        req.body,
        { new: true },
        (err, updatedTicket) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedTicket)
        }
    )
])

// Delete Ticket
ticketRouter.delete("/:ticketId", (req, res, next) => {
    ticket.findOneAndDelete({ _id: req.params.ticketId, user: req.user._id }, (err, deletedTicket) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ticket ${deletedTicket.ticketname} from database!`)
    })
})

module.exports = ticketRouter
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookingsScheme = new Schema({
    customerName: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: Date,

    },
    status: {
        type: String,
        enum: ['Pending', 'Confirmed', 'Cancelled'],
        default: 'Pending' 
    }
});

const bookings = mongoose.model("bookings", bookingsScheme);

export default bookings;

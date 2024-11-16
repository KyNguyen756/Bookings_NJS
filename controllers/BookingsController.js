const mongoose = require("mongoose");
const bookings =  mongoose.model('bookings');

exports.list_all_bookings = (req, res) => {
    bookings.find({}, (err, bookings) => {
        if (err) res.send(err);
        res.json(bookings);
    });
};

exports.create_a_booking = (req, res) => {
    const newBooking  = new bookings(res.body);
    newBooking.save((err, bookings) => {
        if (err) res.send(err);
        res.json(bookings);
    });
};

exports.read_a_booking = (req, res) => {
    bookings.findById(req.params.Id, (err, bookings) => {
        if (err) res.send(err);
        res.json(bookings);
    });
};

exports.update_a_booking = (req, res) => {
    bookings.findByIdAndUpdate(
        {_id: req.params.Id},
        req.body,
        { new: true},
        (err, bookings) => {
            if (err) res.send(err);
            res.json(bookings);
        }
    );
};

exports.delete_a_booking = (req, res) => {
    bookings.deleteOne({ _id: req.params.Id }, err => {
        if (err) res.send(err);
        res.json({
            message: 'Booking successfully deleted!',
            _id: req.params.Id
        });
    });
};
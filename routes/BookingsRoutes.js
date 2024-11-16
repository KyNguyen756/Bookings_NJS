const bookingsBuilder = require('../controllers/BookingsController');

module.exports = app => {
    app
        .route('/bookings')
        .get(bookingsBuilder.list_all_bookings)
        .post(bookingsBuilder.create_a_booking);

    app
        .route('/bookings')
        .get(bookingsBuilder.read_a_booking)
        .put(bookingsBuilder.update_a_booking)
        .delete(bookingsBuilder.delete_a_booking);
};
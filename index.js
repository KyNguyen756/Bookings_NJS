const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoute");


mongoose
    .connect("mongodb://localhost:27017")
    .then(() => {
        console.log("Ket noi db thanh cong!")
    })
    .catch((err) => {
        console.log(err)
    })

const app = express();
app.use(express.json)

app.use("/user", userRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
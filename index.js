const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect(
  'mongodb://localhost/27017',
  { useNewUrlParser: true }
);

app.listen(port);
app.set("view engine", "ejs");
app.set("views", "./index");
app.use(express.static("public"));

routes(app);

app.use((req, res) => {
    res.status(404).send({ url: `${req.originalUrl} not found` });
  });
  
  console.log(`Server started on port ${port}`);

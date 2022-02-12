const express = require('express');
const app = express();



const path = require('path')
const methodOverride = require("method-override");


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, "../public")));


app.listen(3000, () => {
    console.log("Server is working!");
})


const mainRouter = require('./routes/mainRouter')


app.use("/", mainRouter);
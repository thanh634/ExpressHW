const express = require('express');
const app = express();
const port = process.env.PORT || 6345
const expressHbs = require('express-handlebars');

app.use(express.static(__dirname + "/html"));

app.engine('hbs', expressHbs.engine({
	layoutsDir: __dirname + "/views/layouts",
	partialsDir: __dirname + "/views/partials",
	extname: "hbs",
	defaultLayout: "layout",
}))

app.set('view engine', "hbs");

app.get("/", (req, res) => {
	res.locals.title = "Jeopardize Contest";
	res.render("index");
})

app.use(express.json());
app.use(express.urlencoded( {extended: true} ));

app.use("/task1", require('./routes/task1Route'));
app.use("/task2", require('./routes/task2Route'));
app.use("/task3", require('./routes/task3Route'));
app.use("/task4", require('./routes/task4Route'));

app.listen(port, () => console.log(`Example app listen on port ${port}`))

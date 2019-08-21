//this is a webserver
const express = require('express');//we pull in express module
const app = express();//initializes express so we can use it
const path = require('path');
const hbs = require('express-handlebars');
const getAPOD = require('./lib/getAPOD');


app.use(express.static(path.join(__dirname, 'public')));//joining paths so dont need 
//to use './' for file paths??!

app.engine('.hbs', hbs({ //the 'view' engine, how its gonna look
    defaultLayout: 'layout',
    extname: '.hbs'
}))
app.set('view engine', '.hbs');


// '/' one page, can use other pages instead or with
app.get('/', async(req, res) => {//get specific method we are using, refers to the http method(get, post, put, delete)
    let data = await getAPOD();
    console.log(data)

    let title = (data.title)
    console.log(title)

    let date = (data.date)
    console.log(date)

    let image = (data.url)
    console.log(image)
  

    let explanation = (data.explanation)
    console.log(explanation)

    let copyR = (data.copyright)
    console.log(copyR)

    res.render('index', {explanation, copyR, image, title, date})
});

app.listen(3000, () => {//which port its listening on
    console.log('server listening on port 3000')//ports, like doorways. Each has specific purpose
})//use ports to communicate with net, other comps etc
//to connect to doorways you need corridors, any protocol htcp


//local host is like a server on your laptop but no1 else can see it
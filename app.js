const express = require('express')
const date = require(__dirname + '/date.js')
app = express()

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

const items = []
const workItems = []

app.get('/', function(req,res){

    let day = date.getDate();
    res.render('list', {
        listTitle: day,
        newListItems: items
    })
})

app.get('/trabalho', (req,res)=>{
    res.render('list', {
        listTitle: 'Trabalho',
        newListItems: workItems
    })
})

app.get('/sobre', (req,res)=>{
    res.render('about.ejs')
})

app.post('/', (req,res) =>{
    if(req.body.list == 'Trabalho'){
        workItems.push(req.body.newItem)
        res.redirect('/trabalho')
    }else{
        items.push(req.body.newItem)
        res.redirect('/')
    }
    
})

app.listen(3000, function(){
    console.log("Escutando na porta 3000!");
})
const express = require('express')
const app = express()
const PORT = 8000;
const db = require('./models');

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//router 분리
const router = require('./routes/index');

app.use('/', router);

db.sequelize.sync({force:false}).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`http://localhost:${PORT}`);
    })
})

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/skills', require('./api/routes/routes'));

app.listen(PORT, ()=>console.log(`server has started on port ${PORT}`))

 
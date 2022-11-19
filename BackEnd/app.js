const express = require('express');
const app = express();
const tasks = require("./routes/tasks");

//MIDDLEWARE
app.use(express.json());//If we don't use this we will not have the data in express. res


//ROUTES
app.get('/hello', (req, res)=>{
    res.send(`<h1 style="color:green; font-size:80px">Task Manager App<h1>`);
});


app.use('/api/v1/tasks', tasks);


const port = 3000;
app.listen(port, console.log(`Server is listening on port ${port}...`));
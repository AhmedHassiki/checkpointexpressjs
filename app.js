const express = require ('express');
const app = express(); 
const routes = require ('./routes')

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// // *************** The condition when the web app should work
// const workingHours = (req, res, next) => {
//     const now = new Date();
//     const dayOfWeek = now.getDay();
//     const hour = now.getHours();

//     if (dayOfWeek >=1 && dayOfWeek <=5 && hour >= 9 && hour < 17) {
//         next();
//     }else{
//         res.send('Our web application is only available during working hours (Monday to Friday, from 9 to 17h.');
//     }
// }

// app.use(workingHours);

// COnnecting routes
app.use(routes);

// server port and running message
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});
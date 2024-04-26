const express = require('express');
const app = express();
mongoose = require('mongoose');


const courseController = require('./controllers/course/courseController');

const connectToDatabase = async () => {
    try{
     await mongoose.connect(
         'mongodb+srv://Ankica:DzS6P8U0WXgZxl1S@cluster0.lrgjxli.mongodb.net/exam?retryWrites=true&w=majority'
 
     );
     console.log('Successfully connected!');
    } catch(err) {
     console.log(err);
    }
    
 };
 
 connectToDatabase();

app.post('/courses', courseController.createCourse);
app.get('/courses', courseController.getAllCourses);
app.get('/courses/:id', courseController.getCourseById);




app.listen(process.env.PORT, (err) =>{
    if (err) {
        return console.log("Could not start service");
    }
    console.log(`Server started successfully`);
});
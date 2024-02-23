const mongoose = require('mongoose');

// const mongoURI = 'mongodb://127.0.0.1:27017/Task-manager';
const mongoURI='mongodb+srv://abhinashjha135:Xaj3FSGyN3zK8bWa@cluster0.s9tt0t6.mongodb.net/taskmanager?retryWrites=true&w=majority&appName=Cluster0'
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
   
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
  });

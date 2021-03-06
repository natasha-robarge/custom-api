// dependencies
const express = require('express');
const bodyParser = require('body-parser');
const db = require(`./models`);

// app config
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

// app routes
// you can add route handlers directly in this file like this:


// or you can import route handlers from other files like this:
const projectRoutes = require('./routes/projects');
const developerRoutes = require('./routes/developers');
app.get('/projects', projectRoutes.getProjects);
app.get('/projects/:id', projectRoutes.getProject);
app.put('/projects/:id', projectRoutes.updateProject);
app.post('/projects', projectRoutes.createProject);
app.delete('/projects/:id', projectRoutes.removeProject);
app.get('/developers', developerRoutes.getDevelopers);
app.get('/developers/:id', developerRoutes.getDeveloper);
app.put('/developers/:id', developerRoutes.updateDeveloper);
app.post('/developers', developerRoutes.createDeveloper);
app.delete('/developers/:id', developerRoutes.removeDeveloper);

// TODO: delete the above dummy routes and add your actual routes

// start app
app.listen(process.env.PORT || 3000, function(err) {
  if (err) {
    console.log(`Error starting server on port ${port}, ${err}`);
  } else {
    console.log(`Server running on port ${port}.`);
  }
});

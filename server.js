const express = require('express')
require('dotenv').config()
const path = require('path');
const cors = require('cors')

const app = express()
const dbConfig = require('./config/dbConfig')
const userRoutes = require('./routes/userRoutes')
const movieRoutes = require('./routes/movieRoutes')
const theatreRoutes = require('./routes/theatreRoutes')
const showRoutes = require('./routes/showRoutes')
const bookingRoute = require('./routes/bookingRoute')


app.use(express.static('build'));
  app.use(express.json())
 app.use(cors());
 app.use('/api/users', userRoutes.router)
 app.use('/api/movies', movieRoutes.router)
 app.use('/api/theatre', theatreRoutes.router)
 app.use('/api/shows', showRoutes.router)
 app.use('/api/bookings', bookingRoute) 
 
 // Serve static files (for production environment)
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, 'build')));
  
  // Catch-all route for React Router
  // app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
//   });
// }
  
app.listen(8080, () => {     
    console.log("Server has started") 
})  
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const checkAuth = require('./middleware/check-auth-middleware');
const genRoutes = require('./routes/general-routes');
const authRoutes = require('./routes/auth-routes');

const app = express();

const allowedOrigins = [
    process.env.ORIGIN_URL, // Production frontend
    'http://localhost:3000'                  // Local dev frontend
  ];
  
  app.use(cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like curl/postman) or if origin is allowed
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true
  }));

app.use(express.json()); // parse json bodies in the request object

// Redirect requests to endpoint starting with / to general-routes.js
app.use('/api', genRoutes);
// Redirect requests to endpoint starting with /user to auth-routes.js
app.use('/api/user', checkAuth.auth, authRoutes);



// Server listening on Port 3333
app.listen(process.env.SERVER_PORT, () => console.log(`Server running on http://localhost:${process.env.SERVER_PORT}`));
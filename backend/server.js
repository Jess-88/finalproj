// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const db = require('./db');

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Routes
// app.get('/', (req, res) => {
//   res.send('Backend for Coin is running on 8080');
// });

// app.post('/milestones', async (req, res) => {
//   const { occasion, date, amount } = req.body;
//   console.log(req.body)
//   for (const data of req.body) {
//   try {
//     await db.query(
//       'INSERT INTO milestones (occasion, date, amount) VALUES ($1, $2, $3)',
//       [data.occasion, data.date, data.amount]
//     );
//   } catch (error) {
//     console.error(error);
//     return res.status(500).send('Server error');
//   }
//   }
//   res.status(201).json({message: 'Milestone added successfully'});
// });

// app.get('/milestones', async (req, res) => {
//   try {
//     const result = await db.query('SELECT * FROM milestones ORDER BY date ASC');
//     res.status(200).json(result.rows);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server error');
//   }
// });

// // Start the server
// const port = process.env.PORT || 8080;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// new code to clear history after restart

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Function to reset the milestones table
async function resetMilestonesTable() {
  try {
    await db.query('TRUNCATE TABLE milestones');
    console.log('Successfully reset the milestones table');
  } catch (error) {
    console.error('Error resetting the milestones table:', error);
  }
}

// Call the resetMilestonesTable function
resetMilestonesTable();

// Routes
app.get('/', (req, res) => {
    res.send('Backend for Coin is running on 8080');
  });
  
  app.post('/milestones', async (req, res) => {
    const { occasion, date, amount } = req.body;
    console.log(req.body)
    for (const data of req.body) {
      try {
        await db.query(
          'INSERT INTO milestones (occasion, date, amount) VALUES ($1, $2, $3)',
          [data.occasion, data.date, data.amount]
        );
      } catch (error) {
        console.error(error);
        return res.status(500).send('Server error');
      }
    }
    res.status(201).json({message: 'Milestone added successfully'});
  });
  
  app.get('/milestones', async (req, res) => {
    try {
      const result = await db.query('SELECT * FROM milestones ORDER BY date ASC');
      res.status(200).json(result.rows);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  });
  
  // Start the server
  const port = process.env.PORT || 8080;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  
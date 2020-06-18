const express = require('express');
const app = express();
const PORT = 3000;

const mainRouter = require('./routers/main');
const usersRouter = require('./routers/users');
const moviesRouter = require('./routers/movies');
const ordersRouter = require('./routers/orders');

const cors = require('./middleware/cors');

app.use(express.json());
app.use(cors);

app.use('/main', mainRouter);
app.use('/users', usersRouter);
app.use('/movies', moviesRouter);
app.use('/orders', ordersRouter);

app.listen(PORT, () => console.log('Server running on port: ' + PORT));
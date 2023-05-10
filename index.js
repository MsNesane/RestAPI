import express from 'express';
import bodyparser from 'body-parser';

import usersRoutes from './routes/users.js';
import accountsRoutes from './routes/accounts.js';
import cardsRoutes from './routes/cards.js';

const app = express ();
const PORT = 8001;

app.use(bodyparser.json ());

app.use('/users', usersRoutes);
app.use('/accounts', accountsRoutes);
app.use('/cards', cardsRoutes);


app.listen(
    PORT,
    () => console.log(`It's alive on http://localhost:${PORT}`)
)


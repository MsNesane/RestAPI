import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const users = [
    // {
    //     firstName: "Elelwani",
    //     lastName: "Nesane",
    //     address: "3 Edmonds Street, Naturena",
    //     userName: "msedmonds",
    //     password: "12345"
    // }
]

router.get('/', (req, res) => {
    //  console.log(users);
    res.send(users);
});

router.post('/', (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`The user with the name ${user.firstName} was added.`);
});

router.get('/:id', (req, res) => {
   const { id } = req.params;

   const foundUser = users.find((user) => user.id == id);

    res.send(foundUser);
});

export default router;
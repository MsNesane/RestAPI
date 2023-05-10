import express from 'express';

const router = express.Router();

const accounts = [
    {
        name: "John Moore",
        accountNumber: "8657846489",
        accountHolder: "JM"
    }
]

router.get('/', (req, res) => {
    console.log(accounts);

    res.send(accounts);
});

router.post('/', (req, res) => {
    const account = req.body;
  
    accounts.push({ ...user, id: uuidv4() });
  
    res.send(`An account with the account number ${account.accountNumber} was added.`);
  });

export default router; 
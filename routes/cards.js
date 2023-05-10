import express from 'express';

const router = express.Router();

const cards = [
    {
        cardName: "JM",
        cardNumber: "1246567839756976",
        cvv: "975",
        expiryDate: "12-6-2028",
        cardHolder: "John M"
        
    }
]

router.get('/', (req, res) => {
    console.log(cards);

    res.send(cards);
});

router.post('/', (req, res) => {
    const card = req.body;
  
    cards.push({ ...user, id: uuidv4() });
  
    res.send(`A card with the cardnumber ${card.cardNumber} was added.`);
  });

export default router;
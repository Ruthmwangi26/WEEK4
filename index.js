// Import
const express = require('express');
const PORT = process.env.PORT || 3000;


//express app
const app = express();
app.use(express.json());
//POST REQUEST
app.post('/', (req,res)=>{
  const body = req.body;
  console.log(body)
  res.status(200).json({message: 'connected'});
});
app.listen(PORT, () => {
  console.log(`The server is running on PORT ${PORT}`);
});
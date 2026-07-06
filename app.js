const express = require("express"); 
const app = express();

app.get("/", (req, res) => { 
  res.send("Hello World");    
});

app.get("/muskan", (req, res) => { 
  res.send("Hello muskan");    
});
app.listen(5000, () => {      
  console.log("Server Started");
});

import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
//create server
const port = 8080;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.listen(port, () => {
  console.log(`Port ${port} is active!`);
});

//user
let users = [
  {
    id: 1,
    username: "salihbstg",
    password: "salihcan1",
  },
  {
    id: 2,
    username: "salihcan",
    password: "salihcan",
  },
];
const checkCredentials = (username, pass) => {
  let checked = false;
  users.forEach((element) => {
    if (element.username === username && element.password === pass) {
      checked = true;
    }
  });
  return checked;
};
app.get("/user", (req, res) => {
  const username = req.query.username;
  const password = req.query.password;
  
  const checked = checkCredentials(username, password);
  res.json(checked);
});
app.post("/user", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const newUser = {
    id: users.length + 1,
    username: username,
    password: password,
  };
  users.push(newUser);
  res.status(201).json("User created");
});

//Products
let products = [
  {
    img: "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "T-Shirt",
    price: 300,
  },
  {
    img: "https://images.pexels.com/photos/1232459/pexels-photo-1232459.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Shirt",
    price: 500,
  },
  {
    img: "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Jacket",
    price: 1000,
  },
];
app.get("/product",(req,res)=>{
res.json(products);
})
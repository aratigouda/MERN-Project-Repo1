const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
let Cors = require("cors")

app.use(Cors())
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String, // fixed spelling
  imageurl: String
});

const Product = mongoose.model("products", ProductSchema);
Product.collection.createIndex({ name: 1 });

mongoose.connect("mongodb+srv://sam:welcome1234@cluster0.agys4.mongodb.net/productsdatabase?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
  console.log("✅ Connected to MongoDB successfully!");
})
.catch((err) => {
  console.error("❌ Error connecting to MongoDB:", err);
});

app.get("/fetch/product", async (req, res) => {
  console.log("FETCHING");
  const readProducts = await Product.find();
  //console.log(readProducts);
  res.json({ data: readProducts });
})

app.post("/collect/product", async function(req, res){
  //console.log(req.body)
  let productData = req.body
  let data = new Product(productData)
 await data.save()
})



app.listen(5000, () => {
  console.log("🚀 Server is running on port 5000");
});

import React, { useState } from "react";
import Axios from "axios"


function ProductCreationForm(){
   
    let [ name, setName] = useState("")
   let [ price, setPrice] = useState(0)
   let [ description, setDescription] = useState("")
   let [ imageurl, setImageurl] = useState("")

    function collectname(event){
      setName(event.target.value)
    }
    function collectprice(event){
      setPrice(event.target.value)
    }
    function collectdescription(event){
      setDescription(event.target.value)
    }
    function collectimageurl(event){
      setImageurl(event.target.value)
    }

    function sendData(){
        //send to all the detail to the bavkend
        Axios.post("https://mern-project-repo1-backend.onrender.com/collect/product", {
            name: name,
           price: price,
          description: description,
          imageurl: imageurl
})
    }
    return(
        <div>
             <div className="container mt-5">
      <h2 className="mb-4 text-center">Create New Product</h2>
      <form className="card p-4 shadow" onSubmit={sendData}>
        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            onChange={collectname}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Price (₹)</label>
          <input
            type="number"
            className="form-control"
            name="price"
            onChange={collectprice}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            name="description"
            onChange={collectdescription}
            rows="3"
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input
            type="url"
            className="form-control"
            name="imageurl"
           onChange={collectimageurl}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Create Product
        </button>
      </form>
    </div>
        </div>
    )
}
export default ProductCreationForm

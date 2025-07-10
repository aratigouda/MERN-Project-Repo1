/*import React, { useState } from "react";
import Axios from "axios"
import "./output.css"
function FetchProducts() {

    let [allProducts, setAllProducts] = useState([])
    Axios.get('http://localhost:5000/fetch/product')

        //console.log(outputProducts)
        .then(function (output) {
           // console.log(output.data)
           setAllProducts(output.data)
        }).catch(function (error) {
            console.log(error)
        })

    return (
        <div>
            {
                allProducts.map(function (i) {
                    return <div class="card" style={{ width: "18rem" }}>
                        <img src={i.imageUrl} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{i.name}</h5>
                            <h5 class="card-title">{i.price}</h5>
                            <h5 class="card-title">{i.discription}</h5>



                        </div>
                    </div>
                })
            }
        </div>
    )
}
export default FetchProducts*/


import React, { useState } from "react";
import Axios from "axios";
import "./output.css";

function FetchProducts() {
    const [ allProducts, setAllProducts ] = useState([]);

    
        Axios.get("http://localhost:5000/fetch/product")
            .then(function (response) {
                //console.log(response.data); // Check if data is correct
                setAllProducts(response.data.data); // ✅ Save data to state
            })
            .catch(function (error) {
                console.log(error);
            });
     // ✅ Empty dependency array = run once

    return (
        <div style={{display: "flex", flexWrap: "wrap", gap: "10px"}}>
            {
                allProducts.map(function(i, index){
                    return <div className="card" style={{ width: "18rem" }} key={index}>
                    <img src={i.imageurl} className="card-img-top" alt="Product" />
                    <div className="card-body">
                        <h5 className="card-title">{i.name}</h5>
                        <h5 className="card-title">{i.price}</h5>
                        <h5 className="card-title">{i.discription}</h5>
                    </div>
                </div>
                })
                
            }
        </div>
    )        
}

export default FetchProducts;

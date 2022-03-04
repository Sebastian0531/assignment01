import React, {useState} from "react";
import "./ClothingList.css";
import {useNavigate} from "react-router-dom";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// const [filter, setFilter] = useState("");

const defaultclothingList = [
  { id: "1", name: "BucketHat", price: "$20.00",description: "Round shape hat", stock: 2},
  { id: "2", name: "T-Shirt", price: "$10.00",description: "Classic T-Shirt", stock: 10},
  { id: "3", name: "Shorts", price: "$10.00",description: "Light weight shorts", stock: 6},
  { id: "4", name: "Sandals", price: "$8.00",description: "Made from good quality material", stock: 1},
  { id: "5", name: "Jacket", price: "$25.00",description: "Puffy jacket", stock: 4},
];

const filteredList = defaultclothingList.filter(ClothingItem => ClothingItem.name.startsWith(filter));

export const ClothingList = () => {
  const [filter, setFilter] = useState("");
  console.log('ClothingList rendered');
  const navigate = useNavigate();
  return (
    <div className="clothing-list">
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>price</th>
            <th>description</th>
            <th>stock</th>
          </tr>
        </thead>
        <tbody>
          {defaultclothingList.map(({id, name, price, description, stock}, index) => (
            <tr key={index}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{price}</td>
              <td>{description}</td>
              <td>{stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button onClick={() => navigate("/")} variant="primary" >Login</Button><br></br>
      <label> Filter: </label>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}>
      </input>

      
    </div>

  );
};




// const addItemToStock = (item) => {
//   const existingItem = defaultclothingList.find((clothesItem) => clothesItem.name === item.name)
//   if (existingItem) {
//     const newClothes = [...defaultclothingList];
//     const item = newClothes.find((clothesItem) => clothesItem.name === item.name)
//     item.stock += item.stock
//     setDefaultclothingList(newClothes)
//   }
//   setDefaultclothingList([...defaultclothingList, item]) 
// }

// const items = (name, price, descript, stock) => {
//   const item = [{id: ClothingList.length, name: name, price: price, description: descript, stock: stock}]
//   addItemToStock(item)
// }
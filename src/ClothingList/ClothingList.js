import React, {useState} from "react";
import "./ClothingList.css";
import {useNavigate} from "react-router-dom";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddClothingItem } from "./AddClothingItem/AddClothingItem";

const defaultclothingList = [
  { id: "1", name: "BucketHat", price: "$20.00",description: "Round shape hat", stock: 2},
  { id: "2", name: "T-Shirt", price: "$10.00",description: "Classic T-Shirt", stock: 10},
  { id: "3", name: "Shorts", price: "$10.00",description: "Light weight shorts", stock: 6},
  { id: "4", name: "Sandals", price: "$8.00",description: "Made from good quality material", stock: 1},
  { id: "5", name: "Jacket", price: "$25.00",description: "Puffy jacket", stock: 4},
];

export const ClothingList = () => {
  const [filter, setFilter] = useState("");
  const filteredList = defaultclothingList.filter(ClothingItem => ClothingItem.name.startsWith(filter));
  console.log('ClothingList rendered');
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
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
          {filteredList.map(({id, name, price, description, stock}, index) => (
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
      {/* <AddClothes name={name} setName={setName} price={price} setPrice={setPrice} description={description} setDescription={setDescription} stock={stock} setStock={setStock} addClothes={addClothes} /> */}
    </div>
  );
};







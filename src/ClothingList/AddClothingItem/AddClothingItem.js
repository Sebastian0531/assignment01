import React from 'react'
import { Button } from "react-bootstrap";

export const AddClothingItem= ({ name, setName, price, setPrice, description, setDescription, stock, setStock, addClothes }) => {
    return (
        <div>
            <br/><br/>
            <label>Name: </label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
            <label>Price: </label>
            <input type="textr" value={price} onChange={(e) => setPrice(e.target.value)}></input>
            <label>Description: </label>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}></input>
            <label>Stock: </label>
            <input type="text" value={stock} onChange={(e) => setStock(e.target.value)}></input>
            <Button onClick={() => addClothes({ name: name, price: price, description: description, stock: stock })}> Add item</Button>
        </div>
    )
}

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

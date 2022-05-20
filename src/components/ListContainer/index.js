import React, { Component, useState, useEffect } from 'react';
import List from '../List';
import "./style.css";

export default function ListContainer(){
  const [currentItem,setCurrentItem] = useState(null);
  const [itemList, updateItemList] = useState([]);
  
  const onChangeHandler= e =>{
    setCurrentItem(e.target.value);
  };
  
  const addItemsToList = () =>{
    updateItemList([...itemList, { item: currentItem, key: Date.now() }]);
    setCurrentItem("");
  };

return(
  <div className="App1">
      <div className = "App-header">
        <div className = "Wrapper">
          <div className = "Input-wrapper">
            <input placeholder="Enter WatchList" value = {currentItem} onChange={onChangeHandler}/>
            <button onClick={addItemsToList}>+</button>
            </div>
         <List itemList = {itemList} updateItemList={updateItemList}/>
          </div>
        </div>
        
      </div>
);
}
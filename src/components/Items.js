import React, { useEffect, useState} from "react";

const Items = () => {
 const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const itemsNodes = items.map((item) => (

    item.type
   
    
));




  return (
    

      <p>{itemsNodes}</p>
      
    

     
  )
}

export default Items;
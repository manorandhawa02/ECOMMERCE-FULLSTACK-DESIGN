import React from 'react'
const categories = [
    "Automobiles",
    "Clothes and wear",
    "Home interiors",
    "Computer and tech",
    "Tools and equipments",
    "Sports and outdoor",
    "Animal and pets",
    "Machinery tools",
    "More category"
];

const Sidebar = () => {
  return (
    <div style={{width:'220px', background:"#fff", padding:'10px', borderRadius:'6px'}}>
        {categories.map((items,index)=>(
            <div key={index} style={{padding:'10px', borderRadius:'5px', cursor:'pointer', background:index===0 ? '#e8f1fb':'transparent'}}>
                {items}
            </div>
        ))}
      
    </div>
  );
};

export default Sidebar

import React, { useState } from "react";
import fruit from "../../Asset/Image/fruits.jpg";
import groceries from "../../Asset/Image/groceries.jpg";
import ipad from "../../Asset/Image/ipad.png";

const NewItem = ({ content }) => {
  

  return (
    <div className="newItem" >
      <img src={fruit}/>
      <p>{content.title}</p>
      <p>{content.description}</p>
    </div>
  );
};

export default NewItem;

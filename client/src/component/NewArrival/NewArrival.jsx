import React, { useEffect, useState } from "react";
import "./NewArrival.css";
import { show } from "../../api/shopRequest.js";
import { Link } from "react-router-dom";
import NewItem from "./NewItem.jsx";

const NewArrival = () => {
  const [value, setValue] = useState();
  const showAll = async () => {
    const display = await show();

    setValue(display.data);
  };

  useEffect(() => {
    showAll();
  });
  return (
    <div className="New-Arrival">
      {value?.map((data, id) => {
        return (
          <div className="new-container">
            <div className="img-dis">
              <Link key={id} to={`/product/${data.id}`}>
                <NewItem key={id} content={data}/>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NewArrival;

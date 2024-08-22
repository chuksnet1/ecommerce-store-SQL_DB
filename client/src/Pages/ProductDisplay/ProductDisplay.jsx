import React, { useEffect, useState } from "react";
import { show, showById, showId } from "../../api/shopRequest.js";
import fruit from "/Users/mac/Ecommerce-with-SqlDB/client/src/Asset/Image/fruits.jpg";
import { school } from "../../Asset/Data/dataTest.js";
import Item from "./Item/Item.jsx";
import NavBar from "../../component/Navbar/Navbar.jsx";
import Footer from "../../component/Footer/Footer.jsx";
import { useParams } from "react-router-dom";

const ProductDisplay = () => {
  const [data, setData] = useState();
  const {productId} = useParams()

  const Ids = productId

  console.log(Ids)

  const showData = async () => {

    const data = await showById(Ids);
    setData(data.data);
  };

  console.log(data);

  useEffect(() => {
    showData();
  }, []);

  return (
    <div>
      <NavBar />
      <Item content={data} />
      <Footer />
    </div>
  );
};

export default ProductDisplay;

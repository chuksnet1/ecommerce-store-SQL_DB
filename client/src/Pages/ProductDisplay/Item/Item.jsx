import React from "react";
import fruit from "/Users/mac/Ecommerce-with-SqlDB/client/src/Asset/Image/fruits.jpg";
import "./Item.css";
import rating from "../../../Asset/Image/rating1.png";

const Item = ({ content }) => {
  console.log(content);
  return (
    <div className="item-container">
      <div className="upper-item-container">
        <div className="right-images">
          <img src={fruit} alt="" />
          <img src={fruit} alt="" />
          <img src={fruit} alt="" />
          <img src={fruit} alt="" />
          <img src={fruit} alt="" />
        </div>
        <div className="middle-image">
          <img src={fruit} alt="" />
        </div>
        <div className="title-and-others">
          <h1>{content?.title} {"    "}
           It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              </h1>
          <p>Visit the Fruit Store</p>
          <div className="item-rating">
            <p>5.0</p>
            <img src={rating} alt="" />
            <img src={rating} alt="" />
            <img src={rating} alt="" />
            <img src={rating} alt="" />
            <img src={rating} alt="" />
          </div>
          <p>${content?.amount}</p>
          <div className="desc">
            <p >
               It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it loIt is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites stillok like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
            <p>{content?.description}</p>
          </div>
        </div>
      </div>
      <div className="lower-item-container">
        <p className="description">It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still</p>
      </div>
      {/* <h1>{content?.title}</h1>
            <p>{content?.amount}</p>
            <p>{content?.description}</p> */}
    </div>
  );
};

export default Item;

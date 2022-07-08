import React from "react";

const ImageList = (props) => {
  const images = props.images.map((img) => {
    return <img src={img.urls.regular} alt="can't be displayed" />;
  });
  return <div>{images}</div>;
};

export default ImageList;

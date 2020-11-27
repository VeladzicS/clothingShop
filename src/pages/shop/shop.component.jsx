import React, { useState, useEffect } from "react";
import SHOP_DATA from "./shop.data";
import PreviewCollection from "../../components/previewCollection/previewCollection.component";

const ShopPage = () => {
  const [collections, setCollections] = useState([]);
  useEffect(() => {
    setCollections(SHOP_DATA);
  }, []);

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;

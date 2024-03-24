import React from "react";
import PageTitle from "./pageTitle";
import Item from "./Item";

const PackageList = () => {
  return (
    <div className="container">
      <PageTitle title="My Package List" />
      <Item
        name="ROG STRIX"
        img="https://dlcdnwebimgs.asus.com/gain/CBECA40C-88C6-449A-956B-3C7A96CEB865/w750/h470"
        isBought={false}
      />
      <Item
        name="Rockhopper Elite 29"
        img="https://assets.specialized.com/i/specialized/91522-45_ROCKHOPPER-ELITE-29-DOP-SND_HERO?$scom-pdp-product-image$&fmt=auto"
        isBought={true}
      />

      <Item
        name="Samsung S24 Ultra"
        img="https://m.media-amazon.com/images/I/71WcjsOVOmL._AC_SL1500_.jpg"
        isBought={true}
      />

      <Item
        name="Ferrari SF90 Stradale"
        img="https://cdn.ferrari.com/cms/network/media/img/resize/649ec85da3933d0095d1203f-ferrari-models-menu-2023-cards-sf90-stradale?width=1040&height=585"
        isBought={false}
      />
    </div>
  );
};

export default PackageList;

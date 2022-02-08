//yesma tai hami complete gallary dekhaucha from using item.here we use for loop
//yesma mai hami euta matra column use garcyou since one column is enough for it
//abha hami tai itemreducer ma bhayeko variable tai eta pass garchyou
//tespachi hami column lai cut garera item ma lagera paster garne
//so only remaning are row and container
//abha hami items ma tai item call garchyou
// hami return bitra ko ** position ma item call garchyou

import React, { useState } from "react";
import { useSelector } from "react-redux";
// import Footer from "./Footer";
import Item from "./Item";
import Navbar from "./Navbar";

const Items = () => {
  let items = useSelector((store) => store.items.itemsdata); //here yo tai reducer ho so itemreducer ma pass gareko thiyum items.its use when there are cobine reducers
  //here itemsdata tai hami itemsdata ma bhayeko array haru  lai access garna lagi ho.useSelector access garna ko lagi huncha
  //here yo item tai sabai itemreudcer ko value ho
  //hamile value change garnu cha resaile let use garnu parcha


  const [search, setSearch] = useState("");

  const filter_data = () => {
    items = items.filter((item) =>
      item.item_name.toLowerCase().includes(search.toLowerCase())
    ); //here filter only true condition return garcha
    //jaba hami search garhyoum suppose iphone search garnu cha bhane yedi iph garyoum re tespachi includes method
    //le iphone pathucha which filter function true huncha ra items ma gayera bascha and only that will be display
    //as we only apply map function on items down below.here array bitra ko item tai change garda kheri useSelector lai tai let garnu pardena
  };

  return (
    <>
      <Navbar />
      <div className="row bg-dark py-2">
        <div className="col-md-8"></div>
        <div className="col-md-4">
          <div className="form-floating ">
            <input
              type="search"
              className="form-control w-75"
              id="exampleFormControlInput1"
              placeholder="Search"
              style={{backgroundColor:"GrayText",height:"48px"}}
              onKeyUp ={(event) => (setSearch(event.target.value))}
              // event.target.value ma tai input text ma save huncha
              onChange={filter_data()}
            />

            <label htmlFor="exampleFormControlInput1" className="form-label">
              Search
            </label>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-5 ">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {/* ** */}
          {items.map(
            (item, i) => (
              <Item key={i} data={item} />
            ) //here i is id

            //here data is used so that we can pass value of Items(one componenet) to componenet of another(Item)
            //here items lai map garyoum ra tesko value *item* tai abha data ma halera Item.js ma pathayium
            //so now Item.js yeta ayera import bhyo so now we have to display on the MainPage.js
          )}
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default Items;

import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

import React from 'react';
import Cart from "./finalPages/Cart";
import Items from "./components/Items";
import Sidebar from "./components/Sidebar";

const MyRoutes = () => {
  return <Router>
      <Routes>
        {/* here abha hamile duita matra page call garne
        as we don't main page
        here Items.js ko kam tai main admin haru le 
        content halchan
        cart tai jo jasle book now garchan yo value gayera cart ma bascha */}
          <Route path="/" element={<Items/>}/>
          <Route path='/cart' element={<Cart/>}/>
          {/* <Route path="/sidebar" element={<Sidebar/>}/> */}
      </Routes>
  </Router>;
};

export default MyRoutes;

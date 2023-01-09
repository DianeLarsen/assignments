import React from "react";
import Navbar from './Navbar';
import {useLocation, useParams, useHistory, useRouteMatch} from "react-router-dom"

function Home(props) {
  return (
    <div className="home">
        <Navbar />
      <h1>Home Page!</h1>
    </div>
  );
}

export default Home;

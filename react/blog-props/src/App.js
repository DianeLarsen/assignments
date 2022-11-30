import React from "react"
import Navbar from "./Navbar.js"
import Header from "./Header.js"
import BlogPost from "./BlogPost.js"
import BlogList from "./BlogList.js"
import data from "./data.js"
import './App.css';

export default function App() {
    const cards = data.map(item => {
        return (
            <BlogList
                key={item.title}
                {...item}
                
            />
        )
    }) 
    return (
        <div className = "layout">
             
            <Navbar />
            <Header />
            <div>"BlogList BlogList"</div>
               <BlogPost/>"
            <footer>Copyright © Your Website 2022</footer> 
        </div>
    )    

}
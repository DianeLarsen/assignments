import React from "react"
import Navbar from "./Navbar.js"
import Header from "./Header.js"
import BlogPost from "./BlogPost.js"

import data from "./data.js"
import './App.css';

export default function App() {
    const blogpost = data.map(item => {
        return (
            <BlogPost
                key={item.title}
                {...item}
                
            />
        )
    }) 
    return (
        <div className = "layout">
             
            <Navbar />
            <Header />
            <section className="blog-list">
                {blogpost}
            </section>
            
            <a className="olderposts" href="#!">
                Older Posts →
            </a>
            <hr />
            <footer>Copyright © Your Website 2022</footer> 
        </div>
    )    

}

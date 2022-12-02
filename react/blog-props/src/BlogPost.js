import React from "react"

export default function BlogPost(props) {
    return (
        <div className="card">
            <a href="https://startbootstrap.github.io/startbootstrap-clean-blog/post.html" className="titleblurb">
                <h2>{props.title}</h2>
                {props.subTitle && <h3>{props.subTitle}</h3>}
            </a>
            <p className="bloginfo">
                Posted by 
                <a href="#!">{props.author}</a>
                 on  {props.date}
            </p>

            
            <hr />
        </div>
    )
}
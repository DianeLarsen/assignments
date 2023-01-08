import React from "react";
import {AxioContext} from "./axioContext"

export default function Form(props) {
  const {nTitle, nDescription, nImgUrl, handleChange, handleSubmit} = React.useContext(AxioContext)
  return (
    <header>
      <form className="form-display" name="uglyForm">
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={nTitle}
          onChange={handleChange}
          required
        ></input>
        <input
          type="url"
          placeholder="Img URL"
          name="imgUrl"
          value={nImgUrl}
          onChange={handleChange}
          required
        ></input>
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={nDescription}
          onChange={handleChange}
          required
        ></input>
      </form>
      <div className="btn">
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </header>
  );
}

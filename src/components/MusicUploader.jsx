import React, { Component } from "react";
import "tachyons";
export default class MusicUploader extends Component {
  render() {
    return (
      <div
        className="shadow-sm p-3 mb-5 bg-body br4 flex container-sm tc dib flex flex-column"
        style={{ maxWidth: 500, justifyContent: "center" , marginTop: 20}}
      >
        <h1>Upload Your Song</h1>
        <div>
          <input
            class="form-control form-control-sm"
            id="formFileSm"
            type="file"
          />
        </div>

        <form className="ma4">
          <div class="form-group tl">
            <label for="exampleFormControlInput1" style={{ fontSize: 18 }}>
              Title
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>

          <div class="form-group tl">
            <label for="exampleFormControlTextarea1" style={{ fontSize: 18 }}>
              Description
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              maxLength="500"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-danger grow ma4" >Submit</button>
        </form>
      </div>
    );
  }
}

import React, { Component } from "react";
import '../style/musicuploader.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class MusicUploader extends Component {
    upload(){
      let file = this.state.file;
      let details = {
          name : this.state.name,
          description : this.state.description
      }
      let formdata = new FormData();
      formdata.append("file",file);
      formdata.append("details",JSON.stringify(details));

      var token = "Bearer " + localStorage.getItem("jwt");
      fetch("/upload", {
      method: "POST",
      headers: {
          "Authorization" : token,
      },
      body: formdata,
    }).then((result) => {
          //console.log(result.status);
          if(result.status === 200){
            toast("File Upload Successfully");

            //this.props.history.push('/MusicData')
          }
          else{
            toast("File Size must be less than 2 MB");
          }
    });
    }

  render() {
    return (
      <>
      <div className="container-fluid column musicuploader">
        <h2>Upload Your Music Here</h2>
        <div className="container-sm shadow-1 br4 mx-auto pa4">

          <div className="fontuploader">
          <input type="file" className="f6 br4 pa2 ba bg-transparent w-100 shadow-1"
            onChange={(e) => {
                this.setState({ file: e.target.files[0] });
              }}   
              />
          </div>

          <br />

          <div className="fontuploader">
          <input type="text" className="f6 br4 pa2 ba bg-transparent w-100 shadow-1"
            placeholder="Enter Music Title"
             onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            />
          </div>
          <br />

          <div className="fontuploader">
          <textarea
              className="form-control bg-transparent w-100 shadow-1"
              id="exampleFormControlTextarea1"
              rows="3"
              maxLength="500"
              placeholder="Enter Description Here"
               onChange={(e) => {
                this.setState({ description: e.target.value });
              }}
            ></textarea>
          </div>
          <br />

          <button className="btn btn-primary btn-lg grow"  onClick={() => this.upload()}> ADD </button>
         <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
        </div>
      </div>
        
      </>
    );
  }
}

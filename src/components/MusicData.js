import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {withRouter} from "react-router-dom";
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import '../style/Musicdata.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class MusicData extends React.Component{
   
      state = {
        files: []
    }
    
    async componentDidMount(){
        var token = "Bearer " + localStorage.getItem("jwt");
        let d = [];
     await fetch('/getPostByUserId',{
            credentials : "include",
            headers :{
               "Authorization" : token,
            }
      })
       .then(function(response) {
             return response.json();
       }).then(function(data) {
            data.map(function(item){
                d.push(item);
            });
            
       });
      this.setState({files : d});
     
    }
    async delete(id){
      var token = "Bearer " + localStorage.getItem("jwt");
      let url = '/delete/' + id;
     await fetch(url,{
            method : "DELETE",
            credentials : "include",
            headers :{
               "Authorization" : token,
            }
      }).then((res) => {
           if(res.status === 200){
              toast("Deleted Successfully");
              this.componentDidMount();
           }else{
              toast("Try Again after sometime");
           }
      })
    
    }
    // download(id){
    //  var token = "Bearer " + localStorage.getItem("jwt");
    //  let url = '/getpostbyid/' + id;
    // fetch(url,{
    //    headers :{
    //            "Authorization" : token,
    //         }
    // })
		// 	.then(response => {
		// 		response.blob().then(blob => {
		// 			let url = window.URL.createObjectURL(blob);
		// 			let a = document.createElement('a');
		// 			a.href = url;
		// 			a.download = 'employees.json';
		// 			a.click();
		// 		});
		// 		//window.location.href = response.url;
		// });
    // }
    
    render(){
        let peopleCards = this.state.files.map(data => {
       return (
      <Col xs="3" key = {data.musicId} className="col">
       <div className="div">
        <Card>
          <i class="fas fa-file-alt"></i>
          {/* <Button color="danger" className="btn"  onClick={() => this.download(data.musicId)}>Download</Button> */}
          <CardBody className="cbody">
            <CardTitle><h4 className="tag">{data.tag}</h4></CardTitle>
            <CardSubtitle className="name">{data.name}</CardSubtitle>
            <CardText className="description">{data.description}</CardText>
            <Button color="danger" className="btn"  onClick={() => this.delete(data.musicId)}>Delete</Button>
            
          </CardBody>
        </Card>
      </div>
      </Col>
      )
    })
    return (
      <Container fluid="md" className="container">
        <Row xs="3" className="row">
          {peopleCards}
        </Row>
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
      </Container>
      
    )
    }
}

export default withRouter(MusicData);
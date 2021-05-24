import React from 'react';

class MusicData extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: null
        }
    }
    componentDidMount(){
        var jwt = "Bearer " + localStorage.getItem("jwt");
        console.log(jwt);
        fetch('http://localhost:8080/getPostByUserId',{
            mode: "no-cors",
            headers :{
               "Authorization" : jwt
            }  
        }).then((resutlt) =>{
            console.log(resutlt);
        })
    }
    render(){
        return(
            <div>List</div>
        )
    }
}

export default MusicData;
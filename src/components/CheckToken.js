import {Redirect} from 'react-router-dom';
import React from 'react';

function CheckToken(props){
    const Cmp = props.cmp;
    var auth = JSON.parse(localStorage.getItem("jwt"));
    return(<div>{auth ? <Cmp/> : <Redirect to="login"></Redirect>}</div>);  
}
export default CheckToken;
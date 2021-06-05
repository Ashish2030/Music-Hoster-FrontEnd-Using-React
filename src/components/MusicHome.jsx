import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import MusicData from './MusicData';
import MusicUploader from './MusicUploader';
import Navbar2 from './Navbar2';

export default class componentName extends Component {
  render() {
    return (
        
        <BrowserRouter>
        <Navbar2/>
        <Switch>
            
            <Route path="/MusicData" component={MusicData}/>
            <Route path="/" component={MusicUploader}/>
        </Switch>
        </BrowserRouter>
    );
  }
}

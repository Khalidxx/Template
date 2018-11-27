import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import '../../CSS/main.css';

export default class Greeting extends Component {
    render(){
        return(
            <div className='container'>
                <h1 className='title'>Welcome to React!</h1>
                <Link to="/"><Button type = 'primary'> Back </Button></Link>
            </div>
        );
    }
}
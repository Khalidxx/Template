import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import '../../CSS/main.css';

export default class Home extends Component {
    render(){
        return(
            <div className='container'>
                <Link to="/greeting"><Button type = 'primary'> Greet Me </Button></Link>
            </div>
        );
    }
}
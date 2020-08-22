import React, {Component} from 'react';
import axios from 'axios';

export default class Farmer extends Component{
    constructor(props){
        super(props);
        this.state={
            products:[]
        }
    }
    render(){
        return(
            <div className="row">
                <div className="col-md-3">
                <div className="card" style={{width:'18rem','margin-top':'20px'}}>
                    <img className="card-img-top" src="..." alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{u.name}</h5>
                        <p className="card-text">{u.description}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{u.price}</li>
                        <li className="list-group-item">{u.available_quantity}</li>
                        <li className="list-group-item">{u.life}</li>
                    </ul>
                </div>
                </div>
                
                
            </div>
        );
    }
}
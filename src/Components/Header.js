import React,{Component} from 'react';
import logoTec from './logoTec.jpg';
import './Header.css';


class Header extends Component{
    render(){
        return(
            <div className="Header">
                <img src={logoTec}></img>
            </div>
        );
    }
}

export default Header;
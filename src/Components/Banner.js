import React,{Component} from 'react';
import './Banner.css';


class Banner extends Component{
    render(){
        const {texto}=this.props;
        return(
            <div className="Banner">
                {texto}
            </div>
        );
    }
}

export default Banner;
import React, {Component} from 'react';
export default class About extends Component{
    render(){
        let data = this.props.data
        return(
            <section id= "About Me">
                <div className="row">
                    <div className="three colums">  
                    <img className= "profile-pic"  src="Frances.jpeg" alt= " " />
                    </div>
                </div>
            </section>
        )
    }
}
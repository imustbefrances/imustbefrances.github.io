import React, {Component} from 'react';
export default class AboutMe extends Component{
    render(){
        //let data = this.props.data
        return(
            <section id= "AboutMe">
                <div className="row">
                    <div className="three colums">  
                    <h2> About Frances </h2>
                    <img className= "profile-pic"  src= "Frances.jpg" alt= "Me" />
                    </div>
                </div>
            </section>
        )
    }
}
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
                    <h4>I'm currently a Lehman College student. </h4>
                    <h4>I'm a huge tomboy when it comes to sports especially basketball.</h4>
                    <h4>Favorite player: Stephen Curry</h4>
                    </div>
                </div>
            </section>
        )
    }
}
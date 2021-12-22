import React, {Component} from 'react';
export default class ContactUs extends Component{
    render(){
        let data = this.props.data;
        return(
            <section id="contact">
                <div className="row section-head">
                    <div className="ten columns">
                        <p className="lead">
                            Hey guys! The perfect way to contact is through my personal email, francesfabian193@gmail.com or my instagram, 
                            imustbefrances.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <aside className="eigth column footer-widgets">
                        <div className="widget">
                            <h4> 
                                Linked in: {imustbefrances}
                            </h4>
                        </div>
                    </aside>
                </div>
            </section>
        )
    }
}
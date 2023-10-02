import React, { Component } from 'react';
// IMPORT EMAIL COMPONENT
import Email from '../components/Email'


export default class Find extends Component {
  render() {
    // INLINE STYLING
    let style = {
      "backgroundColor": "#222222",
      "backgroundSize": "cover",
      "height": "100%",
      "padding": "100px"
    }
    let subHeadings = {
      "color": "#fff",
    }

    return (
      <div className="app-body findus offset col-lg-10 col-lg-offset-1">
        <section className="row" style={style}>
          <div className="col-lg-8 map">
            <h3 className="sub-headings" style={subHeadings}>Directions</h3>
            <img
              className="img-responsive"
              src="https://maps.googleapis.com/maps/api/staticmap?center=greenville,sc&zoom=13&scale=2&size=600x300&maptype=roadmap&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7Cgreenville,+sc"
              alt="Google Map of greenville,sc"/>
            <a href=""><p className="primary-text">Majestic Thai 100 Main Street, Spartanburg, SC, 29302 </p></a>
          </div>
          <div className="col-lg-4">
            <h3 className="sub-headings" style={subHeadings}>
              Contact Us
            </h3>
            <hr/>
            <p className="primary-text">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span>  864-456-6789</span>
            </p>
          <Email/>
      </div>
    </section>
  </div>
    );
  }
}

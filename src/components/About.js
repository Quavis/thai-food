import React, { Component } from 'react';
//IMPORT STYLES
import '../styles/App.css';

export default class About extends Component {
  render() {
    // INLINE STYLING
    let cuisineStyle = {
      "backgroundImage": "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./images/cuisine.jpg)",
      "backgroundSize": "cover",
      "textShadow": "1px 1px 2px black",
      "height": "100%",
      "padding": "100px"
    }
    let aboutStyle = {
      "backgroundImage": "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./images/dish.jpg)",
      "backgroundSize": "cover",
      "textShadow": "1px 1px 2px black",
      "backgroundPosition": "top",
      "height": "100%",
      "padding": "100px"
    }
    return (
      <div className="app-body about offset col-lg-10 col-lg-offset-1">
        <section className="row" style={aboutStyle}>
          <article className="col-lg-6 col-lg-offset-3">
            <h2 className="headings">
              Our History
            </h2>
            <hr/>
            <p className="primary-text">
            At Majestic Thai, we believe that food is not just nourishment; it's an experience that brings people together. Our journey began when our founder, David Lee, fell in love with the diverse and tantalizing flavors of Thai cuisine during a visit to Thailand. Inspired by the country's culinary artistry, Lee dreamed of sharing these exquisite flavors with the world.
With that vision in mind, Lee and our dedicated team embarked on a mission to bring the essence of Thailand to South Carolina. We scoured local markets for the freshest ingredients, imported traditional Thai spices, and recruited talented Thai chefs who are experts in their craft. The result is a menu that boasts a delightful array of dishes that cater to both Thai food connoisseurs and newcomers alike.
            </p>
          </article>
        </section>
        <section className="row" style= {cuisineStyle}>
          <article className="col-lg-5">
            <h2 className="headings">
              Our Cuisine
            </h2>
            <hr/>
            <p className="primary-text"> Experience the exotic flavors of Thailand at Majestic Thai, where every dish is a culinary masterpiece crafted with authentic Thai ingredients and traditional techniques. Our menu is a symphony of tastes, combining the bold, spicy, sweet, and savory elements that define Thai cuisine.</p>
          </article>
        </section>
      </div>
    );
  }
}

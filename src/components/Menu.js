import React, { Component } from 'react';

// IMPORT COMPONENTS
import Appetizers from '../components/Appetizers';
import Entrees from '../components/Entrees';
import Desserts from '../components/Desserts';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appetizers: [],
      entrees: [],
      desserts: [],
    };
  }
 
  componentDidMount() {
    // Set your API URL with the API key.
    let url ="https://s3.amazonaws.com/assets.sccodes.org/react-assets/majestic-thai-menu.json";
    // Fetch data from API
    fetch(url).then((response) => {
      return response.json();
    }).then((menuData) => {
      let appetizers = [],
        entrees = [],
        desserts = [];

      menuData.forEach((menuItem) => {
        if (menuItem.type === "appetizer") {
          appetizers.push(menuItem);
        } else if (menuItem.type === "entree") {
          entrees.push(menuItem);
        } else if (menuItem.type === "dessert") {
          desserts.push(menuItem);
        }
      });

      this.setState({ appetizers, entrees, desserts });
    });
  }

  render() {
    
    return (
      <div className="app-body offset col-lg-10 col-lg-offset-1">
        <h2 className="col-lg-offset-2 headings">Menu</h2>
        <Appetizers appetizers={this.state.appetizers}/>
        <Entrees entrees={this.state.entrees}/>
        <Desserts desserts={this.state.desserts}/>
      </div>
    );
  }
}

export default Menu;

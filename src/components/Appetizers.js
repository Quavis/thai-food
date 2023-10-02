import React, {Component} from 'react';

export default class Appetizers extends Component {

  render(){
    // PROPS
    let items = this.props.appetizers;
    // Since the items do not have a key, let's create one.
    let key = 0;
    // MAP PROPS
    let appetizers = items.map((items)=>{
      // Increment the key so that each items has one.
      key++;
      return (
        <tbody key={key}>
          <tr>
            <td>
              {items.dish}
            </td>
            <td>
              {items.description}
            </td>
            <td>
              {items.price}
            </td>
          </tr>
        </tbody>
      )
    })
    return (
      <div className="row">
        <div className="col-lg-6 col-lg-offset-3">
          <h3 className="sub-headings">Appetizers</h3>
          <hr/>
          <table className="table">
            <thead>
              <tr>
                <th className="col-lg-3">
                  <i className="fa fa-cutlery" aria-hidden="true"></i>
                </th>
                <th className="col-lg-8">Description</th>
                <th className="col-lg-1">
                  <i className="fa fa-money" aria-hidden="true"></i>
                </th>
              </tr>
            </thead>
            {appetizers}
          </table>
        </div>
      </div>
    );
  }
}

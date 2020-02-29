import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux';

const App = props => {
  const { car, additionalFeatures, additionalPrice } = props;
  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };
  console.log(props)
  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={additionalFeatures} />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    additionalFeatures: state.features,
    additionalPrice: state.additionalPrice
  }
}

export default connect(mapStateToProps, {})(App);

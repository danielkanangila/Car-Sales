import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux';
import { addFearures, removeFeature, addAdditionalPrice, subAdditionalPrice } from './actions'

const App = props => {
  const { 
    car, 
    additionalFeatures, 
    additionalPrice, 
    addFearures, 
    removeFeature,
    addAdditionalPrice,
    subAdditionalPrice } = props;
  const _removeFeature = item => {
    // dispatch an action here to remove an item
    removeFeature(item)
    subAdditionalPrice(item.price)
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    addFearures(item);
    addAdditionalPrice(item.price)
  };
  
  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures removeFeature={_removeFeature} car={car} />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem} additionalFeatures={additionalFeatures} />
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

export default connect(mapStateToProps, {
  addFearures,
  removeFeature,
  addAdditionalPrice,
  subAdditionalPrice
})(App);

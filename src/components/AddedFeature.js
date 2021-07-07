import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFeature, subAdditionalPrice } from './../actions';

const AddedFeature = props => {
  const dispatch = useDispatch();
  const onFeatureDeleted = feature => {
    dispatch(removeFeature(feature));
    dispatch(subAdditionalPrice(feature.price));
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => onFeatureDeleted(props.feature)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;

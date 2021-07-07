import React from 'react';
import { useDispatch } from 'react-redux';
import { addFearures, addAdditionalPrice } from './../actions';

const AdditionalFeature = props => {
  const dispatch = useDispatch();
  const onAddedFeautre = feature => {
    dispatch(addFearures(feature));
    dispatch(addAdditionalPrice(feature.price));
  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => onAddedFeautre(props.feature)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;

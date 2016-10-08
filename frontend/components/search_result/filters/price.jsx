import React from 'react';
import Rheostat from 'rheostat';

const Price = (props) => {
  return (
    <div className="price-range group">
      <span className="title price-title">Price range</span>
      <Rheostat class="price-range-picker" min={1} max={100} values={[1, 100]} />
    </div>
  );
};

export default Price;

import React from 'react';

const RoomType = (props) => {
  return (
    <div className="room-type group">
      <span className="room-type-title title">Room type</span>
      <div className="checkbox-control">
        <i className="fa fa-server" aria-hidden="true"></i>
        <label>Basement<input type="checkbox" id="room-type-basement" value="basement" /></label>
      </div>
      <div className="checkbox-control">
        <i className="fa fa-laptop" aria-hidden="true"></i>
        <label>Lab<input type="checkbox" id="room-type-lab" value="lab" /></label>
      </div>
      <div className="checkbox-control">
        <i className="fa fa-rocket" aria-hidden="true"></i>
        <label>Penthouse<input type="checkbox" id="room-type-penthouse" value="penthouse" /></label>
      </div>
    </div>
  );
};

export default RoomType;

import React from 'react';

const RoomType = (props) => {
  return (
    <div className="room-type">
      <span className="room-type-title title">Room type</span>
      <div className="checkbox-control-group group">
        <div className="checkbox-control">
          <i className="fa fa-server" aria-hidden="true"></i>
          <label htmlFor="room-type-basement">Basement</label>
          <input type="checkbox" id="room-type-basement" value="basement" />
        </div>
        <div className="checkbox-control">
          <i className="fa fa-laptop" aria-hidden="true"></i>
          <label htmlFor="room-type-lab">Lab</label>
          <input type="checkbox" id="room-type-lab" value="lab" />
        </div>
        <div className="checkbox-control">
          <i className="fa fa-rocket" aria-hidden="true"></i>
          <label htmlFor="room-type-penthouse">Penthouse</label>
          <input type="checkbox" id="room-type-penthouse" value="penthouse" />
        </div>
      </div>
    </div>
  );
};

export default RoomType;

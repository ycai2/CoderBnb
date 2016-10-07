import React from 'react';
import { hashHistory } from 'react-router';

const Home = () => {
  const redirectToSpots = () => {
    hashHistory.push('/spots');
  };

  return (
    <div className="home">
      <div className="content">
        <div className="content-header">
          <h1>Code There</h1>
          <h4>Book a spot and code together. Enjoy the hackiness.</h4>
        </div>
        <div className="content-body">
          <h2>Seach over 2 million spots in over 3 countries</h2>
          <form>
            <input type="text" placeholder="Where to?" className="home-location-input"/>
            <input type="date" placeholder="Check In"/>
            <input type="date" placeholder="Check Out"/>
            <select>
              <option>1 coder</option>
              <option>2 coders</option>
              <option>3 coders</option>
              <option>4 coders</option>
            </select>
            <button onClick={redirectToSpots}>Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import './CovidHome.css';
import CovidHeader from './CovidHeader';
import CovidFooter from './CovidFooter';
import ApMap from './ApMap/ApMap';

function CovidHome() {
  return (
    <div className="App">
      <CovidHeader />
        <ApMap />
      <CovidFooter />
    </div>
  );
}

export default CovidHome;

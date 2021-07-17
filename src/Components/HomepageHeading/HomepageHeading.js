import React from 'react';
import './HomepageHeading.css'

const HomepageHeading = (props) => {
  return (
    <div className="homepage-heading">
      <h2>{props.name}</h2>
    </div>
  )
}

export default HomepageHeading;
import React from 'react';

const LoadingSpinner = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui big test loader">{props.message}</div>
    </div>
  );
};

LoadingSpinner.defaultProps = {
  message: "Loading..."
};

export default LoadingSpinner;

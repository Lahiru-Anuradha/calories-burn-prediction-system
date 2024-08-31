import React from 'react';
import './ResultNotification.css'; // Ensure you create this CSS file

const ResultNotification = ({ result, onClose }) => {
  return (
    result && (
      <div className="result-notification">
        <button className="close-btn" onClick={onClose}>&times;</button>
        Predicted Calories Burnt: {result}
      </div>
    )
  );
};

export default ResultNotification;

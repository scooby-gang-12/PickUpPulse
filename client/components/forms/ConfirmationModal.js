import React from 'react'

export default function ConfirmationModal({confirm, cancel}) {
  return (
    <div style={{
      position: 'fixed', 
      top: '50%', 
      left: '50%', 
      transform: 'translate(-50%, -50%)', 
      zIndex: 1000, 
      background: 'white',
      padding: '20px',
      border: '1px solid black',
    }}>
      <p>Are you sure you want to submit?</p>
      <button onClick={confirm}>Yes</button>
      <button onClick={cancel}>No</button>
    </div>
  );
}

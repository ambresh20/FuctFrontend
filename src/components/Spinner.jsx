import React from 'react';

const Spinner = () => {
  const loaderStyle = {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    background: 'conic-gradient(#0000 10%, #766DF4)',
    WebkitMask: 'radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0)',
    animation: 's3 1s infinite linear'
  };

  const keyframesStyle = `
    @keyframes s3 {
      to {
        transform: rotate(1turn);
      }
    }
  `;

  return (
    <div>
      <style>{keyframesStyle}</style>
      <div style={loaderStyle}></div>
    </div>
  );
};

export default Spinner;



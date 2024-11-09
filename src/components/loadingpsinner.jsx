function LoadingSpinner() {
    return (
      <svg
        className="ml-32 "
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        width="100"
        height="100"
        style={{ shapeRendering: 'auto', display: 'block' }}
      >
        <g>
          <circle
            strokeDasharray="164.93361431346415 56.97787143782138"
            r="35"
            strokeWidth="10"
            stroke="#000000"
            fill="none"
            cy="50"
            cx="50"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              keyTimes="0;1"
              values="0 50 50;360 50 50"
              dur="1s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>
    );
  }
  
  export default LoadingSpinner;
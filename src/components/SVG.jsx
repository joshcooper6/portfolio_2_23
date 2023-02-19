export default function SVG({ color, path, styles, fillRule, clipRule, onClick }) {
    return (
      <svg
        onClick={onClick}
        className={`${styles} cursor-pointer`}
        xmlns="http://www.w3.org/2000/svg"
        fill={color ? color : null}
        fillRule={fillRule && 'evenodd'} 
        clipRule={clipRule && 'evenodd'}
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d={path} />
      </svg>
    );
  }
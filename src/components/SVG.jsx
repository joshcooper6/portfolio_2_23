export default function SVG({ color, path, styles }) {
    return (
      <svg
        className={`${styles} cursor-pointer`}
        xmlns="http://www.w3.org/2000/svg"
        fill={color ? color : null}
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d={path} />
      </svg>
    );
  }
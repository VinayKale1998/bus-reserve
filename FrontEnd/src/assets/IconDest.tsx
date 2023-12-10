const IconDest: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="10" y="30" width="60" height="30" stroke="black" fill="none" />
      <circle cx="20" cy="65" r="5" stroke="black" fill="black" />
      <circle cx="60" cy="65" r="5" stroke="black" fill="black" />
      <line x1="65" y1="30" x2="65" y2="60" stroke="black" />
      <circle cx="75" cy="40" r="3" fill="black" />
      <line x1="75" y1="43" x2="75" y2="55" stroke="black" />
      <line x1="72" y1="45" x2="78" y2="45" stroke="black" />
      <line x1="75" y1="55" x2="72" y2="60" stroke="black" />
      <line x1="75" y1="55" x2="78" y2="60" stroke="black" />
    </svg>
  );
};

export default IconDest;

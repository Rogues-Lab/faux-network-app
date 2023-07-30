const Logo = ({ className = '', ...props }) => (
  // <svg
  //   width="32"
  //   height="32"
  //   viewBox="0 0 32 32"
  //   fill="none"
  //   xmlns="http://www.w3.org/2000/svg"
  //   className={className}
  //   {...props}
  // >
  //   <rect width="100%" height="100%" rx="16" fill="white" />
  //   <path
  //     fillRule="evenodd"
  //     clipRule="evenodd"
  //     d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
  //     fill="black"
  //   />
  // </svg>

<svg width="40" height="40" viewBox="0 0 100 100" fill="none"   xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}>
    <circle cx="50" cy="50" r="50" fill="black"/>
    <rect x="19" y="26" width="10" height="50" fill="white"/>
    <rect x="45" y="25" width="10" height="25" transform="rotate(88.655 45 25)" fill="white"/>
    <rect x="45" y="49" width="10" height="25" transform="rotate(88.655 45 49)" fill="white"/>
    <rect x="53.7758" y="27.6266" width="10" height="50" transform="rotate(-17.3411 53.7758 27.6266)" fill="white"/>
    <rect x="71" y="25" width="10" height="50" fill="white"/>
    <rect x="52" y="25" width="10" height="50" fill="white"/>
</svg>
);

export default Logo;

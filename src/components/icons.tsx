import type { SVGProps } from "react";

export const Icons = {
  react: (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="-10.5 -9.45 21 18.9" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="10" ry="4.5"></ellipse>
        <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
        <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
      </g>
    </svg>
  ),
  node: (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.351,2.001,1.649,8.515a.5.5,0,0,0-.149.369V15.15a.5.5,0,0,0,.149.369l10.7,6.514a.5.5,0,0,0,.5,0l10.7-6.514a.5.5,0,0,0,.149-.369V8.884a.5.5,0,0,0-.149-.369ZM12.1,3.2l9.5,5.773L16.21,12,12.1,9.626Zm-1.4,9.255,4.39,2.673L12.1,16.8Zm9.649-3.985L16.21,12l4.139-2.518,1.3,4.018ZM2.8,9.52,6.939,12,2.8,14.47Zm4.839,4.148L3.251,9.52l9.5-5.773,4.39,2.673Z"/>
    </svg>
  ),
  java: (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.61,13.29a3.49,3.49,0,0,1-2.47,1,4.42,4.42,0,0,1-3.14-1.29,3.25,3.25,0,0,1-1.12-2.52V12.1a1,1,0,0,1,1-1h.5a1,1,0,0,1,1,1v.39a3.25,3.25,0,0,1,1.12,2.52,1.4,1.4,0,0,0,1.47,1.34,1.4,1.4,0,0,0,1.47-1.34V7.5a1,1,0,0,1,1-1h.5a1,1,0,0,1,1,1Zm-8.4-6.08h.5a1,1,0,0,1,1,1v.39a1.4,1.4,0,0,0,1.47,1.34,1.4,1.4,0,0,0,1.47-1.34V7.5a1,1,0,0,1,1-1h.5a1,1,0,0,1,1,1v4.61A3.25,3.25,0,0,1,13.53,14.6a4.42,4.42,0,0,1-3.14,1.29,3.49,3.49,0,0,1-2.47-1A3.25,3.25,0,0,1,6.8,12.38V7.5a1,1,0,0,1,1-1h.5a1,1,0,0,1,1,1Z"/>
    </svg>
  ),
  python: (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.4,3.2a.5.5,0,0,0-.8,0l-3,3A.5.5,0,0,0,9,7h2v5.7a3,3,0,0,1-1.1,2.2l-.1.1a1.5,1.5,0,1,0,2.1,2.1l.1-.1A3,3,0,0,1,13,12.7V7h2a.5.5,0,0,0,.3-.9Zm-1.2,16.6a.5.5,0,0,0,.8,0l3-3A.5.5,0,0,0,15,16H13V10.3a3,3,0,0,1,1.1-2.2l.1-.1a1.5,1.5,0,1,0-2.1-2.1l-.1.1A3,3,0,0,1,11,10.3V16H9a.5.5,0,0,0-.3.9Z"/>
    </svg>
  ),
  aws: (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.4,12.72a3.89,3.89,0,0,0,3.43,2.83,4.3,4.3,0,0,0,4.2-3.15,1,1,0,0,0-1-.87,1,1,0,0,0-1,.86,2.3,2.3,0,0,1-2.2,1.72,1.89,1.89,0,0,1-1.78-1.37,1,1,0,0,0-1.28-.56A1,1,0,0,0,13.4,12.72Zm-8.31,1a3.89,3.89,0,0,0,3.43,2.83,4.3,4.3,0,0,0,4.2-3.15,1,1,0,0,0-1-.87,1,1,0,0,0-1,.86,2.3,2.3,0,0,1-2.2,1.72,1.89,1.89,0,0,1-1.78-1.37,1,1,0,1,0-1.84.77ZM22,12.38a1,1,0,0,0-1.37-.36A11.7,11.7,0,0,1,12,15.75,11.7,11.7,0,0,1,3.37,12,1,1,0,0,0,2,12.38,1,1,0,0,0,2.36,14,13.62,13.62,0,0,0,12,17.75a13.62,13.62,0,0,0,9.64-3.7A1,1,0,0,0,22,12.38Z"/>
    </svg>
  ),
  docker: (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.92,10.63a3,3,0,0,0-.43-1.42A2.88,2.88,0,0,0,20,8.51H18.5V4.28A1.27,1.27,0,0,0,17.23,3H6.77A1.27,1.27,0,0,0,5.5,4.28V8.51H4a2.88,2.88,0,0,0-1.49.7,3,3,0,0,0-.43,1.42,5,5,0,0,0,0,2.74,3,3,0,0,0,.43,1.42,2.88,2.88,0,0,0,1.49.7H5.5V19a1.27,1.27,0,0,0,1.27,1.27h2V18.5H7.5V16h3v-1.5h-3V13h3V11.5h-3V10h3V8.5h-3V7h3V5.5h-3V4h12V5.5h-3V7h3V8.5h-3V10h3v1.5h-3V13h3v1.5h-3V16h3v2.5H16.5v1.77h.73A1.27,1.27,0,0,0,18.5,19V15.21H20a2.88,2.88,0,0,0,1.49-.7,3,3,0,0,0,.43-1.42,5,5,0,0,0,0-2.74Z"/>
    </svg>
  ),
};

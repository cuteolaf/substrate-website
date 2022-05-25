import * as React from 'react';

function SvgSmile(props) {
  return (
    <svg width={26} height={26} fill="none" viewBox="0 0 26 26" {...props}>
      <path d="M13 0C5.82 0 0 5.82 0 13s5.82 13 13 13 13-5.82 13-13S20.18 0 13 0zm4.063 8.938c.898 0 1.624.726 1.624 1.624a1.624 1.624 0 11-1.625-1.625zm-8.171 0a1.624 1.624 0 110 3.25 1.623 1.623 0 01-1.625-1.626c0-.898.772-1.624 1.625-1.624zm9.938 8.643c-1.448 1.736-3.57 2.686-5.83 2.686-2.26 0-4.38-.993-5.83-2.73-.69-.828.556-1.864 1.248-1.041A5.843 5.843 0 0013 18.682a5.95 5.95 0 004.58-2.144c.68-.821 1.935.215 1.25 1.043z" />
    </svg>
  );
}

export default SvgSmile;

import * as React from 'react';

function SvgContact(props) {
  return (
    <svg width={28} height={28} fill="none" viewBox="0 0 28 28" {...props}>
      <path d="M24.5 0h-21C1.572 0 0 1.572 0 3.45v15.702c0 1.927 1.572 3.45 3.5 3.45h5.25v4.692a.66.66 0 001.046.53l6.829-5.123H24.5c1.928 0 3.5-1.573 3.5-3.451V3.45C28 1.573 26.43 0 24.5 0zm-4.375 14.438a1.31 1.31 0 01-1.313 1.312 1.31 1.31 0 01-1.312-1.313v-3.833l-5.25 5.25A1.312 1.312 0 1110.396 14l5.25-5.25h-3.834a1.313 1.313 0 010-2.625h7c.725 0 1.313.588 1.313 1.313v7z" />
    </svg>
  );
}

export default SvgContact;

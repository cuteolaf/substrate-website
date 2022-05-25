import * as React from 'react';

function SvgQuestion(props) {
  return (
    <svg width={30} height={30} fill="none" viewBox="0 0 30 30" {...props}>
      <path d="M30 15c0 8.286-6.716 15-15 15-8.284 0-15-6.714-15-15C0 6.719 6.716 0 15 0c8.284 0 15 6.719 15 15zM15.402 4.96c-3.296 0-5.398 1.388-7.049 3.856a.727.727 0 00.164.983l2.1 1.592a.726.726 0 001.007-.129c1.08-1.37 1.821-2.165 3.466-2.165 1.236 0 2.764.795 2.764 1.994 0 .905-.748 1.37-1.968 2.055-1.423.797-3.305 1.79-3.305 4.273v.242c0 .401.325.726.726.726h3.386c.401 0 .726-.325.726-.726v-.08c0-1.722 5.032-1.793 5.032-6.452 0-3.508-3.64-6.17-7.049-6.17zm-.402 15a2.785 2.785 0 00-2.782 2.782A2.785 2.785 0 0015 25.524a2.785 2.785 0 002.782-2.782A2.785 2.785 0 0015 19.96z" />
    </svg>
  );
}

export default SvgQuestion;

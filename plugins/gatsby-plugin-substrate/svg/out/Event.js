import * as React from 'react';

function SvgEvent(props) {
  return (
    <svg width={26} height={30} fill="none" viewBox="0 0 26 30" {...props}>
      <path d="M26 6.5v2.786H0V6.5a2.786 2.786 0 012.786-2.786H5.57v-1.91C5.571.837 6.407 0 7.43 0 8.45 0 9.286.836 9.286 1.805v1.91h7.428v-1.91c0-.97.836-1.805 1.857-1.805 1.022 0 1.858.836 1.858 1.805v1.91h2.785A2.786 2.786 0 0126 6.5zM0 11.143h26v15.786a2.786 2.786 0 01-2.786 2.785H2.786A2.786 2.786 0 010 26.93V11.143zm7.835 10.684l2.785 2.786c.262.261.617.408.985.408.018 0 .037 0 .053-.002.388-.014.753-.19 1.005-.484l5.571-6.5a1.393 1.393 0 10-2.115-1.814l-4.592 5.36-1.723-1.723a1.392 1.392 0 00-1.97 0c-.544.544-.539 1.476 0 1.97z" />
    </svg>
  );
}

export default SvgEvent;

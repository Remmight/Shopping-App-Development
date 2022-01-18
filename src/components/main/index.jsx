import React from 'react';
import Bottom from './nav/Bottom';
import TopNav from './nav/TopNav';

export default function Main(props) {
  return (
    <div>
      <TopNav routeName={props.routeName} />
      {props.children}
      <Bottom />
    </div>
  );
}

import React from 'react';
import HeaderOne from './HeaderOne';
import HeaderTwo from './HeaderTwo';
import './Header.scss';

export default function Header(props){
  const homepage = props.homepage;
return (
  <div>
       {homepage?<HeaderOne/>:<HeaderTwo/>}
  </div>
)};



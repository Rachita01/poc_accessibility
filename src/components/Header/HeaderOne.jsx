import React from 'react';
import { Toolbar } from 'primereact/toolbar';
import SPLogo from '../../assets/images/SPLogo.png';
import './Header.scss';

export default function HeaderOne(){
    const header = (
        <div>
          <img  className="header-logo" src={SPLogo} alt="Logo" />
        </div>
      );
return (
    <div>
      <Toolbar
        center={header}
      />
      </div>
)};



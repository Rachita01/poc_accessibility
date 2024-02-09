import React from 'react';
import './Footer.scss';
import Edinburgh from '../../assets/images/edinburgh.png';
import SopraSteria from '../../assets/images/Sopra_Steria_Logo.png';
import CCU from '../../assets/images/CCU.png'

function Footer(props){
    const themeselected = props.theme;
  return (
    <div className="footer">
    <div className="footer-content">
        <img className='firstImg' height="60px" width="60px" src={Edinburgh} alt="edinburgh"/>
        <img height="60px" width="70px" src={themeselected==='sopra'?SopraSteria:CCU} alt="sopra steria"/>
      <div>
        <p className='text3'>Powered by Sopra Steria and The University of Edinburgh in collaboration with various charities</p>
      </div>
    </div>
    </div>
  );
};

export default Footer;

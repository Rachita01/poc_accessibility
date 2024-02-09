import React from "react";
import { PrimeIcons } from 'primereact/api';
import { Button } from 'primereact/button';

export default function CustomButton(props){ 

  const IconButton = ({ label, icon, classname }) => {
    return (
        <Button className={classname} label={label} icon={icon} iconPos="right" onClick={props.onClick}/>
    );
  };
    return(
        <IconButton label={props.name} icon={PrimeIcons.CHEVRON_RIGHT}/>
    )
}
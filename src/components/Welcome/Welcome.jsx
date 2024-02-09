import React from "react";
// import classes from './Welcome.module.scss';
// import CustomButton from "../CustomButton/CustomButton";
// import InfoPanel from "../InfoPanel/InfoPanel";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Welcome(){
    return(
        <div>
        <Header homepage={false}/>
        <div style={{height:"80vh"}}>
        <p>Welcome Page</p>
        </div>
        <Footer/>
        </div>
    )
}
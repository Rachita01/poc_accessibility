import React, { useEffect } from 'react';
import './Home.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../CustomButton/CustomButton';
import TabsComponent from '../TabsComponent/TabsComponent';
import headerimage from '../../assets/images/Banner_1x.png';
import NewTabComponent from '../NewTabComponent/NewTabComponent';
import ActionPlan from '../ActionPlan/ActionPlan';
import CUSupport from '../CUSupport/CUSupport';
import OtherSupport from '../OtherSupport/OtherSupport';

function Home(props) {
  const navigation = useNavigate();
  
  return (
    <div>
    <div className='homeStyle'>
      <div className='headerimage'>
        <div className='splogo'></div>
        <div className='tabClass'>
      <TabsComponent>
        <div label="Action Plan">
          <ActionPlan/>
        </div>
        <div label="Credit Union support">
          <CUSupport/>
        </div>
        <div label="Support from other organisations">
          <OtherSupport/>
        </div>
      </TabsComponent>
      </div>
      </div>
      
    </div>
   
    </div>
    
    // <div className='homeStyle'>
    //   <Header homepage={true}/>
    //   <div className='cardStyle'>
    //     <div className='textContainerStyle'>
    //     <p className='text1'>&ensp;Supporting our members</p>
    //     <p className='text2'>When they need it most</p>
    //     <div className='enterButton'>
    //       <CustomButton name='Enter' onClick={() => {
    //               navigation('/welcome',{replace:true})
    //             }}/>
    //     </div>
    //     </div>
    //   </div>
    //   <Footer theme={props.theme}/>
    // </div>
    


    // {/* <img src={headerimage}/> */}
  );
}

export default Home;

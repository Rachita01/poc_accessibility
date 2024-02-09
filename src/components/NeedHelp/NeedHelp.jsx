import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
        

function NeedHelp(props) {
  return (
    <div>
        <Header homepage={false}/>
           <div>
             <div className='progressBarStyle'>
                <p>1. I need help with</p>
             </div>
             <hr/>
             <div className='heading'>

             </div>
             <div className='subheading'>

             </div>
             <hr/>
             <div className='options'>

             </div>
             <hr/>
             <div className='buttons'>

             </div>
           </div>
        <Footer theme={props.theme}/>
    </div>
  )
}

export default NeedHelp
import React, { useEffect, useState } from 'react'
import './ActionPlan.scss';

function ActionPlan() {
    const [data,setData] = useState([]);
    const rows = [];
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = require("../../data.json")
            setData(response.content);
            console.log(response.content)
            console.log(data.map(item =>item.name))
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

      for (let i = 0; i < data.length; i+=3) {
        rows.push(
          <tr key={i} className='trclass'>
            <td>{data[i].name}</td>
            {data[i+1] && <td>{data[i+1].name}</td>}
            {data[i+2] && <td>{data[i+2].name}</td>}
          </tr>
        );
      }

  return (
    <div className='ActionClass'>
        <div>
            <p className='HeadingClass'>Support Pack</p>
            <p className='ContentClass'>Thank you for sharing some information about your circumstances and the impact these have on you. Support Point has used this to create support recommendations that are tailored to you. Save this document so that you can refer back to it. Your credit union will also have a copy, so they know how to support you.</p>
        </div>
        <div>
            <div className='secondHeading'>
                <p className='secondHeadingClass'>Heading</p>
                <div className='EditLessClass'>
                    <div className='EditClass'>Edit List<span><div className='editImg'></div></span></div>
                    <div className='LessClass'>Show Less<span><div className='lessImg'></div></span></div>
                </div>
            </div>
            <div className='Contentclass'>
            <table className='tableclass'>
                <tbody>
                    {rows}
                </tbody>
            </table>
            </div>
        </div>
    </div>
  )
}

export default ActionPlan
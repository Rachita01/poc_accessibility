import React, { useState,useEffect } from 'react';
import './App.scss';
import axios from 'axios';
import Router from './routes/Router';

const App = () => {
  const [theme, setTheme] = useState('sopra');
  // eslint-disable-next-line no-unused-vars
  const [client_id, setClient_id] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [user_id, setUser_id] = useState(null);

  const apim = "f7f4cd85479440aab98c880595f3ebd2";
   
  useEffect(() => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type',
        'withCredentials': true,
        'client_id': '2f64b66f-2ed3-467e-8eac-0ba109e17cd2',
        'user_id': 'SP_SSG_00000003',
        'Ocp-Apim-Subscription-Key': apim,
      };
    const fetchData = async () => {
      try {
        const response = await axios.get('https://sp-backend-apim.azure-api.net/backend/user_authentication', { headers });
        setClient_id(response.data.client_id);
        setUser_id(response.data.user_id);
        setTheme(response.data.client_theme_name);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className={`${theme}`}>
      <Router theme={theme}/>
    </div>
  );
};

export default App;

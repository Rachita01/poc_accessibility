import React from 'react';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Welcome from '../components/Welcome/Welcome';
import Home from '../components/Home/Home';
import NeedHelp from '../components/NeedHelp/NeedHelp';

const Router = (props) => (
<BrowserRouter>
<Routes>
    <Route path='' element={<Home theme={props.theme}/>}/>
    <Route path='/welcome' element={<Welcome/>}/>
    <Route path='/needhelp' element={<NeedHelp/>}/>
</Routes>
</BrowserRouter>
);

export default Router;
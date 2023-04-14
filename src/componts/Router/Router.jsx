import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Form from '../Form/Form';

const Router = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Form/>}>

                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router
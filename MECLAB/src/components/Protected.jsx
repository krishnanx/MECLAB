import React from 'react'
import {Navigate} from "react-router-dom"
import { UserAuth } from '../Context/AuthContext'

const Protected = ({childern}) => {
    const {user}  = UserAuth()
    if (!user){
        return <Navigate to="/"/>
    }
  return childern;
  
}

export default Protected;
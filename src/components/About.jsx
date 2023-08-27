import React from 'react'
import CommonComponent from './CommonComponent'
import { AppContext, useProductContext } from '../context/productcontext'
const About = () => {
 
const {name}=useProductContext();
 
  return (
    <CommonComponent pageName={"About Page"}/>
  )
}

export default About
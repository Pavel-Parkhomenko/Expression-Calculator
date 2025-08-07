import React from 'react'
import { Header } from "@/components/Header"
import { Calculator } from "@/components/classes/Calculator"

export class HomeClasses extends React.Component{
  render(){
    return (
      <React.Fragment>
        <Header />
        <Calculator />
      </React.Fragment>
    )
  }
}

import React, { Component } from 'react';


export default class Layout extends Component {
  render () {
    const { children } = this.props
    return (
      <div  className='layout'>
        ХЭДЕР
        {children}
      </div>
    );
  }
}
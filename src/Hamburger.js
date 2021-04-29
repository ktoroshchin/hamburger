import React from 'react'
import './hamburger.css'

export const Hamburger = (props) => {
    const { isOpen, toggleMobileMenu } = props.mobileMenu
    return (
        <div className='hamburger' onClick={() => toggleMobileMenu(!isOpen)} >
            <div className='line-top' data-close={isOpen}></div>
            <div className='line-center' data-close={isOpen}></div>
            <div className='line-bottom' data-close={isOpen}></div>
        </div>
    )
}
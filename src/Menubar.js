import React from 'react'
import './menubar.css'

export const Menubar = (props) => {
    const { width, mobileMenuState } = props
    const toggleMenuBarView = (windowWidth) => {
        const div = document.getElementsByClassName('menu')[0]

        if(windowWidth <= 768) {
            if(mobileMenuState) {
                div.classList.add('mobile')
                div.style.display = 'flex'
                console.log(div.classList)
            } else {
                div.style.display = 'none'
            }
        } else {
            div.classList.remove('mobile')
            div.style.display = 'flex'
        }
    }

    React.useEffect(() => {
        toggleMenuBarView(width)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [width, mobileMenuState])

    return (
            <div className='menu'>
                    <ul>
                        <li><button href='#'>Home</button></li>
                        <li><button href='#'>Login</button></li>
                        <li><button href='#'>Sign Up</button></li>
                    </ul>
            </div>
    )
}
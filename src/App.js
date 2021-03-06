import './App.css';
import { Menubar } from './Menubar'
import { Hamburger } from './Hamburger'
import React from 'react'
import { useWindowDimension } from './useWindowDimension';

export const App = () => {
  const [mobileMenuState, setMobileMenuState] = React.useState(false)
  const { width, height } = useWindowDimension()

  const renderHamburger = (width) => {
    if(width <= 768) {
      return <Hamburger mobileMenu={{isOpen: mobileMenuState, toggleMobileMenu: setMobileMenuState}}/>
    } else {
      <></>
    }
  }
  console.log('bbbbbbbbbbbbb')
  const u = 'o'
  console.log('dfsdfdssdffsd')
  
  return (
    <div className="App">
      <Menubar width={width} mobileMenuState={mobileMenuState}/>
      {renderHamburger(width)}
    </div>
  );
}

export default App;

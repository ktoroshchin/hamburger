import React from 'react'

export const useWindowDimension = () => {
    const [windowDimension, setWindowDimension] = React.useState(getWindowDimension)
  
    function getWindowDimension() {
      const { innerWidth: width, innerHeight: height } = window
      return {
        width,
        height
      }
    }
  
    React.useEffect(() => {
      function handleResize() {
        setWindowDimension(getWindowDimension)
      }
      window.addEventListener('resize', handleResize)
  
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    },[windowDimension])
    
    return windowDimension
}
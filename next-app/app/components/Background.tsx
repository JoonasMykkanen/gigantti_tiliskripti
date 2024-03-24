'use client'

import React from "react"

const Background = () => {
  return (
    <div style={{
      position: "fixed",
      height: "100%",
      minWidth: "100%",
      left: "0",
      top: "0",
      zIndex: "-1",
      
      backgroundImage: `url(/img/background.svg)`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100% 100%",
    }}/>
  )
}

export default Background
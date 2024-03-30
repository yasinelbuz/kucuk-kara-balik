// ./context/SiteContext.js
import { createContext, useState, useEffect, useContext, ReactNode } from "react"


type PropTypes = {
  children : ReactNode;
}

const SiteContext = createContext({
  activePage:0,
  isOpenSidebar:true,
})

const SiteProvider = ({ children }:PropTypes) => {
  
  const [activePage, setActivePage] = useState(0)
  const [isOpenSidebar, setIsOpenSidebar] = useState(true)
  
  const data = {
    activePage,
    setActivePage,
    setIsOpenSidebar,
    isOpenSidebar
  }

  
  return (
    <SiteContext.Provider value={data}>
      {children}
    </SiteContext.Provider>
  )
}

export const useSite = () => useContext(SiteContext)
export default SiteProvider
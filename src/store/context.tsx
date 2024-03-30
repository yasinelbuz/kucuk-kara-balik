// ./context/SiteContext.js
import { createContext, useState, useContext, ReactNode } from "react"


type PropTypes = {
  children : ReactNode;
}

const SiteContext = createContext({
  activePage:0,
  isOpenSidebar:true,
})

const SiteProvider = ({ children }:PropTypes) => {
  
  const [activePage, setActivePage] = useState<number>(0)
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(true)
  
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
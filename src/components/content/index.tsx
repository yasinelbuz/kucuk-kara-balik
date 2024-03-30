/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSite } from '../../store/context'
import * as Styled from './styled'
import Constant from '../../constant'

export default function Content() {

  const { activePage, setActivePage, setIsOpenSidebar, isOpenSidebar}:any = useSite()
  
  return (

    <Styled.Container isOpenSidebar={isOpenSidebar}>
      <Styled.Header>
        <Styled.Left>
          <button className="sidebar" onClick={() => setIsOpenSidebar((prev:boolean) => !prev)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" stroke-width="1.5" stroke="currentColor" style={{width:"16px", height:"16px"}}>
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          <button onClick={() => setActivePage((prev:number) => prev === 0 ? prev : prev - 1)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style={{width:"16px", height:"16px"}}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z" />
</svg>

          </button>
          <button onClick={() => setActivePage((prev:number) => prev === Constant.book.length - 1 ? prev : prev + 1)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style={{width:"16px", height:"16px"}}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
</svg>

          </button>
        </Styled.Left>
        <Styled.Right>
          <a href="https://github.com/yasinelbuz/kucuk-kara-balik" target='blank'>Github</a>
        </Styled.Right>
      </Styled.Header>
      
      <Styled.Content>
          {Constant.book[activePage].content}
      </Styled.Content>
    </Styled.Container>
  )
}

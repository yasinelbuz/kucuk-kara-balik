import * as Styled from './styled';
import Component from '../../components'
import { useSite } from '../../store/context';

export default function Layout() {

  const {isOpenSidebar} = useSite();

  return (
    <Styled.ContainerLayout>
      <Styled.NavBar isOpenSidebar={isOpenSidebar}>
        <Component.NavBar />
      </Styled.NavBar>

      <Styled.Content>
        <Component.Content />
      </Styled.Content>
    </Styled.ContainerLayout>
  )
}

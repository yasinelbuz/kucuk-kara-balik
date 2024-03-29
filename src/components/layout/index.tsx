import { ReactNode } from 'react';
import * as Styled from './styled';
import Component from '../../components'

type PropTypes = {
  children : ReactNode
}

export default function Layout() {
  return (
    <Styled.ContainerLayout>
      <Styled.NavBar>
        <Component.NavBar />
      </Styled.NavBar>

      <Styled.Content>
        <Component.Content />
      </Styled.Content>
    </Styled.ContainerLayout>
  )
}

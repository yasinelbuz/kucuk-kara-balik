import styled from "styled-components";

export const Container = styled.div`
`;

export const ContainerLayout = styled.div`
  display:flex;
  align-items: stretch;
  height: 100%;
  flex:1;
`;

export const NavBar = styled.div<{isOpenSidebar:boolean}>`
  background-color: #f5f6fa;
  border-right:1px solid #eeebee;
  flex:3;
  display:${props => props.isOpenSidebar ? "block" : "none"};

    @media screen and (max-width: 992px) {
        display:none
    }
`;

export const Content = styled.div`
  background-color: #fff;
  flex:6;
  overflow-y:scroll;
`;


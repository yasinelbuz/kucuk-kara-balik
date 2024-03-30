import styled from "styled-components";

export const Container = styled.div<{isOpenSidebar:boolean}>`
    width:${props => props.isOpenSidebar ? "75%" : "100%"};
     @media screen and (max-width: 992px) {
        width:100%
    }
`;

export const Header = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    border-bottom:1px solid #eeebee;
    padding:0 20px;
    height: 70px;
    position: sticky;
    top:0;
    background: #fff;

    @media screen and (max-width: 992px) {
        .sidebar{
            display: none;
        }
    }

    button{
        width:100px;
        height:30px;
        border:0;
        background-color: #eeebee;
        padding:5px 10px;
        border-radius: 5px;
        margin-right: 5px;
        cursor:pointer;
        

        &:hover{
            background-color: #eeebaa;
            transition: background-color .5s;
        }
    }
`;

export const Left = styled.div`

`;

export const Right = styled.div`
    a{
        text-decoration: none;
        color:#000;
    }
`;

export const Content = styled.div`
    padding:20px;
    line-height: 180%;
`;
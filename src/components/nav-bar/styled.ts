/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";


export const Container = styled.div<{isOpenSideBar:boolean}>`
    margin-left:auto;
    width:${props => props.isOpenSideBar ? "60%" : "0%"};

`;


export const Logo = styled.div`
    border-bottom:1px solid #eeebee;
    display: flex;
    align-items: center;
    gap: 10px;
    height: 70px;
    padding: 0 20px;
    font-family: "Pacifico", cursive;
    font-size:20px;
    font-weight: 400;
    font-style: normal;

    &:hover{
        background: rgb(237,234,237);
        background: linear-gradient(90deg, rgba(237,234,237,0) 0%, rgba(255,255,255,1) 68%);
        cursor: pointer;
    }
`;

export const Menu = styled.div`
    width: 100%;
    margin-top:20px;
    height:75vh;
    overflow-y: scroll;
        .active{
            font-weight: bold;
        }

                /* width */
        &::-webkit-scrollbar {
        width: 3px;
        }

        /* Track */
        &::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 20px;
        }

        /* Handle */
        &::-webkit-scrollbar-thumb {
        background: #ccc;
        border-radius: 20px;
        }

        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
            background: #555;
        }


    li{
        cursor: pointer;
        font-size:16px;
        margin-bottom:5px;
        border-radius: 5px;
        margin-bottom:10px;
        border-bottom:1px dashed #ccc;
        padding:5px 5px;

        &:hover{
            background-color: #fff;
        }
    }
`;
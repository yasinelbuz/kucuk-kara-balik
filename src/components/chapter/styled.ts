import styled from "styled-components";

export const Container = styled.div`
    padding: 10px;
    text-align: justify;
    line-height: 200%;

    h1{
        font-weight: bold;
        font-size:24px;
        margin-bottom:20px;
    }

    p:first-of-type::first-letter {
        font-size: 400%;
        font-weight: bolder;
    }

     p:first-of-type {
        margin-top: 50px;
    }

    p{
        margin-bottom: 20px;
    }
`;
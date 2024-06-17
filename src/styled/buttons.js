import styled from "styled-components";

export const Button = styled.button`
padding: 10px 18px;
color: white;

width: 220px;
height: 44px;
font-size: 16px;
background: #000000;
border-radius: 5px;
border: none;
flex: none;
order: 1;
flex-grow: 0;
border: 1px solid transparent;
transition: 0.3s ease-in;
cursor: pointer;

&:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.2s ease-in;
}

`;

export const OutlineButton = styled(Button)`
background-color: white;
border: 1px solid black;
color: black;
&:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
    transition: 0.2s ease-in;
}

`;

import styled from "styled-components";
import {Link} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';


export const SideContainer = styled.aside
`
    position: fixed;
    z-index: 999;
    width: 350px;
    height: 100%;
    background: #ffc500;
    display: grid;
    align-items: center;
    top: 0;
    transition: 0.3s ease-in-out;
    right: ${({isOpen}) => (isOpen ? '0' : '-1000px')}; 

    @media screen and (max-width:400px){
        width : 100px;
    }
`;

export const CloseIcon = styled(FaTimes)
`
    color: #000
`;

export const Icon = styled.div

`
    position: absolute;
    top: 1.2rem;
    right:1.5rem;
    background: transparnt;
    border: transparnt;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarMenu = styled.div
`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(3, 60px);
    }
`
export const SidebarLink = styled(Link)
`
    display: flex;
    align-items: center;
    justify-contnt:center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2 eas-in-out;
    color: #000;
    cursor: pointer;
    &:hover{
        color: #e31837;
        transition: 0.2 eas-in-out;
        text-decoration: none
    }
`;
export const SideBtnWrap = styled.div
`
    display: flex;
    justify-content: center;
`

export const SidebarRoute = styled(Link)
`
    background: #e31837;
    white-space: nowrap;
    padding: 16px 64px;
    color: #FFF;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
    transition: 0.2 eas-in-out;
    &:hover{
        background: #fff;
        color: #010606;
        transition: 0.2 eas-in-out;
    }
`
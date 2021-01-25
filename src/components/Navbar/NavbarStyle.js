import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {FaPizzaSlice} from 'react-icons/fa'
export const Nav = styled.nav
`
    background: transparent;
    height: 80px;
    display:flex;
    justify-content:center;
    font-weight:bold
` ;

export const NavLink = styled(Link)
`
    color: #FFF;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;

    @media screen and max-width(400px){
        position: absolute;
        top: 10px;
        left: 25px
    }
`;

export const NavIcon = styled.div
`
    color: #FFF;
    cursor:pointer;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    color:#FFF;

    p{
        transform: translate(-175%,100%);
        font-weight: bold;
    }
`;

export const Bars = styled(FaPizzaSlice)
`
    font-size: 2rem;
    transform: translate(-50%,-15%);
`
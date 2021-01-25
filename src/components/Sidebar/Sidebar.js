import React from 'react';
import {SideContainer, Icon, CloseIcon, SidebarMenu, SidebarLink,SideBtnWrap,SidebarRoute} from './SidbarStyle';

const Sidebar = ({isOpen, toggle}) => {
    return(
        <SideContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Pizza</SidebarLink>
                <SidebarLink to="/">Deserts</SidebarLink>
                <SidebarLink to="/">Full Menu</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Order Now</SidebarRoute>
            </SideBtnWrap>
        </SideContainer>
    );
}

export default Sidebar;
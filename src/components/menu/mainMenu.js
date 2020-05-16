import React from 'react';
import styled from 'styled-components'
import { options } from './mainMenuData'
import { Link } from 'react-router-dom'

const Root = styled.div`
    height: calc(100vh - 80px);
    width: 320px;
    background-color: ${props => props.theme.primary.light};
`

const Menu = styled.ul``

const MenuItem = styled.li`
`

const SubMenu = styled.ul``

const SubMenuItem = styled.li``

function MainMenu() {
    return (
        <Root>
            {options.map((option) => {
                const hasSubmenus = (option.sections && option.sections.length);

                if (hasSubmenus) {
                    return (
                        <MenuItem>
                            {option.id}
                            {option.sections && (
                                <SubMenu>
                                    {option.sections.map((section) => {
                                        return (
                                            <SubMenuItem>
                                                <Link to={`/${section.id}`}>{section.id}</Link>
                                            </SubMenuItem>
                                        )
                                    })}
                                </SubMenu>
                            )}
                        </MenuItem>
                    )
                }

                return (
                    <MenuItem>
                        <Link to={`/${option.id}`}>
                            {option.id}
                        </Link>
                    </MenuItem>
                )
            })}
        </Root>
    )
}

export default MainMenu;

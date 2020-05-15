import React from 'react';
import styled from 'styled-components'

const Root = styled.div`
    height: calc(100vh - 80px);
    width: 320px;
    background-color: ${props => props.theme.primary.light};
`

const Menu = styled.ul`

`

const MenuItems = styled.li`
`

const Options = [
    {
        id: 'birds-and-animals',
        sections: [
            {
                id: 'pigeon',
            },
            {
                id: 'cuckoo',
            },
            {
                id: 'firebird'
            },
            {
                id: 'lion',
            },
            {
                id: 'deep'
            },
            {
                id: 'bee',
            },
            {
                id: 'hare',
            },
            {
                id: 'cat',
            },
            {
                id: 'birds',
            }
        ]
    }
]

function MainMenu() {
    return (
        <Root>
        </Root>
    )
}

export default MainMenu;

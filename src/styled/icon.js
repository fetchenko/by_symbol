import React from 'react'
import styled from 'styled-components'

export const Icon = styled.div`
    width: ${props => props.size ? `${props.size}px` : '24px'};
    height: ${props => props.size ? `${props.size}px` : '24px'};
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: contain;

    svg {
        fill: ${props => props.color}
    }
`
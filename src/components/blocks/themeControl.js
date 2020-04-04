import React, { useState } from 'react'
import styled from 'styled-components'
import { TwitterPicker } from 'react-color'
import { Icon } from '../../styled/icon'
import { themeIcon } from "../../constants";
import { MAIN_COLORS } from "../../constants/themes";

const Container = styled.div`
    position: relative;
    z-index: 9;
`

const Button = styled.div`
    position: absolute;
    border: none;
    cursor: pointer;
    top: 90px;
    right: 16px;

    ${props => props.theme.mediaQueries.sm} {
        top: 100px;
        right: 20px;
    }
`

const Picker = styled.div`
    position: absolute;
    top: 130px;
    right: 10px;
    
    ${props => props.theme.mediaQueries.sm} {
        top: 140px;
        right: 12px;
    }
`

function ThemeConthrol({ color, onChangedTheme }) {
    const [openPicker, setOpenPicker] = useState(false)

    const handleChangeColor = (color) => {
        onChangedTheme(color.hex)
    }

    return (
        <Container>
            <Button onClick={() => setOpenPicker(!openPicker)}>
                <Icon src={themeIcon} size={30} color="#ccc" />
            </Button>
            {openPicker && (
                <Picker>
                    <TwitterPicker
                        color={color}
                        colors={MAIN_COLORS}
                        onChange={handleChangeColor}
                        triangle="top-right"
                    />
                </Picker>
            )}
        </Container>
    )
}

export default ThemeConthrol


import styled from 'styled-components';

export const MenuPanel = styled.div`
    padding: 1em 0 0 1em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

export const MenuOption = styled.div`
    height: 35px;
    width: 35px;
    margin-right: 1em;
    margin-bottom: 1em;
    border-radius: 4px;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const UnitType = styled.div`
    /* enabling width makes unit dots line up neatly */
    /* width: 75px; */
`

export const Entry = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    h3 {
        margin-right: .5em;
        font-size: 15px;
    }
`

export const Unit = styled.div`
    height: 9px;
    width: 9px;
    background-color: red;
    margin-right: .5em;
    border-radius: 3px;
`
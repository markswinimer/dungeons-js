import styled from 'styled-components';


export const UpgradeLevel = styled.div`
    
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
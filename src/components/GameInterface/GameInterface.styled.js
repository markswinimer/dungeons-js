import styled from 'styled-components';

// Main Component
export const StyledGameInterface = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    position: absolute;
`

// LeftSection Components
export const StyledLeftSection = styled.div`
    width: 300px;
    padding: 1em;
    height: 675px;
    align-self: center;

`

// MiddleSection Components
export const MiddleSection = styled.div`
    flex: 1;
    border: 1px solid blue;
`

// RightSection Components
export const RightSection = styled.div`
    width: 100px;
    border: 1px solid red;
`
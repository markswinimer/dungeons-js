import styled from 'styled-components';

export const Panel = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid silver;
    border-radius: 2px;
    margin-bottom: 1em;
    
    height: ${props => props.height};
    width: ${props => props.width};
    max-height: ${props => props.maxHeight};
    max-width: ${props => props.maxwidth};
`

export const PanelLabel = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 10px;
    border-bottom: 1px solid silver;
    padding: .1em 1em;
`
export const PanelContent = styled.div`
    padding: 1em;
    display: flex;
    flex-direction: column;
    font-size: 10px;
`
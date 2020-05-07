import React from 'react';

import LeftSection from './LeftSection';
import { StyledGameInterface, MiddleSection, RightSection } from './GameInterface.styled';

class GameInterface extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return(
            <StyledGameInterface>
                <LeftSection
                    // Implementing Currently
                />
                   
                    {/* Will becom components */}
                <MiddleSection></MiddleSection>
                <RightSection></RightSection>
            </StyledGameInterface>
        )
    }
}
export default GameInterface;
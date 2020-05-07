import React from 'react';

import UnitDisplayPanel from '../Panels/UnitDisplayPanel/UnitDisplayPanel';
import UpgradesPanel from '../Panels/UpgradesPanel/UpgradesPanel';
import Menu from '../Panels/Menu/Menu';

import { StyledLeftSection } from './GameInterface.styled';

class LeftSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <StyledLeftSection>
                <UnitDisplayPanel/>
                <UpgradesPanel/>
                <Menu/>
            </StyledLeftSection>
        )
    }
}

export default LeftSection;
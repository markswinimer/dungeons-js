import React from 'react';

import { Entry, Unit, UnitType } from './UnitDisplayPanel.styled';
import { Panel, PanelLabel, PanelContent } from '../Panels.styled';

class UnitDisplayPanel extends React.Component {
    render() {
        return(
            <Panel height="auto">
                <PanelLabel>Class Inventory</PanelLabel>
                <PanelContent>
                    <Entry>
                        <UnitType><h3>Thief</h3></UnitType>
                        <Unit />
                        <Unit />
                        <Unit />
                        <Unit />
                    </Entry>
                    <Entry>
                        <UnitType><h3>Mage</h3></UnitType>
                        <Unit />
                        <Unit />
                    </Entry>
                    <Entry>
                        <UnitType><h3>Warrior</h3></UnitType>
                        <Unit />
                        <Unit />
                        <Unit />
                        <Unit />
                    </Entry>
                </PanelContent>
            </Panel>
        )
    }
}

export default UnitDisplayPanel;
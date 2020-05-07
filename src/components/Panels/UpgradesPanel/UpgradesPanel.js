import React from 'react';

import { Entry, Unit, UnitType, UpgradeLevel } from '../UpgradesPanel/UpgradesPanel.styled';
import { Panel, PanelLabel, PanelContent } from '../Panels.styled';

class UpgradesDisplayPanel extends React.Component {
    render() {
        return(
            <Panel height="auto">
                <PanelLabel>Upgrades</PanelLabel>
                <PanelContent>
                    <Entry>
                        <UnitType><h3>Carts</h3></UnitType>
                        <UpgradeLevel>LV.1</UpgradeLevel>
                    </Entry>
                    <Entry>
                        <UnitType><h3>Mapping</h3></UnitType>
                        <UpgradeLevel>LV.4</UpgradeLevel>
                    </Entry>
                    <Entry>
                        <UnitType><h3>Merchant</h3></UnitType>
                        <UpgradeLevel>LV.2</UpgradeLevel>
                    </Entry>
                </PanelContent>
            </Panel>
        )
    }
}

export default UpgradesDisplayPanel;
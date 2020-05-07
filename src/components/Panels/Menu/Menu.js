import React from 'react';

import { Entry, Unit, UnitType, MenuPanel, MenuOption } from './Menu.styled';
import { Panel, PanelLabel, PanelContent } from '../Panels.styled';

class Menu extends React.Component {
    render() {
        return(
            <Panel height="auto">
                <PanelLabel>Main Menu</PanelLabel>
                <MenuPanel>
                    <MenuOption>1</MenuOption>
                    <MenuOption>2</MenuOption>
                    <MenuOption>3</MenuOption>
                    <MenuOption>4</MenuOption>
                    <MenuOption>5</MenuOption>
                    <MenuOption>6</MenuOption>
                    <MenuOption>7</MenuOption>
                    <MenuOption>8</MenuOption>
                </MenuPanel>
            </Panel>
        )
    }
}

export default Menu;
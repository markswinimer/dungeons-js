import React, { useState } from 'react'
import Phaser from 'phaser'
import styled from 'styled-components'
import { IonPhaser } from '@ion-phaser/react'
import logo from './assets/logo.png'

import LeftSection from './components/GameInterface/LeftSection';
import { StyledGameInterface, MiddleSection, RightSection } from './components/GameInterface/GameInterface.styled';

import { GlobalStyles, ScreenSize } from './global';
import { theme } from './theme';

import GameInterface from './components/GameInterface/GameInterface';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Game',
};
class MainScene extends Phaser.Scene {
    private helloWorld!: Phaser.GameObjects.Text
    private square: Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };

    constructor() {
        super(sceneConfig);
    }
    init() {
        this.cameras.main.setBackgroundColor('#24252A')
    }

    create() {
        this.square = this.add.rectangle(400, 400, 100, 100, 0xFFFFFF) as any;
        this.physics.add.existing(this.square);
        this.helloWorld = this.add.text(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            "Hello World", {
            font: "40px Arial",
            fill: "#ffffff"
        },
        );
        this.helloWorld.setOrigin(0.5);
    }
    update() {
        const cursorKeys = this.input.keyboard.createCursorKeys();

        if (cursorKeys.up.isDown) {
            this.square.body.setVelocityY(-500);
        } else if (cursorKeys.down.isDown) {
            this.square.body.setVelocityY(500);
        } else {
            this.square.body.setVelocityY(0);
        }

        if (cursorKeys.right.isDown) {
            this.square.body.setVelocityX(500);
        } else if (cursorKeys.left.isDown) {
            this.square.body.setVelocityX(-500);
        } else {
            this.square.body.setVelocityX(0);
        }

        this.helloWorld.angle += 1;
    }
    
}
const game: Phaser.Types.Core.GameConfig = {
    width: 1024,
    height: 768,
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        // autoCenter: Phaser.Scale.CENTER_BOTH,
        // width: '100%',
        // height: '100%'
    },
    render: {
        antialias: false,
        pixelArt: true,
        roundPixels: true
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 400 },
            debug: true
        }
    },
    scene: MainScene
};

interface Props {
    initialize: boolean
}

interface State {
    count: number
}

const GameScreen = styled.div`
    height: 675px;
    width: 900px;
    border: 1px solid red;
    align-self: center;
`
const Main = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    min-height: 100vh;
    font-size: calc(10px + 2vmin);
    box-sizing: border-box;
`

class Game extends React.Component<Props, State> {
    state: State = {
        count: 0
    }

    render() {
        return (
            <Main>
                <LeftSection/>
                <GameScreen>

                    {/* Game is rendered here */}
                    <IonPhaser game={game} initialize={true} />
                </GameScreen>
            </Main>
        );
    }
}

export default Game;
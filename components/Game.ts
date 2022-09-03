import Main from 'components/GameMain';
import { useEffect } from 'react';
import 'phaser';

export default function Index() {
    useEffect(() => {
        loadGame();
    }, []);

    const loadGame = async () => {
        if (typeof window !== 'object') {
            return;
        }

        var config = {
            type: Phaser.AUTO,
            width: 1400,
            height: 1200,
            pixelArt: true,
            physics: {
                default: 'arcade',
            },
            parent: 'game',
            scale: {
                mode: Phaser.Scale.WIDTH_CONTROLS_HEIGHT,
                autoCenter: Phaser.Scale.CENTER_BOTH
            },
        };

        var game = new Phaser.Game(config);

        game.scene.add('main', Main);
        game.scene.start('main');

    };

    return null;
}
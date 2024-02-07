import { Canvas } from './Canvas.js';
import { TileManager } from './TileManager.js';
import { UIController } from './UIController.js';

document.addEventListener('DOMContentLoaded', () => {
    const canvas = new Canvas('myCanvas');
    const tileManager = new TileManager();
    const uiController = new UIController(tileManager);
});

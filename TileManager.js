import { Tile } from './Tile.js';

export class TileManager {
    constructor() {
        this.tiles = [];
    }

    createTiles(count) {
        this.tiles = [];
        for (let i = 0; i < count; i++) {
            this.tiles.push(new Tile()); // Vytvoříme dlaždici s defaultními vlastnostmi
        }
    }

    // Metoda pro zobrazení miniatur dlaždic v UI
    displayTilePreviews(containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = ''; // Vymažeme předchozí obsah
        this.tiles.forEach(tile => {
            const tileElement = document.createElement('div');
            tileElement.className = 'tile-miniature';
            tileElement.style.backgroundColor = tile.color;
            container.appendChild(tileElement);
        });
    }

    // Další metody pro správu dlaždic
}

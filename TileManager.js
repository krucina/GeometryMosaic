import { Tile } from './Tile.js';

export class TileManager {
    constructor() {
        this.tiles = [];
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
    }

    createTiles(count) {
        this.tiles = [];
        for (let i = 0; i < count; i++) {
            this.tiles.push(new Tile()); // Vytvoříme dlaždici s defaultními vlastnostmi
        }
    }

    displayTilePreviews(containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = ''; // Vymažeme předchozí obsah
        this.tiles.forEach((tile, index) => {
            const tileElement = document.createElement('div');
            tileElement.className = 'tile-miniature';
            tileElement.setAttribute('data-index', index);
            tileElement.style.backgroundColor = tile.color;
            tileElement.addEventListener('click', () => {
                // Tady voláme selectTile místo přímé manipulace s DOM
                this.selectTile(index, tileElement);
            });
            container.appendChild(tileElement);
        });
    }
    
       

    selectTile(index, tileElement) {
        // Zrušení výběru předchozí vybrané dlaždice
        const previouslySelected = document.querySelector('.tile-miniature.selected');
        if (previouslySelected) {
            previouslySelected.classList.remove('selected');
        }
    
        // Zvýraznění aktuálně vybrané dlaždice
        tileElement.classList.add('selected');
    
        // Zobrazení vybrané dlaždice ve větším náhledu
        const preview = document.getElementById('tilePreview');
        preview.style.backgroundColor = this.tiles[index].color;
    
        // Aktualizace aktuálně vybrané dlaždice pro další úpravy
        this.currentlySelectedTileIndex = index;
    }
    
    drawTiles() {
        const tilesPerRow = 20;
        const tileSize = this.canvas.width / tilesPerRow; // Velikost dlaždice v pixelech
        console.log()
        const numberOfRows = tilesPerRow;

        for (let row = 0; row < numberOfRows; row++) {
            for (let col = 0; col < tilesPerRow; col++) {
                const tileIndex = (row * tilesPerRow + col) % this.tiles.length; // Opakování dlaždic, pokud jich není dost
                const tile = this.tiles[tileIndex];
                const x = col * tileSize;
                const y = row * tileSize;
                
                // Vykreslení dlaždice
                this.ctx.fillStyle = tile.color;
                this.ctx.fillRect(x, y, tileSize, tileSize);
            }
        }
    } 

    // Další metody pro správu dlaždic
}

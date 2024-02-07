export class UIController {
    constructor(tileManager) {
        this.tileManager = tileManager;
        this.initializeTileCountSelect();
        this.setupTileCountChangeListener();
        this.setupColorChangeListener();
        this.setupSaveTileListener();
        this.setupDrawTilesListener();
        this.setupDownloadButtonListener();
    }

    initializeTileCountSelect() {
        
        const tileCountSelect = document.getElementById('tileCount');
        for (let i = 1; i <= 14; i++) {
            const option = new Option(i, i);
            tileCountSelect.add(option);
        }
    }

    setupTileCountChangeListener() {
        const tileCountSelect = document.getElementById('tileCount');
        tileCountSelect.addEventListener('change', () => {
            const count = parseInt(tileCountSelect.value, 10);
            this.tileManager.createTiles(count);
            this.tileManager.displayTilePreviews('tilesContainer');

        });
    }

    setupColorChangeListener() {
        const colorPicker = document.getElementById('tileColor1');
        const preview = document.getElementById('tilePreview');
        
        colorPicker.addEventListener('change', (event) => {
            const selectedColor = event.target.value;
            preview.style.backgroundColor = selectedColor;
            
            // Pokud je vybrána dlaždice, aktualizujte její barvu
            if (this.tileManager.currentlySelectedTileIndex !== undefined) {
                const selectedTile = this.tileManager.tiles[this.tileManager.currentlySelectedTileIndex];
                selectedTile.setColor(selectedColor);
            }
        });
    }

    setupSaveTileListener() {
        document.getElementById('setTile').addEventListener('click', () => {
            const selectedColor = document.getElementById('tileColor1').value;
            if (this.tileManager.currentlySelectedTileIndex !== undefined) {
                
                // Najděte miniaturu odpovídající vybrané dlaždici a aktualizujte její barvu
                const tileMiniatures = document.querySelectorAll('.tile-miniature');
                const selectedMiniature = tileMiniatures[this.tileManager.currentlySelectedTileIndex];
                if (selectedMiniature) {
                    selectedMiniature.style.backgroundColor = selectedColor;
                }
            }
        });
    }

    setupDrawTilesListener() {
        document.getElementById('drawTiles').addEventListener('click', () => {
            this.tileManager.drawTiles();
        });
    }
    
    setupDownloadButtonListener() {
        document.getElementById('downloadButton').addEventListener('click', () => {
            const canvas = document.getElementById('myCanvas');
            const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            
            // Vytvoření elementu <a>, který bude sloužit k stažení
            const link = document.createElement('a');
            link.download = 'mozaika.png';
            link.href = image;
            link.click(); // Programové kliknutí na odkaz pro stažení
        });
    }


    // Další metody pro správu UI, jako je nastavení dlaždic, vykreslení dlaždic atd.
}

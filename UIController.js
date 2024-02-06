export class UIController {
    constructor(tileManager) {
        this.tileManager = tileManager;
        this.initializeTileCountSelect();
        this.setupTileCountChangeListener();
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

    // Další metody pro správu UI, jako je nastavení dlaždic, vykreslení dlaždic atd.
}

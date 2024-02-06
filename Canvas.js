export class Canvas {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.adjustCanvasSize();
        window.addEventListener('resize', () => this.adjustCanvasSize());
    }

    adjustCanvasSize() {
        const padding = 70; // Definujeme padding
        const maxWidth = window.innerWidth - padding;
        const maxHeight = window.innerHeight - padding;

        // Vybere menší hodnotu z maxWidth a maxHeight pro zachování tvaru čtverce
        const size = Math.min(maxWidth, maxHeight);

        this.canvas.width = size;
        this.canvas.height = size;

        // Upravíme také CSS styl, aby vizuálně odpovídal logickým rozměrům plátna
        this.canvas.style.width = `${size}px`;
        this.canvas.style.height = `${size}px`;

        console.log(`New canvas size: ${size}px`);

    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function main() {
    const canvas = document.querySelector('#minesweeper')
    ctx = canvas.getContext('2d')
    ctx.font = "20px Arial"
    ctx.fillText("Hello World!", 0, 0)
}
window.addEventListener('DOMContentLoaded', () => main())
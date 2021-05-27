const pressed = []
const code = "rossi"

document.addEventListener('keyup', (event) => {
    pressed.push(event.key)
    pressed.splice(-code.length, pressed.length - code.length)
    if (pressed.join('').includes(code)) {
        var path = window.location.pathname.split('/').pop()
        path = parseInt(path.slice(9, 10)) + 1
        window.location.href = `/Maze-Game/Maze-Game/urls/maze-lvl-${path}.html`
    }
})
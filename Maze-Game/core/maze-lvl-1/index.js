var x = 0
var y = 0

const dados = {
    player: {
        x: 0,
        y: 0
    },
    end: {
        x: 0,
        y: 0
    }
}

const canvas = document.getElementById("canvas").getContext("2d")

const board = [ // 0 = Nada // 1 = Wall // 2 = Player // 3 = Final //
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1],
    [1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 3],
    [1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1],
    [2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]

function walls() {
    for (c = 0; c < 400; c++) {
        if (board[y][x] == 1) {
            canvas.fillRect(x, y, 1, 1)
        }
        x++
        if (x == 20) {
            y++
            x = 0
        }
    }
    x = 0
    y = 0
    c = 0
}

function player() {
    for (c = 0; c < 400; c++) {
        if (board[y][x] == 2) {
            dados.player.x = x
            dados.player.y = y
        }
        x++
        if (x == 20) {
            y++
            x = 0
        }
    }
    x = 0
    y = 0
    c = 0
}

function end() {
    for (c = 0; c < 400; c++) {
        if (board[y][x] == 3) {
            dados.end.x = x
            dados.end.y = y
        }
        x++
        if (x == 20) {
            y++
            x = 0
        }
    }
    x = 0
    y = 0
    c = 0
}

function moves(event) {
    canvas.clearRect(0, 0, 20, 20)
    canvas.fillStyle = "#bdc3c7"
    walls()
    canvas.fillStyle = "lightgreen"
    canvas.fillRect(dados.end.x, dados.end.y, 1, 1)
    canvas.fillStyle = "#f39c12"
    canvas.fillRect(dados.player.x, dados.player.y, 1, 1)
    if (event.key == "ArrowLeft" && board[dados.player.y][dados.player.x - 1] != 1 && dados.player.x != 0) {
        dados.player.x--
        return
    }
    if (event.key == "ArrowUp" && board[dados.player.y - 1][dados.player.x] != 1) {
        dados.player.y--
        return
    }
    if (event.key == "ArrowRight" && board[dados.player.y][dados.player.x + 1] != 1) {
        dados.player.x++
        return
    }
    if (event.key == "ArrowDown" && board[dados.player.y + 1][dados.player.x] != 1) {
        dados.player.y++
        return
    }
    if (dados.player.x == dados.end.x && dados.player.y == dados.end.y) {
        dados.player.x = -1
        dados.player.y = -1
        window.location.href = "maze-lvl-2.html"
    }
    requestAnimationFrame(moves)
}

walls()
player()
end()
moves(0)
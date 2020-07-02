# Maze Game
Um jogo de labirinto feito por Vinicius Rossi. A base de HTML, CSS e JS.
***
# Explicação dos Códigos
### Base do Labirinto

O labirinto é formado por uma array e cada número dessa array tem uma função. Observe a tabela abaixo:

Número | Função
:---: | :---:
0 | Espaço
1 | Parede
2 | Player
3 | Final

Agora observe um exemplo de labirinto: 

```
const board = [ // 0 = Nada // 1 = Parede // 2 = Player // 3 = Final //
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
```

E a função usada para detectar as paredes foi:

```
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
```
O objetivo desses códigos foi transformar uma Array em um labirinto apenas usando números, e utilizando essas duas bases foi possível realizar isso.

### Detecção de Movimentos

A função de movimentos também tem o cargo de ilustrar cada pixel do labirinto. Veja:

```
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
```
Esta função observa que tecla foi apertada, se for uma das setas do teclado e se o próximo pixel não for uma parede, o jogador é movido em direção da seta apertada.

### Loader
O Loader foi feito com base em dois elementos span, estilizados em CSS e animados da seguinte forma:
```
@keyframes loader {
    from {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(180deg);
    }
    50% {
        transform: rotate(180deg);
    }
    75% {
        transform: rotate(360deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

@keyframes innerLoader {
    from {
        height: 0%;
    }
    50% {
        height: 100%;
    }
    to {
        height: 0%;
    }
}
```
### Efeito FadeOut
O FadeOut foi feito com jQuery, são códigos muito simples que fazem uma diferença estética impressionante.
```
$("#loader").on("animationend", () => {
    $("#backgroundLoader").fadeOut("slow")
})
```
***
# Próximas Atualizações
- [x] Novo Loader inicial
- [ ] Mais fases com maior dificuldade
- [ ] Faça seu próprio labirinto
- [ ] Compatibilidade com Smartphones
***
# Informações Adicionais
Você pode ter acesso ao jogo a partir do link: https://viniciusrossii.github.io/Maze-Game/Maze-Game/menu.html

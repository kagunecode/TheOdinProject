// Create a player object that takes the name for the player and maybe a color
// Create a board object that takes the player and the position in which he played
// Create a board that has 9 spaces to play
// Find a way to check wether one of the players has won the game

// 8 1 6
// 3 5 7
// 4 9 2
const Player = (name, symbol) => {
    const getSymbol = () => symbol

    const getLog = () => {
        console.log(`It's ${name}'s turn!`)
    }

    const playLog = (position) => {
        console.log(`${name} has played on position ${position}`)
    }

    const win = () => {
        console.log(`${name} has won the game!`)
        return
    }
    return { getLog, getSymbol, playLog, win }
}

const Game = () => {
    const board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    const play = (player, position) => {
        board[position - 1] = player.getSymbol()
        player.playLog(position)
    }
    const checkBoard = (player) => {
        if (board[0] == player.getSymbol() && board[1] == player.getSymbol() && board[2] == player.getSymbol()) {
            player.win()
        } else if (board[3] == player.getSymbol() && board[4] == player.getSymbol() && board[5] == player.getSymbol()) {
            player.win()
        } else if (board[6] == player.getSymbol() && board[7] == player.getSymbol() && board[8] == player.getSymbol()) {
            player.win(board[6] == player.getSymbol() && board[7] == player.getSymbol() && board[8] == player.getSymbol())
        } else if (board[0] == player.getSymbol() && board[3] == player.getSymbol() && board[6] == player.getSymbol()) {
            player.win()
        } else if (board[1] == player.getSymbol() && board[4] == player.getSymbol() && board[7] == player.getSymbol()) {
            player.win()
        } else if (board[2] == player.getSymbol() && board[5] == player.getSymbol() && board[8] == player.getSymbol()) {
            player.win()
        } else if (board[0] == player.getSymbol() && board[4] == player.getSymbol() && board[8] == player.getSymbol()) {
            player.win()
        } else if (board[3] == player.getSymbol() && board[4] == player.getSymbol() && board[6] == player.getSymbol()) {
            player.win()
        } else {
            console.log(`No one won this time!`)
        }
    }
    return { play, checkBoard }
}

const player1 = Player('Kagune', 'X')
const player2 = Player('Sphynx', 'O')
const game = Game()

for (let i = 0; i < 9; i++) {
    game.play(player1, prompt('Enter the position you want to place your figure'))
}

const mainController = {
    index: (req, res) => {
        res.render('index')
    },
    post: (req, res) => {
        let array = Object.values(req.body)
        let board = []

        for (let i = 0; i < 9; i++) {
            let a = []
            for (let j = 0; j < 9; j++) {
                a.push(array.shift())
                if (j == 8) {
                    board.push(a)
                }
            }
        }

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (board[i][j] == '') {
                    board[i][j] = null
                }
            }
        }

        console.log(req.body);
        console.log(array);
        console.log(board);

        res.send('I posted boy')
    }
}

module.exports = mainController;
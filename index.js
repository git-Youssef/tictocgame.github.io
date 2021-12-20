$(document).ready(function () {

    let divs = document.querySelectorAll(".tictac_wrapper div");

    var myModalEl = document.getElementById('myModal')

    let playerX = []
        , playerO = [],
        turn = "X";
    let cliCount = 0;

    let winCondition = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ]



    divs.forEach((ele, index) => {

        ele.onclick = function () {

            cliCount ++;

            if (turn === "X") {

                ele.innerHTML = turn;
                playerX.push(index + 1);

                if (playerX.length >= 3) {

                    let elementToDraw = checkWinner(winCondition, playerX, "playerX");



                    if (elementToDraw) {
                        divs.forEach((div, index) => {


                            for (let j = 0; j < elementToDraw.length; j++) {


                                if (elementToDraw[j] === index + 1) {

                                    div.classList.add("draw")

                                }
                            }

                        });
                    }

                }

                turn = "O"
            }
            else {

                ele.innerHTML = turn;
                playerO.push(index + 1)

                if (playerO.length >= 3) {

                    let elementToDraw = checkWinner(winCondition, playerO, "playerO");


                    if (elementToDraw) {

                        divs.forEach((div, index) => {


                            for (let j = 0; j < elementToDraw.length; j++) {


                                if (elementToDraw[j] === index + 1) {

                                    div.classList.add("draw")

                                }
                            }

                        });
                    }
                }

                turn = "X"
            }

            this.style.pointerEvents = "none";


            if(cliCount === 9){
                $(".modal-body").html("<h4>No one's winner</h4>");

                $('#myModal').modal('show');

                document.querySelector(".tictac_wrapper").style.pointerEvents = "none";
            }

        }

    });


    function checkWinner(winCondiction, arrPlayer, playerName) {

        let arrToDraw;

        winCondiction.forEach(arrCond => {

            let count = 0;

            for (let i = 0; i < arrCond.length; i++) {

                if (arrPlayer.indexOf(arrCond[i]) !== -1) {

                    count++;

                }
            }

            if (count === 3) {

                let Winner = `<h4>Congrats <span>${playerName}</span> you're the winner</h4>`;

                $(".modal-body").html(Winner);

                $('#myModal').modal('show');

                document.querySelector(".tictac_wrapper").style.pointerEvents = "none";

                arrToDraw = arrCond;

            }

        });

        return arrToDraw

    }


    document.querySelector('#replay').onclick = function () {

        location.reload();
    }

})
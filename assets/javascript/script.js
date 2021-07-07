


let userhand;
let cpuhand;
let winerhand;



$(document).ready(function () {

    $('#btn-piedra').click(function () {
        start(0);

    }
    );
    $('#btn-papel').click(function () {
        start(1);

    }
    );
    $('#btn-tijeras').click(function () {
        start(2);

    }
    );
});

function start(hand) {
    remake();
    setTimeout(() => {
        $('.hands').css({ "background-color": "black", "color": "white" });
        setTimeout(() => {
            $('.hands').css({ "background-color": "white", "color": "black" });
            setTimeout(() => {
                play(hand);
            }, 500);
        }, 500);

    }, 500);

}


function play(hand) {


    cpuhand = getRandomHand();

    userhand = hand;
    console.log(userhand + " " + cpuhand);

    if (userhand == cpuhand) {
        $('#mensaje').text("EMPATE");
        $('#user-border').addClass("border-success");
        $('#cpu-border').addClass("border-success");

    }
    else {
        winerhand = whoWhin(userhand, cpuhand);
        console.log(winerhand);
        if (winerhand == userhand) {
            $('#mensaje').text("GANASTE");
            $('#user-border').addClass("border-success");
            $('#cpu-border').addClass("border-danger");
        }
        else {
            $('#mensaje').text("GANA LA MAQUINA");
            $('#user-border').addClass("border-danger");
            $('#cpu-border').addClass("border-success");
        }
    }

    $('#cpu-hand').removeClass(getHand(-1)).addClass(getHand(cpuhand));
    $('#user-hand').removeClass(getHand(-1)).addClass(getHand(userhand));






}


function whoWhin(u, c) {
    if (u == 0)
        if (c == 2)
            return 0;
        else
            return 1;
    else
        if (u == 1)
            if (c == 0)
                return 1;
            else
                return 2;
        else
            if (c == 0)
                return 0
            else
                return 2;



}


function getRandomHand() {
    return Math.floor(Math.random() * 45) % 3;

}

function getHand(number) {

    switch (number) {
        case 0:
            return "fa-hand-rock";
            break;
        case 1:
            return "fa-hand-paper";
            break;
        case 2:
            return "fa-hand-scissors";
        default:
            return "fa-question-circle";
    }
}

function remake() {
    $('#cpu-hand').removeClass(getHand(cpuhand)).addClass(getHand(-1));

    $('#user-hand').removeClass(getHand(userhand)).addClass(getHand(-1));
    $('.hands').removeClass('border-success').removeClass('border-danger');



}


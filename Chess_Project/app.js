var board = [
    ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
    ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
    ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
    ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
    ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
    ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
    ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
    ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"]
];

var queen = {
    position: {
        x: 0,
        y: 0
    }
}

function move(num, dir) {
    let temp, temp1;
    switch (dir) {
        case 'E':
            temp = queen.position.y + num;
            if (temp > 8 || temp < 0) {
                console.log("Outside the boundary");
                document.write("Outside boundary");
            } else {
                queen.position.y = temp;
            }
            break;
        case 'S':
            temp = queen.position.x + num;
            if (temp > 8 || temp < 0) {
                console.log("Outside the boundary");
                document.write("Outside boundary");
            } else {
                queen.position.x = temp;
            }
            break;
        case 'W':
            temp = queen.position.y - num;
            if (temp > 8 || temp < 0) {
                console.log("Outside the boundary");
                document.write("Outside boundary");
            } else {
                queen.position.y = temp;
            }
            break;
        case 'N':
            temp = queen.position.x - num;
            if (temp > 8 || temp < 0) {
                console.log("Outside the boundary");
                document.write("Outside boundary");
            } else {
                queen.position.x = temp;
            }
            break;
        case 'SE':
            temp = queen.position.x + num;
            temp1 = queen.position.y + num;
            if (temp > 8 || temp < 0 || temp1 > 8 || temp1 < 0) {
                console.log("Outside the boundary");
                document.write("Outside boundary");
            } else {
                queen.position.x = temp;
                queen.position.y = temp1;
            }
            break;
        case 'SW':
            temp = queen.position.x + num;
            temp1 = queen.position.y - num;
            if (temp > 8 || temp < 0 || temp1 > 8 || temp1 < 0) {
                console.log("Outside the boundary");
                document.write("Outside boundary");
            } else {
                queen.position.x = temp;
                queen.position.y = temp1;
            }
            break;
        case 'NE':
            temp = queen.position.x - num;
            temp1 = queen.position.y + num;
            if (temp > 8 || temp < 0 || temp1 > 8 || temp1 < 0) {
                console.log("Outside the boundary");
                document.write("Outside boundary");
            } else {
                queen.position.x = temp;
                queen.position.y = temp1;
            }
            break;
        case 'NW':
            temp = queen.position.x - num;
            temp1 = queen.position.y - num;
            if (temp > 8 || temp < 0 || temp1 > 8 || temp1 < 0) {
                console.log("Outside the boundary");
                document.write("Outside boundary");
            } else {
                queen.position.x = temp;
                queen.position.y = temp1;
            }
            break;

        default:
            document.write("Invalid Input");
            break;
    }
}

function play() {
    var a = document.getElementById("position").value;
    var inp = a.split(" ");
    inp.forEach(b => {
        let num = Number(b.slice(Element.length - 1));
        let dir = b.slice(0, Element.length - 1);
        move(num, dir);
        console.log("your position ->" + board[queen.position.x][queen.position.y]);
        document.write("For the given value " + b + "  Your position is " + board[queen.position.x][queen.position.y]);
    });
}
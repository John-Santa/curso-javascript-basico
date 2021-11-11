//Square Code

let perimeterOfSquare = (squareSide) => {
    return squareSide * 4;
};
let squareArea = (squareSide) => {
    return squareSide ** 2;
};


//Triangle Code

let perimeterOfTriangle = (side, hypotenuse, base) => {
    return side + hypotenuse + base;
};

let triangleArea = (base, height) => {
    return (base * height) / 2;
};



//Circle code


let calculateDiameter = (radio) => {
    return radio * 2;
};

let perimeterOfCircle = (circleDiameter) => {
    const PI = Math.PI;
    return circleDiameter * PI;
};

let circleArea = (radio) => {
    const PI = Math.PI;
    return (radio**2) * PI;
};

let circleDiameter = calculateDiameter(4);

//Interaction with html

function calculatePerimeterOfSquare(params) {
    const squareInput = document.getElementById('squareInput');
    const squareInputValue = squareInput.value;
    const perimeter = perimeterOfSquare(squareInputValue);
    document.getElementById('response').value = `El perimetro es: ${perimeter} cm`;
    document.getElementById('response').type = 'text';
}


function alculateAreaOfSquare(params) {
    const squareInput = document.getElementById("squareInput");
    const squareInputValue = squareInput.value;
    const area = squareArea(squareInputValue);
    document.getElementById('response').value = `El area es: ${area} cm^2`;
    document.getElementById('response').type = 'text';
}
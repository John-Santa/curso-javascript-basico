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

let triangleHeight = (side, base) => {
    if (side === base) {
        let height = Math.sqrt((side**2)-((base**2)/4));
        console.log(`La altura es ${height}`);
    }else{
        console.error(`La longitud de a: ${side} y b: ${base} son diferentes`)
    }
}



//Circle code


let calculateDiameter = (radio) => {
    return radio * 2;
};

let perimeterOfCircle = (circleDiameter) => {
    const PI = Math.PI;
    return (circleDiameter * PI).toFixed(2);
};

let circleArea = (radio) => {
    const PI = Math.PI;
    return ((radio**2) * PI).toFixed(2);
};

let circleDiameter = calculateDiameter(4);

//Interaction with html

function calculatePerimeterOfSquare() {
    const side = document.getElementById('squareInput').value;
    const perimeter = perimeterOfSquare(side);
    document.getElementById('response').value = `El perimetro es: ${perimeter} cm`;
    document.getElementById('response').type = 'text';
}


function calculateAreaOfSquare() {
    const squareInput = document.getElementById('squareInput').value;
    const area = squareArea(squareInput);
    document.getElementById('response').value = `El area es: ${area} cm^2`;
    document.getElementById('response').type = 'text';
}

function calculatePerimeterOfTriangle() {
    const side = document.getElementById('sideInput').value;
    const hypotenuse = document.getElementById('hypotenuseInput').value;
    const base = document.getElementById('baseInput').value;
    const perimeter = perimeterOfTriangle(side, hypotenuse, base);
    document.getElementById('responseTriangle').value = `El perimetro es: ${perimeter} cm`;
    document.getElementById('responseTriangle').type = 'text';

    triangleHeight(side, base);
}

function calculateAreaOfTriangle() {
    const base = document.getElementById('baseInput').value;
    const height = document.getElementById('heightInput').value;
    const area = triangleArea(base, height);
    document.getElementById('responseTriangle').value = `El area es: ${area} cm^2`;
    document.getElementById('responseTriangle').type = 'text';
}

function calculatePerimeterOfCircle() {
    const radio = document.getElementById('circleInput').value;
    const diameter = calculateDiameter(radio);
    const perimeter = perimeterOfCircle(diameter);
    document.getElementById('responseCircle').value = `El perimetro es: ${perimeter} cm`;
    document.getElementById('responseCircle').type = 'text';
}


function calculateAreaOfCircle() {
    const radio = document.getElementById('circleInput').value;
    const area = circleArea(radio);
    document.getElementById('responseCircle').value = `El area es: ${area} cm^2`;
    document.getElementById('responseCircle').type = 'text';
}
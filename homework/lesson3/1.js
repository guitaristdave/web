const cels = prompt('Температуру в градусах цельсия');

function celsToFar(value) {
    const far = (9 / 5) * value + 32;
    const result = far.toFixed(1);
    alert(`${value} C = ${result} F`)
}

celsToFar(cels)
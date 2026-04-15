// Historial de operaciones
let historial = [];

// 🔹 Función principal
function calcularOperacion(a, b, operacion) {

    // 🔸 VALIDACIONES
    if (a === "" || b === "") {
        throw new Error("Los campos no pueden estar vacíos");
    }

    if (isNaN(a) || isNaN(b)) {
        throw new Error("Los valores deben ser numéricos");
    }

    a = Number(a);
    b = Number(b);

    // 🔸 LÓGICA
    switch (operacion) {
        case "suma":
            return a + b;
        case "resta":
            return a - b;
        case "multiplicacion":
            return a * b;
        case "division":
            if (b === 0) {
                throw new Error("No se puede dividir entre cero");
            }
            return a / b;
        default:
            throw new Error("Operación no válida");
    }
}

// 🔹 MANEJO DE EVENTO + DOM
function ejecutarOperacion(operacion) {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const resultadoDiv = document.getElementById("resultado");

    try {
        const resultado = calcularOperacion(num1, num2, operacion);

        resultadoDiv.className = "exito";
        resultadoDiv.textContent = "Resultado: " + resultado;

        historial.push(`${num1} ${operacion} ${num2} = ${resultado}`);
        mostrarHistorial();

    } catch (error) {
        console.error(error);

        resultadoDiv.className = "error";
        resultadoDiv.textContent = error.message;

    } finally {
        console.log("Operación finalizada");
    }
}

// 🔹 HISTORIAL
function mostrarHistorial() {
    const lista = document.getElementById("historial");
    lista.innerHTML = "";

    historial.forEach(op => {
        let li = document.createElement("li");
        li.textContent = op;
        lista.appendChild(li);
    });
}
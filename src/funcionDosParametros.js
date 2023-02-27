//Respuesta de una practica

function sumWithClosure(firstNum) {
    // Tu código aquí 👈
    var first = firstNum
    return function (secondNum) {
      var second = secondNum
      if (!second) {
        return first
      } else {
        return first + second
      }
    }
}

console.log(sumWithClosure(5)(5))
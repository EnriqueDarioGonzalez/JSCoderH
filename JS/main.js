
function comprarCajas() {
    let valor = 0;
    let continuar = true;
    let saldo =  prompt("Por favor ingrese un saldo a depositar: \n");

    while(continuar) {
        let option = prompt(`Saldo Actual: ${saldo}\n\n ¿Que producto deseas adquirir? \n1: Caja Numero 1 - $500 \n2: Caja Numero 2 - $400 \n3: Caja Numero 3 - $300 \n4: Parar de comprar`);

        switch(option) {
          case "1":
            valor = 500;
            break;
          case "2":
            valor = 400;
            break;
          case "3":
            valor = 300;
            break;
          case "4":
            continuar = false;
            valor = 0;
            alert("Gracias por tu compra!");
            break;
          default:
            continuar = false;
            valor = 0;
            alert("Opción incorrecta");
            break;
        }

        if (saldo < valor) {
          continuar = false;
          alert("Se te acabó el saldo!");

        } else {
          saldo -= valor;
        }
    }

}

comprarCajas();
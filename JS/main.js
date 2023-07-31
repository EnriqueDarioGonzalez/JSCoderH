const Producto = function(nombre, precio, stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }


  let producto1 = new Producto("Bateria", 550000, 5)
  let producto2 = new Producto("Guitarra", 145000, 12)
  let producto3 = new Producto("Trompeta", 180000, 4)
  let producto4 = new Producto("Teclado", 235000, 12)
  let producto5 = new Producto("Violin", 980000, 9)


  let lista = [producto1, producto2, producto3, producto4, producto5]


  function filtrarProducto(){
    let palabraClave = prompt("¿Qué producto esta buscando?")
    let resultado = lista.filter ( (producto)=> producto.nombre.includes(palabraClave)  )
    if (resultado.length > 0){
      console.table(resultado)
    }else{
      alert("No se encontro ningun articulo con el nombre: " + palabraClave)
    }
  }


let boton1 = document.getElementById("filter")
boton1.addEventListener("click", filtrarProducto)

function agregarProducto() {
  let nombre = prompt("Ingresa el nombre del producto para agregar al stock")
  let precio = parseInt(prompt("Ingresa el precio del producto"))
  let stock = parseInt(prompt("Ingresa la cantidad de productos adicionados al stock"))
  if( nombre === "" || isNaN(precio)  || isNaN(stock)){
    alert("Ingrese valores válidos")
    return
  }
  let producto = new Producto(nombre,precio,stock)
  lista.push(producto)
  console.table(lista)
}

let boton2 = document.getElementById("addstock")
boton2.addEventListener("click", agregarProducto)
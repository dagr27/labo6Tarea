    function menu(){
        console.log("********************************");
        console.log("Bienvenida Jefecita");
        console.log("1.Agregar Producto");
        console.log("2.Modificar Stock");
        console.log("3.Registrar Venta y Reducir Stock");
        console.log("4.Mostrar Promedio de ventas realizadas");
        console.log("5.Mostrar Productos con Stock 0");
        console.log("0.Salir del Sistema");
    }

    function agregar(arrg){
        var producto = new Object();
        producto.codigo = prompt("Ingrese el codigo");
        producto.desc = prompt("Ingrese la Descripcion");
        producto.tipo = prompt("Ingrese el tipo");
        producto.compra = prompt("De cuanto fue la inversion");
        producto.compra = parseInt(producto.compra);
        producto.venta = prompt("Precio a vender");
        producto.venta = parseInt(producto.venta);
        producto.stock = prompt("Cantidad");
        producto.stock = parseInt(producto.stock);
        if(typeof producto.compra == "number" && typeof producto.venta == "number" && typeof producto.stock == "number" && producto.compra >= 0 && producto.venta >= 0 && producto.stock >= 0){
            arrg.push(producto);
            return arrg;
        }else{
            console.log("Datos erroneos, try again");
        }
        
    }
    function mostrar(arrg){
        var cont = 0;
        for(let i of arrg){
            console.log(cont +". Codigo: "+ i.codigo+", Stock:"+i.stock);
        }
    }
    function mostrarStock(arrg){
        for(let i of arrg){
            if(i.stock == 0){
                console.log("Codigo: "+ i.codigo+", Stock:"+i.stock);
            }        
        }
    }
    function modificar(n, arrg){
        var nuevoStock = prompt("Ingrese el nuevo stock:");
        nuevoStock = parseInt(nuevoStock);
        if(typeof nuevoStock != "number" || nuevoStock<0){
            console.log("Usted ingreso algo diferente a un numero o una cantidad no valida, intentelo de nuevo");
        }else{
        arrg[n].stock = nuevoStock;
        }
    }
    function vender(n, arrg){
        var vent = prompt("Ingrese Cantidad de productos a vender");
        vent = parseInt(vent);
        if(vent < 0 || vent >= arrg[n].stock){
            console.log("No podemos procesar Transaccion, Intentenlo de nuevo");
        }else {
            arrg[n].stock = arrg[n].stock - vent; 
            return arrg[n].venta * vent;
        }
    }

    function programa(){
        var opc = 1;
        let arreglo = [];
        let acum = 0;
        while(opc != 0){
            menu();
            opc = prompt("Ingrese una opcion");
            if(opc === 0){
                break;
            }else if(opc ==1){
                console.log("Buenas noches");
                var aux = agregar(arreglo);
            }else if(opc == 2){
                console.log("Listado De productos, Ingrese la posicion del stock del producto a modificar o introduzca -1 para cancelar");
                mostrar(aux);
                var n = prompt("Ingrese un numero: ");
                (n==-1)? "" : modificar(n, aux);
                
            }else if(opc == 3){
                console.log("Listado De productos, Ingrese la posicion del producto a vender o introduzca -1 para cancelar");
                mostrar(aux);
                var n = prompt("Ingrese un numero: ");
                (n==-1)? "" : acum += vender(n, aux);
            }else if(opc == 4){
                console.log("El total adquirido por ventas es:"+ acum);
            }
            else if(opc == 5){
                mostrarStock(aux);
            }
        }   
    }

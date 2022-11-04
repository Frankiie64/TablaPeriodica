function ordenarArreglo (elementos){

    if(elementos.length < 120){

        for(indicador=1;indicador<121 ;indicador++){
           let value = true

           elementos.forEach(item =>{
                if(item.posicion === indicador){
                    value = false;
                }
           });

           if(value)
           {
             elementos.push({simbolo:"NO",posicion:indicador,grupo:"No"});
           }           
        }
    }

    elementos.sort((a,b) => {
        return a.posicion - b.posicion
    });

    return elementos
}

const obtenerPrimeraTabla = function(elementos){

    elementos = ordenarArreglo(elementos);

    const primeraTabla = [];

    elementos.forEach(elemento => {
        if ((elemento.posicion < 57 || elemento.posicion > 71) && (elemento.posicion < 89 || elemento.posicion > 103) && elemento.posicion < 119){
            primeraTabla.push(elemento);
        }
    });

        if(elementos[118].simbolo === "NO")
        {
            primeraTabla.push({simbolo:"NO",posicion:57,grupo:"No"});
        }
        else{
            primeraTabla.push({simbolo:"La-Lu",posicion:57,grupo:"Lantanidos"});
        }

        if(elementos[119].simbolo === "NO")
        {
            primeraTabla.push({simbolo:"NO",posicion:89,grupo:"No"});
        }
        else{
            primeraTabla.push({simbolo:"Ac-Lr",posicion:89,grupo:"Actinidos"});
        }

    primeraTabla.sort((a,b) => {
        return a.posicion - b.posicion
    });

    return primeraTabla;
}

const obtenerSegundaTabla = function(elementos){
    elementos = ordenarArreglo(elementos);

    const segundaTabla = [];

    elementos.forEach(elemento => {
        if ((elemento.posicion > 57 || elemento.posicion < 71) && (elemento.posicion > 89 || elemento.posicion < 103)){
            segundaTabla.push(elemento);
        }
    });

    segundaTabla.sort((a,b) => {
        return a.posicion - b.posicion
    });

    return segundaTabla
}

exports.primeraTabla = obtenerPrimeraTabla;

exports.segundaTabla = obtenerSegundaTabla
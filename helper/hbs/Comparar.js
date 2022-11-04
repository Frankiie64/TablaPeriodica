const comparance = function(item,inicio,fin){
    
    if (item.posicion >= inicio && item.posicion <= fin)
    {
        return true
    }else{
        return false;
    }

}

const compararConUno = function(item,num){
    return item.posicion === num ? true:false;
}

exports.comparar = comparance;
exports.compararConUnElemento = compararConUno;
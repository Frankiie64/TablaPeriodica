const LeoHelpMe = function(item,grupo){
    return item.grupo === grupo ? true:false;
}

exports.SelectColor = LeoHelpMe;
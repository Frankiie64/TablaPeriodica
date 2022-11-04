const express = require("express");

const router = express.Router();

const elementos = [
   {simbolo:"Li",posicion:3,grupo:"Alcanlinos"},
   {simbolo:"Na",posicion:11,grupo:"Alcanlinos"},
   {simbolo:"K",posicion:19,grupo:"Alcanlinos"},
   {simbolo:"Rb",posicion:37,grupo:"Alcanlinos"},
   {simbolo:"Cs",posicion:55,grupo:"Alcanlinos"},
   {simbolo:"Fr",posicion:87,grupo:"Alcanlinos"},

   {simbolo:"Be",posicion:4,grupo:"Alcanlinoterreos"},
   {simbolo:"Mg",posicion:12,grupo:"Alcanlinoterreos"},
   {simbolo:"Ca",posicion:20,grupo:"Alcanlinoterreos"},
   {simbolo:"Sr",posicion:38,grupo:"Alcanlinoterreos"},
   {simbolo:"Ba",posicion:56,grupo:"Alcanlinoterreos"},
   {simbolo:"Ra",posicion:88,grupo:"Alcanlinoterreos"},

   {simbolo:"Sc",posicion:21,grupo:"Metales de Transicion"},
   {simbolo:"Y",posicion:39,grupo:"Metales de Transicion"},
   {simbolo:"Ti",posicion:22,grupo:"Metales de Transicion"},
   {simbolo:"Zr",posicion:40,grupo:"Metales de Transicion"},
   {simbolo:"Hf",posicion:72,grupo:"Metales de Transicion"},
   {simbolo:"Rf",posicion:104,grupo:"Metales de Transicion"},
   {simbolo:"V",posicion:23,grupo:"Metales de Transicion"},
   {simbolo:"Nb",posicion:41,grupo:"Metales de Transicion"},
   {simbolo:"Ta",posicion:73,grupo:"Metales de Transicion"},
   {simbolo:"Db",posicion:105,grupo:"Metales de Transicion"},
   {simbolo:"Cr",posicion:24,grupo:"Metales de Transicion"},
   {simbolo:"Mo",posicion:42,grupo:"Metales de Transicion"},
   {simbolo:"W",posicion:74,grupo:"Metales de Transicion"},
   {simbolo:"Sg",posicion:106,grupo:"Metales de Transicion"},
   {simbolo:"Mn",posicion:25,grupo:"Metales de Transicion"},
   {simbolo:"Tc",posicion:43,grupo:"Metales de Transicion"},
   {simbolo:"Re",posicion:75,grupo:"Metales de Transicion"},
   {simbolo:"Bh",posicion:107,grupo:"Metales de Transicion"},
   {simbolo:"Fe",posicion:26,grupo:"Metales de Transicion"},
   {simbolo:"Ru",posicion:44,grupo:"Metales de Transicion"},
   {simbolo:"Os",posicion:76,grupo:"Metales de Transicion"},
   {simbolo:"Hs",posicion:108,grupo:"Metales de Transicion"},
   {simbolo:"Co",posicion:27,grupo:"Metales de Transicion"},
   {simbolo:"Rh",posicion:45,grupo:"Metales de Transicion"},
   {simbolo:"Ir",posicion:77,grupo:"Metales de Transicion"},
   {simbolo:"Mt",posicion:109,grupo:"Metales de Transicion"},
   {simbolo:"Ni",posicion:28,grupo:"Metales de Transicion"},
   {simbolo:"Pd",posicion:46,grupo:"Metales de Transicion"},
   {simbolo:"Pt",posicion:78,grupo:"Metales de Transicion"},
   {simbolo:"Ds",posicion:110,grupo:"Metales de Transicion"},
   {simbolo:"Cu",posicion:29,grupo:"Metales de Transicion"},
   {simbolo:"Ag",posicion:47,grupo:"Metales de Transicion"},
   {simbolo:"Au",posicion:79,grupo:"Metales de Transicion"},
   {simbolo:"Rg",posicion:111,grupo:"Metales de Transicion"},
   {simbolo:"Zn",posicion:30,grupo:"Metales de Transicion"},
   {simbolo:"Cd",posicion:48,grupo:"Metales de Transicion"},
   {simbolo:"Hg",posicion:80,grupo:"Metales de Transicion"},
   {simbolo:"Cn",posicion:112,grupo:"Metales de Transicion"},

   {simbolo:"La",posicion:57,grupo:"Lantanidos"},
   {simbolo:"Ce",posicion:58,grupo:"Lantanidos"},
   {simbolo:"Pr",posicion:59,grupo:"Lantanidos"},
   {simbolo:"Nd",posicion:60,grupo:"Lantanidos"},
   {simbolo:"Pm",posicion:61,grupo:"Lantanidos"},
   {simbolo:"Sm",posicion:62,grupo:"Lantanidos"},
   {simbolo:"Eu",posicion:63,grupo:"Lantanidos"},
   {simbolo:"Gd",posicion:64,grupo:"Lantanidos"},
   {simbolo:"Tb",posicion:65,grupo:"Lantanidos"},
   {simbolo:"Dy",posicion:66,grupo:"Lantanidos"},
   {simbolo:"Ho",posicion:67,grupo:"Lantanidos"},
   {simbolo:"Er",posicion:68,grupo:"Lantanidos"},
   {simbolo:"Tm",posicion:69,grupo:"Lantanidos"},
   {simbolo:"Yb",posicion:70,grupo:"Lantanidos"},
   {simbolo:"Lu",posicion:71,grupo:"Lantanidos"},

   {simbolo:"Ac",posicion:89,grupo:"Actinidos"},
   {simbolo:"Th",posicion:90,grupo:"Actinidos"},
   {simbolo:"Pa",posicion:91,grupo:"Actinidos"},
   {simbolo:"U",posicion:92,grupo:"Actinidos"},
   {simbolo:"Np",posicion:93,grupo:"Actinidos"},
   {simbolo:"Pu",posicion:94,grupo:"Actinidos"},
   {simbolo:"Am",posicion:95,grupo:"Actinidos"},
   {simbolo:"Cm",posicion:96,grupo:"Actinidos"},
   {simbolo:"Bk",posicion:97,grupo:"Actinidos"},
   {simbolo:"Cf",posicion:98,grupo:"Actinidos"},
   {simbolo:"Es",posicion:99,grupo:"Actinidos"},
   {simbolo:"Fm",posicion:100,grupo:"Actinidos"},
   {simbolo:"Md",posicion:101,grupo:"Actinidos"},
   {simbolo:"No",posicion:102,grupo:"Actinidos"},
   {simbolo:"Lr",posicion:103,grupo:"Actinidos"},

   {simbolo:"Al",posicion:13,grupo:"Otros Metales"},
   {simbolo:"Ga",posicion:31,grupo:"Otros Metales"},
   {simbolo:"In",posicion:49,grupo:"Otros Metales"},
   {simbolo:"Tl",posicion:81,grupo:"Otros Metales"},
   {simbolo:"Nh",posicion:113,grupo:"Otros Metales"},
   {simbolo:"Sn",posicion:50,grupo:"Otros Metales"},
   {simbolo:"Pb",posicion:82,grupo:"Otros Metales"},
   {simbolo:"Fl",posicion:114,grupo:"Otros Metales"},
   {simbolo:"Bi",posicion:83,grupo:"Otros Metales"},
   {simbolo:"Mc",posicion:115,grupo:"Otros Metales"},
   {simbolo:"Lv",posicion:116,grupo:"Otros Metales"},

   {simbolo:"B",posicion:5,grupo:"Metaloides"},
   {simbolo:"Si",posicion:14,grupo:"Metaloides"},
   {simbolo:"Ge",posicion:32,grupo:"Metaloides"},
   {simbolo:"As",posicion:33,grupo:"Metaloides"},
   {simbolo:"Sb",posicion:51,grupo:"Metaloides"},
   {simbolo:"Te",posicion:52,grupo:"Metaloides"},
   {simbolo:"Po",posicion:84,grupo:"Metaloides"},

   {simbolo:"H",posicion:1,grupo:"Otros No Metales"},
   {simbolo:"C",posicion:6,grupo:"Otros No Metales"},
   {simbolo:"N",posicion:7,grupo:"Otros No Metales"},
   {simbolo:"O",posicion:8,grupo:"Otros No Metales"},
   {simbolo:"P",posicion:15,grupo:"Otros No Metales"},
   {simbolo:"S",posicion:16,grupo:"Otros No Metales"},
   {simbolo:"SE",posicion:34,grupo:"Otros No Metales"},

   {simbolo:"F",posicion:9,grupo:"Halogenos"},
   {simbolo:"Cl",posicion:17,grupo:"Halogenos"},
   {simbolo:"Br",posicion:35,grupo:"Halogenos"},
   {simbolo:"I",posicion:53,grupo:"Halogenos"},
   {simbolo:"At",posicion:85,grupo:"Halogenos"},
   {simbolo:"Ts",posicion:117,grupo:"Halogenos"},

   {simbolo:"He",posicion:2,grupo:"Gases Nobles"},
   {simbolo:"Ne",posicion:10,grupo:"Gases Nobles"},
   {simbolo:"Ar",posicion:18,grupo:"Gases Nobles"},
   {simbolo:"Kr",posicion:36,grupo:"Gases Nobles"},
   {simbolo:"Xe",posicion:54,grupo:"Gases Nobles"},
   {simbolo:"Rn",posicion:86,grupo:"Gases Nobles"},
   {simbolo:"Og",posicion:118,grupo:"Gases Nobles"},

   {simbolo:"La-Lu",posicion:119,grupo:"Lantanidos"},
   {simbolo:"Ac-Lr",posicion:120,grupo:"Actinidos"}

]

router.get("/",function(request,response,next) {
    response.render("index",{layout:false,elementos:elementos}); 

});


module.exports = router;
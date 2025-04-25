let mes = prompt("digite O mês do seu nascimento(ex: jan)");
let dia = prompt("digite O Dia do seu nascimento(ex: 1-31)");

let Nomedabanda = "";
let NomedoDia = "";

switch (mes) {
  case "jan":
    Nomedabanda = "Capirotos";
    break;
  case "fev":
    Nomedabanda = "Lendarios";
    break;
  case "mar":
    Nomedabanda = "Soldados";
    break;
  case "abr":
    Nomedabanda = "Faroeste";
    break;
  case "mai":
    Nomedabanda = "Imperadores";
    break;
  case "jun":
    Nomedabanda = "Fodões";
    break;
  case "jul":
    Nomedabanda = "Fanfarrões";
    break;
  case "ago":
    Nomedabanda = "Baderneiros";
    break;
  case "set":
    Nomedabanda = "Pertubados";
    break;
  case "out":
    Nomedabanda = "Aliens";
    break;
  case "nov":
    Nomedabanda = "Revoltados";
    break;
  case "dez":
    Nomedabanda = "Gigantes";
    break;
}
switch (dia) {
  case "1":
    NomedoDia = "Do Espaço";
    break;

  case "2":
    NomedoDia = "Do Inferno";
    break;

  case "3":
    NomedoDia = "Da Galáxia";
    break;

  case "4":
    NomedoDia = "Do Fazenda";
    break;

  case "5":
    NomedoDia = "Do Diabo";
    break;

  case "6":
    NomedoDia = "Do Japão";
    break;

  case "7":
    NomedoDia = "Das Trevosas";
    break;

  case "8":
    NomedoDia = "Do Fundão";
    break;

  case "9":
    NomedoDia = "Dos Inluminatis";
    break;

  case "10":
    NomedoDia = "De Copacabana";
    break;

  case "11":
    NomedoDia = "Das Trevas";
    break;

  case "12":
    NomedoDia = "Caboclos";
    break;

  case "13":
    NomedoDia = "Da Muralha";
    break;

  case "14":
    NomedoDia = "Voadores";
    break;

  case "15":
    NomedoDia = "Do Tempo ";
    break;

  case "16":
    NomedoDia = "Da Esperança E A Ultima Que Morre";
    break;

  case "17":
    NomedoDia = "Da Morte";
    break;

  case "18":
    NomedoDia = "Abençoados";
    break;

  case "19":
    NomedoDia = "Infernais";
    break;

  case "20":
    NomedoDia = "Maloqueiros";
    break;

  case "21":
    NomedoDia = "DOs 7 Pecados Capitais";
    break;

  case "22":
    NomedoDia = "Mumificados";
    break;

  case "23":
    NomedoDia = "Amigos Do Chimbinha";
    break;

  case "24":
    NomedoDia = "Posers";
    break;

  case "25":
    NomedoDia = "Do Mosh Pit";
    break;

  case "26":
    NomedoDia = "Valentões";
    break;

  case "27":
    NomedoDia = "Da Ilha Do Demonio";
    break;

  case "28":
    NomedoDia = "Do Segundo Sol";
    break;

  case "29":
    NomedoDia = "Rebeldes Sem Causa";
    break;

  case "30":
    NomedoDia = "Grotescos";
    break;

  case "31":
    NomedoDia = "Do Cemiterio Maldito";
    break;


}

alert(`Mês ${mes} Dia ${dia} sua banda é ${Nomedabanda} ${NomedoDia} :p`);
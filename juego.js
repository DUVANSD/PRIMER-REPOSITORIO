let numMaquina = Math.floor(Math.random ()*(10-1))+1;

console.log (numMaquina);

let vidas=3;

numeroUsuario = parseInt(prompt("ingrese su numero "));
 
while(numMaquina !== numeroUsuario && vidas>1){
 let mensaje = (numMaquina>numeroUsuario) ? 
 'el numero es mayor' : 'el numero es menor ';
  console.log("perdiste" + mensaje);
  numeroUsuario= parseInt(prompt("ingrese su numero"+ mensaje))
  vidas--;
}
if(numeroUsuario===numMaquina){
  console.log("ganaste");
}else{
  console.log("perdiste");
}


function calculator(){
  let procent = parseFloat(document.querySelector('#procent').value);
  let suma = parseFloat(document.querySelector('#suma').value);
  let godini = parseFloat(document.querySelector('#godini').value);
  let meseci= parseFloat(godini)*12;

  let new_suma =suma* Math.pow(1+(procent/100),godini);
  console.log(new_suma.toFixed(2));

  let rezultat=document.createElement('div');
  rezultat.id='rez';
  rezultat.innerText=`${new_suma.toFixed(2)} ќе имаат вредност како ${suma} пред ${godini} години`;
  document.querySelector('.container').appendChild(rezultat);

}

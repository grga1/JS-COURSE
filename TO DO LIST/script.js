function add(){

  let getInput = document.getElementById('in').value;

  if(getInput!==''){

    let lista_li = document.createElement('li');
    lista_li.className = 'ul-li';
    let li_span = document.createElement('span');
    li_span.textContent = getInput;
    let li_button = document.createElement('button');
     li_button.textContent = 'X';
     li_button.className = 'btn';

     li_button.onclick=function () {
       lista_li.remove();
     }

     lista_li.appendChild(li_span);
     lista_li.appendChild(li_button);

     let lista = document.getElementById('lista');
     lista.appendChild(lista_li);
  }
  else
  {
    alert('Write something you cant put nothing in the to do list!');
  }
}
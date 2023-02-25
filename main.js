var chek = {};
var myUl = document.querySelector('.myUl');
var price = {
  'Капучино 300мл': 200,
  'Латте 300мл': 210,
  'Капучино 400мл': 240,
  'Латте 400мл': 250,
  'Флэт 200мл': 190,
  'Американо 200мл': 130,
  'Американо 300мл': 160,
  'Какао 200мл': 150,
  'Какао 300мл': 200,
  'Какао 400мл': 250,
  'Американо 200мл': 130,
  'Американо 300мл': 160,
  'Флэт 200мл': 200,
  'Аква': 90,
  'Кока кола ж/б': 120,
  'Лимонад': 300,
  'Айс-Латте': 280,
  'Эспрессо-Тоник': 280,  
};

//вешаю функцию на все элементы (наименование товара)
var goods = document.getElementsByClassName('goods__item');
window.onload = function(){
  for (let i of goods){
    i.onclick = addElementInCkek;
  }
}

//добавляю товар в обьект chek
function addElementInCkek(){
  let element = this;
  let name = element.innerHTML;   //наименование товара
  console.log(element);
  let quany = 1;    //количество
  if (chek[name] != undefined){
    chek[name] += 1;
  }
  else {
    chek[name] = 1;
  }
  showChek();
  showSumChek(chek);
}
//отображение элементов в чеке
function showChek(){
  myUl.innerHTML = '';
  for (let j in chek){
    let li = document.createElement('li');
    li.classList.add('chek__item');
    let span = document.createElement('span');
    span.classList.add('chek__quan')
    li.innerHTML = j;
    span.innerHTML = chek[j];
    li.appendChild(span);
    myUl.appendChild(li);
  }
}
//отображение итоговой суммы чека
function showSumChek(dict){
  let sum = 0;
  for (let k in dict){
    sum += price[k]*dict[k];
  }
  document.querySelector('.sum-chek').innerHTML = sum;
}


//поиск позиций
function filter(){
  const myInput = document.querySelector('.search');
  let value = myInput.value.toUpperCase();
  const goodsItem = document.getElementsByClassName('goods__item');
  console.log(goodsItem)
  for (let i of goodsItem){
    if (i.innerHTML.toUpperCase().indexOf(value) !== -1){
      i.style.display = '';
    }
    else{
      i.style.display = 'none';
    }
  }
}

$(function(){
  var mixer = mixitup('.goods__inner',{
    animation: {
      duration: 300
    }
  });
});

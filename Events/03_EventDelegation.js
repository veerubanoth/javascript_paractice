document.querySelector("#sports").addEventListener
('click', function (e) {
  console.log(e.target.getAttribute('id') + 'is Clicked');

  const target = e.target;
  if(target.matches('li')){
    target.style.backgroundColor = 'lightgrey';
  }

});

const sports = document.querySelector('#sports');
const newSports = document.createElement('li');

newSports.innerText= 'rugby';
newSports.setAttribute('id', "rugby");

sports.appendChild(newSports);

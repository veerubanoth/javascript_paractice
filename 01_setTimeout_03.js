// If a task involves long running synchronous process,
// it will slow down and block execution.

const showGreetingBtn = document.querySelector('#showGreetingBtn');
const toggleBtn = document.querySelector('#toggleBtn');
const title = document.querySelector('#title');


const showGreetingHandler = function () {
   title.innerText = 'please wait...';
   title.innerText = 'Greetings from a slow function';
};

showGreetingBtn.addEventListener('click', showGreetingHandler);

const toggleLabelHandler = function (evt) {
   evt.target.innerText === 'off' ? (evt.target.innerText = 'on') :
      (evt.target.innerText = 'off');
};
toggleBtn.addEventListener('click', toggleLabelHandler);
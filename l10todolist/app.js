var getform = document.getElementById('form');
var gettextbox = document.getElementById('textbox');
var getul = document.getElementById('list-group');

getform.addEventListener('submit',function(e){
	// console.log('hi');

	addnew();

	e.preventDefault();
});


function addnew(todo){


	var todotext = gettextbox.value
	// console.log(todotext);

	if(todo){
		todotext = todo.text;
	}

	const li = document.createElement('li');
	// li.textContent = todotext;
	li.appendChild(document.createTextNode(todotext));
	// console.log(li);
	getul.appendChild(li);
	gettextbox.value ='';

	updatelocalstorage();
}


function updatelocalstorage(){
	var getalllis = document.querySelectorAll('li');
	// console.log(getalllis);

	const todos = [];
	getalllis.forEach(function(getallli){
		todos.push({
			text : getallli.textContent,
			done : getallli.classList.contains('done')
		});
	})

	// console.log(todos);
	localStorage.setItem('todos',JSON.stringify(todos));
}


var getalstodos = localStorage.getItem('todos');
// console.log(getalllstodos);

if(getalstodos){
	getalstodos.forEach(function(getalstodo){
		// console.log(getalstodo);
		// console.log(getalstodo.text);

		addnew(gatalstodo);
	})
}


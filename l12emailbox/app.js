const getemail = document.getElementById('emails');
const gettextarea = document.querySelector('textarea');
const getbtn = document.querySelector('.btn');
const getemcontainer = document.querySelector('.email-container');


getemail.focus();

getemail.addEventListener('keyup',function(e){
	createemaillist(e.target.value);

	// createemaillist(this);
	// createemaillist(this.value);
})

function createemaillist(inputtext){
	// console.log(inputtext);

	// const eitems = inputtext.split(',');
	// console.log(eitems);


	//remove empty,empty(space)
	// const eitems = inputtext.split(',').filter(rmempty => rmempty.trim() !== '');
	// console.log(eitems);

	// remove space/empty
	const eitems = inputtext.split(',').filter(rempty => rempty.trim() !== '').map(rempty =>rempty.trim());
	// console.log(eitems);

	getemcontainer.innerHTML = '';

	eitems.forEach(function(eitems){
		// console.log(eitem);
		const setnewspan = document.createElement('span');
		setnewspan.textContent = eitems;
		setnewspan.classList.add('email-item');
		// console.log(setnewspan);

		getemcontainer.appendChild(setnewspan);

	})

}

getbtn.addEventListener('click',function(e){
	sendemail();

	e.preventDefault();
});

function sendemail(){
	// console.log('i am working');

	const gettextvalue = gettextarea.value;
	const getaddress = document.querySelectorAll('.email-item');
	// console.log(gettextvalue);
	// console.log(getaddress);

	var persons = [];

	if(getaddress.length > 0 && gettextvalue){
		getaddress.forEach(function(getaddr){

			persons.push({
				email: getaddr.textContent,
				message :gettextvalue
			});

		});

		console.log(persons);
	}else{
		window.alert('Enter Message');
		gettextarea.focus()
	}
}

// 7EB







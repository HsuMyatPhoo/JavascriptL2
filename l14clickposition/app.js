const getmap = document.querySelector('.map-container');

var getsmallcolor = document.getElementById('smallcolor');
var	getmediumcolor= document.getElementById('mediumcolor');
var	getlargecolor = document.getElementById('largecolor');

var circleidx = 0;

getmap.addEventListener('click',function(e){
	// console.log('I am working');
	circleidx++;

	if(e.target.classList.contains('map-container')){
		const cx = e.clientX;
		const cy = e.clientY;
		// console.log(cx,cy);

		const mapleft = e.target.offsetLeft;
		const maptop = e.target.offsetTop
		// console.log(mapleft,maptop);

		const curx = cx-mapleft;
		const cury = cy-maptop;
		// console.log(curx,cury);

		const circle = document.createElement('span');
		circle.id = circleidx;
		circle.classList.add('circle');
		// console.log(circle);

		circle.style.left = curx+'px';
		circle.style.top = cury+'px';
		e.target.appendChild(circle);


		// circle.style.setProperty('--small-color','darkblue');
		// cirlce.style.setProperty('--medium-color','steelblue');
		// circle.style.setProperty('--large-color','skyblue'); 

		// console.log(getsmallcolor.value);
		// console.log(getsmallcolor.selectedIndex);

		if(getsmallcolor.selectedIndex >0 && getmediumcolor.selectedIndex > 0 && getlargecolor.selectedIndex >0){
			circle.style.setProperty('--small-color',getsmallcolor.value);
			cirlce.style.setProperty('--medium-color',getmediumcolor.value);
			circle.style.setProperty('--large-color',getlargecolor.value); 
		}

	}


	removepointer(e);

	
});



function removepointer(e){

	// console.log(e.target.id);

	if(e.target.id > 0){
		e.target.remove();
	}
}



// setProperty
// selectedIndex

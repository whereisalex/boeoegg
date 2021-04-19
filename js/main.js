

const checkFace = () => {
	const fire = document.querySelectorAll('.fire');
	if(fire.length == 5){
		const mouth = document.querySelectorAll('.mouth')[0];
		mouth.classList.add('mouth-open');
		mouth.classList.remove('mouth');
	}
}


const addFire = (event) => {
	const fire = document.createElement('div');
	const container = document.getElementById('fire');
	const size = getRandomSize();
	fire.setAttribute('style', 'top:' + event.pageY + 'px; left:'+ event.pageX+ 'px;width:'+ size+ 'px;height:'+ size+ 'px;')
	fire.addEventListener('click', addFire);
	fire.classList.add('fire');
	container.appendChild(fire);
	checkFace();
}



const getRandomSize = () => {
	return 35 + Math.floor(Math.random() * 40)
}

const init = () => {
	let boeoegg = document.getElementById('boegg')
	let pedastal = document.getElementById('pedastal');
	boeoegg.addEventListener('click', addFire);
	pedastal.addEventListener('click', addFire);
}

window.addEventListener('load', init)
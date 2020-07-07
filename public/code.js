function randomSlide(swiper){
	let sliderSize = swiper.slides.length;
	let slide= Math.floor((Math.random() * sliderSize));
	swiper.slideToLoop(slide, 1000,true);
	return slide;
}

function setSlide(swiper,label){
	if (swiper && label){
	console.log(swiper.slides);
	let indexFound = 0;
	swiper.slides.forEach(el=>{; 
	
		let elLabel = el.innerText;
		let index = el.getAttribute("data-swiper-slide-index");
		
		if (elLabel == label.toUpperCase()){
			indexFound = parseInt(index)+1;
			swiper.slideTo(indexFound,500,true);
		}			
	});
	
	}
	

	
}

function setInitSlides(swipers){
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	if (urlParams != null){
		let param = urlParams.get('p');
		if (param){
			let initString = param.split('-');
			setSlide(swipers[0],initString[0]);
			setSlide(swipers[1],initString[1]);
			setSlide(swipers[2],initString[2]);
		}
	}
}
function getActiveLabel(swiper){
	let indx = swiper.activeIndex;
	let label = swiper.slides[indx].innerText.toLowerCase();
	return label;
}

function initMachine(){
	let swipers = new Swiper('.swiper-container',{
	direction:'vertical',
	freeMode:true,
	freeModeMomentum:true,
	freeModeMomentumBounce:true,
	freeModeMomentumBounceRatio:2,
	freeModeSticky:true,
	loop:true
	});
	
	
	setInitSlides(swipers);
	
	document.getElementById("generate-btn").addEventListener("click", function(){
		
		randomSlide(swipers[0]);
		randomSlide(swipers[1]);
		randomSlide(swipers[2]);
	});
}	

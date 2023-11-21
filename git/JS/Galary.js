let offset=0;
const sliderline = document.querySelector('.sliderliner');
document.querySelector('.slidernext').addEventListener('click',function(){
	offset=offset+256;
	if(offset>768){offset=0;}
	sliderline.style.left=offset+'px';
});
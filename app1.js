const p1Button=document.querySelector('#p1Button');
const p2Button=document.querySelector('#p2Button');
const p1Display=document.querySelector('#p1Display');
const p2Display=document.querySelector('#p2Display');
const reset=document.querySelector('#reset');
const winningscoreselect=document.querySelector('#playto');

let p1score=0;
let p2score=0;
let winningscore=5;
let isGameOver=false;
p1Button.addEventListener('click',function() {
	if (!isGameOver) {
		p1score+=1;
		if(p1score===winningscore){
			isGameOver=true;
			p1Display.classList.add('has-text-success');
			p2Display.classList.add('has-text-danger');
			p1Button.disabled=true;
			p2Button.disabled=true;
		}
	p1Display.textContent=p1score;
	}

})
p2Button.addEventListener('click',function() {
	if (!isGameOver) {
		p2score+=1;
	if (p2score===winningscore) {
		isGameOver=true;
		p2Display.classList.add('has-text-success');
		p1Display.classList.add('has-text-danger');
		p1Button.disabled=true;
		p2Button.disabled=true;
		}
	p2Display.textContent=p2score;
}
})

winningscoreselect.addEventListener('change',function() {
	winningscore=parseInt(this.value);
	resete();
})
reset.addEventListener('click',resete)
function resete() {
	isGameOver=false;
	p1score=0;
	p2score=0;
	p1Display.textContent=0;
	p2Display.textContent=0;
	p1Display.classList.remove('has-text-success','has-text-danger');
	p2Display.classList.remove('has-text-success','has-text-danger');
	p1Button.disabled=false;
	p2Button.disabled=false;
}
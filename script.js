const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let play = false;
let newWords = "";
let randWords = "";
let sWords = ['python','javascript','java','android','linux','scala','html','julia','mongodb','postgresql','kotlin'];

const createNewWords = () => {
	let random = Math.floor(Math.random()*sWords.length);
	let word = sWords[random];
	return word;
}

const scramble = (arr) => {
	for(let i=arr.length-1;i>=0;i--){
		let tmp = arr[i];
		let j = Math.floor(Math.random()*(i+1));
		arr[i] = arr[j];
		arr[j] = tmp;
	}
	return arr;
}

btn.addEventListener('click', () => {
	if(!play){
		play = true;
		btn.innerHTML = "Guess";
		guess.classList.toggle('hidden');
		guess.focus();
		newWords = createNewWords();
		randWords = scramble(newWords.split("")).join("");
		//console.log(randWords.join(""));
		msg.innerHTML =`Guess word: ${randWords}`;
	}else{
		let answer = guess.value;
		if(newWords === answer){
			play = false;
			msg.innerHTML = "<span class='correct'>✔️ Correct !!!</span>";
			btn.innerHTML = "New Word >>>";
			guess.classList.toggle('hidden');
			guess.value = "";
		}else{
			msg.innerHTML = `<span class='incorrect'>❌ Incorrect!!!</span> try again: ${randWords}`;
			guess.value = "";
			guess.focus();
		}
	}
})
/* Get the elements */
const player = document.querySelector('.player'),
	video = player.querySelector('.viewer'),
	progress = player.querySelector('.progress'),
	progressBar = player.querySelector('.progress__filled'),
	toggle = player.querySelector('.toggle'),
	skipButtons = player.querySelectorAll('[data-skip]'),
	ranges = player.querySelectorAll('.player__slider');

/* Build our functions */
function togglePlay() {
	const method = video.paused ? 'play' : 'pause';
	video[method]();
}

function updateButton() {
	const icon = this.paused ? '►' : '❚ ❚'
	toggle.textContent = icon;
}

function skip() {
	console.log(this.dataset.skip);
	video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
	video[this.name] = this.value;
	console.log(this.name, this.value)
}
/* Hook up the event listeners */

video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

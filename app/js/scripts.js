/* Get the elements */
const player = document.querySelector('.player'),
	video = player.querySelector('.viewer'),
	progress = player.querySelector('.progress'),
	progressBar = player.querySelector('.progress__filled'),
	toggle = player.querySelector('.toggle'),
	skitpButtons = player.querySelectorAll('[data-skip]'),
	ranges = player.querySelectorAll('.player__slider');

/* Build our functions */
function togglePlay() {
	if(video.paused) {
		video.play();
	} else {
		video.pause();
	}
}

function updateButton() {
	console.log('Update the button');
}
/* Hook up the event listeners */

video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton)
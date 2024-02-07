window.dialogues = [...document.querySelectorAll('.dialogues')];


document.body.style.background = window.dialogues[0].getAttribute('data-bg');

window.addEventListener('scroll', onScroll);
onScroll();

function onScroll() {
	const dialogues = window.dialogues
		.map(dialogues => {
			const el = dialogues;
			const rect = el.getBoundingClientRect();
			return { el, rect };
		})
		.find(dialogues => dialogues.rect.bottom >= (window.innerHeight * 0.5));
	if (dialogues != undefined)
		document.body.style.background = dialogues.el.getAttribute('data-bg');
}
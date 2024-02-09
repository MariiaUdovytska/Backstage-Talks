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

document.addEventListener("click", function (event) {
	let target = event.target;

	if (target.tagName === "A" && target.hasAttribute("href") && target.hasAttribute("nav-dialogue")) {
		event.preventDefault();
		let issues = document.querySelectorAll('[nav-dialogue]');
		for (let i = 0; i < issues.length; i++) {
			issues[i].style.fontWeight = 'normal';
		}
		target.style.fontWeight = 'bold';
		let id = target.getAttribute("href"),
			destination = document.querySelector(id);

		if (destination) {
			destination.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		}
	}
});
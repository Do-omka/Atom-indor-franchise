function findAncestor (el, cls) {
	while ((el = el.parentElement) && !el.classList.contains(cls));
	return el
}

document.addEventListener('DOMContentLoaded', (e)=> {
	
	// show more partners' feedback
	document.querySelector('.partners_feedback .show_more').addEventListener('click', (e)=> {
		document.querySelector('.partners_feedback').classList.add('active');
	})
	
	// recall popup
	let recall = document.querySelectorAll('.recall')
	for (let i = 0; i < recall.length; i++) {
		recall[i].addEventListener('click', (e)=> {
			document.getElementById('recall_popup').classList.add('active')
		})
	}
	
// close buttons
	let close = document.querySelectorAll('.close')
	for (let i = 0; i < close.length; i++) {
		close[i].addEventListener('click', (e)=> {
			let pop = findAncestor(close[i], 'popup')
			pop.classList.remove('active')
		})
	}
	
	// close popup on click outside
	let popup_close = document.querySelectorAll('.popup')
	for (let i = 0; i < popup_close.length; i++) {
		popup_close[i].addEventListener('click', (e)=> {
			popup_close[i].classList.remove('active')
		})
	}
	
	let popup_form = document.querySelectorAll('.popup .form')
	for (let i = 0; i < popup_form.length; i++) {
		popup_form[i].addEventListener('click', (e)=> {
			e.stopPropagation()
		})
	}
	
})

function findAncestor (el, cls) {
	while ((el = el.parentElement) && !el.classList.contains(cls));
	return el
}

window.addEventListener('resize', (e)=> {
	
	// fixed header margin size change
	document.querySelector('body').style.paddingTop = getComputedStyle(document.querySelector('body > header')).getPropertyValue('height')
	
})

document.addEventListener('DOMContentLoaded', (e)=> {
	
	// fixed header
	document.querySelector('body').style.paddingTop = getComputedStyle(document.querySelector('body > header')).getPropertyValue('height')
	
	document.querySelector('body > header').style.position = 'fixed'
	document.querySelector('body > header').style.zIndex = '2'
	document.querySelector('body > header').style.top = '0'
	document.querySelector('body > header').style.width = '100%'
	
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

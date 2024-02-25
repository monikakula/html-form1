const btnSubmit = document.getElementById('btn-submit')
const inputs = Array.from(document.querySelectorAll('input'))
const feedbacks = Array.from(document.querySelectorAll('.feedback'))
var email = /^[^@]+@[^@]+\.[^@]+$/

function checkInputs() {
	inputs.forEach((input, i) => {
		if (i !== 2) {
			if (input.value !== '') {
				input.classList.add('valid')
				input.classList.remove('invalid')
				input.classList.remove('invalid')
				input.nextElementSibling.classList.add('hide')
			} else {
				input.classList.add('invalid')
				input.classList.remove('valid')
				input.nextElementSibling.classList.remove('hide')
			}
		}
		if (i == 2) {
			if (email.test(inputs[2].value)) {
				input.classList.add('valid')
				input.classList.remove('invalid')
				input.nextElementSibling.classList.add('hide')
			} else {
				input.classList.add('invalid')
				input.classList.remove('valid')
				input.nextElementSibling.classList.remove('hide')
			}
		}
	})
}
function checkValid() {
	return inputs.every(input => !input.classList.contains('invalid'))
}
document.querySelector('form').addEventListener('submit', e => e.preventDefault())

btnSubmit.addEventListener('click', () => {
	checkInputs()
	if (checkValid()) {
		
		inputs.forEach(input => (input.value = ''))
		feedbacks.forEach(f => f.classList.add('hide'))
        alert('Thank you for filling our form')
	} else 
        alert('Please enter a valid input!');
		// Swal.fire({
		// 	title: 'Please enter a valid input!',
		// 	icon: 'warning',
});

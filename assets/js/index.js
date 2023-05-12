const ratingState = document.querySelector('.rating-state')
const secondState = document.querySelector('.thank-you-state')
const defaultRadio = document.querySelector('.default')
const radioNumber = document.querySelectorAll('.number')
const submit = document.querySelector('.submit')
const result = document.querySelector('span')
let selectedRadio;

submit.addEventListener('click', () => {
    if (!selectedRadio) {
        alert('Please select a rating option.')
    } else {
        ratingState.classList.add('rating-hidden')
        secondState.classList.remove('hid')
    }
})

for (let radio of radioNumber) {
    radio.addEventListener('click', (e) => {
        for (let selected of radioNumber) {
            selected.classList.remove('selected')
        }
        evt = e.target
        evt.classList.toggle('selected')
        defaultRadio.classList.remove('default')
        selectedRadio = evt.innerText
        result.innerText = selectedRadio
    })
}




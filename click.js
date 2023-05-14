const percentageButtons = document.querySelectorAll('.percentage')

export let clickedButtonValue


percentageButtons.forEach( clickedButton => {
    clickedButton.addEventListener('click', function() {
        percentageButtons.forEach(notClickedButtons => {
            notClickedButtons.classList.remove('percentage-selected')
            notClickedButtons.classList.add('percentage-unselected')
        })
            clickedButton.classList.remove('percentage-unselected')
            clickedButton.classList.add('percentage-selected')
            clickedButtonValue = document.querySelector('[valor]').getAttribute('valor')
    })
})
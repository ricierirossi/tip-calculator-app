let bill = 0
let people = 0
let custom = 0
let tipButton = 0
let tipAmount = 0
let total= 0
let tip
//

const showValues = () => {
    document.getElementById('total-amount').innerHTML = `$ ${tipAmount.toFixed(2)}`
    document.getElementById('total-person').innerHTML = `$ ${total.toFixed(2)}`
}
document.addEventListener("DOMContentLoaded", showValues)
//

const calculus = () => {

    bill = document.querySelector('input[name=bill-value]').value
    people = document.querySelector('input[name=number-of-people]').value
    custom = document.querySelector('input[name=custom-tip]').value

    if(document.querySelector('input[name=custom-tip]').value == '') {
        tip = tipButton
    } else {
        tip = custom
        const buttons = document.querySelectorAll('.percentage')
        Array.from(buttons).forEach(button => {
            button.classList.add('percentage-unselected')
        }
        )
    }

    tipAmount = ((bill * tip) / people) / 100
    total = (bill / people) + tipAmount

    showValues()

}
//

const resetCustom = () => {

    custom = 0
    document.querySelector('input[name=custom-tip]').value = ''

}
//

const myInputs = document.querySelectorAll('input')
Array.from(myInputs).forEach(myInput => {
    myInput.addEventListener('change', calculus)
})
//

const myButtons = document.querySelectorAll('.percentage')
Array.from(myButtons).forEach(myButton => {
    myButton.addEventListener('click', resetCustom)
    myButton.addEventListener('click', () => tipButton = myButton.getAttribute('perc'))

    myButtons.forEach(notClickedButtons => {
        notClickedButtons.classList.remove('percentage-selected')
        notClickedButtons.classList.add('percentage-unselected')
    })
     
    myButtons.forEach(clickedButton => {
        clickedButton.addEventListener('click', function() {
            myButtons.forEach(notClickedButtons => {
                notClickedButtons.classList.remove('percentage-selected')
                notClickedButtons.classList.add('percentage-unselected')
            })
                clickedButton.classList.remove('percentage-unselected')
                clickedButton.classList.add('percentage-selected')
        })
    })

})
//

const clear = document.querySelector('.reset')
clear.addEventListener('click', () => {

    bill = 0
    people = 0
    custom = 0
    tipButton = 0
    document.querySelector('input[name=bill-value]').value = ''
    document.querySelector('input[name=number-of-people]').value = ''
    document.querySelector('input[name=custom-tip]').value = ''

    const buttons = document.querySelectorAll('.percentage')
        Array.from(buttons).forEach(button => {
            button.classList.add('percentage-unselected')
        }
        )
    

})
//




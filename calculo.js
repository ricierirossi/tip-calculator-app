let bill = 0
let people = 0
let custom = ''
let tipButton = 0
let tipAmount = 0
let total= 0
let tip = 0
//

const showValues = () => {
    document.getElementById('total-amount').innerHTML = `$ ${tipAmount.toFixed(2)}`
    document.getElementById('total-person').innerHTML = `$ ${total.toFixed(2)}`
}
document.addEventListener("DOMContentLoaded", showValues)
//

const calculus = () => {

    bill = parseFloat(document.querySelector('input[name=bill-value]').value)
    people = parseFloat(document.querySelector('input[name=number-of-people]').value)
    custom = parseFloat(document.querySelector('input[name=custom-tip]').value)

    if(document.querySelector('input[name=custom-tip]').value === '') {
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


    
    if(isNaN(people) || people == 0) {
        document.querySelector('.people-icon').style.border = "solid 1px red"
        document.querySelector('.people-icon').style.outlineColor = "red"
        document.getElementById('cant-be-zero').innerHTML = "Can't be zero"
        document.getElementById('cant-be-zero').style.padding = "0 0 0 40px"
        document.getElementById('cant-be-zero').style.color = "red"
    } else {
        document.querySelector('.people-icon').style.border = "none"
        document.querySelector('.people-icon').style.outlineColor = "var(--strong-cyan)"
        document.getElementById('cant-be-zero').innerHTML = ""
    }
    
    if(isNaN(tipAmount) || isNaN(total)) {
        tipAmount = Infinity
        total = Infinity
    }
    
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
    myButton.addEventListener('click', () => {
        tipButton = parseFloat(myButton.getAttribute('perc'))
        tip = tipButton
        calculus()
    })
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
    tipAmount = 0
    total = 0
    document.querySelector('input[name=bill-value]').value = ''
    document.querySelector('input[name=number-of-people]').value = ''
    document.querySelector('input[name=custom-tip]').value = ''

    const buttons = document.querySelectorAll('.percentage')
        Array.from(buttons).forEach(button => {
            button.classList.add('percentage-unselected')
        }
        )

    document.getElementById('total-amount').innerHTML = `$ ${tipAmount.toFixed(2)}`
    document.getElementById('total-person').innerHTML = `$ ${total.toFixed(2)}`
    
})
//






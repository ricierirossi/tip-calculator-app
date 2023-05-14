let tipAmount
let total 
let bill 
let customTip
let tip 
let numberOfPeople
let clickedButtonValue

// tipAmount = (bill * tip) / numberOfPeople
// total = (bill / numberOfPeople) + tipAmount

// Tip selection
document.addEventListener("DOMContentLoaded", changing);
function changing () {

    const percentageButtons = document.querySelectorAll('.percentage')

    // let clickedButtonValue

    percentageButtons.forEach( clickedButton => {
        clickedButton.addEventListener('click', function() {
            percentageButtons.forEach(notClickedButtons => {    
                notClickedButtons.classList.remove('percentage-selected')
                notClickedButtons.classList.add('percentage-unselected')
            })
            clickedButton.classList.remove('percentage-unselected')
            clickedButton.classList.add('percentage-selected')
            clickedButtonValue = clickedButton.getAttribute('perc')
            tip = clickedButtonValue            
        })
    })
}

// Calculus
document.addEventListener("DOMContentLoaded", calculus);

function calculus() {
    const myInputs = document.querySelectorAll('input');
    myInputs.forEach(myInput => 
        myInput.addEventListener('change', () => {
            
            bill = document.querySelector('input[name="bill-value"]').value
            numberOfPeople = document.querySelector('input[name="number-of-people"]').value
            customTip = document.querySelector('input[name="custom-tip"]').value
    
            if(customTip != '') {
                tip = customTip
                changing()

            }
    
            tipAmount = (bill * tip) / numberOfPeople / 100
            total = (bill / numberOfPeople) + tipAmount
    
            document.getElementById('total-amount').innerHTML = `$ ${tipAmount.toFixed(2)}`
            document.getElementById('total-person').innerHTML = `$ ${total.toFixed(2)}`
          })
        )
}


// Reset
function reset() {
    bill = 0
    tip = 0
    numberOfPeople = 0
    customTip = document.querySelector('input[name="custom-tip"]').value = ''
}

// Reset Custom
function resetCustom() {
    customTip = document.querySelector('input[name="custom-tip"]').value = ''
    changing()
}
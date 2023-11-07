class Calculator {

}
const cal = new Calculator()

const $previousPreview = document.querySelector('[data-previous-preview]')
const $currentPreview = document.querySelector('[data-current-preview]')


const $plus = document.querySelector('[data-btn-plus]')
const $minus = document.querySelector('[data-btn-minus]')
const $multiply = document.querySelector('[data-btn-multiply]')
const $divide = document.querySelector('[data-btn-divide]')

const $numbers = document.querySelectorAll('[data-btn-number]')
const $operations = document.querySelectorAll('[data-btn-operation]')

$numbers.forEach(($number) => {
    $number.addEventListener("click", (e) => {
        console.log(e.target.textContent)
    })
})

$operations.forEach(($operation) => {
    $operation.addEventListener("click", (e) => {
        console.log(e.target.textContent)
    })
})
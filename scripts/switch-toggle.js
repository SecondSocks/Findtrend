const input = document.querySelector('input[type="checkbox"]')
const priceMonthly = document.querySelector('.price-monthly')
const priceYearly = document.querySelector('.price-yearly')

const period = document.querySelectorAll('.time')
const prices = document.querySelectorAll('.cost')

const changeCardTextTo = function () {
    const costs = ['$80', '$200', '$460']

    for (let i = 0; i < period.length; i++) {
        period[i].textContent = '/Year'
        prices[i].textContent = costs[i]
    }
}

const changeCardTextBack = function () {
    const costs = ['$8', '$20', '$48']

    for (let i = 0; i < period.length; i++) {
        period[i].textContent = '/Month'
        prices[i].textContent = costs[i]
    }
}

const changePeriodColorTo = function() {
    priceMonthly.style.color = 'rgb(173, 173, 173)'
	priceYearly.style.color = 'rgb(245, 245, 245)'
    priceYearly.style.transition = 'color 1s ease'
    priceMonthly.style.transition = 'color 1s ease'
}

const changePeriodColorBack = function() {
    priceYearly.style.color = 'rgb(173, 173, 173)'
    priceYearly.style.transition = 'color 1s ease'
    priceMonthly.style.color = 'rgb(245, 245, 245)'
    priceMonthly.style.transition = 'color 1s ease'
}

input.addEventListener('click', function () {
	if (input.checked) {
		changePeriodColorTo()
        changeCardTextTo()
	} else {
        changePeriodColorBack()
        changeCardTextBack()
    }
})

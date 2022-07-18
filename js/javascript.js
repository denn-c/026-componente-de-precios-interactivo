const $slider = document.querySelector('.slider__bar')
const $pagePageviews = document.querySelector('.header__pageviews')
const $worth = document.querySelector('.header__worth')
const $quotient = document.querySelector('.header__quotient')
const $checkbox = document.querySelector('.checkbox__checkbox')

const $root = document.documentElement

$root.style.setProperty('--slider', `${$slider.value}%`)
$slider.addEventListener('mousedown', () => $slider.classList.add('slider__bar--active'))
$slider.addEventListener('mouseup', () => $slider.classList.remove('slider__bar--active'))

let check = false;

$slider.addEventListener('input', () => {
    $root.style.setProperty('--slider', `${$slider.value}%`)
    change()
})
$checkbox.addEventListener('input', e => {
    if (e.target.checked) {
        $quotient.textContent = '/año'
        check = true
    }
    else {
        $quotient.textContent = '/mes'
        check = false
    }
    change()
})
const set = (views, value) => {
    $pagePageviews.textContent = `${views} paginas vistas`
    if (check) {
        $worth.textContent = `$${value * 9}`
    } else {
        $worth.textContent = `$${value}`
    }
}
const change = () => {
    switch (parseInt($slider.value)) {
        case 0: set(10, 8)
            break;
        case 25: set(50, 12)
            break;
        case 50: set(100, 16)
            break;
        case 75: set(500, 24)
            break;
        case 100: set('1m', 36)
            break;
        default: set(100, 16)
            break;
    }
}

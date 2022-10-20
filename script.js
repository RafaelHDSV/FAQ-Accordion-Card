let faqContainer = document.querySelectorAll('.faq')
let description = document.querySelectorAll('.faq p')
let arrow = document.querySelectorAll('#arrow')
let answer = document.querySelectorAll('#answer')

for (let index = 0; index < faqContainer.length; index++) {
    faqContainer[index].addEventListener('click', () => {
        if (arrow[index].classList.contains('invert')) {
            arrow[index].classList.remove('invert')
            description[index].classList.add('hide')
            answer[index].classList.remove('bold')
        } else {
            arrow[index].classList.add('invert')
            description[index].classList.remove('hide')
            answer[index].classList.add('bold')
        }
    })
}
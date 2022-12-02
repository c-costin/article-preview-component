const btnShare = document.querySelector('.card__btnShare')
const cardSocials = document.querySelector('.card__socials')

btnShare.addEventListener('click', () => {
    cardSocials.classList.toggle('flex')
    btnShare.classList.toggle('active')
})
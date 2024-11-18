const button = document.querySelector('.text2');
const targetSection = document.querySelector('.katalog');
button.addEventListener('click', () => {
    targetSection.scrollIntoView({ behavior: 'smooth' });
});

const button2 = document.querySelector('.text13');
button2.addEventListener('click', () => {
    targetSection.scrollIntoView({ behavior: 'smooth' });
});

const button3 = document.querySelector('.text1');
const targetSection3 = document.querySelector('.text1');
button3.addEventListener('click', () => {
    targetSection3.scrollIntoView({ behavior: 'smooth' });
});

const button4 = document.querySelector('.text12');
button4.addEventListener('click', () => {
    targetSection3.scrollIntoView({ behavior: 'smooth' });
});

const button5 = document.querySelector('.text4');
const targetSection5 = document.querySelector('.text17');
button5.addEventListener('click', () => {
    targetSection5.scrollIntoView({ behavior: 'smooth' });
});
const button6 = document.querySelector('.text15');
button6.addEventListener('click', () => {
    targetSection5.scrollIntoView({ behavior: 'smooth' });
});

const button7 = document.querySelector('.text11');
button7.addEventListener('click', () => {
    window.location.href = 'https://www.google.com/maps/place/Фото+Принт/@61.2510087,73.4452579,19.5z/data=!4m6!3m5!1s0x437399e470290c15:0x79a54d854e301388!8m2!3d61.2509645!4d73.4456473!16s%2Fg%2F11vf0g1w6p?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D';
});

const button8 = document.querySelector('.text17');
const textToCopy = document.querySelector('.text17').innerText;
button8.addEventListener('click', () => {
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            alert('Текст скопирован в буфер обмена');
        })
        .catch(err => {
            console.error('Ошибка при копировании текста: ', err);
        });
});

document.querySelector('.text17').addEventListener('click', function() {
    const email = 'oleinikov_slava@mail.ru'; 
    const mailtoLink = `mailto:${email}`;
    window.location.href = mailtoLink;
});

const button9 = document.querySelector('.text16');
const textToCopy1 = document.querySelector('.text16').innerText;
button9.addEventListener('click', () => {
    navigator.clipboard.writeText(textToCopy1)
        .then(() => {
            alert('Текст скопирован в буфер обмена');
        })
        .catch(err => {
            console.error('Ошибка при копировании текста: ', err);
        });
});

const button10 = document.querySelector('.text5');
const targetSection6 = document.querySelector('.perehod');
button10.addEventListener('click', () => {
    targetSection6.scrollIntoView({ behavior: 'smooth' });
});

let currentIndex = 0;
const totalCards = 8; // Общее количество карточек
const visibleCards = 4; // Количество видимых карточек

const cards = document.querySelectorAll('.card');

function updateCards() {
    cards.forEach(card => card.classList.add('hidden'));
    for (let i = 0; i < visibleCards; i++) {
        const index = (currentIndex + i) % totalCards;
        cards[index].classList.remove('hidden');
    }
}
document.querySelector('.strelka1').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalCards; // Переход к следующему индексу
    updateCards();
});
document.querySelector('.strelka2').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards; // Переход к предыдущему индексу
    updateCards();
});
updateCards();
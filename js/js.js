//  const weddingDate = new Date(2024, 5, 2, 12, 0, 0)); pordznakan

const eventDate = new Date(2024, 7, 11, 12, 0, 0);
let translationActive = true;

function updateCountdown() {
    const now = new Date();
    const timeDifference = eventDate - now;

    if (timeDifference <= 0) {
        document.getElementById("startedText").style.display = "block";
        document.getElementById("table").style.display = "none";
        translationActive = false; 
    } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;

        

        if (translationActive) {
            const labelsToTranslate = document.getElementsByClassName("translate-label");

            for (let label of labelsToTranslate) {
                if (label.id === "daysLabel") {
                    label.textContent = "дней";
                } else if (label.id === "hoursLabel") {
                    label.textContent = "часов";
                } else if (label.id === "minutesLabel") {
                    label.textContent = "минут";
                } else if (label.id === "secondsLabel") {
                    label.textContent = "секунд";
                }
            }
        }
    }
}



updateCountdown();

const timer = setInterval(updateCountdown, 1000);


function toggleAudio() {
const audio = document.getElementById('backgroundMusic');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');

if (audio.paused) {
    audio.play();
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'inline-block';
} else {
    audio.pause();
    playIcon.style.display = 'inline-block';
    pauseIcon.style.display = 'none';
}
}

function switchToRussian() {
document.getElementById("daysLabel").textContent = "Дней";
document.getElementById("hoursLabel").textContent = "Часов";
document.getElementById("minutesLabel").textContent = "Минут";
document.getElementById("secondsLabel").textContent = "Секунд";

document.getElementById("invite").textContent = "Сердечно приглашаем вас отметить нашу свадьбу вместе";
let inviteElement = document.getElementById("invite");
    inviteElement.style.fontSize = "16px";
// document.getElementById("leak").textContent = "На берегу Севана Vik-Son";
// document.getElementById("zags").textContent = "Регистрация в ЗАГСе";
// document.getElementById("jam1").textContent = "Время: 13:30";
document.getElementById("jam2").textContent = "Время: 15:30";
document.getElementById("jam3").textContent = "Время: 17:00";
// document.getElementById("map1").textContent = "Посмотреть на карте";
document.getElementById("map2").textContent = "Посмотреть на карте";
document.getElementById("map3").textContent = "Посмотреть на карте";
document.getElementById("psak").textContent = "Венчание ";
document.getElementById("ekex").textContent = "Монастырь Айраванк";
document.getElementById("srah").textContent = "Ресторан Darling hall";
document.getElementById("tjik").textContent = "Свадебная вечеринка";
document.getElementById("startedText").textContent = "Хорошего вам дня! ";
document.getElementById("confirm").textContent = "Пожалуйста, подтвердите ваше участие ";
document.getElementById("yees").textContent = " Конечно, я с радостью присоединюсь";
document.getElementById("noo").textContent = " К сожалению,я не могу прийти";
document.getElementById("conf").textContent = " Подтверждать";

}

function switchToArmenian() {
document.getElementById("daysLabel").textContent = "Օր";
document.getElementById("hoursLabel").textContent = "Ժամ";
document.getElementById("minutesLabel").textContent = "Րոպե";
document.getElementById("secondsLabel").textContent = "Վայրկյան";

document.getElementById("invite").textContent = "Սիրով հրավիրում ենք միասին նշելու մեր հարսանիքը";
let inviteElement = document.getElementById("invite");
    inviteElement.style.fontSize = "21px";
// document.getElementById("leak").textContent = "Սևանի ափին Vik-Son";
// document.getElementById("zags").textContent = "Զագսի արարողություն";
// document.getElementById("jam1").textContent = "ժամը՝ 13:30";
document.getElementById("jam2").textContent = "ժամը՝ 15:30";
document.getElementById("jam3").textContent = "ժամը՝ 17:00";
// document.getElementById("map1").textContent = "Տեսնել քարտեզում ";
document.getElementById("map2").textContent = "Տեսնել քարտեզում ";
document.getElementById("map3").textContent = "Տեսնել քարտեզում ";
document.getElementById("psak").textContent = "Պսակադրություն";
document.getElementById("ekex").textContent = "Հայրիվանքի եկեղեցի";
document.getElementById("tjik").textContent = "Հարսանեկան խնջույք";
document.getElementById("srah").textContent = "Darling hall ռեստորան";
document.getElementById("startedText").textContent = "Բարի ժամանց!";
document.getElementById("confirm").textContent = "Խնդրում ենք հաստատել ձեր ներկայությունը ";
document.getElementById("yees").textContent = " Իհարկե սիրով կմիանամ";
document.getElementById("noo").textContent = " Ցավոք, չեմ կարող գալ";
document.getElementById("conf").textContent = " Հաստատել";


}

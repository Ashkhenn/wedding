//  const weddingDate = new Date(2024, 3, 14, 17, 0, 0)); pordznakan
//  const weddingDate = new Date(2024, 5, 2, 12, 0, 0)); iskakan or 


//ashxatox tarberak
// const eventDate = new Date(2024, 5, 2, 12, 0, 0);

// function updateCountdown() {
//     const now = new Date();
//     const timeDifference = eventDate - now;

//     if (timeDifference <= 0) {
//         document.getElementById("countdown").innerHTML = "Բարի ժամանց !";
//         clearInterval(timer); 
//     } else {
//         const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

//         document.getElementById("days").textContent = days;
//         document.getElementById("hours").textContent = hours;
//         document.getElementById("minutes").textContent = minutes;
//         document.getElementById("seconds").textContent = seconds;

//         toggleDisplay("days", days);
//         toggleDisplay("hours", hours);
//         // toggleDisplay("minutes", minutes);
//         // toggleDisplay("seconds", seconds);
//     }
// }

// function toggleDisplay(elementId, value) {
//     const element = document.getElementById(elementId);
//     const label = document.getElementById(elementId + "Label");

//     if (value <= 0) {
//         element.style.display = "none";
//         label.style.display = "none";
//     } 
//     // else {
//     //     element.style.display = "inline";
//     //     label.style.display = "inline";
//     // }
// }

// updateCountdown();
// const timer = setInterval(updateCountdown, 1000);
//minchev stex hin ashxatox tarberakna




//NOR PORDZELU HAMAR TARBERAK
const eventDate = new Date(2024, 5, 2, 12, 0, 0);
let translationActive = true;

function updateCountdown() {
    const now = new Date();
    const timeDifference = eventDate - now;

    if (timeDifference <= 0) {
        // Время истекло
        // document.getElementById("startedText").textContent = "Уже началось";
        document.getElementById("startedText").style.display = "block";
        document.getElementById("table").style.display = "none";
        translationActive = false; // Останавливаем перевод
    } else {
        // Время не истекло, обновляем отсчет
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;

        

        // Проверяем, активен ли перевод
        if (translationActive) {
            // Получаем все элементы с определенным классом и обновляем их текст
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



// Вызываем функцию для первоначального отображения счетчика
updateCountdown();

// Запускаем таймер для обновления каждую секунду
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
        document.getElementById("daysLabel").textContent = "дней";
        document.getElementById("hoursLabel").textContent = "часов";
        document.getElementById("minutesLabel").textContent = "минут";
        document.getElementById("secondsLabel").textContent = "секунд";

        // document.getElementById("countdownText").textContent = "До мероприятия осталось:";
        document.getElementById("invite").textContent = "Сердечно приглашаем вас отметить нашу свадьбу вместе";
        document.getElementById("leak").textContent = "На берегу Севана ";
        document.getElementById("zags").textContent = "Регистрация в ЗАГСе";
        document.getElementById("jam1").textContent = "Время: 13:30";
        document.getElementById("jam2").textContent = "Время: 15:30";
        document.getElementById("jam3").textContent = "Время: 17:30";
        document.getElementById("map1").textContent = "Посмотреть на карте";
        document.getElementById("map2").textContent = "Посмотреть на карте";
        document.getElementById("map3").textContent = "Посмотреть на карте";
        document.getElementById("psak").textContent = "Церковная свадьба";
        document.getElementById("ekex").textContent = "Церковь Аированк";
        document.getElementById("srah").textContent = "Ресторан Darling hall";
        document.getElementById("tjik").textContent = "Свадебная вечеринка";
        document.getElementById("hrText").textContent = "Приглашение ";
    }

    function switchToArmenian() {
        document.getElementById("daysLabel").textContent = "օր";
        document.getElementById("hoursLabel").textContent = "ժամ";
        document.getElementById("minutesLabel").textContent = "րոպե";
        document.getElementById("secondsLabel").textContent = "վայրկյան";

        // document.getElementById("countdownText").textContent = "Մինչեւ միջոցառումը:";
        document.getElementById("invite").textContent = "Սիրով րավիրում ենք ձեզ միասին նշելու Հայկի և Քնարի հարսանյաց արարողությունը.";
        document.getElementById("leak").textContent = "Սևանի ափին";
        document.getElementById("zags").textContent = "Զագսի արարողություն";
        document.getElementById("jam1").textContent = "ժամը՝ 13:30";
        document.getElementById("jam2").textContent = "ժամը՝ 15:30";
        document.getElementById("jam3").textContent = "ժամը՝ 17:30";
        document.getElementById("map1").textContent = "Տեսնել քարտեզում ";
        document.getElementById("map2").textContent = "Տեսնել քարտեզում ";
        document.getElementById("map3").textContent = "Տեսնել քարտեզում ";
        document.getElementById("psak").textContent = "Պսակադրություն";
        document.getElementById("ekex").textContent = "Հայրիվանքի եկեղեցի";
        document.getElementById("tjik").textContent = "Հարսանեկան խնջույք";
        document.getElementById("srah").textContent = "Darling hall ռեստորան";
        document.getElementById("hrText").textContent = "Հրավիրատոմս ";
    }

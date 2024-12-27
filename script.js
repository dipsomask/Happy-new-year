// Обратный отсчет до Нового года
const countdownDate = new Date("Jan 1, 2025 00:00:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerText = "С Новым годом!";
    }
}, 1000);

// Генерация простого календаря
function generateCalendar() {
    const calendarContainer = document.getElementById("calendar");
    const today = new Date(); // Получаем текущую дату
    const currentDay = today.getDate(); // Получаем номер текущего дня
    const currentMonth = today.getMonth(); // Получаем номер текущего месяца (0-11)

    for (let i = 1; i <= 31; i++) {
        const dayDiv = document.createElement("div");
        dayDiv.className = "day";

        // Проверяем, является ли текущий день
        if (i === currentDay && currentMonth === 11) { // Декабрь - это 11 месяц
            dayDiv.classList.add("today"); // Добавляем класс для текущей даты
        }

        dayDiv.innerText += i; // Добавляем номер дня

        // Проверяем, является ли день 31
        if (i === 31) {
            dayDiv.style.backgroundColor = "#FBF6EA"; // цвет для последнего дня
            dayDiv.style.border = "2px solid #fff"; // Белая рамка
            dayDiv.style.boxShadow = "0 0 15px rgba(255, 204, 0, 0.5)"; 
            dayDiv.innerText = " 🎉 ";
        }

        
        calendarContainer.appendChild(dayDiv);
    }

}


// Вызов функции для генерации календаря
generateCalendar();

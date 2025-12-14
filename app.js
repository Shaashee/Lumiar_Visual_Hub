// Сообщаем Telegram, что Web App готов
window.Telegram.WebApp.ready();

// Получаем данные о пользователе
const user = Telegram.WebApp.initDataUnsafe.user;

// Выводим данные пользователя в консоль
console.log("Данные пользователя:", user);

// Выводим на страницу
const userInfoDiv = document.getElementById('userInfo');
if (user) {
    userInfoDiv.innerHTML = `<p>Привет, ${user.first_name}!</p>`;
} else {
    userInfoDiv.innerHTML = `<p>Не удалось получить данные пользователя.</p>`;
}

// Для примера добавим простую карточку фильма
const movieCatalog = document.getElementById('movieCatalog');
movieCatalog.innerHTML = `
    <div class="movie-card">
        <h2>Пример фильма</h2>
        <img src="https://via.placeholder.com/200x300" alt="Постер фильма">
        <p>Описание фильма...</p>
    </div>
`;

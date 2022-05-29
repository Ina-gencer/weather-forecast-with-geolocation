const api = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key: "fc2f6b2e55ffae41a401f6b9c0a28c08"
}

const input = document.getElementById('input');
input.addEventListener('keyup', enter);


function enter(e) {
    if(e.keyCode === 13) {
        getInfo(input.value);
      input.value = '';
    }
}

async function getInfo(data) {
    const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}&lang=ru`);
    const result = await res.json();
    console.log(result)
    displayResult(result);
}
function displayResult(result) {
    let city = document.getElementById('city');
    city.textContent = `${result.name}, ${result.sys.country}`;

    let temperature = document.getElementById('temperature');
    temperature.innerHTML = `<span>🌡</span>${Math.round(result.main.temp)}<span>°</span>`;

    let feelsLike = document.getElementById('feelsLike');
    feelsLike.innerHTML = `Ощущается: ` + `${Math.round(result.main.feels_like)}<span>°</span>`;

    let conditions = document.getElementById('conditions');
    conditions.innerHTML = `<span>⛅</span> ${result.weather[0].description}`;

    getDate();

    let speed = document.getElementById('speed');
    speed.innerHTML = `<img src="https://cdn.glitch.me/374a5861-dcde-46fa-8b73-375bd42c5e75/air.png?v=1639436098133" width="18px"> ${result.wind.speed}<span>м/с</span>`;

    let humidity = document.getElementById('humidity');
    humidity.innerHTML = `<span>💧</span>${result.main.humidity}<span> %</span>`;

    let pressure = document.getElementById('pressure');
    let resPressure = `${result.main.pressure}`;
    let newPressure = ((resPressure * 7.500616827041698) / 10).toFixed();
    pressure.innerHTML = `<img src="https://cdn.glitch.me/374a5861-dcde-46fa-8b73-375bd42c5e75/barometr.png?v=1639436128721" width="18px">${newPressure}<span>мм рт ст</span>`;

    let tempMin = document.getElementById('min');
    tempMin.innerHTML = `Максимальная t: ` + `${Math.round(result.main.temp_max)}<span>°</span>`;

    let tempMax = document.getElementById('max');
    tempMax.innerHTML = `Минимальная t: ` + `${Math.round(result.main.temp_min)}<span>°</span>`;
}

function getDate() {
    const now = new Date();
    console.log(now)
    const days = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
    let day = days[now.getDay()];
    let today = now.getDate();
    const months = ["Январь", "Февраль", "Mарт", "Aпрель", "Maй", "Июнь", "Июль", "Aвгуст", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    let month = months[now.getMonth()];  
    let year = now.getFullYear(); 
    let hour = now.getHours();
  let minute = now.getMinutes();
  if(minute < 10) {
    minute = "0" + seconds;
}
else if(hour < 10) {
  hour = "0" + hour;
}
else {
    minute = minute;
    hour = hour;
  }
 `${hour}:` + `${ minute}`;
    document.getElementById('date').innerHTML = `<span>🗓</span> ${day}, ` + `${today} `+ `${month} ` + `${year},` +  `<br>${hour}:` + `${ minute}`;

}




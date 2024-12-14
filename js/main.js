"use strict"

const find = document.querySelector('#findInput');
const todaySpan = document.querySelector('#todaySpan');
const dayMonthSpan = document.querySelector('#dayMonthSpan');
const liveCity = document.querySelector('#currentCity');
const liveTemp = document.querySelector('#todayDegreeH1');
const liveImg = document.querySelector('#todayWeatherImg');
const liveState = document.querySelector('#todayWeatherStateSmall');
const dayTwoSpan = document.querySelector('#tomorrowSpan');
const dayTwoWeatherImg = document.querySelector('#tomorrowWeatherImg');
const dayTwoMaxTemp = document.querySelector('#tomorrowMaxTemp');
const dayTwoMinTemp = document.querySelector('#tomorrowMinTemp');
const dayTwoState = document.querySelector('#tomorrowWeatherStateSmall');
const dayThreeSpan = document.querySelector('#overmorrowSpan');
const dayThreeWeatherImg = document.querySelector('#overmorrowWeatherImg');
const dayThreeMaxTemp = document.querySelector('#overmorrowMaxTemp');
const dayThreeMinTemp = document.querySelector('#overmorrowMinTemp');
const dayThreeState = document.querySelector('#overmorrowWeatherStateSmall');

async function hi() {
    let primalRes = await fetch(`https://api.weatherapi.com/v1//forecast.json?key=7cfa0b829eb24149bdb123337241312&q=cairo&days=3`);
    let finalRes = await primalRes.json();
    let date = new Date(finalRes.forecast.forecastday[0].date.toString());
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let currentWeekDay = days[date.getDay()];
    let currentDay = date.getDate();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let currentMonth = months[date.getMonth()];
    let currentCity = finalRes.location.name;
    let currentTemp = finalRes.current.temp_c;
    let currentImg = `https:` + finalRes.current.condition.icon;
    let currentCondition = finalRes.current.condition.text;
    let tomorrowWeekDay;
    let tomorrowMaxTemp = finalRes.forecast.forecastday[1].day.maxtemp_c;
    let tomorrowMinTemp = finalRes.forecast.forecastday[1].day.mintemp_c;
    let tomorrowImg = `https:` + finalRes.forecast.forecastday[1].day.condition.icon;
    let tomorrowCondition = finalRes.forecast.forecastday[1].day.condition.text;
    let overmorrowWeekDay;
    let overmorrowMaxTemp = finalRes.forecast.forecastday[2].day.maxtemp_c;
    let overmorrowMinTemp = finalRes.forecast.forecastday[2].day.mintemp_c;
    let overmorrowImg = `https:` + finalRes.forecast.forecastday[2].day.condition.icon;
    let overmorrowCondition = finalRes.forecast.forecastday[2].day.condition.text;

    if (currentWeekDay === 'Saturday') {
        tomorrowWeekDay = days[0];
    } else {
        tomorrowWeekDay = days[date.getDay() + 1];
    }
    if (currentWeekDay === 'Friday') {
        overmorrowWeekDay = days[0];
    } else if (currentWeekDay === 'Saturday') {
        overmorrowWeekDay = days[1];
    } else {
        overmorrowWeekDay = days[date.getDay() + 1];
    }

    todaySpan.innerText = `${currentWeekDay}`;
    dayMonthSpan.innerText = `${currentDay + currentMonth}`;
    liveCity.innerText = `${currentCity}`;
    liveTemp.innerText = `${currentTemp + '°C'}`;
    liveImg.src = `${currentImg}`;
    liveState.innerText = `${currentCondition}`;
    dayTwoSpan.innerText = `${tomorrowWeekDay}`;
    dayTwoWeatherImg.src = `${tomorrowImg}`;
    dayTwoMaxTemp.innerText = `${tomorrowMaxTemp + '°C'}`;
    dayTwoMinTemp.innerText = `${tomorrowMinTemp + '°C'}`;
    dayTwoState.innerText = `${tomorrowCondition}`;
    dayThreeSpan.innerText = `${overmorrowWeekDay}`;
    dayThreeWeatherImg.src = `${overmorrowImg}`
    dayThreeMaxTemp.innerText = `${overmorrowMaxTemp + '°C'}`;
    dayThreeMinTemp.innerText = `${overmorrowMinTemp + '°C'}`;
    dayThreeState.innerText = `${overmorrowCondition}`
}

hi()

find.addEventListener('keyup', async function () {
    if (find.value.length > 2) {
    let primalRes = await fetch(`https://api.weatherapi.com/v1//forecast.json?key=7cfa0b829eb24149bdb123337241312&q=${find.value}&days=3`);
    let finalRes = await primalRes.json();
    let date = new Date(finalRes.forecast.forecastday[0].date.toString());
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let currentWeekDay = days[date.getDay()];
    let currentDay = date.getDate();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let currentMonth = months[date.getMonth()];
    let currentCity = finalRes.location.name;
    let currentTemp = finalRes.current.temp_c;
    let currentImg = `https:` + finalRes.current.condition.icon;
    let currentCondition = finalRes.current.condition.text;
    let tomorrowWeekDay;
    let tomorrowMaxTemp = finalRes.forecast.forecastday[1].day.maxtemp_c;
    let tomorrowMinTemp = finalRes.forecast.forecastday[1].day.mintemp_c;
    let tomorrowImg = `https:` + finalRes.forecast.forecastday[1].day.condition.icon;
    let tomorrowCondition = finalRes.forecast.forecastday[1].day.condition.text;
    let overmorrowWeekDay;
    let overmorrowMaxTemp = finalRes.forecast.forecastday[2].day.maxtemp_c;
    let overmorrowMinTemp = finalRes.forecast.forecastday[2].day.mintemp_c;
    let overmorrowImg = `https:` + finalRes.forecast.forecastday[2].day.condition.icon;
    let overmorrowCondition = finalRes.forecast.forecastday[2].day.condition.text;

    if (currentWeekDay === 'Saturday') {
        tomorrowWeekDay = days[0];
    } else {
        tomorrowWeekDay = days[date.getDay() + 1];
    }
    if (currentWeekDay === 'Friday') {
        overmorrowWeekDay = days[0];
    } else if (currentWeekDay === 'Saturday') {
        overmorrowWeekDay = days[1];
    } else {
        overmorrowWeekDay = days[date.getDay() + 1];
    }

    todaySpan.innerText = `${currentWeekDay}`;
    dayMonthSpan.innerText = `${currentDay + currentMonth}`;
    liveCity.innerText = `${currentCity}`;
    liveTemp.innerText = `${currentTemp + '°C'}`;
    liveImg.src = `${currentImg}`;
    liveState.innerText = `${currentCondition}`;
    dayTwoSpan.innerText = `${tomorrowWeekDay}`;
    dayTwoWeatherImg.src = `${tomorrowImg}`;
    dayTwoMaxTemp.innerText = `${tomorrowMaxTemp + '°C'}`;
    dayTwoMinTemp.innerText = `${tomorrowMinTemp + '°C'}`;
    dayTwoState.innerText = `${tomorrowCondition}`;
    dayThreeSpan.innerText = `${overmorrowWeekDay}`;
    dayThreeWeatherImg.src = `${overmorrowImg}`
    dayThreeMaxTemp.innerText = `${overmorrowMaxTemp + '°C'}`;
    dayThreeMinTemp.innerText = `${overmorrowMinTemp + '°C'}`;
    dayThreeState.innerText = `${overmorrowCondition}`
    }
})
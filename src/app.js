document.addEventListener('DOMContentLoaded', () => {
    // API URL - ersetze die Basis-URL mit deiner eigenen Azure Function URL
    const apiBaseUrl = 'https://sys-mint-weather-app-gs.azurewebsites.net/api';

    // DOM Elemente
    const cityDropdown = document.getElementById('city-dropdown');
    const weatherContainer = document.getElementById('weather-container');
    const loadingIndicator = document.getElementById('loading-indicator');
    const errorMessage = document.getElementById('error-message');
    const cityNameElement = document.getElementById('city-name');
    const countryElement = document.getElementById('country');
    const conditionIconElement = document.getElementById('condition-icon');
    const conditionTextElement = document.getElementById('condition-text');
    const currentTempElement = document.getElementById('current-temp');
    const humidityElement = document.getElementById('humidity');
    const pressureElement = document.getElementById('pressure');
    const windElement = document.getElementById('wind');
    const forecastCardsContainer = document.getElementById('forecast-cards');
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    // Theme Management
    initTheme();

    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    });

    function initTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
    }

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        if (theme === 'dark') {
            themeToggle.checked = true;
            themeIcon.textContent = '🌙';
        } else {
            themeToggle.checked = false;
            themeIcon.textContent = '☀️';
        }
    }

    // Lade Städteliste beim Start
    loadCities();

    // Event Listener für Stadt-Änderungen
    cityDropdown.addEventListener('change', () => {
        const selectedCity = cityDropdown.value;
        if (selectedCity) {
            // Speichere die Auswahl im localStorage
            localStorage.setItem('selectedCityId', selectedCity);
            loadWeatherData(selectedCity);
        } else {
            weatherContainer.classList.add('hidden');
        }
    });

    // Lade verfügbare Städte
    function loadCities() {
        showLoading();

        fetch(`${apiBaseUrl}/cities`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('failed-to-fetch-cities');
                }
                return response.json();
            })
            .then((cities) => {
                hideLoading();
                populateCityDropdown(cities);
            })
            .catch((error) => {
                console.error('error-loading-cities', error);
                showError();
            });
    }

    // Städte in Dropdown einfügen
    function populateCityDropdown(cities) {
        // Entferne alle bestehenden Optionen außer der ersten
        while (cityDropdown.options.length > 1) {
            cityDropdown.remove(1);
        }

        // Füge neue Optionen hinzu
        cities.forEach((city) => {
            const option = document.createElement('option');
            option.value = city.id;
            option.textContent = city.name;
            cityDropdown.appendChild(option);
        });

        const savedCityId = localStorage.getItem('selectedCityId');
        if (savedCityId) {
            // Gibt es diese Stadt in der aktuellen Liste?
            const found = Array.from(cityDropdown.options).some((opt) => opt.value === savedCityId);
            if (found) {
                cityDropdown.value = savedCityId;
                // Wetterdaten automatisch laden
                loadWeatherData(savedCityId);
            }
        }
    }

    // Lade Wetterdaten für ausgewählte Stadt
    function loadWeatherData(city) {
        showLoading();
        weatherContainer.classList.add('hidden');

        fetch(`${apiBaseUrl}/weather/${city}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('failed-to-fetch-weather-data');
                }
                return response.json();
            })
            .then((weatherData) => {
                hideLoading();
                weatherContainer.classList.remove('hidden');
                updateWeatherDisplay(weatherData);
            })
            .catch((error) => {
                console.error('error-loading-data', error);
                showError();
            });
    }

    // UI mit Wetterdaten aktualisieren
    function updateWeatherDisplay(weatherData) {
        // Standort-Informationen

        try {
            cityNameElement.textContent = weatherData.location.city;
            countryElement.textContent = weatherData.location.country;

            // Aktuelle Wetterdaten
            const current = weatherData.current;
            conditionIconElement.setAttribute('data-condition', current.condition.code);
            conditionTextElement.textContent = current.condition.description;
            currentTempElement.textContent = `${current.temperature.value}° ${
                current.temperature.unit === 'celsius' ? 'C' : 'F'
            }`;
            humidityElement.textContent = `${current.humidity}%`;
            pressureElement.textContent = `${current.pressure} hPa`;
            windElement.textContent = `${current.wind.speed} ${current.wind.unit} ${current.wind.direction}`;
        } catch (error) {}

        // Wettervorhersage
        try {
            updateForecast(weatherData.forecast);
        } catch (e) {}
    }

    // Vorhersage-Karten aktualisieren
    function updateForecast(forecastData) {
        forecastCardsContainer.innerHTML = '';

        forecastData.forEach((day) => {
            const card = document.createElement('div');
            card.className = 'forecast-card';

            const date = new Date(day.date);
            const dateOptions = { weekday: 'long', day: 'numeric', month: 'long' };

            card.innerHTML = `
                <div class="forecast-date">${date.toLocaleDateString('de-DE', dateOptions)}</div>
                <div class="weather-icon forecast-icon" data-condition="${
                    day.condition.code
                }"></div>
                <div class="forecast-condition">${day.condition.description}</div>
                <div class="forecast-temp">
                    <span class="max-temp">${day.maxTemperature.value}°</span> /
                    <span class="min-temp">${day.minTemperature.value}°</span>
                </div>
                <div class="forecast-details">
                    <div class="forecast-detail">
                        <span class="detail-label">Regen:</span> ${day.precipitation.probability}%
                    </div>
                    <div class="forecast-detail">
                        <span class="detail-label">Wind:</span> ${day.wind.speed} ${day.wind.unit}
                    </div>
                    <div class="forecast-detail">
                        <span class="detail-label">Niederschlag:</span> ${
                            day.precipitation.amount
                        } ${day.precipitation.unit}
                    </div>
                    <div class="forecast-detail">
                        <span class="detail-label">Luftfeuchtigkeit:</span> ${day.humidity}%
                    </div>
                </div>
            `;

            forecastCardsContainer.appendChild(card);
        });
    }

    // Hilfsfunktionen für UI-Status
    function showLoading() {
        loadingIndicator.classList.remove('hidden');
        errorMessage.classList.add('hidden');
    }

    function hideLoading() {
        loadingIndicator.classList.add('hidden');
    }

    function showError() {
        loadingIndicator.classList.add('hidden');
        errorMessage.classList.remove('hidden');
        weatherContainer.classList.add('hidden');
    }
});

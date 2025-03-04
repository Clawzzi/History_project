document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map').setView([20, 0], 2); // Центруємо карту на глобальному рівні

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var locations = [
        {
            lat: 38.71667, 
            lng: -9.139, 
            title: 'Португалія (Лісабон)',
            content: '<h3>Португалія (Лісабон)</h3>' +
                     '<p>Центр європейських морських експедицій XV-XVI ст.</p>' +
                     '<p>Португальські мореплавці (Енріке Мореплавець, Васко да Гама) відкрили нові маршрути.</p>' +
                     '<p>Відкриття шляху до Індії (1498 р.).</p>'
        },
        {
            lat: 37.38283, 
            lng: -5.97317, 
            title: 'Іспанія (Севілья)',
            content: '<h3>Іспанія (Севілья)</h3>' +
                     '<p>Головний порт, звідки вирушали іспанські експедиції.</p>' +
                     '<p>Христофор Колумб відкрив Америку (1492 р.).</p>' +
                     '<p>Початок іспанської колонізації Нового Світу.</p>'
        },
        {
            lat: 19.432608, 
            lng: -99.133209, 
            title: 'Америка (Мехіко)',
            content: '<h3>Америка (Мехіко)</h3>' +
                     '<p>Мехіко – столиця Нової Іспанії.</p>'
        },
        {
            lat: -12.046374, 
            lng: -77.042793, 
            title: 'Америка (Ліма)',
            content: '<h3>Америка (Ліма)</h3>' +
                     '<p>Ліма – центр іспанської влади у Південній Америці.</p>'
        },
        {
            lat: 23.12911, 
            lng: 113.264385, 
            title: 'Китай (Гуанчжоу)',
            content: '<h3>Китай (Гуанчжоу)</h3>' +
                     '<p>Перші контакти європейців із китайським ринком.</p>'
        },
        {
            lat: -33.9249, 
            lng: 18.4241, 
            title: 'Африка (Кейптаун)',
            content: '<h3>Африка (Кейптаун)</h3>' +
                     '<p>Важлива точка на морському шляху до Азії.</p>' +
                     '<p>Голландці заснували Кейптаун у 1652 році.</p>'
        },
        {
            lat: 52.3676, 
            lng: 4.9041, 
            title: 'Нідерланди (Амстердам)',
            content: '<h3>Нідерланди (Амстердам)</h3>' +
                     '<p>Головний центр колоніальної торгівлі в XVII ст.</p>' +
                     '<p>Голландська Ост-Індійська компанія контролювала торгівлю з Азією.</p>'
        },
        {
            lat: -33.8688, 
            lng: 151.2093, 
            title: 'Австралія (Сідней)',
            content: '<h3>Австралія (Сідней)</h3>' +
                     '<p>Джеймс Кук і Британська колонізація (1770).</p>' +
                     '<p>Англійський капітан Джеймс Кук детально дослідив східне узбережжя та проголосив його частиною Британської імперії.</p>' +
                     '<p>У 1788 році британці заснували перше поселення – Сідней, колонія каторжників.</p>'
        }
    ];

    locations.forEach(function(location) {
        var marker = L.marker([location.lat, location.lng]).addTo(map);
        marker.bindPopup(location.content);
    });

    // Додаємо плавну прокрутку при натисканні на навігаційні посилання
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            const targetPosition = targetElement.offsetTop;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 1000; // Тривалість анімації в мілісекундах
            let start = null;

            window.requestAnimationFrame(step);

            function step(timestamp) {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                const yOffset = easeInOutQuad(progress, startPosition, distance, duration);
                window.scrollTo(0, yOffset);
                if (progress < duration) {
                    window.requestAnimationFrame(step);
                }
            }

            function easeInOutQuad(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            }
        });
    });

    // Ініціалізація таймлайну
    var timelineData = {
        "title": {
            "media": {
                "url": "",
                "caption": "",
                "credit": ""
            },
            "text": {
                "headline": "Великі географічні відкриття",
                "text": "<p>Ключові події великих географічних відкриттів.</p>"
            }
        },
        "events": [
            {
                "media": {
                    "url": "",
                    "caption": "",
                    "credit": ""
                },
                "start_date": {
                    "year": "1492"
                },
                "text": {
                    "headline": "Христофор Колумб відкрив Америку",
                    "text": "<p>Христофор Колумб відкрив Америку у 1492 році.</p>"
                }
            },
            {
                "media": {
                    "url": "",
                    "caption": "",
                    "credit": ""
                },
                "start_date": {
                    "year": "1498"
                },
                "text": {
                    "headline": "Васко да Гама відкрив морський шлях до Індії",
                    "text": "<p>Васко да Гама відкрив морський шлях до Індії у 1498 році.</p>"
                }
            },
            {
                "media": {
                    "url": "",
                    "caption": "",
                    "credit": ""
                },
                "start_date": {
                    "year": "1519"
                },
                "text": {
                    "headline": "Фернан Магеллан розпочав першу навколосвітню подорож",
                    "text": "<p>Фернан Магеллан розпочав першу навколосвітню подорож у 1519 році.</p>"
                }
            },
            {
                "media": {
                    "url": "",
                    "caption": "",
                    "credit": ""
                },
                "start_date": {
                    "year": "1415"
                },
                "text": {
                    "headline": "Енріке Мореплавець заснував школу мореплавства",
                    "text": "<p>Енріке Мореплавець заснував школу мореплавства в Сагреші у 1415 році.</p>"
                }
            },
            {
                "media": {
                    "url": "",
                    "caption": "",
                    "credit": ""
                },
                "start_date": {
                    "year": "1770"
                },
                "text": {
                    "headline": "Джеймс Кук дослідив східне узбережжя Австралії",
                    "text": "<p>Джеймс Кук дослідив східне узбережжя Австралії у 1770 році.</p>"
                }
            }
        ]
    };

    var timeline = new TL.Timeline('timeline-embed', timelineData);

    // Додаємо функціонал для кнопки показати/сховати карту
    var mapContainer = document.getElementById('map');
    var toggleMapButton = document.getElementById('toggle-map');
    toggleMapButton.addEventListener('click', function() {
        if (mapContainer.style.display === 'none') {
            mapContainer.style.display = 'block';
            map.invalidateSize(); // Оновлюємо розмір карти після показу
        } else {
            mapContainer.style.display = 'none';
        }
    });
});
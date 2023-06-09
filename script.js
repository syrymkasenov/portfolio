ymaps.ready(function() {
  var map = new ymaps.Map('map', {
    center: [43.2220, 76.8806],
    zoom: 12
  });

  // Получите данные из вашей таблицы или JSON-объекта
  var data = [
    { lat: 43.25967473, lon: 76.88590711, value: 0.0108 },
    { lat: 43.24274, lon: 76.906171, value: 0.179052632 },
    { lat: 43.265808, lon: 76.993193, value: 0.006136364 },
    { lat: 43.2708, lon: 76.951361, value: 0.013809524 },
    { lat: 43.398761, lon: 76.986112, value: 0.007 },
    { lat: 43.284659, lon: 76.886527, value: 0.02265 },
    { lat: 43.250995, lon: 76.87802, value: 0.12195 },
    { lat: 43.219629, lon: 76.859628, value: 0.07885 },
    { lat: 43.23562, lon: 76.826022, value: 0.08445 },
    { lat: 43.310931, lon: 77.017763, value: 0.01785 },
    { lat: 43.288981, lon: 76.902041, value: 0.02305 },
    { lat: 43.3414401, lon: 76.9219807, value: 0.1652 },
    { lat: 43.2470468, lon: 76.7999361, value: 0.02625 },
    { lat: 43.195286, lon: 76.98813, value: 0.01266 },
    { lat: 43.281115, lon: 76.970848, value: 0.01854 },
    { lat: 43.158688, lon: 77.058117, value: 0.02261 },
    // Другие точки...
  ];

  // Добавьте точки на карту
  for (var i = 0; i < data.length; i++) {
    var point = data[i];
    var marker = new ymaps.Placemark([point.lat, point.lon], {
      balloonContent: 'NO2: ' + point.value
    });
    map.geoObjects.add(marker);
  }
});

  
 
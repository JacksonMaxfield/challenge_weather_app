$(document).ready(function() {
  var target_location         = 'Seattle';
  var target_location_data    = {
    'weather':        'Partly cloudy',
    'annoucement':    'none',
    'current_temp':   71,
    'real_temp':      70,
    'high_temp':      73,
    'low_temp':       56,
    'precip_chance':  0,
    'wind_speed':     3,
    'wind_direction': 'East',

    'temp_hours':     [
      {'temp': 63, 'weather': 'Partly cloudy'},
      {'temp': 62, 'weather': 'Light rain'},
      {'temp': 60, 'weather': 'Light rain'},
      {'temp': 58, 'weather': 'Partly cloudy'}
    ],
    'temp_days':      [
      {'temp': 66, 'weather': 'Partly cloudy'},
      {'temp': 69, 'weather': 'Sunny'},
      {'temp': 74, 'weather': 'Sunny'},
      {'temp': 75, 'weather': 'Sunny'}
    ]
  }

  fillData(target_location, target_location_data);
});

function fillData(target, data) {
  var newStateSource = getSource(data.weather);
  $('#' + target + '-weather-state').attr('src', 'resources/weather_icons/' + newStateSource + '.svg');

  var newTempLocation = ('' + data.current_temp + String.fromCharCode(176) + ' - ' + target);
  $('#' + target + '-temp-location').text(newTempLocation);

  var newFeelsLike = ('Feels like ' + data.real_temp + String.fromCharCode(176));
  $('#' + target + '-real-temp').text(newFeelsLike);

  if (data.annoucement != 'none') {
    $('#' + target + '-weather-announcements').text(data.annoucement);
  } else {
    $('#' + target + '-weather-announcements').text(data.weather);
  }

  $('#' + target + '-high-temp').text('' + data.high_temp + String.fromCharCode(176) + ' H');
  $('#' + target + '-low-temp').text('' + data.low_temp + String.fromCharCode(176) + ' L');

  $('#' + target + '-precip-chance').text('' + data.precip_chance + '%');
  if (data.real_temp < 32) {
    $('#' + target + '-precip-label').text('Snow');
  } else {
    $('#' + target + '-precip-label').text('Rain');
  }

  $('#' + target + '-wind-speed').text('' + data.wind_speed + ' mph');
  $('#' + target + '-wind-direction').text('' + data.wind_direction);

  var targetSummary = '';

  var forecastAverageTemp = averageTemp(data.current_temp, data.temp_hours);
  if (forecastAverageTemp < data.current_temp) {
    targetSummary += 'Will cool off to around ' + Math.round(forecastAverageTemp);
  } else if (forecastAverageTemp > data.current_temp) {
    targetSummary += 'Will warm up to around ' + Math.round(forecastAverageTemp);
  } else {
    targetSummary += 'Looks like ' + Math.round(forecastAverageTemp) + 'for a while';
  }

  if (data.precip_chance < 20) {
    targetSummary += ', low chance of rain and';
  } else if (data.precip_chance >= 20 && data.precip_chance < 60) {
    targetSummary += ', moderate chance of rain and';
  } else {
    targetSummary += ', high chance of rain and';
  }

  if (data.wind_speed < 8) {
    targetSummary += ' light wind.'
  } else if (data.wind_speed >= 8 && data.wind_speed < 15) {
    targetSummary += ' a bit windy.'
  } else {
    targetSummary += 'very windy.'
  }

  $('#' + target + '-summary-tag').text(targetSummary);

  console.log($('#' + target + '-forecasting-today').children());

  var forecastingToday = $('#' + target + '-forecasting-today').children();
  var today = new Date();
  for (i = 0; i < forecastingToday.length; i ++) {
    console.log('today:', today);
    console.log(forecastingToday[i]);
  }

};

var naming_conventions = {
  'Partly cloudy': 'cloud_sun',
  'Light rain': 'light_rain',
  'Sunny': 'sun'
};

function getSource(data) {
  return naming_conventions[data]
};

function averageTemp(current, hours) {
  var sum = current;
  for (i = 0; i < hours.length; i++) {
    sum += hours[i].temp;
  }

  return (sum / (hours.length + 1));
}

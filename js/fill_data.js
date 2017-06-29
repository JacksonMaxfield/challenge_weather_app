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
    targetSummary += ', chance of rain and';
  } else {
    targetSummary += ', high chance of rain and';
  }

  if (data.wind_speed < 8) {
    targetSummary += ' light wind.'
  } else if (data.wind_speed >= 8 && data.wind_speed < 15) {
    targetSummary += ' a bit windy.'
  } else {
    targetSummary += ' very windy.'
  }

  $('#' + target + '-summary-tag').text(targetSummary);

  var forecastingToday = $('#' + target + '-forecasting-today').children();
  var currentHour = new Date().getHours();
  var current_night = (currentHour >= 19 || currentHour <= 6);
  for (i = 1; i <= forecastingToday.length; i ++) {
    var targets = $(forecastingToday[i - 1]).children();

    var updateHour = currentHour + (i*2);

    if (updateHour >= 24) {
      updateHour -= 24;
    }

    var night = (updateHour >= 19 || updateHour <= 6);

    updateHour = '' + parseInt(updateHour);
    if (updateHour.length < 2) {
      updateHour = '0' + updateHour;
    }

    updateHour += ':00';

    $(targets[0]).text(updateHour);

    var newHourSource = '';
    if (!night) {
      newHourSource = getSource(data.temp_hours[i - 1].weather);
    } else {
      newHourSource = getNightSource(data.temp_hours[i - 1].weather);
    }

    $(targets[1]).attr('src', 'resources/weather_icons/' + newHourSource + '.svg');

    $(targets[2]).text(data.temp_hours[i - 1].temp + String.fromCharCode(176));
  }


  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var forecastingWeek = $('#' + target + '-forecasting-week').children();
  var currentDay = new Date().getDay();
  for (i = 1; i <= forecastingWeek.length; i ++) {
    var targets = $(forecastingWeek[i - 1]).children();

    updateDay = currentDay + i;
    if (updateDay >= 7) {
      updateDay -= 7;
    }
    if (updateDay == currentDay + 1 || updateDay == 0) {
      updateDay = 'Tomorrow';
    } else {
      updateDay = days[updateDay];
    }

    $(targets[0]).text(updateDay);
    var newDaySource = getSource(data.temp_days[i - 1].weather);
    $(targets[1]).attr('src', 'resources/weather_icons/' + newDaySource + '.svg');
    $(targets[2]).text(data.temp_days[i - 1].temp + String.fromCharCode(176));
  }

  var gradient_colors = generate_gradient_bg(data, current_night);

  var targetCard = document.getElementById(target);
  targetCard.style.backgroundImage = 'linear-gradient(to bottom right, ' + gradient_colors.current + ', ' + gradient_colors.future + ')';
};

var naming_conventions = {
  'Partly cloudy': 'cloud_sun',
  'Light rain': 'light_rain',
  'Sunny': 'sun'
};

var night_conventions = {
  'Partly cloudy': 'night_clouds',
  'Light rain': 'light_rain',
  'Sunny': 'night'
}

function getSource(data) {
  return naming_conventions[data];
};

function getNightSource(data) {
  return night_conventions[data];
};

function averageTemp(current, hours) {
  var sum = current;
  for (i = 0; i < hours.length; i++) {
    sum += hours[i].temp;
  }

  return (sum / (hours.length + 1));
}

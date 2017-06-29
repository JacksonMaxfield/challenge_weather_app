function generate_gradient_bg(data, night) {
  var current_temp = data.current_temp;
  var current_precip_chance = data.precip_chance;
  var current_weather = data.weather;

  var current_temp_color = colorFromTemp(current_temp);
  var current_precip_color = colorFromPrecip(current_precip_chance);
  var current_weather_color = colorFromWeather(current_weather, night);

  var current_color = current_temp_color;
  current_color = blendColors(current_color, current_precip_color, 0.1);
  current_color = blendColors(current_color, current_weather_color, 0.4);

  var future_temp = data.temp_days[3].temp;
  var future_weather = data.temp_days[3].weather;

  var future_temp_color = colorFromTemp(future_temp);
  var future_weather_color = colorFromWeather(future_weather, false);

  var future_color = future_temp_color;
  future_color = blendColors(future_color, future_weather_color, 0.4);

  return {'current': ('#' + current_color), 'future': ('#' + future_color)};
};

function blendColors(c0, c1, p) {
    var f=parseInt(c0.slice(1),16),t=parseInt(c1.slice(1),16),R1=f>>16,G1=f>>8&0x00FF,B1=f&0x0000FF,R2=t>>16,G2=t>>8&0x00FF,B2=t&0x0000FF;
    return (0x1000000+(Math.round((R2-R1)*p)+R1)*0x10000+(Math.round((G2-G1)*p)+G1)*0x100+(Math.round((B2-B1)*p)+B1)).toString(16).slice(1);
};

function colorFromTemp(temp) {
  var temp_color = '';
  if (temp < 32) {
    temp_color = 'A5F2F3';
  } else if (temp < 50) {
    temp_color = 'b5a229';
  } else {
    temp_color = 'f9f594';
  }

  return temp_color;
};

function colorFromPrecip(precip_chance) {
  var precip_color = '';
  if (precip_chance < 20) {
    precip_color = 'ffffff';
  } else if (precip_chance < 60) {
    precip_color = '578bb2';
  } else {
    precip_color = '08122b';
  }

  return precip_color;
};

function colorFromWeather(weather, night) {
  var weather_color = '';
  if (night) {
    weather_color = '142537';
  } else {
    if (weather = 'Partly cloudy') {
      weather_color = '7cacf9';
    } else if (weather = 'Sunny') {
      weather_color = 'f2b846';
    } else {
      weather_color = '91add2';
    }
  }

  return weather_color;
};

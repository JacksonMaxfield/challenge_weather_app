function createNewCard() {
  var target = $('#new_card_target').val()

  if (target.length > 0 && $('#' + target)[0] == undefined) {
    $('#new_card_container').remove();
    $('.main_container').append(
      $('<div/>')
      .attr('id', target)
      .addClass('location_card')
      .append(
        $('<div/>')
        .addClass('information_now')
        .append(
          $('<div/>')
          .addClass('primary_details flex_start_between')
          .append(
            $('<div/>')
            .addClass('current_state_image_container flex_center')
            .append(
              $('<img/>')
              .attr('id', target + '-weather-state')
              .addClass('current_state_image')
              .attr('src', 'resources/weather_icons/dark_hail.svg')
            )
          )
          .append(
            $('<div/>')
            .addClass('current_state_info_container')
            .append(
              $('<h2/>')
              .attr('id', target + '-temp-location')
              .addClass('location_temp font_standard font_bold')
              .text('0' + String.fromCharCode(176) + ' - Location')
            )
            .append(
              $('<h2/>')
              .attr('id', target + '-real-temp')
              .addClass('location_temp_like font_standard font_light')
              .text('Feels like 0' + String.fromCharCode(176))
            )
            .append(
              $('<h2/>')
              .attr('id', target + '-weather-announcements')
              .addClass('location_temp_annoucements font_standard font_light')
              .text('Weather')
            )
          )
        )
        .append(
          $('<div/>')
          .addClass('secondary_details flex_start_between')
          .append(
            $('<div/>')
            .addClass('current_range flex_center')
            .append(
              $('<div/>')
              .addClass('current_range_image_container flex_center')
              .append(
                $('<img/>')
                .addClass('current_range_image')
                .attr('src', 'resources/weather_icons/thermometer.svg')
              )
            )
            .append(
              $('<div/>')
              .addClass('current_range_info_container')
              .append(
                $('<h2/>')
                .attr('id', target + '-high-temp')
                .addClass('range_high font_standard font_bold')
                .text('100' + String.fromCharCode(176) + 'High')
              )
              .append(
                $('<h2/>')
                .attr('id', target + '-low-temp')
                .addClass('range_low font_standard font_light')
                .text('0' + String.fromCharCode(176) + 'Low')
              )
            )
          )
          .append(
            $('<div/>')
            .addClass('current_precip flex_center')
            .append(
              $('<div/>')
              .addClass('current_precip_image_container flex_center')
              .append(
                $('<img/>')
                .addClass('current_precip_image')
                .attr('src', 'resources/weather_icons/dark_light_rain.svg')
              )
            )
            .append(
              $('<div/>')
              .addClass('current_precip_info_container')
              .append(
                $('<h2/>')
                .attr('id', target + '-precip-chance')
                .addClass('precip_chance font_standard font_bold')
                .text('Precip Chance')
              )
              .append(
                $('<h2/>')
                .attr('id', target + '-precip-label')
                .addClass('precip_label font_standard font_light')
                .text('Rain')
              )
            )
          )
          .append(
            $('<div/>')
            .addClass('current_wind flex_center')
            .append(
              $('<div/>')
              .addClass('current_wind_image_container flex_center')
              .append(
                $('<img/>')
                .addClass('current_wind_image')
                .attr('src', 'resources/weather_icons/compass.svg')
              )
            )
            .append(
              $('<div/>')
              .addClass('current_wind_info_container')
              .append(
                $('<h2/>')
                .attr('id', target + '-wind-speed')
                .addClass('wind_speed font_standard font_bold')
                .text('Wind Speed')
              )
              .append(
                $('<h2/>')
                .attr('id', target + '-wind-direction')
                .addClass('wind_label font_standard font_light')
                .text('Wind Direction')
              )
            )
          )
        )
        .append(
          $('<div/>')
          .addClass('summary_details')
          .append(
            $('<h2/>')
            .attr('id', target + '-summary-tag')
            .addClass('information_now_tag font_standard font_light')
            .text('Looks like 65' + String.fromCharCode(176) + ' all day, low chance of rain and light wind.')
          )
        )
      )
      .append(
        $('<div/>')
        .addClass('forecasting')
        .append(
          $('<div/>')
          .attr('id', target + '-forecasting-today')
          .addClass('forecasting_today flex_start_between')
        )
        .append(
          $('<div/>')
          .attr('id', target + '-forecasting-week')
          .addClass('forecasting_week flex_start_between')
        )
      )
    );

    var todayForecasting = $('#' + target + '-forecasting-today');
    var weekForecasting = $('#' + target + '-forecasting-week');
    for (i = 0; i < 4; i++) {
      todayForecasting.append(
        $('<div/>')
        .addClass('time_block flex_center wrap_content')
        .append(
          $('<h2/>')
          .addClass('time_block_time font_standard font_bold')
          .text('12:00')
        )
        .append(
          $('<img/>')
          .addClass('time_block_image')
          .attr('src', 'resources/weather_icons/cloud_sun.svg')
        )
        .append(
          $('<h2/>')
          .addClass('time_block_temp font_standard font_light')
          .text('0' + String.fromCharCode(176))
        )
      )

      weekForecasting.append(
        $('<div/>')
        .addClass('time_block flex_center wrap_content')
        .append(
          $('<h2/>')
          .addClass('time_block_time font_standard font_bold')
          .text('12:00')
        )
        .append(
          $('<img/>')
          .addClass('time_block_image')
          .attr('src', 'resources/weather_icons/cloud_sun.svg')
        )
        .append(
          $('<h2/>')
          .addClass('time_block_temp font_standard font_light')
          .text('0' + String.fromCharCode(176))
        )
      )
    }

    $('.main_container').append(
      $('<div/>')
      .attr('id', 'new_card_container')
      .addClass('location_card flex_center')
      .text('City:')
      .append(
        $('<input/>')
        .attr('id', 'new_card_target')
        .attr('type', 'text')
        .attr('name', 'city')
      )
      .append(
        $('<button/>')
        .attr('onclick', 'createNewCard()')
        .text('Submit')
      )
    );

    var createdData = generateData();
    fillData(target, createdData);
  }

};

function generateData() {
  weather_options = [
    'Partly cloudy',
    'Light rain',
    'Sunny'
  ];

  annoucement_options = [
    'none',
    'Heatwave approaching!'
  ];

  wind_options = [
    'North',
    'NE',
    'East',
    'SE',
    'South',
    'SW',
    'West',
    'NW'
  ]

  var rand_initial_weather = weather_options[Math.floor(Math.random() * weather_options.length)];
  var rand_initial_announcement = annoucement_options[Math.floor(Math.random() * annoucement_options.length)];
  var rand_initial_temp = (Math.random() * 110);
  var rand_initial_real = (rand_initial_temp - (Math.random() * 2));
  var rand_initial_high = (rand_initial_temp + (Math.random() * 14));
  var rand_initial_low = (rand_initial_temp - (Math.random() * 14));
  var rand_initial_precip_chance = (Math.random() * 100);
  var rand_initial_wind_speed = (Math.random() * 40);
  var rand_initial_wind_direction = wind_options[Math.floor(Math.random() * wind_options.length)];

  var rand_temp_hours = new Array(4);
  var rand_temp_days = new Array(4);

  for (i = 0; i < 4; i++) {
    var rand_temp = (Math.random() * 110);
    var rand_weather = weather_options[Math.floor(Math.random() * weather_options.length)];

    rand_temp_hours[i] = {
      'temp': Math.round(rand_temp),
      'weather': rand_weather
    };

    var rand_temp = (Math.random() * 110);
    var rand_weather = weather_options[Math.floor(Math.random() * weather_options.length)];

    rand_temp_days[i] = {
      'temp': Math.round(rand_temp),
      'weather': rand_weather
    };
  }

  var target_location_data = {
    'weather': rand_initial_weather,
    'annoucement': rand_initial_announcement,
    'current_temp': Math.round(rand_initial_temp),
    'real_temp': Math.round(rand_initial_real),
    'high_temp': Math.round(rand_initial_high),
    'low_temp': Math.round(rand_initial_low),
    'precip_chance': Math.round(rand_initial_precip_chance),
    'wind_speed': Math.round(rand_initial_wind_speed),
    'wind_direction': rand_initial_wind_direction,
    'temp_hours': rand_temp_hours,
    'temp_days': rand_temp_days
  };

  return target_location_data;
}

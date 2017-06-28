$(document).ready(function() {
  todays_data = [
    {
      'time': '10:00',
      'temp': '80'
    },
    {
      'time': '11:00',
      'temp': '76'
    },
    {
      'time': '12:00',
      'temp': '78'
    },
    {
      'time': '13:00',
      'temp': '80'
    },
    {
      'time': '14:00',
      'temp': '81'
    },
    {
      'time': '15:00',
      'temp': '77'
    },
    {
      'time': '16:00',
      'temp': '74'
    },
    {
      'time': '17:00',
      'temp': '72'
    },
    {
      'time': '18:00',
      'temp': '71'
    },
    {
      'time': '19:00',
      'temp': '69'
    }
  ];

  createChart('#forecasting_today_target', 'js/data/todays_forecast.csv');
});

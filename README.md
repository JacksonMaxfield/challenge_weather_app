# topp_weather_app:
rapid prototype weather app for Topp

## ideas:
### finding examples:
#### flat repeats
<img src="https://cdn.dribbble.com/users/780072/screenshots/2332668/dribbble_1x.png" alt="weather example, flat repeats" width="500" height="500" display="inline" />
There are numerous weather apps that are centered on stylized and flat design standards. I would say this could be an example of a stylized flat design that is for a specific location over time. That is to say, I would assume they have a different background image for a different location that also changes color based on time.

#### location oriented
<img src="https://i.amz.mshcdn.com/OcKWOfd5iTw4WW0KxEKg0zfcpIc=/fit-in/850x850/http%3A%2F%2Fmashable.com%2Fwp-content%2Fgallery%2F13-best-weather-apps%2Fyahoo.jpg" alt="weather example, location oriented" width="500" height="500" display="inline" />
Personally, not my favourite style of design, however it gets the job done. I think the image takes up too much space and the relevant weather information is shoved to the bottom left corner on the main entry point. While I understand you want to have weather attached to a location, I think there is too much value given to the location and not the main purpose of the application, which is the weather.

#### material cards
<img src="http://www.creativespecks.com/wp-content/uploads/2016/04/weather_app-_big.jpg" alt="weather example, material cards" width="500" height="500" display="inline" />
This is probably one of my favourites, it is clean, minimal, relevant information is presented and the graphics correspond to both location and the weather currently. There is even a visualization at the bottom of I am assuming temperature over time color encoded with time of day, so height on graph associates to temperature, color of line indicates what time of day that temperature is associated with. Overall, really nice, however I think it is missing granular data, at least from the example shown, they only show a single day at a time.

#### stylized flat
<img src="http://www.creativespecks.com/wp-content/uploads/2016/04/weather-app-1.png" alt="weather example, stylized flat" width="500" height="500" display="inline" />
Much like the first example, this is the common stylized flat design we are seeing pop up in a lot of tech. In terms of visual design it is beautiful, and for some people this may be enough information. However for me personally, it lacks the granularity that I would like in a weather application. It has a temperature range for a given day on the bottom and no hourly updates.

#### visualization cards
<img src="http://i-cdn.phonearena.com/images/articles/141310-image/Beautiful-weather-apps-for-iphone-and-iPad-20-horz.jpg" alt="weather example, visualization cards" width="500" height="500" display="inline" />
An interesting weather application in my opinion. I don't like the visual design or the information design all too much as I think visually they could have done more, and in terms of information, it seems to be data top heavy. Encoding data with icons tries to compensate for this, but I don't think that is the most important. I just thought the emphasis on the visualization was interesting. In this case I think they allocated too much space to the visualization as they could have changed the scales and encoded more information into the chart instead of just temperature on height.

### my ideas:
From the examples, I guess I am the odd one out. I like granular data. It may be from living in Seattle where our weather can change from sunny to pouring in a matter of minutes, but from an ideal weather application, I would look for something that I can quickly glance at and see what the current state of the weather is and future states are projected to be. Yes visualizations are great and location graphics are nice for users who want to go through the application process. But the weather to me is just something that is around and something to prepare for, so I need the information at a glance, quickly.

However, that is not to say I shouldn't build my application with only me in mind. While I enjoy granularity, maybe a settings pane that allows for user customization of weather forecasting would be useful. If one user wants forecasting in increments of hours, blocks, days, etc. they can set that.

Additionally, I think regardless of user, some of the applications I viewed had too much emphasis on location and not enough on actual service, presenting the weather. The 'location oriented' for example, the actual weather information on the main pane was shoved out of the way of the user. I assume from the size of the panes that this is a mobile application, and it is shoved to the bottom left since most individuals are right handed, the information wont be blocked by their thumb on the screen, but why not just have the information in the upper center. Out of the way of all users range of motion. Items that can be clicked should be in the users range of motion, items that can't should be useful data points.

I travel, have friend abroad, and generally just curious about multiple locations at a time. While I want the main card to be based off my location, or the primary location I target, it is also important to be able to look up other areas and add them to my locations of interest.

Potentially, weather advisory would be interesting. If there a forecasted heat wave or storm, this is crucial information that should be broadcast.

Finally, this is a weather application and I think a majority of these applications focus on the weather now and potential forecast, but it would also be interesting to see a weather application that specifically helps with planning of a trip. For example, I know that I will be traveling this upcoming week, I would like to know at a glance the variability of the weather, the range over the course of x-days. This data could be derived from previous years data, or could be forecasted data. But either way, it would be a useful feather in my opinion.

## design:
Card based, a card per location targeted, cards are background color encoded to show time, temp, precipitation, some formula.
Main information at the top center, this includes, current weather, location, day temp range, precipitation, summarization snippet, etc.
The lower you go on the page, the less granular the data becomes. So from the main information, the next information shown is an x-hour long block forecast, from there it is day by day.
  Lower information is clickable for more details, like accordion system, click on an hour and it expands to show information like that of the main top information.

### design/build:
- [] build cards
- [] create fake data
- [] attach main information
- [] attach secondary less granular data
- [] color encode cards by data
- [] build card addition and settings

## notes:

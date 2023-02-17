# Transport Telepathy

### Introduction
Transport Telepathy is a web application that creates journey time predictions for Dublin Bus by utilising machine learning models. Accurate prediction of bus travel time is crucial for travellers who wish to plan their journey. Although Dublin Bus provides static timetables, the generic travel time may not be highly accurate and informative due to influential factors such as weather conditions and time of the day. Hence, a web-based application based on Random Forest algorithms that consider the aforementioned factors was proposed to provide a more accurate solution that predicts the travel time on public transport in Dublin.

Diverse technologies including jQuery, Bootstrap, Django, a cloud-based MySQL database, NGINX, uWSGI and Docker were employed to deliver a user-friendly and accurate app with multiple features. In addition to the core travel time prediction features, this web application also provides several innovative features such as a CO2 calculator, user authentication, weather forecast, bus fare calculator, and user notifications. Judging by the evaluation metrics, the proposed and realised application accurately predicts the travel time with an overall R2 value of 0.82. As a result, the delivered estimations are closely in line with predictions provided by the Google map API.

This application was developed for the Research Practicum for the MSc Computer Science at University College Dublin in collaboration with my teammates Daniel Gresak, Ziying Wang, Yating Zhan.

### Project Specification
Bus companies produce schedules which contain generic travel times. For example, in the Dublin Bus
Schedule, the estimated travel time from Dun Laoghaire to the Phoenix Park is 61 minutes (LINK) Of
course, there are many variables which determine how long the actual journey will take. Traffic
conditions which are affected by the time of day, the day of the week, the month of the year and the
weather play an important role in determining how long the journey will take. These factors along with
the dynamic nature of the events on the road network make it difficult to efficiently plan trips on public
transport modes which interact with other traffic.
This project involves analysing historic Dublin Bus data and weather data in order to create dynamic
travel time estimates. Based on data analysis of historic Dublin Bus data, a system which when
presented with any bus route, departure time, the day of the week, current weather condition,
produces an accurate estimate of travel time for the complete route and sections of the route.
Users should be able to interact with the system via a web-based interface which is optimised for
mobile devices. When presented with any bus route, an origin stop and a destination stop, a time, a
day of the week, current weather, the system should produce and display via the interface an accurate
estimate of travel time for the selected journey.

### Application Features

The application core features include being able to input a origin and destination, as well as a time/date. It then uses Google Maps API to show 3 or 4 different bus routes between these locations at that time. The app will also use our Random Forest Models to predict how long each journey should take.

Other features include:

- CO2 calculator which estimates how much CO2 a user would save by taking public transport as opposed to driving between the same two locations
- Email notifications for users who register an account with us, when their bus is due (time customisable by user and they have the option to turn this off.
- Cost calculator which will estimate the cost of the trip
- Weather forecast to eliminate the need to switch apps when planning a trip.

We use Django sessions to save the users total CO2 saved and their cost bracket but the user can also make an account which will save this information.

### Application Design

![Client Changing WoT Property](desktop.gif "Client Changing WoT Property")
![Client Changing WoT Property](mobile.gif "Client Changing WoT Property")

### CI/CD
The CI/CD development process was performed using Gitlab’s CI/CD tool. This required setting up a Gitlab Runner; a virtual machine to run these processes. The project used the provided UCD virtual machine as a Gitlab Runner. This meant that as soon as a change was merged into the master branch, all tests were completed, and the application was deployed live automatically if passed. Furthermore, functional and unit testing was automatically run whenever changes were made to the development branch. PEP8 testing was performed with changes made to every branch.
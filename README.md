/*------------------------Weather App -------------------------*/

-------Features-------

1.Real-time Weather Data: Fetches temperature, humidity, and wind speed.
2.Dynamic Icons: Displays weather-specific icons based on the conditions.
3.Unit Toggle: Switch between °C and °F with a simple toggle button.
4.Geolocation: Detects the user's location and displays weather details automatically.
5.Responsive Design: Fully responsive for desktop and mobile devices.


-------Installation and Setup-------


--Steps to Run Locally

1.Clone the Repository
->[git clone https://github.com/your-repo/weather-app.git]

2.Navigate to the Project Folder
->[cd weather-app]

3.Install Dependencies (if applicable)
If you plan to extend the app using npm libraries, install them with:
->[npm install]
(Currently, no external libraries are used.)

4.Run the App
Open index.html directly in your browser or use a live server:
  ->Using VS Code: Right-click on index.html > Select "Open with Live Server".
  ->Manually: Double-click index.html to open it in your default browser.

--------Approach--------
1.API Integration: Used the OpenWeatherMap API to fetch real-time weather data based on city names and geolocation coordinates.

2.Dynamic UI Updates: Weather details and icons are dynamically updated based on API responses.

3.Unit Toggle: Temperature conversion between Celsius and Fahrenheit is implemented with a formula:
°F = ((°C * 9/5) + 32)
°C = ((°F - 32) * 5/9)

4.Responsive Design: Designed the app using CSS media queries for better user experience on both desktop and mobile.

-------Challenges and Solutions-------

1.Weather Icon Not Displaying
Problem: Incorrect mapping of weather conditions from the API to local icon files.
Solution: Created a iconMapping object in JavaScript to match weather conditions (e.g., Clouds, Rain) to corresponding icon files, with a default fallback.

2.Unit Toggle Conversion Errors
Problem: Misalignment when toggling between °C and °F due to incorrect formulas.
Solution: Stored the original temperature and performed precise calculations on every toggle.

3.Geolocation Permission Handling
Problem: Users denying geolocation permission resulted in no weather data being displayed.
Solution: Displayed a default weather report and added error handling for denied geolocation.

4.Responsive Design
Problem: The layout looked cluttered on smaller screens.
Solution: Used CSS media queries to adjust font sizes, margins, and icon sizes for mobile devices.


----------Future Improvements----------

1.Add a 5-day weather forecast feature.
2.Integrate a dark mode toggle.
3.Enhance error messages for user feedback.
4.Implement a loading animation while fetching data.


This is the Whole Information about the Weather App.
Github Repo Link:
Github Pages Link:
Deployed Link:
Zip File Link:

import { calendar } from "../widgets/WindowsWidgets/Calendar/main.js"
import { clock } from "../widgets/WindowsWidgets/clock/main.js"

const RightMain = Widget.Box({
    vertical: true,
    class_name: 'calendarBox',
    spacing: 5,
    children: [
        clock,
        calendar,
    ]
})

const MiddleWindowBox = Widget.Box({
    children: [
        RightMain,
    ]
})


const MiddleWindow = Widget.Window({
    name: 'calendar-menu',
    class_name: 'calendar',
    anchor: ['top'],
    exclusivity: 'normal',
    keymode: 'none',
    layer: 'top',
    margins: [10, 0],
    child: MiddleWindowBox,
    visible: false,
})

export { MiddleWindow }

// const API_KEY = 'your_openweathermap_api_key';  // Replace with your actual API key
// const CITY = 'your_city_name';  // Replace with your city
// const UNITS = 'metric';  // Use 'metric' for Celsius or 'imperial' for Fahrenheit
//
// function getWeatherData() {
//     const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=${UNITS}`;
//     
//     return new Promise((resolve, reject) => {
//         Utils.exec(`curl -s '${weatherUrl}'`, (stdout, stderr) => {
//             if (stderr) {
//                 reject(stderr);
//             } else {
//                 resolve(JSON.parse(stdout));  // Parse the JSON data from the API
//             }
//         });
//     });
// }
//
// async function updateWeatherWidget() {
//     try {
//         const weatherData = await getWeatherData();
//         const temperature = Math.round(weatherData.main.temp);  // Get temperature
//         const condition = weatherData.weather[0].description;   // Get weather condition
//
//         weatherLabel.set_label(`Weather: ${temperature}°C, ${condition}`);  // Update label with weather info
//     } catch (error) {
//         weatherLabel.set_label('Error fetching weather');
//     }
// }
//
// // Create the weather widget
// const weatherLabel = Widget.Label({
//     label: 'Fetching weather...',
//     class_name: 'weatherLabel'
// });
//
// const weatherBox = Widget.Box({
//     class_name: 'weatherBox',
//     spacing: 8,
//     children: [
//         weatherLabel,
//     ]
// });
//
// // Update the weather widget every 30 minutes
// GLib.timeout_add_seconds(0, 1800, () => {
//     updateWeatherWidget();
//     return GLib.SOURCE_CONTINUE;
// });
//
// // Call the update function immediately to show weather info when the widget loads
// updateWeatherWidget();

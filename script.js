// # Day 63 — Project Scenarios

// API example (OpenWeatherMap):

// `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`

// ---

// ## Scenario 1 — Weather Dashboard with Error Handling

// Build a small weather dashboard that fetches current weather data from a public weather API (e.g., OpenWeatherMap).

// ### Requirements

// - Make the API request asynchronously using `fetch` with `async/await`.
// - Handle API request failures (for example, invalid city name) using `try/catch`.
// - Create and throw custom errors based on weather conditions (e.g., extremely high or low temperature) and handle them appropriately.

// ### Suggested tasks

// - Build a simple UI to input a city name and display the result.
// - Show user-friendly error messages for network errors, invalid input, or API errors.
// - Demonstrate at least one custom thrown error (e.g., `ExtremeTemperatureError`) and handle it in the UI.


// function getWeather(city){
//     let apikey = "26871e3dc9493a0fbcee6f7f70eb7bc1"

//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)

//     .then((raw) => raw.json())
//     .then((result) =>{
//         console.log(result);
        
//     })
// }

class ExtremeTemperatureError extends Error {
    constructor(message) {
        super(message);
        this.name = "ExtremeTemperatureError";
    }
}

async function getWeather(city) {
    try {
        let apikey = "26871e3dc9493a0fbcee6f7f70eb7bc1";

        let response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
        );

        if (!response.ok) {
            throw new Error("City not found");
        }

        let result = await response.json();
        let temp = result.main.temp;

        if (temp < 0) {
            throw new ExtremeTemperatureError("Too cold weather");
        } 
        else if (temp > 35) {
            throw new ExtremeTemperatureError("Too hot weather");
        }

        console.log("City:", result.name);
        console.log("Temperature:", temp + " °C");
        console.log("Weather:", result.weather[0].description);

    } catch (error) {
        console.log(error.name + ":", error.message);
    }
}

getWeather("Jammu");


// ---

// ## Scenario 2 — Bulk Email Sending Simulation with Parallel Promises and Error Handling

// Simulate sending bulk emails to 5 users. Treat each email-sending operation as a `Promise` (simulate delays with `setTimeout`).

// ### Requirements

// - Send all emails in parallel using `Promise.all`.
// - If any email fails (e.g., due to a simulated random failure), catch the error and clearly indicate which specific email failed.
// - Use a `finally` block to display a message indicating that the "Email process is complete." (regardless of success/failure).

// ### Suggested tasks

// - Create an array of 5 mock email tasks that resolve or reject based on a random condition.
// - Call `Promise.all` and handle success and failure cases. Show a breakdown of which emails succeeded and which failed.
// - Ensure the `finally` block runs to update the UI or console indicating completion.

const emails = [
  "user1@gmail.com",
  "john.doe@yahoo.com",
  "admin@company.com",
  "support@service.in",
  "hello.world@outlook.com"
];

function sendEmail(email) {
    return new Promise((resolve, reject) => {
        let time = Math.floor(Math.random() * 10);

        setTimeout(() => {
            let probability = Math.floor(Math.random() * 10);
            if (probability <= 5) {
                resolve(`Accepted: ${email}`);
            } else {
                reject(`Rejected: ${email}`);
            }
        }, time * 1000);
    });
}

function sendEmails(userList) {
    const tasks = userList.map(email => sendEmail(email));

    Promise.allSettled(tasks)
        .then(results => {
            results.forEach(result => {
                if (result.status === "fulfilled") {
                    console.log(result.value);
                } else {
                    console.log(result.reason);
                }
            });
        })
        .finally(() => {
            console.log("Email process is complete.");
        });
}

sendEmails(emails);


// ---

// Optional: combine both scenarios into a small dashboard that fetches weather and then attempts to send a report-email, demonstrating error handling across both network and simulated async operations.
// # Day 63 — Project Scenarios

// API example (OpenWeatherMap):

// `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`

// ---

// ## Scenario 1 — Weather Dashboard with Error Handling

// Build a small weather dashboard that fetches current weather data from a public weather API (e.g., OpenWeatherMap).

// ### Requirements

// - Make the API request asynchronously using `fetch` with `async/await`.
// - Handle API request failures (for example, invalid city name) using `try/catch`.
// - Create and throw custom errors based on weather conditions (e.g., extremely high or low temperature) and handle them appropriately.

// ### Suggested tasks

// - Build a simple UI to input a city name and display the result.
// - Show user-friendly error messages for network errors, invalid input, or API errors.
// - Demonstrate at least one custom thrown error (e.g., `ExtremeTemperatureError`) and handle it in the UI.

// ---

// ## Scenario 2 — Bulk Email Sending Simulation with Parallel Promises and Error Handling

// Simulate sending bulk emails to 5 users. Treat each email-sending operation as a `Promise` (simulate delays with `setTimeout`).

// ### Requirements

// - Send all emails in parallel using `Promise.all`.
// - If any email fails (e.g., due to a simulated random failure), catch the error and clearly indicate which specific email failed.
// - Use a `finally` block to display a message indicating that the "Email process is complete." (regardless of success/failure).

// ### Suggested tasks

// - Create an array of 5 mock email tasks that resolve or reject based on a random condition.
// - Call `Promise.all` and handle success and failure cases. Show a breakdown of which emails succeeded and which failed.
// - Ensure the `finally` block runs to update the UI or console indicating completion.

// ---

// Optional: combine both scenarios into a small dashboard that fetches weather and then attempts to send a report-email, demonstrating error handling across both network and simulated async operations.
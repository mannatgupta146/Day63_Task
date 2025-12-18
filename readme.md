# Day 63 Task | Cohort 2.0

This repository contains all the JavaScript exercises completed as part of **Day 63** in **Sheryians Coding School Cohort 2.0**.  
The focus of this day was to understand **Promises**, **async/await**, **Error Handling**, and handling **parallel asynchronous operations** in JavaScript.

All exercises are written inside **one single JavaScript file** and are **console-based** (no HTML).


## 📁 File in This Task

### 📌 day63.js — All Promise & Async Scenarios (Single File)


## 🧠 Topics Covered

| Topic | Description |
|------|-------------|
| Promises | Creating and handling asynchronous operations |
| async / await | Writing asynchronous code in a synchronous style |
| Error Handling | Using `try / catch` to handle runtime and API errors |
| Custom Errors | Creating and throwing custom error classes |
| Parallel Execution | Running multiple async tasks at the same time |
| Promise.all | Handling multiple promises with fail-fast behavior |
| Promise.allSettled | Tracking both success and failure results |
| finally Block | Running cleanup code regardless of outcome |
| Async Flow Chaining | Combining multiple async operations |


## 🧩 Scenarios Included

### ✔️ Scenario 1 — Weather Dashboard with Error Handling
- Fetch weather data using a public API  
- Uses `async/await` with `fetch`  
- Handles invalid city and network errors  
- Throws a custom `ExtremeTemperatureError`  


### ✔️ Scenario 2 — Bulk Email Sending Simulation
- Simulates sending emails to 5 users  
- Each email operation is treated as a Promise  
- Emails are sent in parallel  
- Shows both success and failure cases  
- Uses `finally` to indicate completion  


### ✔️ Scenario 3 — Combined Async Dashboard (Optional)
- Fetches weather data first  
- Sends report emails after weather validation  
- Demonstrates error handling across async flows  
- Ensures completion using `finally`  


# ✨ Key Learning Highlights

You learned to:
- Handle asynchronous operations using Promises  
- Use `async/await` for cleaner code  
- Implement robust error handling  
- Execute multiple Promises in parallel  
- Track success and failure together  
- Design clean async workflows  


# 🛠️ Technologies Used
- **JavaScript (ES6+)**  
- Promises  
- `async / await`  
- `fetch` API  
- `setTimeout()`  
- Browser Console  


# 📖 Learning Outcome

By completing Day 63, I understood:
- How asynchronous execution works in JavaScript  
- How to handle API and runtime errors  
- How parallel async tasks are managed  
- Why custom errors are useful  
- How `finally` ensures cleanup  


# 🌟 Acknowledgement

This task was completed under the guidance of **Harsh Bhaiya**  
as part of **Sheryians Coding School – Cohort 2.0**.

---
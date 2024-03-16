
---

# NASA APOD API App

This project demonstrates how to integrate a React frontend with a Spring Boot backend to create a NASA APOD (Astronomy Picture of the Day) API-based application.

## Project Structure

```
├── Assignment2FrontEnd
│   ├── public
│   └── src
└── WebEngineeringSpringAPI
    ├── build
    ├── gradle
    └── src
```

- `Assignment2FrontEnd`: Contains the React frontend code.
- `WebEngineeringSpringAPI`: Contains the Spring Boot backend code.

# NASA APOD API App

![Screenshot 1](images/Screenshot%20(162).png)
![Screenshot 2](images/Screenshot%20(163).png)
![Screenshot 3](images/Screenshot%20(164).png)
![Screenshot 4](images/Screenshot%20(167).png)
![Screenshot 5](images/Screenshot%20(169).png)

This project demonstrates how to integrate a React frontend with a Spring Boot backend to create a NASA APOD (Astronomy Picture of the Day) API-based application.



## Frontend Setup

1. Navigate to the `Assignment2FrontEnd` directory.
2. Install dependencies using `npm install`.
3. Place the images (e.g., `Screenshot (162).png`, `Screenshot (163).png`) in the appropriate directory within the React project.
4. Run `npm run build` to compile the React code using webpack.

## Backend Setup

1. Navigate to the `WebEngineeringSpringAPI` directory.
2. Develop your Spring Boot application to serve the compiled React frontend using Thymeleaf.

## Integrating Frontend with Backend

1. Move the compiled React frontend from `Assignment2FrontEnd/build` to `WebEngineeringSpringAPI/src/main/resources/static/built`.
2. In your Spring Boot controller, serve the `index.html` file located in `WebEngineeringSpringAPI/src/main/resources/templates` for all requests except API requests.
3. Ensure CORS is properly configured in your Spring Boot application to allow requests from the React frontend.

## Run the Application

1. Start your Spring Boot application.
2. Access the application in your browser.



### Building React Frontend (Assignment2FrontEnd):

1. Navigate to the `Assignment2FrontEnd` directory:

   ```bash
   cd Assignment2FrontEnd
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build the React project:

   ```bash
   npm run build
   ```

### Building Spring Boot Backend (WebEngineeringSpringAPI):

1. Navigate to the `WebEngineeringSpringAPI` directory:

   ```bash
   cd WebEngineeringSpringAPI
   ```

2. Build the Spring Boot project:

   ```bash
   ./gradlew build
   ```
   or 
   ```
   gradle build && gradle bootrun
   ```

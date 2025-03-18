# Project Setup Instructions

## Backend (NestJS):

1.  Navigate to the backend folder:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the server:
    ```bash
    npm run start
    ```

**Backend .env Configuration:**

- Create a `.env` file in the `backend` directory.
- Add the following variables:
  ```
  PORT=<your_backend_port>
  API_URL=https://www.themealdb.com/api/json/v1/1
  ```
  _Replace `<your_backend_port>` with the desired port number (e.g., 3000)._

## Frontend (Next.js):

**Development Mode:**

1.  Navigate to the frontend folder:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```

**Production Mode:**

1.  Navigate to the frontend folder:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Build the application:
    ```bash
    npm run build
    ```
4.  Start the production server:
    ```bash
    npm run start
    ```

**Frontend .env Configuration:**

- Create a `.env` file in the `frontend` directory.
- Add the following variable:
  ```
  NEXT_PUBLIC_API_URL=http://localhost:<your_backend_port>/api
  ```
  _Replace `<your_backend_port>` with the port number you specified in the backend's `.env` file._

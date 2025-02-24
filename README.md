![localhost_3000_](https://github.com/user-attachments/assets/83caa30a-e6cf-401e-9b0c-c96fa85034ed)
![localhost_3000_ (1)](https://github.com/user-attachments/assets/d0f16db1-9979-4940-b1a3-f632096db172)
![localhost_3000_ (2)](https://github.com/user-attachments/assets/eabdbdf4-cbf7-4497-bfa5-d559aacfcb60)
![localhost_3000_meals_share](https://github.com/user-attachments/assets/de86f5d4-2d07-4dbc-8820-53499907eb2d)
![localhost_3000_meals_share (1)](https://github.com/user-attachments/assets/4d5d59c1-f51f-4593-8c8f-63eb002f8d52)

# Recipes Sharing Platform

## Overview

This is a Next.js project for sharing and discovering delicious recipes. It allows users to explore meals, join a community of foodies, and share their own favorite recipes. The platform is designed to be user-friendly and visually appealing, providing an engaging experience for food enthusiasts.

## Features

-   **Browse Meals**: Explore a variety of meals shared by the community.
-   **Community**: Join a community of food lovers.
-   **Share Recipes**: Share your own favorite recipes with the community.
-   **Meal Details**: View detailed information about each meal, including ingredients, instructions, and creator information.
-   **Image Slideshow**: Enjoy a slideshow of delicious food images on the homepage.
-   **User-Friendly Interface**: Intuitive design for easy navigation and use.

## Setup Instructions

Follow these instructions to set up the project locally:

### Prerequisites

-   Node.js (version 18 or higher)
-   npm or yarn
-   MongoDB

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/shodievSA/recipes-sharing-platform.git
    cd recipes-sharing-platform
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

### Configuration

1.  **Environment Variables:**

    Create a `.env.local` file in the root directory of the project. Add the following environment variables:

    ```
    MONGODB_URI=mongodb://localhost:27017
    MONGODB_DATABASE=next-level-food
    ```

    -   `MONGODB_URI`: The connection string for your MongoDB database. The default value is for a local MongoDB instance.
    -   `MONGODB_DATABASE`: The name of the MongoDB database to use. The default value is `next-level-food`.

    If you are using a cloud-based MongoDB service (e.g., MongoDB Atlas), update the `MONGODB_URI` with the appropriate connection string.

2.  **Database Setup:**

    The project uses MongoDB to store meal data. Ensure that MongoDB is installed and running on your local machine or that you have access to a MongoDB instance.

    If you need some initial data, use `initdb.mjs` to seed the database.

    ```bash
    node ./initdb.mjs
    ```

    This script will insert a set of meals into your MongoDB database.

### Running the Project

1.  **Start the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

2.  **Access the application:**

    Open your web browser and navigate to `http://localhost:3000` to view the application.

## Project Structure

The project structure is organized as follows:

-   `app/`: Contains the Next.js application code.
    -   `community/`: Contains the community page components.
    -   `meals/`: Contains the meals browsing and sharing page components.
    -   `page.js`: The home page component.
    -   `layout.js`: The root layout component.
    -   `globals.css`: Global CSS styles.
-   `components/`: Contains reusable React components.
    -   `images/`: Image-related components.
    -   `meals/`: Meal-related components.
    -   `main-header/`: Main header components.
    -   `image-picker.js`: Component for image selection.
    -   `loading.js`: Loading state component.
    -   `main-header-background.js`: Background component for the main header.
    -   `main-header.js`: Main header component.
    -   `meal-item.js`: Component for displaying individual meal items.
    -   `meals-grid.js`: Component for displaying a grid of meals.
    -   `nav-link.js`: Navigation link component.
    -   `submit-button.js`: Submit button component.
-   `lib/`: Contains utility functions and data fetching logic.
    -   `actions.js`: Server actions for form submissions.
    -   `getMeals.js`: Functions for fetching and saving meal data.
-   `public/`: Contains static assets such as images.
-   `.env.local`: Environment variables.
-   `next.config.js`: Next.js configuration file.
-   `package.json`: npm package file.
-   `README.md`: Project documentation.

## Dependencies

-   Next.js
-   React
-   MongoDB
-   slugify
-   xss

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue. If you would like to contribute code, please submit a pull request.

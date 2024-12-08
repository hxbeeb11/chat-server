
# Basic Chat Server

A basic chat server created using the React.js library, Vite as the framework, and Firebase (Google's backend service) for authentication and database management.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Firebase Configuration](#firebase-configuration)
- [File Descriptions](#file-descriptions)

---

## Overview

This project is a real-time chat application built using React.js, Vite, and Firebase. It allows users to authenticate via Google, send and receive messages in real-time, and store the messages in Firebase's Firestore database. The chat interface is simple and includes a list of messages with timestamps and a form to send new messages.

---

## Features

- **Google Authentication**: Users can sign in using their Google account to access the chat.
- **Real-Time Messaging**: Messages are updated in real-time using Firebase Firestore.
- **Message Timestamps**: Each message is displayed with a timestamp indicating when it was sent.
- **User Display Name**: The user's display name is shown alongside their message.

---

## Technologies Used

- **React.js**: JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server.
- **Firebase**:
  - **Authentication**: For Google sign-in functionality.
  - **Firestore**: For real-time database and storing messages.
- **Date-fns**: For formatting timestamps in a relative manner (e.g., "5 minutes ago").
- **CSS Modules**: For scoped and modular CSS styling.

---

## Getting Started

### Prerequisites

To run this application locally, you'll need:

- [Node.js](https://nodejs.org/) installed (v14 or higher recommended).
- A Firebase account to configure the Firebase project and obtain your Firebase credentials.
- A modern browser (Google Chrome, Firefox, etc.).

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/chat-server.git
   cd chat-server
   ```

2. **Install dependencies:**

   Using npm or yarn, install the required dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Set up Firebase:**

   - Go to [Firebase Console](https://console.firebase.google.com/).
   - Create a new Firebase project.
   - Enable Google Authentication in the Firebase console under "Authentication" -> "Sign-in method."
   - Add Firestore as the database under "Firestore Database."
   - Obtain the Firebase configuration from your Firebase console and save it in a `.env` file:

   ```plaintext
   VITE_API_KEY=your-api-key
   VITE_AUTH_DOMAIN=your-auth-domain
   VITE_PROJECT_ID=your-project-id
   VITE_STORAGE_BUCKET=your-storage-bucket
   VITE_MESSAGING_SENDER_ID=your-messaging-sender-id
   VITE_APP_ID=your-app-id
   ```

4. **Start the application:**

   Run the development server:

   ```bash
   npm run dev
   ```

   This will start the app on `http://localhost:3000`. Open this URL in your browser to see the app in action.

---



## Firebase Configuration

The Firebase configuration file `firebaseConfig` is stored in `.env` and provides the necessary credentials to connect your app with Firebase services (authentication and Firestore).

```js
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};
```

---

## File Descriptions

1. **`App.jsx`**: The main entry point for the application. It contains the logic for handling user authentication with Google and managing the state of the app based on whether the user is logged in or not.
2. **`Channel.jsx`**: Displays the list of messages and allows the user to send new messages. It listens to Firestore changes in real-time using Firebase's `onSnapshot` method.
3. **`Message.jsx`**: A component that represents an individual message. It displays the message text along with the sender's name and the message timestamp.
4. **`Button.jsx`**: A simple reusable button component used for signing in and signing out.

---




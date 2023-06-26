
# Jobbio Todo

This is a To Do fully responsive web application requested by Jobbio.

In this section, I will detail my experience developing this app and explain some of my decision-making throughout it.

I thought about creating it with Next JS, since SSR is the direction React is apparently moving for. However, this is still a relatively "new" concept and many companies do not yet use it. So, I decided to use React + Vite instead, which is still way faster than create-react-app and it is also recommended in the official React Docs.

I also decided to use TypeScript, since I believe it is crucial in the readability and maintenance of the code. I always try to do code in a way that other developers can easily understand and maintain.

Regarding the styling, at first, I thought about using Tailwind CSS, but decided to use Chakra UI for productivity reasons. I really wanted to deliver something with a good design.

For authentication forms, I used React Hook Form, which is a really good lib to deal with forms and avoid using too many states.

For authentication, I used Firebase Authentication.

For the database, I used the Firebase Firestore Database.

For state management, I wanted to display my skills so I decided to develop in two ways: I used Context API for everything authentication-related, and simple Props for dealing with Lists and Tasks.

This was a really fun project to develop, so please, feel free to ask me any questions.
## Run this project locally

Clone the project

```bash
  git clone https://github.com/cvbordalo/jobbio-to-do.git
```

Get to project folder

```bash
  cd jobbio-to-do
```

Install dependencies

```bash
  npm install
```

*Update .env file with firebase information

Start project

```bash
  npm run dev
```


## Environment variables

To run this project, you will need to add the following environment variables to your .env

`VITE_FIREBASE_API_KEY`

`VITE_FIREBASE_AUTHDOMAIN`

`VITE_FIREBASE_PROJECTID`

`VITE_FIREBASE_STORAGEBUCKET`

`VITE_FIREBASE_MESSAGINGSENDERID`

`VITE_FIREBASE_APPID`

## Stack

- React JS
- Vite
- TypeScript
- Firebase (Authentication and Firestore Database)
- Chakra UI
- React Hook Form
- React Router Dom
- Yup



## Features

- Sign In
- Sign Out
- Sign Up
- Create List
- Update List
- Delete List
- Create Tasks for Lists
- Update Tasks for Lists
- Delete Tasks for Lists
- Check for Task completed
- See how many tasks you created for each List
- See how many tasks you need do complete to finish a list


## Author

- [@cvbordalo](https://www.github.com/cvbordalo)


# Procode Take Home Test

This Repository is the take home test for Procode, in which the task was outlined as follows:

Create a TODO list application, where the user can Add, View and Delete Todo Items.

When starting the application the list should be empty. There should be a form for adding new TODOs, somewhere to view all TODOs and a way to tick off (ie. Remove) TODOs.

Typecript is the preferred language to complete this test in.

### Decisions
As part of the project I took the decision to sway from the brief, so that the application would have persistent data between sessions. I did this as it made the app feel more like a real functional app.

## Prerequisites

Before you get started, make sure you have the following installed on your machine:

- **Node.js** (recommended version: 16.x or later)
- **xCode** (If building for iOS)
- **Android Studio** (If building for Android)

## Cloning the Repo

To get started, clone the repository to your local machine by running:
```bash
git clone https://github.com/ChrisHargrove/Procode-Take-Home.git
```

Then, navigate into the project directory.

## Installing Dependencies

Once you’ve cloned the repo, install the project dependencies by running:
```bash
npm install
```

or if you prefer using **Yarn**:
```bash
yarn install
```

## Running the Project (Expo Go)

After installing the dependencies, you can start the Expo development server by running:
```bash
yarn start
```

This will open a new page in your default web browser with a QR code. Scan the QR code using the **Expo Go app** (available on the App Store or Google Play) to run the project on your physical device.

Alternatively, you can press `i` to run the project on an iOS simulator (macOS only) or `a` to run it on an Android emulator.

## Running the Project (Development Build)

After installing the dependencies, you can start the Expo development server by running:
```bash
yarn ios
```
or
```bash
yarn android
```

## Troubleshooting

- If you encounter any issues with Expo or dependencies, try running `expo doctor` for troubleshooting tips.
- If you need to reset the cache, you can run:
  expo start -c

## Contributing

Feel free to fork the repository, make changes, and create pull requests. If you have any questions or need clarifications, feel free to reach out.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

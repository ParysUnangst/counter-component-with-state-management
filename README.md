React Counter App
This is a simple React application that demonstrates the concepts of state management, asynchronous state updates, and the concept of state as a snapshot.

Overview
The Counter app consists of a single component, Counter, which displays a count and provides four buttons to manipulate the count:

Increment: Increases the count by 1.
Increment After Delay: Increases the count by 1 after a 2-second delay.
Increment Twice: Attempts to increment the count by 2 immediately.
Correct Increment Twice: Correctly increments the count by 2 using a state updater function.

Installation
To run the Counter app locally, follow these steps:

Clone this repository to your local machine:
git clone https://github.com/ParysUnangst/counter-component-with-state-management.git

Navigate to the project directory:
cd react-counter-app

Install dependencies using npm or yarn:
npm install
or

yarn install

Run the development server:
npm start

or

yarn start

Open your web browser and visit http://localhost:3000 to view the Counter app.


How It Works

The Counter component manages the count state using the useState hook provided by React. It provides four buttons, each with specific functionality:

Increment: Increments the count by 1 using the functional form of setCount.

Increment After Delay: Uses setTimeout to delay the increment operation by 2 seconds. After the delay, it updates the count similar to the Increment button.

Increment Twice: Attempts to increment the count by 2 immediately. However, due to React's batching mechanism, calling setCount multiple times in succession like this doesn't guarantee that the state will be updated by 2 each time.

Correct Increment Twice: Correctly increments the count by 2 using a state updater function. The state updater function receives the previous state as an argument and returns the new state based on that previous state.

Testing and Experimentation

Click on each button to test its functionality.
Observe the behavior of the count value and how it changes with different button clicks.
Experiment with clicking the buttons in quick succession and observe how React batches updates.
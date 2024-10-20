#Angular Template-driven form Login & Sign Up Page
This project demonstrates a simple login page built using Angular template-driven forms. It includes input fields for "Email or Mobile" and "Password," both of which are validated. The form ensures that users cannot submit until all the required fields are filled in correctly. For instance, the password must be at least 10 characters long, and both fields are marked as invalid if they are empty or do not meet the criteria.

Features:
Form Validation:

The login form uses Angular's template-driven approach to validate the email/mobile and password fields.
Fields are required, and the password must be a minimum of 10 characters.
Error messages are shown dynamically when fields are submitted with invalid input.
Dynamic CSS Class:

Classes are dynamically added based on validation status, highlighting invalid fields in red.
User-friendly Error Messages:

Users are prompted with appropriate error messages, helping them understand why their input is invalid.

Sign-Up Page with Validation
This project also features a sign-up page that allows users to create a new account with essential input validation. The sign-up form includes fields for first name, surname, mobile number or email address, password, date of birth, and gender. Each field is validated to ensure that users provide the required information before submission.

Features:
Comprehensive Form Validation:

The sign-up form checks that all required fields are filled in correctly.
The password must meet a minimum length requirement (at least 10 characters).
Users are notified with specific error messages for each invalid input, guiding them to correct their mistakes.
Dynamic Error Display:

Error messages appear next to the relevant input fields after the user attempts to submit the form, enhancing the user experience by providing instant feedback.
Gender Selection:

Users can select their gender using radio buttons, which also include validation to ensure a selection is made.
Date of Birth Input:

The form includes dropdowns for selecting the date, month, and year of birth, ensuring users provide their birthdate in a standardized format.

![Screenshot (24)](https://github.com/user-attachments/assets/b706ad52-e65b-432f-ae81-0f6cb33686e9)


![Screenshot (25)](https://github.com/user-attachments/assets/d95db265-966b-4511-aea4-32c843f84c35)



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

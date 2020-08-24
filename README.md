# Javascript Password Generator

## Project Description

I was tasked with creating a password generator using JavaScript.  This randomly generated password was requested to meet various criteria.  This included a functioning button to generate the password and a series of prompts to specify the type of characters to be in the password.

### My Process/Steps

My first step was to assign variables to each character that can potentially be populated in the resulted password.  This included lowercase characters, uppercase characters, numbers, and special characters.  I entered these characters in arrays.

Next, I worked on the main function of the password generator.  I created an alert to make sure the user selects a password length between 8 and 128.  Afterwards, I created confirm questions for each type of character the user would choose to have in the resulted password.  These questions are connected to if statements that I concatenated.  

The next step involved creating a 'for loop' from the concatenated array and then using a Math.floor and Math.random to produce a password sequence based on the user's selection criteria.

After my 'initial commit', I tested the 'Generate Password' button.

## Website link

https://edonohue8.github.io/javascript-pw-generator/

## Screenshot of Website Page

* **index**
![](readme-images/index.jpg)

## Author

* **Eric Donohue**

# Talking Clock APP

This module generates the human-readable version of the time in multiple languages. Currently supported English and French. 

## Technical stack
- Node Js `>12.22.0` 
- Express Js - API
- Jest - Unit test
- Supertest - API test
- Eslint - Clean code
- Git Action - CI
- yarn

## Step to run the application

``` sh
  # Install the node modules and build sub-modules
  yarn  

  # Run objective 1 - show the current time as human-readable
  yarn talk

  # Run objective 2 - Pass an argument as a time string to get as human-readable 
  yarn talk 16:30

  # Run objective 3 - Server the API server
  yarn serve-api
```

## Instructions to run the API
Default: http://localhost:3000/api/v1/clock/en/talk/ \
With time param: http://localhost:3000/api/v1/clock/en/talk/16:30


## Use vs-code rest clint 

**Install REST Client in VS Code** \
Search `REST Client (or https://marketplace.visualstudio.com/items?itemName=humao.rest-client)` 

Go to [rest.http](./rest.http) file


# FAQ:

## 1. If yarn install throwing issue of node version not compatible
```sh
  #Try
  yarn --ignore-engines
```
## 2. How is the principle used to write the code?
The code is written in Javascript using Object Oriented Programming (OOP) and the es6 class. Most of the code uses the SOLID principle. You will find the use of the Single responsibility model, Open-Close, Dependency Inversion most.

## 3. How you can understand the folder structure?
/lib - is the logic for talking-clock \
-- /bin - this code is for CLI use \
-- /src - folder content all the logic \
------ /core - logics\
------ /langs - multiple language support \
------ /utils \
------ index.js - Entry point   
-- /test - unit test is written \
/api - use /lib logic to serve as API \

## 4. Why /lib and /api folder has a package.json
These are sub-modules inside an application.

## 5. How /api get access to /lib code (taking-clock)
We link `/lib` code `npm link ../lib` which make that accessible as a module. 
you can use this `const talk = require("talking-clock").default`

## 6. More details about lib code?
- Create a ClockType - ClockType (24hr) and Language (en) 
- Validate input
- Process the input and create formatted data
- Pass the data to the language template 
- print the text 
## 7. How best represent the lib core in diagram?
```
                                      |--> Validator
TalkingClock.js <- ClockType(24hr) <- |
                                      |--> Formatter <-- Langs
                                              ^
                                              |
                                           Processor
```
TakingClock.js is the entry point and ClockType(24hr) as the argument. Every Clock type should expose `talk()` method. If a new format needs to introduce then you can create a new `ClockType class` with the same type `validator`, `processor`, `formatter`, and `lang templates`. 



# Contribution
After implementing a new feature, run the below command to check your code is working.
```sh
  # Run the code
  yarn start
  
  # Run Unit test
  yarn test
 
  # Run Linting
  yarn lint
```
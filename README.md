# Talking Clock APP
Required node version: `>12.22.0`

## Step to run the application

``` sh
  # Install the node modules and build sub-modules
  yarn  

  # Run objective 1 - No param take show current time in word
  yarn talk

  # Run objective 2 - Pass time param and get in word
  yarn talk 16:30

  # Run objective 3 - Server the API server
  yarn serve-api
```

## Instructions to run the API
Default         : http://localhost:3000/api/v1/clock/en/talk/

With time param : http://localhost:3000/api/v1/clock/en/talk/16:30


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
These are sub-modules inside a application.

## 5. How /api get access to /lib code (taking-clock)
We link `/lib` code `npm link ../lib` which make that accessible as a module. 
you can use this `const talk = require("talking-clock").default`

## 6. More details about lib code?
- Create a ClockType - ClockType (24hr) and Language (en) 
- Validate input
- Process the input and create formatted data
- Pass the data to language template 
- print the text 


# Contribution
After make changes
```sh
  # Run the code
  yarn start
  
  # Run Unit test
  yarn test
 
  # Run Linting
  yarn lint
```
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
  yarn serve
 
```

## Instructions to run the API
Default         : http://localhost:3000/api/v1/clock/eng/talk/

With time param : http://localhost:3000/api/v1/clock/eng/talk/16:30


## Use vs-code rest clint 

**Install REST Client in VS Code** \
Search `REST Client (or https://marketplace.visualstudio.com/items?itemName=humao.rest-client)` 

Go to [rest.http](./rest.http) file
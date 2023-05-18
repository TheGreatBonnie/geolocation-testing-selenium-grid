# Geolocation Testing Selenium Grid

This repo contains sample code for running automated geolocation tests at scale on an online Selenium Grid using Jasmine.

## Running The Tests
Step 1: Git clone the repo.
```
https://github.com/TheGreatBonnie/geolocation-testing-selenium-grid.git
```

Step 2: Navigate into jasmine-integration-testing folder.
```
cd jasmine-integration-testing
```

Step 3: Run the npm install command to install the dependencies.
```
npm install
```
Step 4: To run thes tests, run the commands below on the command line.
```
npx jasmine spec/Geolocation/newyork.spec.js && npx jasmine spec/Geolocation/berlin.spec.js && npx jasmine spec/Geolocation/nairobi.spec.js && npx jasmine spec/Geolocation/sydney.spec.js
```

Once the commands run, you should see on your command line that the tests have passed successfully.
![image](https://github.com/TheGreatBonnie/geolocation-testing-selenium-grid/assets/40994473/05eea240-b244-4f11-a6bb-fa35c7bf68c7)


Follow *Using React Virtual DOM To Improve Web Application Performance* blog to learn more.

## Note
Automated geolocation tests are run at scale on [LambdaTest Cloud Selenium Grid](http://www.lambdatest.com?fp_ref=bonface17).

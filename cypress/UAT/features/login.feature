Feature: Login

Scenario Outline: Validating the Login for multiple users

Given user open browser and enter url

When enter username as <username>

And enter password as <password>

Then loging should be successful

Example: 
    |username|password |
    |ADmin   |Admin123 |
    |admin   |passs    |
    |Admin   |admin123 |
    |admin   |admin123 |
    |        |         |
Feature: Body Mass Index

   A visitor can calculate the body mass index
   given the mass and height of the user

    Scenario: User calculates their BMI
        Given they fill in their weight and height
        Then they are presented with their BMI

    Scenario: User logs in
        Given I'm a registered user
        When I submit my credentials
        Then I should be logged in
Feature: Body Mass Index

   A visitor can calculate the body mass index
   given the mass and height of the user

    Scenario: User calculates their BMI
        Given the user is logged in
        When they fill in their weight and height
        Then they are presented with their BMI
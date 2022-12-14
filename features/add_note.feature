Feature: This is an imaginary feature which might include cool tests about the app that I am imaginarily developing

    This is a simple todo list

    Scenario: Add note
        Given john wick is on the homepage
        And john wick filled the title as "study computer networking"
        And john wick filled the description as "exam tomorrow"
        And john wick chooses the color green
        When john wick clicks the button Add Note
        Then john wick should see a new green note
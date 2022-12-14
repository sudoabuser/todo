Feature: This is an imaginary feature which might include cool tests about the app that I am imaginarily developing

    This is a simple todo list

    Scenario: Listing notes with same colors
        Given there are 2 purple 1 green notes
        When john wick sorts purple notes
        Then john wick should see only 2 purple notes

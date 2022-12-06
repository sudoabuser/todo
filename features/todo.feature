Feature: todo list

    This is a simple todo list

    Scenario: Add note
        Given john wick is on the homepage
        And john wick filled the title as "study computer networking"
        And john wick filled the description as "exam tomorrow"
        And john wick chooses the color green
        When john wick clicks the button Add Note
        Then john wick should see a new green note

    Scenario: Delete note
        Given there is just one green note added
        When john wick hovered the note, clicked delete and accepted the dialog
        Then john wick should see no notes yet warning

    Scenario: Listing notes with same colors
        Given there are 2 purple 1 green notes
        When john wick sorts purple notes
        Then john wick should see only 2 purple notes

# Scenario: Listing all the colors
Feature: This is an imaginary feature which might include cool tests about the app that I am imaginarily developing

    This is a simple todo list

    Scenario: Delete note
        Given there is just one green note added
        When john wick hovered the note, clicked delete and accepted the dialog
        Then john wick should see no notes yet warning

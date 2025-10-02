Feature: Join Game

  Scenario: Successful game join
    Given a user is on the Join Game page
    When the user click label "Player Name" and input "Alice"
    And the user click label "Game ID" and input "G001"
    And the user clicks the "Join" button
    Then the user should be taken to the game lobby

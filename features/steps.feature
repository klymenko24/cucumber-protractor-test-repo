Feature: Login to the system as a Manager and add new customer

  Scenario: Open page and login
    Given I open page
    When  I choose manager account

  Scenario Outline: Creating new customer with valid data
    When I choose Add Customer
    When I enter "<First_Name>" in First name field
    And I enter "<Last_Name>" in Last name field
    And I enter "<Post_Code>" in Post code field
    And Click add customer btn
    Then I check "Customer added successfully" text in alert message
    When Close alert message


    Examples:
      | First_Name | Last_Name | Post_Code |
      | Tolya      | Potter    | 31071980  |
      | Tolya     | Potter2   | 31071981  |
      | Tolya    | Potter2   | 31071982  |



#Scenario: Checking data in a table
# When Click customer button
#Then Check user in table
#When Delete user
# Then Check user not in table

#Examples:
# | First Name | Last Name | Post Code |
# | Tolya      | Potter    | 31071980  |


  #Scenario: Creating new customer with valid data
   # When I choose Add Customer
   # When I able to add customer from the list
  #  | First Name| Last Name| Post Code|
  #  | Tolya | Potter| 31071980 |
    

   # And Click add customer btn
  # Then Check text in alert message
   # When Close alert message








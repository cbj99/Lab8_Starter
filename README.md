# Lab 8 - Starter
## 1) Where would you fit your automated tests in your Recipe project development pipeline? 
Within a Github action that runs whenever code is pushed. If the tests are handed over to GitHub action, developers will have more time to concentrate on developing and improving their projects.
## 2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)
No
## 3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
No. Because message feature contains two parts: write and send. The scale is be too big so that it might affect the non-related part or execute slowly.
## 4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
Yes. Because “max message length” has small scale, and it is easy for us to test it.
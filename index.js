// Create a record keeping application, used for time cards

function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
  let testEmployee = {
    firstName: firstName,
    familyName: familyName,
    title: title,
    payPerHour: payPerHour,
    timeInEvents: [],
    timeOutEvents: [],
  }
  return testEmployee;
}

function createEmployeeRecords() {
    let twoRows = [
      ["moe", "sizlak", "barkeep", 2],
      ["bartholomew", "simpson", "scamp", 3]
      ]
  }
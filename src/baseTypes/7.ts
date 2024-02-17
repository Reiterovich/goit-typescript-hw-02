/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum UserResponse {
  Monday = 1,
  Tuesday = 1,
  Wednesday = 1,
  Thursday = 1,
  Friday = 1,
  Saturday = 0,
  Sunday = 0,
}

function isWeekend(day: UserResponse): boolean {
  if (day === 1) {
    return false;
  }
  {
    return true;
  }
}

isWeekend(UserResponse.Friday);

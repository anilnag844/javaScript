// ==================== Check Speed ====================

// -------------------- Quick Summary (For Revision) --------------------
// - Speed limit: 70 km/h; every 5 km/h over the limit = 1 demerit point
// - Within 5 km/h of the limit (< 75) is still considered 'Ok'
// - 12 or more points → 'License suspended'
// - Math.floor() used to get whole demerit points only
// - Early return pattern: handle the simple case first, then the complex logic

// -------------------- Implementation --------------------
function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  // speeds below 75 (within the 5 km/h buffer) are still Ok
  if (speed < speedLimit + kmPerPoint) {
    return 'Ok';
  }

  const points = Math.floor((speed - speedLimit) / kmPerPoint);

  if (points >= 12) {
    return 'License suspended';
  }

  return `Points: ${points}`;
}

// -------------------- Test Cases --------------------
console.log(checkSpeed(70));  // 'Ok'               — at the limit
console.log(checkSpeed(74));  // 'Ok'               — within 5 km/h buffer
console.log(checkSpeed(75));  // 'Points: 1'        — just over the buffer
console.log(checkSpeed(130)); // 'Points: 12'       — boundary: exactly 12 points
console.log(checkSpeed(131)); // 'License suspended'— just over 12 points
console.log(checkSpeed(200)); // 'License suspended'— well over limit

// ==================== End of Check Speed ====================

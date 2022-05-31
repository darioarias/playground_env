/**
 * Given an array of time strings times, return the smallest difference between any two times in minutes.
 *
 * Example:
 * Input: ["00:03", "23:59", "12:03"]
 * Output: 4
 * Input: The closest 2 times are "00:03" and "23:59" (by wrap-around), and they differ by 4 minutes.
 *
 * Constraints:
 * All strings will be non-empty and in the format HH:mm
 */

const solution = (times = []) => {
  const seen = Array(24 * 60).fill(false);
  const timeToInt = (time) => {
    //(hours * 60) + minutes
    let [hours, minutes] = time.split(":");
    return (hours - "0") * 60 + (minutes - "0");
  };

  for (let time of times) {
    let time_mapped = timeToInt(time);
    if (seen[time_mapped]) return 0;
    seen[time_mapped] = true;
  }

  let prev = -1,
    first = -1,
    minDiff = 24 * 60 + 1;
  for (let i = 0; i < seen.length; i++) {
    if (seen[i]) {
      if (prev != -1) {
        minDiff = Math.min(minDiff, i - prev);
      } else first = i;
      prev = i;
    }
  }
  minDiff = Math.min(minDiff, first + (24 * 60 - prev));
  console.log(prev, first, minDiff);
  return minDiff;
};

const solution_01 = (times = []) => {
  if (times.length < 2) return null;
  const timeToInt = (time) => {
    const [hours, mins] = time.split(":");
    return (hours - "0") * 60 + (mins - "0");
  };

  const intToTime = (minutes) => {
    const format = (time) => (`${time}`.length == 1 ? `0${time}` : time);
    return `${format(Math.floor(minutes / 60))}:${format(minutes % 60)}`;
  };

  const clock = new Array(24 * 60).fill(false);
  for (let time of times) {
    let time_map = timeToInt(time);
    if (clock[time_map]) return 0;
    clock[time_map] = true;
  }

  let minDiff = Infinity;
  let prev_time = -1,
    first;
  for (let i = 0; i < clock.length; i++) {
    if (clock[i]) {
      if (prev_time !== -1) {
        minDiff = Math.min(minDiff, i - prev_time);
      } else first = i;
      prev_time = i;
    }
  }
  // console.log(prev_time, first, minDiff);
  // console.log(clock);
  // console.log(clock, timeToInt("23:59"));
  // console.log(clock);
  minDiff = Math.min(minDiff, 24 * 60 - prev_time + first);
  console.log("difference |", intToTime(minDiff));
  return minDiff;
};
console.log(solution_01(["06:30", "23:59", "12:03"]));
// console.log(solution(["00:03", "23:59", "12:03"]));

/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */

var sumEvenAfterQueries = function (nums, queries) {
  let sum = 0;
  nums.forEach((num) => (sum += num % 2 === 0 ? num : 0));
  const response = [];
  for (const query of queries) {
    const index = query[1];
    const value = query[0];
    const originalValue = nums[index];
    nums[index] += value;
    sum -= originalValue % 2 === 0 ? originalValue : 0;
    sum += nums[index] % 2 === 0 ? nums[index] : 0;
    response.push(sum);
  }
  return response;
};
console.log(
  sumEvenAfterQueries(
    [1, 2, 3, 4],
    [
      [1, 0],
      [-3, 1],
      [-4, 0],
      [2, 3],
    ]
  )
);

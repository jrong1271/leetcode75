// Difficulty: Easy
//
// Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.
// For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them.
// Notice that multiple kids can have the greatest number of candies.
//
// Constraints:
// 2 <= candies.length <= 100
// 1 <= candies[i] <= 100
// 1 <= extraCandies <= 50
//
// Example 1:
// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true]
// Explanation:
// Kid 1 has 2 candies and if he or she receives all extra candies (3) will have 5 candies --- the greatest number of candies among the kids.
// Kid 2 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids.
// Kid 3 has 5 candies and this is already the greatest number of candies among the kids.
// Kid 4 has 1 candy and even if he or she receives all extra candies will only have 4 candies.
// Kid 5 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids.
//
// Example 2:
// Input: candies = [4,2,1,1,2], extraCandies = 1
// Output: [true,false,false,false,false]
// Explanation: There is only 1 extra candy, therefore only kid 1 will have the greatest number of candies among the kids regardless of who takes the extra candy.
//
// Example 3:
// Input: candies = [12,1,12], extraCandies = 10
// Output: [true,false,true]
// Explanation: Kid 1 has 12 candies and if he or she receives all extra candies will have 22 candies, making him or her the kid with the greatest number of candies.
// Kid 2 has 1 candy and even if he or she receives all extra candies will only have 11 candies.
// Kid 3 has 12 candies and if he or she receives at least 10 extra candies will have the greatest number of candies among the kids.
//
// Plan: find the max number of candies, then check if the current number of candies plus the extra candies is greater than or equal to the max number of candies
// Time complexity: O(n)
// Space complexity: O(n)
// Tags: Array

export function kidsWithCandies(
  candies: number[],
  extraCandies: number,
): boolean[] {
  const max = Math.max(...candies);
  const result: boolean[] = [];
  for (let i = 0; i < candies.length; i++) {
    result.push(candies[i] + extraCandies >= max);
  }
  return result;
}

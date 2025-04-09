export function candy(ratings: number[]): number {
  const n: number = ratings.length;

  // Initialize candies array with 1 candy per child (rule 1)
  const candies: number[] = new Array(n).fill(1);

  // Left to right pass:
  // If the current child has a higher rating than the previous,
  // give them one more candy than the previous.
  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }

  // Right to left pass:
  // If the current child has a higher rating than the next,
  // make sure they have more candies than the next.
  // Use max to avoid overwriting a previous increase.
  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }

  // Sum all candies and return total
  const totalCandies: number = candies.reduce((sum, c) => sum + c, 0);
  return totalCandies;
}

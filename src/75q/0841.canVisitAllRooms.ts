// Difficulty: Medium
// Related topics: Graph
// description: There are n rooms labeled from 0 to n - 1 and all the rooms are locked except for room 0. You are given an array rooms of size n where rooms[i] is a list of keys that are present in the ith room, and each key is an integer in the range [0, n - 1]. Some keys are for the same room, and some keys may be for other rooms. You should be able to visit all rooms starting from room 0 by visiting the rooms in the right order, i.e., you should visit room 0 first, then room 1, then room 2, and so on. You cannot enter a room without visiting the room you have the key for. Return true if you can visit all the rooms, or false otherwise.
// Example 1: Input: rooms = [[1],[2],[3],[]] Output: true Explanation: We start in room 0, and pick up key 1. We then go to room 1, and pick up key 2. We then go to room 2, and pick up key 3. We then go to room 3. Since we were able to go to every room, we return true.
// Example 2: Input: rooms = [[1,3],[3,0,1],[2],[0]] Output: false Explanation: We can not enter the room with number 2.
// Constraints: n == rooms.length 2 <= n <= 1000 0 <= rooms[i].length <= 1000 1 <= sum(rooms[i].length) <= 3000 0 <= rooms[i][j] < n All the values of rooms[i] are unique.
// plan: use depth first search to visit all rooms
// time complexity: O(n)
// space complexity: O(n)
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
export function canVisitAllRooms(rooms: number[][]): boolean {
  const visited = new Set<number>();
  function dfs(i: number) {
    if (visited.has(i)) return;
    visited.add(i);
    for (const j of rooms[i]) {
      dfs(j);
    }
  }
  dfs(0);
  return visited.size === rooms.length;
}

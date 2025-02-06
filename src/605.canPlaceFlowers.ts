export function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let count = 0;

  if (Math.max(...flowerbed) === 0) {
    if (flowerbed.length <= 2) {
      count += 1;
    }
  }
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] !== 0) {
      continue;
    }
    // handle [0]
    if (flowerbed.length === 1 && i === 0) {
      count++;
      break;
    }
    // handle [0, 0]
    if (flowerbed.length === 2 && i === 0 && flowerbed[i + 1] === 0) {
      count++;
      break;
    }
    // handle [0, 0, 0]
    if (
      i === 0 &&
      flowerbed[i + 1] === 0 &&
      flowerbed[i + 2] === 0 &&
      flowerbed.length === 3
    ) {
      count += 2;
      break;
    }

    if (i === 0 && flowerbed[i + 1] === 0) {
      count++;
      i += 2; // skip next
      continue;
    }

    if (
      flowerbed[i] === 0 &&
      flowerbed[i + 1] === 0 &&
      (flowerbed[i + 2] === 0 || i + 2 === flowerbed.length)
    ) {
      count++;
      i += 1; // skip next
    }
  }
  if (count >= n) return true;
  else return false;
}

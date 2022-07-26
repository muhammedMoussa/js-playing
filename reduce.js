// 1pt every even number.
// 3pt every odd number except 5.
// 5pt every 5.

const list = [1, 2, 3, 4, 5]; // 13

let final = (list) => list.reduce((prev, current) => {
  if (current % 2 === 0) {
    return prev + 1;
  }

  if (current % 1 === 0 && current !== 5) {
    return prev + 3;
  }

  if (current === 5) {
    return prev + 5;
  }
}, 0);

console.log(final(list));

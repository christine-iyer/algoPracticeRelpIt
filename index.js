function birthDayMonth(s, d,m) {
  let count = 0;
  let sum = 0; 
  s = [];
  // given elements of an array, consecutively additively iterate through them 
  for(let i = 0; i<m; i++) {
    sum += s[i]
  }
  if (sum === d) {
    count++
  }
  for (let i = m; i < s.leghth; i++){
    console.log(i + ' ' + sum)
    console.log(i + ' ' + count)
  }
}

console.log(birthDayMonth([1,6,19,0,6,7],27,3))

function bouncingBall(h, bounce, window) {
  //'h = 30.0, bounce = 0.66, window = 1.5' result = 15
  //if(h > 0 && bounce >= 0 && bounce < 1 && window < h) return num > 0
  // else return -1
  //use a while loop , h > window increment the count by 1
  var rebounds = -1;
  if (bounce > 0 && bounce < 1)
    while (h > window) (rebounds += 2), (h *= bounce);
  return rebounds;
}
console.log(bouncingBall(30, 0.66, 1.5));

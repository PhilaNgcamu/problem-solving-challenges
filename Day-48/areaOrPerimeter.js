const areaOrPerimeter = function (l, w) {
  // if(l === w) return l * w else return length*2 + width*2
  return l === w ? l * w : 2 * (l + w);
};

//1.How can we restate the problem, in your own words?
// if a polygon is a square return the area, else if its a rectangle return the perimeter

//2. What are the inputs that go into the problem?
// l= length, w= width

//3. What should the output look like from the inputs we have? (Do we understand how the solution would look like?)
// input: l = 6, w = 6 --> 6 * 6 (same number) or l = 5, w = 6 --> 5*2 + 6*2
//4. Break down the problem (pseudocode)

//5. refactor the solved problem (if possible)

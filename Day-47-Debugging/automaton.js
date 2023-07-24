// function automaton(e) {
// 	if (typeof e === "string") {
// 		return e.replace(/[^aeiou]/gi, "").length;
// 	}
//   else if (typeof e === "number") {
// 	  if (Math.round(e) !== e) return false;

// 		for (let i = 2; i <= e; i++) {
//       console.log(e)
//       if (e % i === 0 && i !== e) return false;
//     }

// 		return true;
// 	} else if (typeof e === "object") {
// 		const a = {};
//     console.log(e)
//     let i = 0;
// 		for (const value in e){
//       a[Object.values(e)[i]] = value
//       i++
//     }
//       console.log(a);
// 		return a;
// 	}
// }
// //1.How can we restate the problem, in your own words?

// //2. What are the inputs that go into the problem?

// //3. What should the output look like from the inputs we have? (Do we understand how the solution would look like?)

// //4. Break down the problem (pseudocode)
// //--do we have any errors on our given code (line by line / block of code)? How do we fix that?
// //--then code (if the problem is difficult, let's come up with examples to solidify our understanding)

// //5. refactor the solved problem (if possible)

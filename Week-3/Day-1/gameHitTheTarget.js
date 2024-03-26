const solution = (mtrx) => {
  for (let i = 0; i < mtrx.length; i++) {
    for (let j = 0; j < mtrx[i].length; j++) {
      if (mtrx[i][j] === ">") {
        console.log(mtrx[i], mtrx[i].indexOf("<"), mtrx[i].indexOf("x"));
        return mtrx[i].indexOf(">") < mtrx[i].indexOf("x");
      }
    }
  }
};

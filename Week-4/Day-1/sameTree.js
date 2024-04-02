var isSameTree = function (p, q) {
  //Check if they are both empty
  if (!p && !q) {
    return true;
  } else if ((!p && q) || (!q && p)) {
    return false;
  }
  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
};

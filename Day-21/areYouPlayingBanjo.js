// Codewars > Are You Playing Piano?
function areYouPlayingBanjo(name) {
  if (/[rR]/.test(name[0])) return name + " plays banjo";
  return name + " does not play banjo";
}
console.log(areYouPlayingBanjo("Adam"));

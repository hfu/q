const q = function(v) {
  for(let i = 0; true; i++) {
    if(v / (2 ** i) < 1) return i - 1
  }
} // may subject to change

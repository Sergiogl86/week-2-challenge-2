/*
NaN	NaN	false	// Rule Exception
0	-0	true	// Rule Exception
-0	0	true	// Rule Exception
*/

function strictEquals(a, b) {
  if (Object.is(a, NaN) && Object.is(NaN, b)) {
    return false;
  }
  if (Object.is(a, 0) && Object.is(-0, b)) {
    return true;
  }
  if (Object.is(a, -0) && Object.is(0, b)) {
    return true;
  }
  return Object.is(a, b);
}

console.log(strictEquals(-0, 0));

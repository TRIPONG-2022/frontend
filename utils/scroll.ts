export function createRAF(callback: () => void) {
  let rAFId: number = 0;
  function rAFFunc() {
    rAFId = requestAnimationFrame(callback);
  }

  return { rAFId, rAFFunc };
}

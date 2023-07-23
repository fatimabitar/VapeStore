
const counterAnim = (qSelector, start = 0, end, duration = 500) => {
 const target = document.querySelector(qSelector);
 let startTimestamp = null;
 const step = (timestamp) => {
  if (!startTimestamp) startTimestamp = timestamp;
  const progress = Math.min((timestamp - startTimestamp) / duration, 1);
  target.innerText = Math.floor(progress * (end - start) + start);
  if (progress < 1) {
   window.requestAnimationFrame(step);
  }
 };
 window.requestAnimationFrame(step);
};
//#endregion - end of - number counter animation

document.addEventListener("mouseenter", () => {
 counterAnim("#count1", 10, 300, 1000);
 counterAnim("#count2", 300, 820, 500);
 counterAnim("#count3", 20, 79, 2000);
 counterAnim("#count4", 500, 60, 2500);
});

/*
┏━━━━━━━━━━━┓
┃ TIME TAG  ┃
┗━━━━━━━━━━━┛
*/
document.querySelectorAll("time").forEach(el => {
  if (!el.dateTime) return;
  const date = new Date(el.dateTime);
  if (isNaN(date)) return;
  const format = el.dataset.format || "full";

  let options;

  switch (format) {
    case "full":
        options = {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        };
        break;
    case "date":
        options = {
            day: "2-digit",
            month: "short",
            year: "numeric",
        };
        break;
  }

//   const formatted = new Intl.DateTimeFormat(undefined, {
//     day: "2-digit",
//     month: "short",
//     year: "numeric",
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit"
//   }).format(date);

  el.textContent = new Intl.DateTimeFormat(undefined, options).format(date);
});

var list = document.getElementById('blogs');
var blogout = document.getElementById('blogout');

blogout.innerText = list.children.length;
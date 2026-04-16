/*
┏━━━━━━━━━━━┓
┃ TIME TAG  ┃
┗━━━━━━━━━━━┛
*/
document.querySelectorAll("time").forEach(el => {
  if (!el.dateTime) return;

  const date = new Date(el.dateTime);
  if (isNaN(date)) return;

  const formatted = new Intl.DateTimeFormat(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }).format(date);

  el.textContent = formatted
});
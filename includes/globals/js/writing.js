var list = document.getElementById('blogs');
var blogout = document.getElementById('blogout');

blogout.innerText = list.children.length;

async function loadChangelog() {
const res = await fetch("../globals/js/changes.json");
const changelogData = await res.json();
const html = changelogData.map(entry => `
    <h4>
    <time
        data-format="date"
        dateTime="${entry.dateTime}">
        ${entry.dateText}
    </time>
    </h4>

    <ul>
    ${entry.changes.map(change => `
        <li>${change}</li>
    `).join("")}
    </ul>
`).join("");

document.getElementById("changelog").innerHTML = html;
formatTime();
}

function formatTime() {
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

        el.textContent = new Intl.DateTimeFormat(undefined, options).format(date);
    });
}

loadChangelog();
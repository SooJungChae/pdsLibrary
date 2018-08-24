/*-----------------------------------
    This is "pdsDatatime" library
    Author : SooJung Chae
    Developer Date : 2018-08-17
 ----------------------------------*/
const defaults = {
    styles: {
        width: 100
    }
};

const initialize = (obj, styles) => {
    let p = document.getElementById(obj.id);
    let today = new Date();
    let dateFormat = today.getFullYear() + "-"
                + today.getMonth() + "-"
                + today.getDate();

    // create input element
    let newElement = createElement("input", "pds-datetime-input", dateFormat);
    let newElementStyle = newElement.style;
    newElementStyle.width = styles.width + "px";
    newElementStyle.height = styles.height + "px";
    p.appendChild(newElement);

    // create datetime button element
    newElement = createElement("button", "pds-datetime-input", "select date");
    newElement.className = "pds-datetime-button";
    newElement.addEventListener("click", (e) => {
        console.log('calenaer toggle');
        createCalendar(p);
        // innerHtml
    });

    p.appendChild(newElement);
}

const createCalendar = (parent) => {
    let calendarWrap = document.createElement("div");
    let calendar = document.createElement("table");

    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");
    let tr, td, th, dateDiv, dateSpan;

    // thead
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    days.forEach((day) => {
        th = document.createElement("th");
        th.innerHTML = day;
        thead.appendChild(th);
    });

    // tbody
    let today = new Date();
    let startFullDate = new Date(today.getFullYear(), today.getMonth(), 1);
    let lastFullDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    let lastDate = lastFullDate.getDate();
    // 6 이면 다음줄 이동.

    let startDay = startFullDate.getDay();
    let cnt = 1;

    while (cnt <= lastDate) {
        tr = document.createElement("tr");
        for (let date = 0; date < 7; date++) {
            td = document.createElement("td");
            dateDiv = document.createElement("div");
            dateDiv.className = "pds-calendar-date";
            dateSpan = document.createElement("span");

            if (startDay <= date) {
                dateSpan.innerHTML = cnt++;
            }

            dateDiv.appendChild(dateSpan);
            td.appendChild(dateDiv);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
        startDay = 0;
    }

    calendar.appendChild(thead);
    calendar.appendChild(tbody);
    calendarWrap.appendChild(calendar);
    parent.appendChild(calendarWrap);
}

const createElement = (elementTag, elementId, html) => {
    let newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);

    // Set value
    if (elementTag == "input") {
        newElement.value = html;
        newElement.setAttribute("value", html);
    }
    else {
        newElement.innerHTML = html;
    }
    return newElement;
}

export default (obj, attr) => {

    let newStyle = {...defaults.styles};
    Object.assign(newStyle, attr);

    initialize(obj, newStyle);
}
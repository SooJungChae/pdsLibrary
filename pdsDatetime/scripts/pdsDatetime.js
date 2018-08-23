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

const createCalendar = (parentId) => {
    let calendarWrap = document.createElement("div");
    let calendar = document.createElement("table");

    let tbody = document.createElement("tbody");
    let th = document.createElement("th");

    let thead = document.createElement("thead");

    for (let week = 0; week < 4; week++) {
        let tr = document.createElement("tr");
        for (let day = 0; day < 7; day++) {
            let td = document.createElement("td");
            td.text = day + 1;
        }
    }



    // 이번달을 캘린더로 만든다.
// <table class="pds-dates">
//         <thead>
//         <tr>
//         <th class="day"></th>
//         </tr>
//         </thead>
//         <tbody>
//         <tr>
//         <td class="date"></td>
//         </tr>
//         </tbody>
//         </table>
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
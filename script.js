function addDegreeMarks() {
    const radar = document.getElementById('radar-box');
    const radius = 46;

    for (let i = 0; i < 360; i += 30) {
        const mark = document.createElement('div');
        mark.className = 'degree-mark';
        mark.style.transform = `rotate(${i}deg)`;
        radar.appendChild(mark);

        const label = document.createElement('div');
        label.className = 'degree-label';
        label.textContent = i + '°';
        const labelAngle = i * Math.PI / 180;
        label.style.left = `${50 + radius * Math.sin(labelAngle)}%`;
        label.style.top = `${50 - radius * Math.cos(labelAngle)}%`;
        radar.appendChild(label);
    }
}

function addDirectionLabels() {
    const radar = document.getElementById('radar-box');
    const directions = {0: 'N', 90: 'E', 180: 'S', 270: 'W'};
    const radius = 40;

    Object.keys(directions).forEach(degree => {
        const label = document.createElement('div');
        label.className = 'degree-label';
        label.textContent = directions[degree];
        const angle = degree * Math.PI / 180;
        label.style.left = `${50 + radius * Math.sin(angle)}%`;
        label.style.top = `${50 - radius * Math.cos(angle)}%`;
        radar.appendChild(label);
    });
}

window.onload = function() {
    addDegreeMarks();
    addDirectionLabels();
};

function updateRadar(degree) {
    const radarLine = document.querySelector('.radar-line');
    radarLine.style.transform = `rotate(${degree}deg)`;
}

function appendToTable(timestamp, direction) {
    const tableBody = document.getElementById('data-table');
    const directionMap = {0: 'N', 90: 'E', 180: 'S', 270: 'W'};
    const directionLabel = directionMap[direction] || `${direction}°`;
    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${timestamp}</td><td>${directionLabel}</td>`;
    tableBody.appendChild(newRow);
}
const sizeSelector = document.getElementById('sizeSelector');
let setGridSize = sizeSelector.value;
const resizeWipeButton = document.getElementById('submitSize');
const scale = document.getElementById('scale');
const rainBox = document.getElementById('rainBox')
const container = document.getElementById('container');  
const colorSelector = document.getElementById('color-pick');
function initSizeSelector() {
    scale.innerText = sizeSelector.value + "x" + sizeSelector.value;
};
initSizeSelector();
sizeSelector.addEventListener('input', e => {
scale.innerText = sizeSelector.value + "x" + sizeSelector.value;
});



function createGrid() {
    for (let i = 1; i <= (sizeSelector.value * sizeSelector.value); i++) {
        const newDiv = document.createElement('div');
        newDiv.className = 'oDiv';
        document.getElementById('container').appendChild(newDiv);
        container.style.gridTemplateRows = 'repeat(' + sizeSelector.value +', 1fr)';
        container.style.gridTemplateColumns = 'repeat(' + sizeSelector.value +', 1fr)';
        container.style.width = '600px';
        container.style.height = '600px';
}};
createGrid();

function resetGrid(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};
resizeWipeButton.addEventListener('click', e => {
    resetGrid(container) 
});
resizeWipeButton.addEventListener('click', e => {
    createGrid();
});



colorArray = ['#FF4343','#FFB443','#B2FF43','#C343FF','#FEFF43','#48B2FF',]

function randomColor() {
    let randomColorPick = Math.floor(Math.random() * colorArray.length);
    return colorArray[randomColorPick];
};

function colorDiv() {
    container.addEventListener('mouseover', e => {
        if (rainBox.checked == true) {
            e.target.style.backgroundColor = randomColor();
      } else {
            e.target.style.backgroundColor = colorSelector.value; 
}})};
colorDiv();






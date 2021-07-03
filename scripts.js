const canvasWidth = 500;
const canvasHeight = 500;

let backgroundColor = "#d8d8d8";
let currentRows = 10;
let currentColumns = 10; 
let foregroundColor = "#d80000";

var slider = document.getElementById("densitySlider");

const canvasHover = (e) =>
{
	e.srcElement.style['background-color'] = foregroundColor;
	e.srcElement.removeEventListener('mouseover', canvasHover);
}

const sliderInput = (value) => {
  clearGrid();
	currentRows = value;
	currentColumns = value;
	buildGrid(currentRows, currentColumns);
}

function buildGrid(rows, cols)
{
	let content = document.getElementById('content-div');

	let ul;
	let li;

	for (let row = 0; row < rows; row++)
	{
		ul = document.createElement('ul');

		for (let col = 0; col < cols; col++)
		{
			li = document.createElement('li');
			li.addEventListener("mouseover", canvasHover);
			let style = `background-color: ${backgroundColor}; height: ${canvasHeight / rows}px; width: ${canvasWidth / cols}px`;
			li.style.cssText = style;
			ul.appendChild(li);
		}
		content.appendChild(ul);
	}
}

function clearGrid()
{
	const content = document.getElementById('content-div');
	while (content.lastElementChild)
	{
		content.removeChild(content.lastElementChild);
	}
}

function colorSelect(layer, color)
{
	console.log(layer);
	if (layer == 'foreground')
	{
		foregroundColor = color; 
	}
	else if (layer == 'background')
	{
		backgroundColor = color;
	}
}

function clearAll()
{
	clearGrid();
	buildGrid(currentRows, currentColumns);
}
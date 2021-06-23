let canvasWidth = 500;
let canvasHeight = 500;

let rowCount = 10;
let colCount = 10;

const defaultColor = "#d8d8d8";
const defaultRows = 10;
const defaultColumns = 10; 
let currentColor = "#d80000";

const canvasHover = (e) =>
{
	e.srcElement.style['background-color'] = currentColor;
	e.srcElement.removeEventListener('mouseover', canvasHover);
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
			let style = `background-color: ${defaultColor}; height: ${canvasHeight / rows}px; width: ${canvasWidth / cols}px`;
			li.style.cssText = style;
			ul.appendChild(li);
		}
		content.appendChild(ul);
	}
}

function colorSelect()
{

}

function clearAll()
{

}
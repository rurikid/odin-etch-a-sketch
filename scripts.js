let canvasWidth = 500;
let canvasHeigh = 500;

let rowCount = 10;
let colCount = 10;

let color = "#d80000";

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
			li.textContent = col;
			ul.appendChild(li);
		}

		content.appendChild(ul);
	}

}

function onHover(e)
{

}

function colorSelect()
{

}

function clearAll()
{

}
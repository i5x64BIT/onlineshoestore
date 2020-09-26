let button = document.getElementById('addColl');

let currentSelector = 0;
const addSelector = () => {
	let lastSelect;

	if (!currentSelector) lastSelect = document.getElementById('collectionSelect');
	else lastSelect = document.getElementById('collectionSelect' + currentSelector);

	let newSelector = document.createElement('select');
	currentSelector++;
	newSelector.id = 'collectionSelect' + currentSelector;
	newSelector.name = `shoe[collections][${currentSelector}]`;
	lastSelect.appendChild(newSelector);

	for (child of lastSelect.children) {
		if (child.text == undefined) continue;
		option = document.createElement('option');
		option.text = child.text;
		option.value = child.value;
		newSelector.appendChild(option);
	}
	document.querySelector('.selectors').appendChild(newSelector); //selector div
};

button.addEventListener('mousedown', addSelector, false);

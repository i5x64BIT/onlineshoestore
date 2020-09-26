let button = document.getElementById('addColl');

let currentSelector = 0;
const addSelector = () => {
	let lastSelect;

	if (!currentSelector) lastSelect = document.getElementById('collectionSelect');
	else lastSelect = document.getElementById('collectionSelect' + currentSelector);

	let newSelector = document.createElement('select');
	lastSelect.appendChild(newSelector);

	foundColl.forEach((coll) => {
		newSelector.appendChild((document.createElement('option').value = coll.name));
	});
};

button.addEventListener('mousedown', addSelector, false);

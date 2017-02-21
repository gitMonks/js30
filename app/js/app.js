
const checkboxElements = document.querySelectorAll("input");
const checkboxesArray = Array.from(checkboxElements);

function multiSelect(event) {
	//this function will check if there are other checkboxes selected
	//if yes it will create a range of maximum possible (in case there 
	//are more than one selected alread) checkboxes 
	//and select them
	const selectedIndex = [];
//	let selected = []

	checkboxesArray.forEach((el, index) => {
		event.shiftKey && el.checked ? selectedIndex.push(index) : "";
		// if (event.shiftKey === true) {
		// 	if(el.checked){
		// 		selectedIndex.push(index);
		// 	}
		// }
	});


	if (selectedIndex.length > 1) {
		for (let i = selectedIndex[0]; i <= selectedIndex[selectedIndex.length -1]; i++){
			console.log(checkboxElements[i].checked = true)
		}
	}
}
	

checkboxesArray.forEach((el) => {
	el.addEventListener('click', multiSelect)
})

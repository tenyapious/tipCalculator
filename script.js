// get all input
const totalBillInput = document.getElementById("total-bill-input");
const tipInput = document.getElementById("tip-input");
const numberOfPeople = document.getElementById("number-of-people");
const moneyPerPerson = document.querySelector(".totalAmount");
const peopleIncreament = document.querySelector(".increment");
const peopleDecreament = document.querySelector(".decrement");

let totalPerPerson = 0;

function addEventListener(ele, event) {
	ele.addEventListener(event, (event) => {
		const currEle = event.currentTarget;
		const numberOfPeopleNum = Number(numberOfPeople.value);
		if (currEle.classList.contains("increment")) {
			numberOfPeople.value = numberOfPeopleNum + 1;
		}
		if (currEle.classList.contains("decrement") && numberOfPeopleNum != 1) {
			numberOfPeople.value = numberOfPeopleNum - 1;
		}
		calcTotalPerPerson();
	});
}

const inputArr = document.querySelectorAll("input[type=number]");

inputArr.forEach((input) => {
	addEventListener(input, "click");
	addEventListener(input, "keyup");
});

function calcTotalPerPerson() {
	const totalBillValue = Number(totalBillInput.value);
	const tipValue = Number(tipInput.value);
	const numberOfPeopleValue = Number(numberOfPeople.value);
	const tipAmount = totalBillValue * (tipValue / 100);
	totalPerPerson = (totalBillValue + tipAmount) / numberOfPeopleValue;
	moneyPerPerson.textContent = `$${totalPerPerson
		.toFixed(2)
		.toLocaleString("en-US")}`;
}

addEventListener(peopleIncreament, "click");
addEventListener(peopleDecreament, "click");

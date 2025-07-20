const billAmount = document.querySelector(".bill-amount");
const tip = document.querySelector(".tip");
const persons = document.querySelector(".persons");
const btn = document.querySelector(".btn");

const calculatedTip = document.querySelector(".total-tip");
const totalBill = document.querySelector(".total-bill");
const perPerson = document.querySelector(".tip-per-person");
const finalAmount = document.querySelector(".final");

function tipCalc() {
  const bill = parseFloat(billAmount.value);
  const tipPercentage = parseFloat(tip.value);
  const numPersons = parseInt(persons.value);

  if (isNaN(bill) || isNaN(tipPercentage) || isNaN(numPersons)) {
    alert(
      "Please enter valid numbers for bill amount, tip percentage, and number of persons."
    );
    return;
  }

  if (bill <= 0 || numPersons <= 0) {
    alert("Bill amount and number of persons must be greater than 0.");
    return;
  }

  if (tipPercentage < 0) {
    alert("Tip percentage cannot be negative.");
    return;
  }

  const tipAmount = (bill * tipPercentage) / 100;
  const totalWithTip = bill + tipAmount;
  const tipPerPerson = tipAmount / numPersons;

  calculatedTip.textContent = `$ ${tipAmount.toFixed(2)}`;
  totalBill.textContent = `$ ${bill.toFixed(2)}`;
  perPerson.textContent = `$ ${tipPerPerson.toFixed(2)}`;
  finalAmount.textContent = `$ ${totalWithTip.toFixed(2)}`;
}

btn.addEventListener("click", tipCalc);

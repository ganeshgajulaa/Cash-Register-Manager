const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#check");
const message = document.querySelector("#message");
const noteByIndex = document.querySelectorAll(".noteByIndex");


const notes = [2000, 500, 100, 20, 10, 5, 1];

const showErrMssg = (errMssg) => {
  message.style.display = "block";
  message.innerText = errMssg;
};

const calculateChange = (amountToBeReturned) => {

  for (let index = 0; index < notes.length; index++) {
    let note = notes[index];
    let numOfParticularNote = Math.trunc(amountToBeReturned / note);
    noteByIndex[index].innerText = numOfParticularNote;

    amountToBeReturned %= note;
  }
};

const funValidation = () => {
  message.style.display = "none";

  if (billAmount.value > 0) {
    if (cashGiven.value > billAmount.value) {
      const amountToBeReturned = cashGiven.value - billAmount.value;
      console.log(amountToBeReturned);
      calculateChange(amountToBeReturned);
    } else if (billAmount.value === cashGiven.value) {
      showErrMssg("Nothing to be returned!");
      console.log("==");
    } else {
      showErrMssg("ask if customer wants to wash the plates?");
    }
  } else {
    showErrMssg(" bill amount can't be negative, invalid bill amount!");
  }
};

checkBtn.addEventListener("click", funValidation);

let numofPeoples = 1
let amountJS = document.getElementById("amount")
let tipJS = document.getElementById("tip")
let peoplesJS = document.getElementById("peoples")
let total = document.getElementById("total")

const calculateBill = () => {
    const bill = Number(amountJS.value)
    total.innerText = bill

    const plusTip = Number(tipJS.value) + bill
    total.innerText = plusTip

    const sharing = Math.floor(plusTip / Number(numofPeoples))
    total.innerText = `$  ${sharing}` 
}

const increment = () => {
    numofPeoples += 1
    peoplesJS.innerText = numofPeoples
    calculateBill()
}

const decrement = () => {
    if(numofPeoples <= 1){
        return 1 
    } else {
        numofPeoples -= 1
        peoplesJS.innerText = numofPeoples
    }
    calculateBill()
}

const allClear = () => {
    numofPeoples=1
    peoplesJS.innerText = numofPeoples
    amountJS.value = amountJS.ariaPlaceholder
    tipJS.value = tipJS.ariaPlaceholder
    total.innerText = "$ 00"

}

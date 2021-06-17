import { sendReservation } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", event => {
    if(event.target.id === "submitReservation") {
        const userParentName = document.querySelector("input[name='reservationParentName']").value
        const userChildName = document.querySelector("input[name='reservationChildName']").value
        const userNumOfKids = document.querySelector("input[name='reservationNumOfKids']").value
        const userAddress = document.querySelector("input[name='reservationAddress']").value
        const userDateOfRes = document.querySelector("input[name='reservationDate']").value
        const userLengthOfRes = document.querySelector("input[name='reservationLength']").value


        const dataToSendToAPI = {
            parentName: userParentName,
            childName: userChildName,
            numOfKids: userNumOfKids,
            address: userAddress,
            dateOfRes: userDateOfRes,
            lengthOfRes: userLengthOfRes

        }
        sendReservation(dataToSendToAPI)
    }
})
export const reservationForm = () => {
    let reservationHTML = `
    <div class="field">
        <label class="label" for="reservationParentName">Name of Parent</label>
        <input type="text" name="reservationParentName" class="input" />
    </div>
    <div class="field">
        <label class="label" for="reservationChildName">Name of Child</label>
        <input type="text" name="reservationChildName" class="input" />
    </div>
    <div class="field">
        <label class="label" for="reservationNumOfKids">Number of Kids attending party</label>
        <input type="number" name="reservationNumOfKids" class="input" />
    </div>
    <div class="field">
        <label class="label" for="reservationAddress">Address of party</label>
        <input type="text" name="reservationAddress" class="input" />
    </div>
    <div class="field">
        <label class="label" for="reservationDate">Date of reservation</label>
        <input type="date" name="reservationDate" class="input" />
    </div>
    <div class="field">
        <label class="label" for="reservationLength">Length of reservation (in hours)</label>
        <input type="number" name="reservationLength" class="input" min="1" max="12"/>
    </div>

    <button class="button" id="submitReservation">Submit Request</button>
    `

    return reservationHTML
}
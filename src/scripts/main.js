import { fetchReservations } from "./dataAccess.js";
import { ClownRental } from "./ClownRental.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

const render = () => {
    fetchReservations().then(
        () => {
            mainContainer.innerHTML = ClownRental()
        }
    )
}

render()
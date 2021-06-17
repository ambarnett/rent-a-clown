import { deleteReservation, getReservations } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if(click.target.id.startsWith("reservation--")) {
        const [, reservationId] = click.target.id.split("--")
        deleteReservation(parseInt(reservationId))
    }
})

export const Reservations = () => {
    const reservations = getReservations()
    let reservationHTML = `
        <ul>
            ${
                reservations.map(res => {
                    return `<li>${res.childName}'s party on ${res.dateOfRes}. You're gonna be dressed as a clown for ${res.lengthOfRes} hours. There's ${res.numOfKids} kids attending the party.
                    <button class="reservation__delete" id="reservation--${res.id}">
                    Delete
                    </button>
                    </li>`
                }).join("")
            }
        </ul>
    `
    return reservationHTML
}
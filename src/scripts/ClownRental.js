import { reservationForm } from "./reservationForm.js"
import { Reservations } from "./reservations.js"

export const ClownRental = () => {
    return `
    <h1>The fun house</h1>
    <section class="reservationForm">
        ${reservationForm()}
    </section>

    <section class="reservations">
        <h2>Reservations of FUN</h2>
        ${Reservations()}
    </section>
    `
}
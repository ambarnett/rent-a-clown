import { reservationForm } from "./reservationForm.js"
import { Reservations } from "./reservations.js"

export const ClownRental = () => {
    return `
    <header class="header">
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-02.belfasttelegraph.co.uk%2Fopinion%2Fcolumnists%2Fgail-walker%2Farticle35119200.ece%2F2f708%2FAUTOCROP%2Fw620h342%2F2016-10-11_opi_25389998_I1.JPG&f=1&nofb=1" class="logo" />
        <h1><u>The FUN house</u></h1>
    </header>    
    <section class="reservationForm">
        ${reservationForm()}
    </section>

    <section class="reservations">
        <h2>Reservations of FUN</h2>
        ${Reservations()}
    </section>
    `
}
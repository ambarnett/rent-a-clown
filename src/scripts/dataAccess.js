const applicationState = {
    requests: []
}
const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/requests`)
    .then(response => response.json())
    .then(
        (clownReservation) => {
            applicationState.requests = clownReservation
        }
    )
}

export const getRequests = () => {
    return [...applicationState.requests]
}

const mainContainer = document.querySelector("#container")

export const sendRequest = (userClownReservation) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userClownReservation)
    }

    return fetch(`${API}/requests`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

export const deleteRequest = (id) => {
    return fetch(`${API}/requests/${id}`, {method: "DELETE"})
    .then(
        () => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        }
    )
}
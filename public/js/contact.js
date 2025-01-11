// contact.js

const getItemById = (id) => {
    return fetch('/images.json')
        .then((res) => res.json())
        .then((items) => items.find((i) => i.id === id) || {});
};

const updateMessage = (description, price) => {
    const defaultMessage = description && price
        ? `Sono interessato a comprare questo oggetto:\n\nOggetto: ${description}\nPrezzo: ${price} €`
        : `Oggetto: ${description} non trovato.`;
    const messageElement = document.getElementById("message");
    const defaultMessageElement = document.getElementById("defaultMessage");

    if (messageElement) {
        messageElement.value = defaultMessage;
    }

    if (defaultMessageElement) {
        defaultMessageElement.textContent = defaultMessage;
    }
};

const setFallbackMessage = () => {
    const defaultMessageElement = document.getElementById("defaultMessage");
    if (defaultMessageElement) {
        defaultMessageElement.textContent = "Per favore fornisci una descrizione e un prezzo per l'oggetto.";
    }
};

const handleFormSubmit = (event) => {
    event.preventDefault();
    const message = document.getElementById("message")?.value || "";
    const subject = encodeURIComponent("Richiesta informazioni Componenti Abarth");
    const body = encodeURIComponent(message);

    window.location.href = `mailto:mreuz99@gmail.com?subject=${subject}&body=${body}`;
};

const initContactForm = () => {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"), 10);

    if (!isNaN(id)) {
        getItemById(id).then((item) => {
            const description = item?.description || "";
            const price = item?.price || "";
            updateMessage(description, price);
        });
    } else {
        setFallbackMessage();
    }

    const form = document.getElementById("contactForm");
    form?.addEventListener("submit", handleFormSubmit);
};

document.addEventListener('DOMContentLoaded', initContactForm);


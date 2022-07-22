const arr = {
	// email
	email: "random123@gmail.com",
	// phone
	phone: "8-800-555-35-35",
}

render_str()

function render_str() {
	const em = document.getElementById("email_id")
	const ph = document.getElementById("phone_id")

	em.innerText = arr.email
	ph.innerText = arr.phone
};

const mainContainer = document.getElementById("mainContainer");
const checkData = () => {
    fetch("http://127.0.0.1:8000/user/address/")
        .then(res => {
            if (!res.ok) {
                throw new Error("Network response was not ok " + res.statusText);
            }
            return res.json();
        })
        .then(data => {

            data.forEach(address => {
                const div = document.createElement("div");
                div.innerHTML = `
                <p>Address: ${address.address_line}</p>
                <p>City :  ${address.city}</p>
                <p>Postal Code :  ${address.postal_code}</p>
                <p>Country Name :  ${address.country_name}</p>
                `;
                mainContainer.appendChild(div)
            });
        })
        .catch(error => console.error('There was a problem with the fetch operation:', error));
}

checkData()
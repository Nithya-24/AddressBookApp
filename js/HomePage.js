

window.addEventListener("DOMContentLoaded", (event) => {
    document.querySelector(".contact-count").textContent = contactList.length;
    createInnerHtml();
});

const createInnerHtml = () => {
    if (contactList.length == 0) {
        return;
    }
    const headerHtml = `<tr>
      <th>Name</th>
      <th>Address</th>
      <th>City</th>
      <th>State</th>
      <th>Zip Code</th>
      <th>Phone Number</th>
      </tr>`;
    let innerHtml = `${headerHtml}`;
    for (let contact of contactList) {
        innerHtml = `${innerHtml} 
          <tr>
          <td>${contact._name}</td>
          <td>${contact._address}</td>
          <td>${contact._city}</td>
          <td>${contact._state}</td>
          <td>${contact._zip}</td>
          <td>${contact._phoneNumber}</td>
          <td>
              <img src="../assets/delete-black-18dp.svg" alt="delete" id="${contact._id}" onclick="remove(this)"/>
              <img src="../assets/create-black-18dp.svg" alt="update" id="${contact._id}" onclick="update(this)"/>
          </td>
          </tr>`;
    }
    document.querySelector("#table-display").innerHTML = innerHtml;
};

let contactList = [{
        _id: 1,
        _name: "Nithya R",
        _phoneNumber: "91 7894561320",
        _address: "satchiyapuram road",
        _city: "Bangalore",
        _state: "Karnataka",
        _zip: "123456",
    },
    
];
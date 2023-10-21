var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var phoneInput = document.getElementById('phone');
var myForm = document.getElementById('my-form');
var localStorageDataList = document.getElementById("localStorageData");

myForm.addEventListener('submit',addTodo);

// function addItem(e){
//     displayLocalStorageData();
// }

function addTodo(e) {
    e.preventDefault();
    console.log(1);
    // Get user input values
    const name = nameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;
    console.log(2);
    axios.post('https://crudcrud.com/api/6b12fe1ee5f54ca68d1d6589dd476e9a/appointments',{
        Name:name,
        Email: email,
        Phone: phone
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
    displayData();
    console.log(3);

    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value="";

    
}

function displayData() {
    localStorageDataList.innerHTML = ""; // Clear previous data

    axios.get('https://crudcrud.com/api/6b12fe1ee5f54ca68d1d6589dd476e9a/appointments')
    .then(res => {
        for (let i = 0; i < res.data.length; i++) {
            showAllUsers(res.data[i]);
        }
    })
    .catch(err => console.log(err))
}

window.addEventListener("DOMContentLoaded",()=>{
    localStorageDataList.innerHTML = ""; // Clear previous data

    axios.get('https://crudcrud.com/api/6b12fe1ee5f54ca68d1d6589dd476e9a/appointments')
    .then(res => {
        for (let i = 0; i < res.data.length; i++) {
            showAllUsers(res.data[i]);
        }
    })
    .catch(err => console.log(err))
})

function showAllUsers(user){
    const listItem = document.createElement("li");
            const deleteItem = document.createElement("button");
            deleteItem.textContent = "Delete";
            deleteItem.addEventListener('click', () => deleteElement(user._id));
    
            // Add an Edit button
            const editItem = document.createElement("button");
            editItem.textContent = "Edit";
            editItem.addEventListener('click', () => editElement(email, userData));
    
            listItem.textContent = `Name: ${user.Name}, Email: ${user.Email}, Mobile: ${user.Phone}`;
    
            localStorageDataList.appendChild(listItem);
            listItem.appendChild(editItem);
            listItem.appendChild(deleteItem);
}

function deleteElement(id){
    axios.delete(`https://crudcrud.com/api/6b12fe1ee5f54ca68d1d6589dd476e9a/appointments/${id}`)
    .then(res => console.log('Hogaya Delete'))
    .catch(err => console.log(err))

    displayData();
}
function editElement(email, userData){
    const newEmail = prompt(`Edit email for ${userData.name}:`, userData.email);

    // Update email in localStorage if a new email is provided
    if (newEmail !== null && newEmail.trim() !== "") {
        userData.email = newEmail.trim();
        localStorage.setItem(email, JSON.stringify(userData));
        displayLocalStorageData(); // Refresh the displayed data
    }

}
console.log(printName);

console.log(a);



var a = 3;



var printName = (name) => {

console.log(name)

}
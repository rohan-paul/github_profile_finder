//search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get the input text
    const userText = e.target.value;

    if(userText != '') {
        console.log(userText);
    }
});
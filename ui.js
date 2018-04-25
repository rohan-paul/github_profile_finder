/* This class will take care of rendering the user info into the webpage. So first we set to the  variable 'profile' the html element 'profile' with getElementById and then we set the innerHTML of that 'profile' variable by writing the entire UI code. */
class UI  {
    constructor () {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        console.log(user);
        /* this.profile.innerHTML = `
        `; */
    }
}
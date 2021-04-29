/* This class will take care of rendering the user info into the webpage. So first we set to the  variable 'profile' the html element 'profile' with getElementById and then we set the innerHTML of that 'profile' variable by writing the entire UI code. */
class UI {
	constructor() {
		this.profile = document.getElementById('profile');
	}

	showProfile(user) {
		// console.log(user);
		this.profile.innerHTML = `
        <div class="card card-body mb-3">
         <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary  btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
           <br><br>
           <ul class="list-group">
            <li class="list-group-item">Company: ${user.company}</li>
            <li class="list-group-item">Website/Blog: ${user.blog}</li>
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">Member Since: ${user.created_at}</li>
           </ul>
          </div>
         </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        <!-- Here, I am creating a new id for repos. This html element is not there in index.html -->
        `;
	}

	showRepos(repos) {
		let output = '';
		
		/* Iterate through all the 10 repos that I have fetched in the Github class definition file and build up the inline template-variable 'output' with the accumulated result of fetching the relevant data from github-API */
		repos.forEach(function (repo) {
			output += `
				<div class="card card-body mb-2">
						<div class="row">
							<div class="col-md-6">
								<a href="${repo.html_url}" target="_blank">${repo.name}</a>
							</div>
							<div class="col-md-6">
							<span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
							<span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
							<span class="badge badge-success">Forks: ${repo.forks_count}</span>
							</div>
						</div>
				</div>
      `;
		});
		// Now that the output inline template variable is completely prepared with all the 10 repos, mount it tot 'repos' id within the html DOM that I created up above in this file.

		document.getElementById('repos').innerHTML = output;
	}

	//show alert message, when the typed user name in the search box is NOT valid github user name

	showAlert(message, className) {
		// First clear any remaining previous alert
		this.clearAlert();

		// Create div to put the alert messages on (then before inserting the div to parent class '.searchContainer' add a className, and append a textNode to the div with next couple of lines of codes)
		const div = document.createElement('div');

		// Add the 'alert alert-danger' class that will be passing as an argument to the showAlert function when I invoke it in app.js file
		div.className = className;

		// Add message text to this div, which again is the hard-coded string argument that I am passing, when invoking this function in app.js
		div.appendChild(document.createTextNode(message));

		//Get the parent class where the user-name will be typed
		const container = document.querySelector('.searchContainer');

		//Get the search box's id
		const search = document.querySelector('.search');

		//Inserts the 'div' element before the 'search' element.  insertBefore() method inserts a node as a child, right before an existing child, which you specify.
		container.insertBefore(div, search);

		// Timeout after 3 seconds
		setTimeout(() => {
			this.clearAlert();
		}, 3000);
	}

	clearAlert() {
		const currentAlert = document.querySelector('.alert');

		if(currentAlert) {
			currentAlert.remove();
		}
	}

	// to clear the profile information after I have cleared the search box
	clearProfile() {
		this.profile.innerHTML = '';
	}
}
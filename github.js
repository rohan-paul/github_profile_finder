class Github {
  constructor() {
    this.client_id = '27f93b156757dec2a887';
    this.client_secret = '7c7588b300b040e2f8da96ebd51bcd03a40abced';
    this.repos_count = 10;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page={this.repos_count}&sort={this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}

/* Here using async-await over callback is because, with callback I will have one callback for profile data, get the response and then have another one for the repo data.
The word “async” before a function means, the function will always return a promise. If the code has returned <non-promise> in it, then JavaScript automatically wraps it into a resolved promise with that value.
The keyword 'await' makes JavaScript wait until that promise settles and returns its result.
With 'await' I am literally making JavaScript wait until the promise settles, and then go on with the result. That doesn’t cost any CPU resources, because the engine can do other jobs meanwhile: execute other scripts, handle events etc.

Note, I have to write 'await' after getting the promise result. Basically I am just replacing the '.then' calls by 'await'.  It’s just a more elegant syntax for getting the promise result than 'promise.then' . So we always need to have a wrapping 'async' function for the code that awaits.
*/
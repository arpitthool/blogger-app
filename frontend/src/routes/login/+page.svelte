<script>
  import { goto } from "$app/navigation";

  let email = '';
  let password = '';

  // Function to handle the login submission
  const handleSubmit = async () => {

    const hostUrl = import.meta.env.VITE_HOST;

    // login API endpoint
    const loginEndpoint = hostUrl+'/api/login';

    try {

      var myHeaders = new Headers();
      var formdata = new FormData();
      formdata.append("email", email);
      formdata.append("password", password);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
      };

      const response = fetch(loginEndpoint, requestOptions)

      if ((await response).status == 200) {
        // Handle successful login
        console.log('Login successful!');
        goto('/')
      
      } else {
        // Handle login failure
        console.error('Login failed');
      }

    } catch (error) {
      console.error('Error during login:', error);
    }
  };
</script>

<div class="columns">
  <div class="column is-4 is-offset-4">
      <div class="box">
          <h2 class="title has-text-centered">Login</h2>

          <form on:submit|preventDefault={handleSubmit}>

              <div class="field">
                  <label for="email" class="label">Email</label>

                  <div class="control">
                      <input
                          type="email"
                          class="input"
                          name="email"
                          required
                          bind:value={email}
                      >
                  </div>
              </div>

              <div class="field">
                  <label for="password" class="label">Password</label>

                  <div class="control">
                      <input
                          type="password"
                          class="input"
                          name="password"
                          required
                          bind:value={password}
                      >
                  </div>
              </div>


              <div class="control">
                  <button type="submit" class="button is-link is-fullwidth">Login</button>
              </div>

          </form>
      </div>
  </div>
</div>

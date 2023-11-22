<script>
  import { goto } from "$app/navigation";
  import axios from "axios";

  let email = '';
  let password = '';

  // Function to handle the login submission
  const handleSubmit = async () => {

    // get backend url
    const hostUrl = import.meta.env.VITE_HOST;

    try {
      // make POST request to login by passing given credentials
      const response = await axios.post(hostUrl + '/api/login', {email : email, password : password})

      if (response.status == 200) {
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

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

<main>
  <h1>Login</h1>
  <form on:submit|preventDefault={handleSubmit}>

    <label for="email">Email:</label>
    <input type="text" name="email" bind:value={email} id="email" />

    <label for="password">Password:</label>
    <input type="password" name="password" bind:value={password} id="password" />

    <button type="submit">Login</button>
  </form>
</main>

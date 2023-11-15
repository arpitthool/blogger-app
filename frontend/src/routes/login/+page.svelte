<script>
  import { goto } from "$app/navigation";

  let username = '';
  let password = '';
  // let csrfToken = ''; // CSRF token

  // Function to handle the login submission
  const handleSubmit = async () => {
    // Include the CSRF token in the headers
    const headers = {
      'Content-Type': 'application/json',
      // 'X-CSRF-Token': csrfToken,
    };

      const hostUrl = import.meta.env.VITE_HOST;


    // Your login API endpoint
    const loginEndpoint = hostUrl+'/api/login';

    try {
      const response = await fetch(loginEndpoint, {
        method: 'POST',
        headers,
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
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
    <label for="username">Username:</label>
    <input type="text" bind:value={username} id="username" />

    <label for="password">Password:</label>
    <input type="password" bind:value={password} id="password" />

    <button type="submit">Login</button>
  </form>
</main>

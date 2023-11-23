<script>
  import { goto } from "$app/navigation";

  let username = '';
  let password = '';
  let name = '';
  let email = '';
  let confirmPassword = '';
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
        console.log('Registeration successful!');
        goto('/')
      
      } else {
        // Handle login failure
        console.error('Registeration failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
</script>

<main>
  <h1>Register</h1>
  <form on:submit|preventDefault={handleSubmit}>

    <label for="username">Name:</label>
    <input type="text" bind:value={name} id="name" />

    <label for="username">Email:</label>
    <input type="text" bind:value={email} id="email" />

    <label for="password">Password:</label>
    <input type="password" bind:value={password} id="password" />

    <label for="password">Confirm Password:</label>
    <input type="password" bind:value={confirmPassword} id="confirmPassword" />

    <button type="submit">Register</button>
  </form>
</main>

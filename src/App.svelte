<script>
  import svelteLogo from './assets/svelte.svg';
  import web3authLogo from './assets/web3auth.svg';
  import viteLogo from '/vite.svg';
  import { createWeb3Auth, login, logout, getUser } from './lib/web3auth';
  import { onMount } from 'svelte';

  onMount(async () => {
    createWeb3Auth();
  });
</script>

<main>
  <div>
    <a href="https://web3auth.io" target="_blank" rel="noreferrer">
      <img src={web3authLogo} class="logo" alt="Web3Auth Logo" />
    </a>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Web3Auth + Vite + Svelte</h1>

  <div class="card">
    <h2>Web3Auth Login</h2>

    <button on:click={login}>Login</button>
    <button on:click={getUser}>Get User Info</button>
    <button on:click={logout}>Logout</button>

    <p class="read-the-docs">Check Browser Console for Output</p>
  </div>

  <p class="read-the-docs">
    Click on the Web3Auth, Vite and Svelte logos to learn more
  </p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>

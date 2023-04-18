import { Web3AuthNoModal } from '@web3auth/no-modal';
import { OpenloginAdapter } from '@web3auth/openlogin-adapter';
import { WALLET_ADAPTERS } from '@web3auth/base';
import { writable, get } from 'svelte/store';

let web3auth;

export const store = writable({
  loggedIn: false,
  user: null,
  web3auth: null,
  provider: null,
});

export async function createWeb3Auth() {
  web3auth = new Web3AuthNoModal({
    clientId:
      'BEglQSgt4cUWcj6SKRdu5QkOXTsePmMcusG5EAoyjyOYKlVRjIF1iCNnMOTfpzCiunHRrMui8TIwQPXdkQ8Yxuk', // Get your Client ID from Web3Auth Dashboard
    chainConfig: {
      chainNamespace: 'eip155',
      chainId: '0x5', // Please use 0x5 for Goerli Testnet
    },
    web3AuthNetwork: 'cyan',
  });
  const openloginAdapter = new OpenloginAdapter();
  web3auth.configureAdapter(openloginAdapter);
  await web3auth.init();
  store.set({
    loggedIn: true,
    user: null,
    web3auth: web3auth,
    provider: null,
  });
}

export async function login() {
  const { web3auth } = get(store);

  const provider = await web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {
    loginProvider: 'google',
  });

  store.set({
    loggedIn: true,
    user: null,
    web3auth: web3auth,
    provider: provider,
  });
}

export async function getUser() {
  const { provider, web3auth } = get(store);
  const user = await web3auth.getUserInfo();
  console.log(user);

  store.set({
    loggedIn: true,
    user: user,
    web3auth: web3auth,
    provider: provider,
  });
}

export async function logout() {
  await web3auth.logout();
  store.set({
    loggedIn: false,
    user: null,
    web3auth: null,
    provider: null,
  });
  location.reload();
}

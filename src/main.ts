import { createApp } from 'vue'
import App from './App.vue'
import SolanaWallets from 'solana-wallets-vue';

import './index.css'
import 'solana-wallets-vue/styles.css';

import { WalletAdapterNetwork } from "@solana/wallet-adapter-base"
import {
    PhantomWalletAdapter,
    SlopeWalletAdapter,
    SolflareWalletAdapter,
  } from '@solana/wallet-adapter-wallets';

const walletOptions = {
    wallets: [
        new PhantomWalletAdapter(),
        new SlopeWalletAdapter(),
        new SolflareWalletAdapter({ network: WalletAdapterNetwork.Devnet }),
    ],
    autoConnect: true,
}
  

createApp(App)
.use(SolanaWallets, walletOptions)
.mount('#app')

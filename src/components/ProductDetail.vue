<script setup lang="ts">
  import { useWallet, useAnchorWallet } from 'solana-wallets-vue';
  import { Connection, clusterApiUrl, Transaction, PublicKey , SystemProgram, Keypair , LAMPORTS_PER_SOL } from '@solana/web3.js';
  import { TOKEN_PROGRAM_ID , transfer  } from '@solana/spl-token';

  const SOLANA_MAINNET_USDC_PUBKEY = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v";
  const USDC_pubkey = new PublicKey(SOLANA_MAINNET_USDC_PUBKEY);

  const main = async () => {
      // Connect to cluster
      const connection = await createConnection();
      const { publicKey, sendTransaction } = useWallet();
      if (!publicKey.value) return;
      const BUSINESS_PUBKEY = new PublicKey("Cwz9U3So7Rbp11oJ7oYNK4tJaUEu4EPomM61Qkv2QdoF") ;
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey.value,
          toPubkey: BUSINESS_PUBKEY,
          lamports: 1*LAMPORTS_PER_SOL,
        })
      );

  const signature = await sendTransaction(transaction, connection);
  await connection.confirmTransaction(signature, 'processed');

  }

const createConnection = async () => {
  const cluster = 'mainnet-beta';
  // const cluster = 'devnet';
  const endpoint = clusterApiUrl(cluster);
  const connection = new Connection(endpoint, 'confirmed');
  return connection;
}

</script>

<template>
  <article class="item p-3 bg-black  shadow-zinc-300 rounded-md  text-white xl:flex  xl:pt-32">
    <div class="item-image min-h-[9em] pb-5 xl:w-1/2">
      <img
        class="w-full max-h-[15em] xl:max-h-[20em]  object-contain"
        src="../assets/t-shirt.png"
        alt=""
      />
    </div>
    <div class="text-center xl:text-left">
      <div class="item-info">
        <h1 class="item-title text-xl font-bold xl:text-4xl">T-shirt de Lanzamiento </h1>
        <h2 class="item-title text-base pb-5 text-gray-300">T-shirt en apoyo al proyecto Librana T-shirt </h2>
        <p class="text-base pb-5 xl:w-2/3">El Proyecto Librana busca fortalecer el comercio electronico a traves de DeFi 
          <span class="font-bold">(Finanzas Descentralizadas)</span>. </p>
        <p class="text-base text-green-600 font-bold">Envio Incluido</p>
        <div class="item-price text-3xl pb-5">
          <span class="item-price-value">$25,00</span>
          <span class="item-price-currency">US</span>
        </div>
      </div>
      <div class="button-item xl:w-1/2">
        <button class="text-center bg-white text-black w-full py-5 rounded-md font-bold text-xl hover:bg-indigo-600 hover:text-white" 
        @click="main()">
          Comprar
        </button>
      </div>
    </div>
  </article>
</template>

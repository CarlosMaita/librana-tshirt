import { useWallet } from 'solana-wallets-vue';
import { Connection, clusterApiUrl, Keypair, SystemProgram, Transaction } from '@solana/web3.js';

export const sendOneLamportToRandomAddress = async () => {
  const connection = new Connection(clusterApiUrl('devnet'))
  const { publicKey, sendTransaction } = useWallet();
  if (!publicKey.value) return;

  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: publicKey.value,
      toPubkey: Keypair.generate().publicKey,
      lamports: 1,
    })
  );

  const signature = await sendTransaction(transaction, connection);
  await connection.confirmTransaction(signature, 'processed');
};
export default {
    RAYDIUM_PUBLIC_KEY: "675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8",
    HTTP_URL: "https://api.mainnet-beta.solana.com",
    WSS_URL: "wss://api.mainnet-beta.solana.com",
    NATIVE_TOKEN: "So11111111111111111111111111111111111111112", // SOL Token
    PRIVATE_KEY: Uint8Array.from([/* Add your private key */]),
    OBSERVE_ONLY: true, // Set to true to observe logs without buying
    BUY_AMOUNT: 100000000, // Amount in lamports (1 SOL)
    SLIPPAGE: 50, // Slippage in basis points (e.g., 0.5%)
    STOP_LOSS: 90, // Stop loss percentage (e.g., 90%)
    TAKE_PROFIT: 120, // Take profit percentage (e.g., 120%)
  };
  
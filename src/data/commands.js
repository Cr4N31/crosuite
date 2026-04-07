export const commands = [
  {
    category: "Getting Started",
    icon: "wallet",
    items: [
      {
        command: "/Deposit",
        description: "Generate your personal wallet address.",
        steps: ["Run /Deposit", "Copy your wallet address", "Send tokens or NFTs to it"],
      },
      {
        command: "/Mybalance",
        description: "View all tokens and NFTs in your Crosuite wallet.",
        steps: ["Run /Mybalance", "See all available assets", "Track usable balance"],
      },
    ],
  },
  {
    category: "Trading & Transfers",
    icon: "swap",
    items: [
      {
        command: "/Swap",
        description: "Swap one token for another directly in Discord.",
        steps: ["Choose token to swap from", "Select token to receive", "Confirm the swap"],
      },
      {
        command: "/Tip",
        description: "Send tokens instantly to another member.",
        steps: ["Select a user", "Choose token and amount", "Send instantly"],
      },
      {
        command: "/Withdraw",
        description: "Send tokens or NFTs to an external wallet.",
        steps: ["Choose token or NFT", "Enter external wallet address", "Confirm withdrawal"],
      },
    ],
  },
  {
    category: "Airdrops & Raffles",
    icon: "gift",
    items: [
      {
        command: "/Airdrop",
        description: "Distribute tokens or NFTs to multiple recipients.",
        steps: ["Select token or NFT", "Set amount and recipients", "Execute distribution"],
      },
      {
        command: "/Raffle",
        description: "Start a raffle with automatic winner selection.",
        steps: ["Choose token or NFT prize", "Set entry rules and duration", "Winner selected automatically"],
      },
    ],
  },
  {
    category: "Community Games",
    icon: "gamepad",
    items: [
      {
        command: "/Arena-start",
        description: "Open a community game arena for participation.",
        steps: ["Select game type (Emoji or Meme)", "Open participation"],
      },
      {
        command: "/Arena-end",
        description: "Close the arena and stop new entries.",
        steps: ["Run /Arena-end", "Entries are locked"],
      },
      {
        command: "/Arena-reward",
        description: "Distribute prizes to arena winners.",
        steps: ["Select reward (token or NFT)", "Distribute to winners"],
      },
    ],
  },
  {
    category: "Asset Setup",
    icon: "layers",
    items: [
      {
        command: "/Register token",
        description: "Register a token contract to use across Crosuite.",
        steps: ["Enter token contract details", "Token enabled across features"],
      },
      {
        command: "/Register nft",
        description: "Register an NFT contract for buy/sell alerts and usage.",
        steps: ["Enter NFT contract details", "Alerts and usage enabled"],
      },
    ],
  },
]
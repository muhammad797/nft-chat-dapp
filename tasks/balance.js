task("balance", "Get ETH balance of a user")
  .addParam("account", "The account of the user")
  .setAction(async ({ account }, { ethers }) => {
    const balance = await ethers.provider.getBalance(account);
    console.log(ethers.utils.formatEther(balance), "ETH");
  });

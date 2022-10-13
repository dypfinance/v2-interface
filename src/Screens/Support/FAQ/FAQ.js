import React, { useState } from "react";
import styled from "styled-components";
import Title from "../../../components/Title/Title";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import "./_faq.scss";
import FAQAccordion from "../../../components/FaqAccordionItem/FAQAccordion";
import ethIcon from "../../Dyp/assets/ethereumDropdown.svg";
import bnbIcon from "../../Dyp/assets/bnbDropdown.svg";
import avaxIcon from "../../Dyp/assets/avaDropdown.svg";
import rightArrow from "../../../assets/right-arrow.svg";
import book from "../assets/book.svg";
import activeBook from "../assets/activeBook.svg";

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
  },
  "& .MuiInputLabel-root": {
    color: "#A0A3BD",
    fontWeight: 400,
  },
}));

const FAQ = () => {
  

  const categories = [
    {
      categoryId: 1,
      title: "General",
      content: [
        {
          id: 79,
          title: "Where can I find DYP Tokenomics?",
          content: `
       <a target="_blank" href="https://dyp.finance/tokenomics">
       <button class="btn filled-btn pool-btn d-flex align-items-center gap-2">Tokenomics<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' /></button>
       </a>
       `,
          collapse: "collapseGeneralOne",
          heading: "headingGeneralOne",
        },
        {
          id: 80,
          title: "What are contract addresses of DYP and iDYP?",
          content: `<p class="faq-content">
       DYP: 0x961C8c0B1aaD0c0b10a51FeF6a867E3091BCef17
       iDYP: 0xBD100d061E120b2c67A24453CF6368E63f1Be056
 
       The contract addresses are same across 3 chains ETH, BNB and AVAX
       </p>`,
          collapse: "collapseGeneralTwo",
          heading: "headingGeneralTwo",
        },
        {
          id: 81,
          title: "Where can I find the DYP Team?",
          content: `<p class="faq-content">
       DYP team is located around the world working remotely in different locations. We also have physical offices located in Romania and Albania. You can find the doxed DYP team and their backgrounds on the website here: 
 
       </p>
       <a target="_blank" href="https://dyp.finance/about">
       <button class="btn filled-btn pool-btn d-flex align-items-center gap-2">Team<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' /></button>
       </a>
       `,
          collapse: "collapseGeneralThree",
          heading: "headingGeneralThree",
        },
        {
          id: 82,
          title: "Which wallets support DYP products?",
          content: `<p class="faq-content">
       DYP products are supported by almost every widely used wallet. See list below for more details:
 
         <b>Metamask</b>
         <b>Coinbase Wallet</b>
         <b>Trustwallet</b>
         <b>Walletconnect</b>
         <b>Safepal</b>
         <b>Coin98</b>
 
       </p>`,
          collapse: "collapseGeneralFour",
          heading: "headingGeneralFour",
        },
        {
          id: 83,
          title:
          "How are rewards paid? How does DYP generates revenue to pay rewards?",
          content: `<p class="faq-content">
       The rewards are shown on dApp in real time, and they need to be claimed to be sent to a user’s wallet. Rewards are generated based on Proof of Stake (PoS) concept. Proof of Stake (PoS) is a consensus mechanism where block validators are selected based on the number of coins they are staking. For more information about PoS check the link down below:
       </p>
       <a target="_blank" href="https://academy.binance.com/en/glossary/proof-of-stake">
       <button class="btn filled-btn pool-btn d-flex align-items-center gap-2">Proof of stake<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' /></button>
       </a>
       `,
          collapse: "collapseGeneralFive",
          heading: "headingGeneralFive",
        },
        {
          id: 84,
          title: "Does DYP have any VC’s invested into it?",
          content: `<p class="faq-content">
       No, DYP does not have VC’s invested into DYP, instead DYP utilizes their own ETH mining farm. The revenue generated from the farm helps support the development of the DYP ecosystem. 
       </p>`,
          collapse: "collapseGeneralSix",
          heading: "headingGeneralSix",
        },
        {
          id: 85,
          title: "Does DYP have any partners?",
          content: `<p class="faq-content">
       Yes, DYP is partnered with many companies like:
       <b>Coinbase</b>
       <b>Avalanche</b>
       <b>Chainlink</b>
       <b>Pangolin</b>
       <b>Huobi</b>
       <b>Coin98</b>
       <b>Gate.io</b>
       <b>KuCoin</b>
       <b>Crypto.com</b>
       </p>
       <a target="_blank" href="https://dyp.finance/#our-partners">
       <button class="btn filled-btn pool-btn d-flex align-items-center gap-2">Full List<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' /></button>
       </a>
       `,
          collapse: "collapseGeneralSeven",
          heading: "headingGeneralSeven",
        },
        {
          id: 86,
          title: "Where can I find DYP Roadmap?",
          content: `<p class="faq-content">
       <a target="_blank" href="https://dyp.finance/roadmap">
       <button class="btn filled-btn pool-btn d-flex align-items-center gap-2">Roadmap<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' /></button>
       </a>
       </p>`,
          collapse: "collapseGeneralEight",
          heading: "headingGeneralEight",
        },
        {
          id: 87,
          title: "Is DYP secure (audited)?",
          content: `<p class="faq-content">
       Yes, DYP only releases a product after thorough audits and safety measures and will never compromise on security.
       You can find all of the audit reports here:       
       </p>
       <a target="_blank" href="https://dyp.finance/audit">
       <button class="btn filled-btn pool-btn d-flex align-items-center gap-2">Audit<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' /></button>
       </a>
       <p class="faq-content">
       DYP is audited by 3 reputed companies Certik, Packshield and Blockchain Consilium.
 
 Also there is a 24/7 security oracle from Certik that is always monitoring our contracts 
        
       </p>
       <a target="_blank" href="https://www.certik.com/projects/dypfinance">
       <button class="btn filled-btn pool-btn d-flex align-items-center gap-2">Certik<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' /></button>
       </a>
 
       `,
          collapse: "collapseGeneralNine",
          heading: "headingGeneralNine",
        },
        {
          id: 88,
          title: "Where can I find all the links related to DYP?",
          content: ` <a target="_blank" href="https://linktr.ee/dyp.finance">
       <button class="btn filled-btn pool-btn d-flex align-items-center gap-2">Linktree<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' /></button>
       </a>`,
          collapse: "collapseGeneralTen",
          heading: "headingGeneralTen",
        },
        {
          id: 89,
          title:
          "What is the total amount of DYP coins that are circulating in the market? ",
          content: `<p class="faq-content">
       The total amount is <b>23,115,714</b> DYP. For more information about DYP please refer to the URL down below: 
       </p>
       <a target="_blank" href="https://coinmarketcap.com/currencies/defi-yield-protocol/">
       <button class="btn filled-btn pool-btn d-flex align-items-center gap-2">CoinMarketCap<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' /></button>
       </a>
       `,
          collapse: "collapseGeneralEleven",
          heading: "headingGeneralEleven",
        },
      ],
    },
    {
      categoryId: 2,
      title: "Stake",
      content: [
        {
          id: 1,
          title: "What is Staking?",
          content:
            '<p class="mb-0 faq-content">An innovative metaverse platform that redefines the gaming industry and digital currency services. Platform utilizes cutting-edge blockchain technology, giving an unique experience.</p>',
          collapse: "collapseStakeOne",
          heading: "headingStakeOne",
        },
        {
          id: 2,
          title: "What is DYP Staking?",
          content:
            '<p class="mb-0 faq-content">DYP Staking is a product that allows users to deposit DYP tokens into an audited staking contract to earn rewards. The staking pools integrate the REINVEST function allowing users to automatically add their daily rewards back into the staking pool.</p>',
          collapse: "collapseStakeTwo",
          heading: "headingStakeTwo",
        },
        {
          id: 3,
          title: "How many types DYP Staking are available?",
          content: `<p class="mb-0 faq-content">Currently, there are 2 types of DYP Staking:
    
          1. Users can stake $DYP tokens to earn $DYP with Dynamic APR %.
          2. Users can stake $DYP tokens and earn ETH, BNB, or AVAX rewards with a fixed 25% APR.
          *Neither of these staking pools contain impermanent loss (IL). </p>
          `,
          collapse: "collapseStakeThree",
          heading: "headingStakeThree",
        },
        {
          id: 4,
          title: "What chains are available for DYP staking?",
          content:
            '<p class="mb-0 faq-content">Currently, DYP offers staking on ETH, BNB and AVAX.</p>',
          collapse: "collapseStakeFour",
          heading: "headingStakeFour",
        },
        {
          id: 5,
          title: "What Lock Times are available for DYP staking?",
          content:
            '<p class="mb-0 faq-content">Currently, DYP offers staking with no lock period, 90 days, and 180 days.</p>',
          collapse: "collapseStakeFive",
          heading: "headingStakeFive",
        },
        {
          id: 6,
          title: "How are rewards distributed from staking?",
          content:
            '<p class="mb-0 faq-content">The rewards are shown in real time on the DYP dApp and will need to be claimed in order to transfer the rewards to the user’s wallet.</p>',
          collapse: "collapseStakeSix",
          heading: "headingStakeSix",
        },
        {
          id: 7,
          title: "ow does DYP generate the staking rewards? ",
          content:
            '<p class="mb-0 faq-content">The rewards are generated based on Proof of Stake concept. Proof of Stake (PoS) is a consensus mechanism where block validators are selected based on the number of coins they are staking. For more information about PoS you can head to the link down below: </p>',
          links: "https://academy.binance.com/en/glossary/proof-of-stake",
          linkLabels: "View Link",
          collapse: "collapseStakeSeven",
          heading: "headingStakeSeven",
        },
        {
          id: 8,
          title: "ow can I withdraw my assets?",
          content: `<p class="mb-0 faq-content">Follow these steps to withdraw assets:
          - Head to the dApp where the crypto assets are being staked.
          - Scroll down to find the Withdraw section.
          - Users may choose to withdraw part of their assets, or they can click Max to withdraw 100% of their assets.
          - Click Withdraw.
          - Complete the transaction.</p>
          `,
          collapse: "collapseStakeEight",
          heading: "headingStakeEight",
        },
        {
          id: 9,
          title: "What if I am not able to withdraw my assets?",
          content:
            '<p class="mb-0 faq-content">First, check to see if the assets are locked in a pool and if the pool lock has ended. Users can withdraw their asset after the completion of the lock period. i.e., if you joined a 90-day pool you can only withdraw after the 90-day lock period is over.</p>',
          collapse: "collapseStakeNine",
          heading: "headingStakeNine",
        },
        {
          id: 10,
          title:
          "Will I be getting the same amount of DYP I deposited when I withdraw?",
          content:
            '<p class="mb-0 faq-content">Yes, you users will withdraw the same amount of DYP as deposited.</p>',
          collapse: "collapseStakeTen",
          heading: "headingStakeTen",
        },
        {
          id: 11,
          title: "Will my lock period reset if I deposit additional assets?",
          content:
            '<p class="mb-0 faq-content">Yes, if users add new deposits in between lock periods, the lock period resets back to 0 days. Users will need to wait for the new lock period to expire before withdrawal of assets would be possible.</p>',
          collapse: "collapseStakeEleven",
          heading: "headingStakeEleven",
        },
        {
          id: 12,
          title:
          "Can I still earn rewards even after my lock period ends if I do not withdraw my assets?",
          content:
            '<p class="mb-0 faq-content">Yes, users will continue to earn rewards even after the initial lock period ends and can earn these rewards until the contract expiry.</p>',
          collapse: "collapseStakeTwelve",
          heading: "headingStakeTwelve",
        },
        {
          id: 13,
          title: "What is APY?",
          content:
            '<p class="mb-0 faq-content">Annual percentage yield (APY) is a percentage that reflects the amount of money, or interest, you earn on an account over the course of one entire year.</p>',
          collapse: "collapseStakeThirteen",
          heading: "headingStakeThirteen",
        },
        {
          id: 14,
          title:
          "Will the APY reduce if I keep staking after my lock period ends?",
          content:
            '<p class="mb-0 faq-content">No, users will continue to receive their rewards based on the current APY.</p>',
          collapse: "collapseFourteen",
          heading: "headingFourteen",
        },
        {
          id: 15,
          title: "What is the Reinvest function?",
          content:
            '<p class="mb-0 faq-content">The Reinvest function allows users to reinvest their earned rewards back into the original deposited value so that they can earn more rewards with the new increase in deposited token balance. In addition, the reinvest function does NOT reset user’s lock period.</p>',
          collapse: "collapseStakeFifteen",
          heading: "headingStakeFifteen",
        },
        {
          id: 16,
          title:
          "Where can I take advantage of these staking pools and are there tutorials available?",
          content: ` <p class="mb-0">
          These pools can be found on our website and tutorials are available for each of them. You can find more details down below:
          </p>
          <div class='row d-grid pool-container p-4'>
          <div class="pool-card p-3">
            <div class="d-flex flex-row gap-2 mb-2">
            <img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/ethereumDropdown.svg' alt="" />
            <h5 class='ethereum mb-0'>ETH Pools</h5>
            </div>
          <div class="d-grid inner-pool">
          <div class='d-flex justify-content-center flex-column'>
           <p class='mb-0'>DYP > DYP</p>
           <a  target="_blank" href="https://app.dyp.finance/constant-staking-1">
            <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center">No Lock <img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
           </a>
           </div>
           <div class='d-flex justify-content-center flex-column'>
           <p class='mb-0'>DYP > ETH</p>
           <a  target="_blank" href=" https://app.dyp.finance/constant-staking-2">
            <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center">90 Days Lock <img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
           </a>
           </div>
           <div class='d-flex justify-content-center flex-column'>
           <p class='mb-0'>DYP > DYP</p>
           <a  target="_blank" href=" https://app.dyp.finance/constant-staking-3">
            <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center">90 Days Lock <img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
           </a>
           </div>
           <div class='d-flex justify-content-center flex-column'>
           <p class='mb-0'>DYP > ETH</p>
           <a  target="_blank" href="https://youtu.be/D5g19SuQlcI">
            <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center">Tutorial <img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
           </a>
           </div>
          </div>
          </div>
          <div class="pool-card p-3">
          <div class="d-flex flex-row gap-2 mb-2">
            <img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/bnbDropdown.svg' alt="" />
            <h5 class='bnb mb-0'>BNB Pools</h5>
            </div>
          <div class="d-grid inner-pool">
          <div class='d-flex justify-content-center flex-column'>
           <p class='mb-0'>DYP > DYP</p>
           <a  target="_blank" href="https://app-bsc.dyp.finance/constant-staking-1">
            <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center">No Lock <img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
           </a>
           </div>
           <div class='d-flex justify-content-center flex-column'>
           <p class='mb-0'>DYP > BNB</p>
           <a  target="_blank" href="https://app-bsc.dyp.finance/constant-staking-2">
            <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center">90 Days Lock <img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
           </a>
           </div>
           <div class='d-flex justify-content-center flex-column'>
           <p class='mb-0'>DYP > DYP</p>
           <a  target="_blank" href="https://app-bsc.dyp.finance/constant-staking-3">
            <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center">90 Days Lock <img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
           </a>
           </div>
           <div class='d-flex justify-content-center flex-column'>
           <p class='mb-0'>DYP > BNB</p>
           <a  target="_blank" href="https://youtu.be/sYkoxGbpBi4">
            <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center">Tutorial <img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
           </a>
           </div>
          </div>
          </div>
          <div class="pool-card p-3">
          <div class="d-flex flex-row gap-2 mb-2">
            <img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/avaDropdown.svg' alt="" />
            <h5 class='avax mb-0'>AVAX Pools</h5>
            </div>
          <div class="d-grid inner-pool">
          <div class='d-flex justify-content-center flex-column'>
           <p class='mb-0'>DYP > DYP</p>
           <a  target="_blank" href="https://app-avax.dyp.finance/constant-staking-1">
            <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center">No Lock <img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
           </a>
           </div>
           <div class='d-flex justify-content-center flex-column'>
           <p class='mb-0'>DYP > AVAX</p>
           <a  target="_blank" href="https://app-avax.dyp.finance/constant-staking-2">
            <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center">90 Days Lock <img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
           </a>
           </div>
           <div class='d-flex justify-content-center flex-column'>
           <p class='mb-0'>DYP > DYP</p>
           <a  target="_blank" href="https://app-avax.dyp.finance/constant-staking-3">
            <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center">90 Days Lock <img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
           </a>
           </div>
           <div class='d-flex justify-content-center flex-column'>
           <p class='mb-0'>DYP > AVAX</p>
           <a  target="_blank" href="https://youtu.be/s9gwo3J119U">
            <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center">Tutorial <img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
           </a>
           </div>
          </div>
          </div>
        </div>`,
          collapse: "collapseStakeSixteen",
          heading: "headingStakeSixteen",
        },
      ],
    },
    {
      categoryId: 3,
      title: "Farming",
      content: [
        {
          id: 17,
          title: "What is Farming?",
          content: `<p class="mb-0 faq-content">Yield farming is the process of using decentralized finance (DeFi) to maximize returns. Users can lend or borrow crypto assets on a DeFi platform and earn cryptocurrency in return for their services.
   
         <b>Types of yield farming:</b>
         
         <b>1. Liquidity provider:</b> Users deposit two coins to a DEX to provide trading liquidity. Exchanges charge a small fee to swap the two tokens which is paid to liquidity providers. This fee can sometimes be paid in new liquidity pool (LP) tokens.
         
         <b>2. Lending:</b> Coin or token holders can lend crypto to borrowers through a smart contract and earn yield from interest paid on the loan.
         
         <b>3. Borrowing:</b> Farmers can use one token as collateral and receive a loan of another. Users can then farm yield with the borrowed coins. This way, the farmer keeps their initial holding, which may increase in value over time, while also earning yield on their borrowed coins.
   
         <b>4. Staking:</b> There are two forms of staking in the world of DeFi. 
         -The main form is on proof-of-stake blockchains where a user is paid interest to pledge their tokens to the network to provide security. 
         -The second is to stake LP tokens earned from supplying a DEX with liquidity. This allows users to earn yield twice, as they are paid for supplying liquidity in LP tokens which they can then stake to earn more yield.
         
         Expected yield returns are usually annualized. The prospective returns are calculated over the course of a year.</p>
         `,
          collapse: "collapseFarmOne",
          heading: "headingFarmOne",
        },
        {
          id: 18,
          title: "What is DYP Farming?",
          content: `  <p>
         DYP Farming allows you to earn rewards in WETH/DYP, WBNB/DYP, WAVAX/DYP.
         Smart contracts automatically adds liquidity and deposits to the staking contract using one of the following supported assets: 
         </p>
         <table class="table">
            <thead>
              <tr>
                <th scope="col">Chains</th>
                <th scope="col">Supported Assets</th>
                <th scope="col">Rewards</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ETH</td>
                <td>WETH, WBTC, USDT, USDC</td>
                <td>WETH, USDT, DYP</td>
              </tr>
              <tr>
                <td>BNB</td>
                <td>WBNB, BTCB, ETH, BUSD, CAKE, iDYP</td>
                <td>WBNB, DYP</td>
              </tr>
              <tr>
                <td>AVAX</td>
                <td>WAVAX, WETH.e, WBTC.e, PNG, USDT.e, QI, USDT.e, DAI.e, XAVA, LINK.e, iDYP</td>
                <td>WAVAX, WETH.e, DYP</td>
              </tr>
            </tbody>
          </table>`,
          collapse: "collapseFarmTwo",
          heading: "headingFarmTwo",
        },
        {
          id: 21,
          title: "How can I withdraw my assets?",
          content: `<p class="faq-content">Follow these steps to withdraw assets:
         -Head to the dApp where the assets are being farmed.
         - Scroll down to find Withdraw section.
         - Users can choose to withdraw part of their assets or users can Click Max to withdraw 100% of their assets.
         - Click Withdraw.
         - Complete the transaction.
         
         <b>Note</b>: In farming, users will need to do the Withdraw transaction twice because the first transaction is to withdraw the $DYP, and the second transaction is to withdraw the chosen reward. When users click withdraw, their LP is then converted to the selected assets and is sent to their wallet
         </p>`,
          collapse: "collapseFarmThree",
          heading: "headingFarmThree",
        },
        {
          id: 22,
          title: "What if I am not able to withdraw my assets?",
          content: `<p class="faq-content">First, check to see if the assets are locked in a pool and if the pool lock has ended. Users can withdraw their asset after the completion of the lock period. i.e., if you joined a 90-day pool you can only withdraw after the 90-day lock period is over</p>`,
          collapse: "collapseFarmFour",
          heading: "headingFarmFour",
        },
        {
          id: 23,
          title: "Will my lock period reset if I deposit additional assets?",
          content: `<p class="faq-content">
         Yes, if users add new deposits in between lock periods, the lock period resets back to 0 days. Users will need to wait for the new lock period to expire before withdrawal of assets would be possible.
         </p>`,
          collapse: "collapseFarmFive",
          heading: "headingFarmFive",
        },
        {
          id: 24,
          title:
          "Can I still earn rewards even after my lock period ends if I do not withdraw my assets?",
          content: `<p class="faq-content">
         Yes, users will continue to earn rewards even after the initial lock period ends and can earn these rewards until the contract expiry.
         </p>`,
          collapse: "collapseFarmSix",
          heading: "headingFarmSix",
        },
        {
          id: 25,
          title: "What is APY?",
          content: `<p class="faq-content">
         Annual percentage yield (APY) is a percentage that reflects the amount of money, or interest, you earn on an account over the course of one entire year.
         </p>`,
          collapse: "collapseFarmSeven",
          heading: "headingFarmSeven",
        },
        {
          id: 26,
          title:
          "Will the APY reduce if I keep staking after my lock period ends?",
          content: `<p class="faq-content">
         No, users will continue to receive their rewards based on the current APY.
         </p>`,
          collapse: "collapseFarmEight",
          heading: "headingFarmEight",
        },
        {
          id: 27,
          title:
          "Why don’t my actual rewards match with the rewards shown on the calculator?",
          content: `<p class="faq-content">
         Why don’t my actual rewards match with the rewards shown on the calculator?
         </p>`,
          collapse: "collapseFarmNine",
          heading: "headingFarmNine",
        },
        {
          id: 28,
          title: "How is APY calculated?",
          content: `<p class="faq-content">
         The APY is calculated based on multiple factors which include the token prices of involved tokens, (ETH / BNB / AVAX / iDYP / DYP) and number of people participating in the pools. The rewards users earn depends on their percentage of the pool share.
         </p>`,
          collapse: "collapseFarmTen",
          heading: "headingFarmTen",
        },
        {
          id: 29,
          title: "Why don`t I see the rewards updated?",
          content: `<p class="faq-content">
         A claim needs to be triggered by you or someone from pool. A user simply needs to click CLAIM and complete the transaction. Even if a user choose not to click claim, their rewards are accumulated so they can just come back later and click claim to get all the day's rewards.
         </p>`,
          collapse: "collapseFarmEleven",
          heading: "headingFarmEleven",
        },
        {
          id: 30,
          title: "Is there any Impermanent loss in farming?",
          content: `<p class="faq-content">
         Yield farming does have Impermanent loss. You can read about how impermanent loss works below. There are also multiple videos on YouTube explaining the concept.
         </p>
         <a target="_blank" href="https://academy.binance.com/en/articles/impermanent-loss-explained">
         <button class="btn filled-btn pool-btn d-flex align-items-center gap-2">View More <img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' /></button>
         </a>
         `,
          collapse: "collapseFarmTwelve",
          heading: "headingFarmTwelve",
        },
        {
          id: 31,
          title:
          "Why are the rewards not showing in my wallet after I claimed and completed the transaction?",
          content: `<p class="faq-content">
         The rewards are generated in Wrapped form, WETH, WBNB, WAVAX for example, so users may need to add these as custom tokens.
         </p>`,
          collapse: "collapseFarmThirteen",
          heading: "headingFarmThirteen",
        },
        {
          id: 32,
          title: "Why are rewards sent in Wrapped format? How can I use them?",
          content: `<p class="faq-content">
         The tokens are wrapped for security reasons. Users can unwrap them in a DEX for the same value. For example, WETH has same value as ETH so when you unwrap you will get a 1:1 ratio
   Users can also Swap these token to other tokens WETH->USDT for example.
   
         </p>`,
          collapse: "collapseFarmFourteen",
          heading: "headingFarmFourteen",
        },
        {
          id: 33,
          title: "How does Anti Manipulation work?",
          content: `<p class="faq-content">
         Anti-manipulation aims to maintain stability, fair access to liquidity, and provide a secure and simplified DeFi platform for users of all sizes. The protocol employs an anti-manipulation feature that aims to limit the market impact on users converting rewards into ETH and other native platform tokens.
   To maintain token price stability, every 24 hours the smart contract will automatically try to convert the DYP rewards into ETH and other native platform tokens.
   If the DYP price is affected by more than -2.5%, then the maximum DYP amount that does not affect the price will be swapped, with the remaining amount distributed in the next day’s rewards. After seven days, if we still have undistributed DYP rewards, the Dypius governance will vote on whether the remaining DYP will be distributed to the token holders or burned (all burned tokens are removed from circulation).
   
         </p>`,
          collapse: "collapseFarmFifteen",
          heading: "headingFarmFifteen",
        },
        {
          id: 34,
          title:
          "Where can I find these farming pools and are there tutorials on how to farm?",
          content: `<p class="mb-0">
                       These pools can be found on our website and tutorials are available for each of them. You can find more details down below:
                       </p>
                     <div class='row d-grid pool-container p-4'>
                       <div class="pool-card p-3">
                         <div class="d-flex flex-row gap-2 mb-3">
                         <img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/ethereumDropdown.svg' alt="" />
                         <h5 class='ethereum mb-0'>ETH Pools</h5>
                         </div>
                       <div class="d-grid inner-pool">
                       <div class='d-flex justify-content-center flex-column'>
                         <a target="_blank" href="https://app.dyp.finance/farming-new-1">
                         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center w-100">No Lock <img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
                         </a>
                        </div>
                        <div class='d-flex justify-content-center flex-column'>
                         <a target="_blank" href="https://app.dyp.finance/farming-new-2">
                         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center w-100">3 Days<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
                         </a>
                        </div>
                        <div class='d-flex justify-content-center flex-column'>
                         <a target="_blank" href="https://app.dyp.finance/farming-new-3">
                         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center w-100">30 Days<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
                         </a>
                        </div>
                        <div class='d-flex justify-content-center flex-column'>
                         <a target="_blank" href="https://app.dyp.finance/farming-new-4">
                         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center w-100">60 Days<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
                         </a>
                        </div>
                        <div class='d-flex justify-content-center flex-column'>
                         <a target="_blank" href="https://app.dyp.finance/farming-new-5">
                         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center w-100">90 Days<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
                         </a>
                        </div>
                        <div class='d-flex justify-content-center flex-column'>
                         <a target="_blank" href="https://youtu.be/xc2S9Jei7DA">
                         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center w-100">Tutorial<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
                         </a>
                        </div>
                       </div>
                       </div>
                       <div class="pool-card p-3">
                       <div class="d-flex flex-row gap-2 mb-3">
                         <img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/bnbDropdown.svg' alt="" />
                         <h5 class='bnb mb-0'>BNB Pools</h5>
                         </div>
                         <div class="d-grid inner-pool">
                       <div class='d-flex justify-content-center flex-column'>
                         <a target="_blank" href="https://app-bsc.dyp.finance/farming-new-1">
                         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center w-100">No Lock <img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
                         </a>
                        </div>
                        <div class='d-flex justify-content-center flex-column'>
                         <a target="_blank" href="https://app-bsc.dyp.finance/farming-new-2">
                         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center w-100">3 Days<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
                         </a>
                        </div>
                        <div class='d-flex justify-content-center flex-column'>
                         <a target="_blank" href="https://app-bsc.dyp.finance/farming-new-3">
                         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center w-100">30 Days<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
                         </a>
                        </div>
                        <div class='d-flex justify-content-center flex-column'>
                         <a target="_blank" href="https://app-bsc.dyp.finance/farming-new-4">
                         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center w-100">60 Days<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
                         </a>
                        </div>
                        <div class='d-flex justify-content-center flex-column'>
                         <a target="_blank" href="https://app-bsc.dyp.finance/farming-new-5">
                         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center w-100">90 Days<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
                         </a>
                        </div>
                        <div class='d-flex justify-content-center flex-column'>
                         <a target="_blank" href="https://youtu.be/2pOUmRTMN1o">
                         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center w-100">Tutorial<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
                         </a>
                        </div>
                       </div>
                       </div>
                       <div class="pool-card p-3">
                       <div class="d-flex flex-row gap-2 mb-3">
                         <img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/avaDropdown.svg' alt="" />
                         <h5 class='avax mb-0'>AVAX Pools</h5>
                         </div>
                       <div class="d-grid inner-pool">
                       <div class='d-flex justify-content-center flex-column'>
                         <a target="_blank" href="https://app-avax.dyp.finance/farming-new-1">
                         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center w-100">No Lock <img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
                         </a>
                        </div>
                        <div class='d-flex justify-content-center flex-column'>
                         <a target="_blank" href="https://app-avax.dyp.finance/farming-new-2">
                         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center w-100">3 Days<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
                         </a>
                        </div>
                        <div class='d-flex justify-content-center flex-column'>
                         <a target="_blank" href="https://app-avax.dyp.finance/farming-new-3">
                         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center w-100">30 Days<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
                         </a>
                        </div>
                        <div class='d-flex justify-content-center flex-column'>
                         <a target="_blank" href="https://app-avax.dyp.finance/farming-new-4">
                         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center w-100">60 Days<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
                         </a>
                        </div>
                        <div class='d-flex justify-content-center flex-column'>
                         <a target="_blank" href="https://app-avax.dyp.finance/farming-new-5">
                         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center w-100">90 Days<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
                         </a>
                        </div>
                        <div class='d-flex justify-content-center flex-column'>
                         <a target="_blank" href="https://youtu.be/b-WHRSgFn-k">
                         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center w-100">Tutorial<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
                         </a>
                        </div>
                       </div>
                       </div>
                     </div>`,
          collapse: "collapseFarmSixteen",
          heading: "headingFarmSixteen",
        },
      ],
    },
    {
      categoryId: 4,
      title: "Buyback",
      content: [
        {
          id: 35,
          title: "What is DYP Buyback?",
          content: `<p class="faq-content">DYP Buyback is another great way to earn passive income. This product was implemented after an investor created governance proposal was approved by the community.
 
       To start earning, simply deposit one of the supported assets into the Buyback contract. Then all deposited assets will automatically be converted into DYP + iDYP and deposited into a staking contract and earn 75% APR in DYP. The rewards are distributed automatically and can be claimed every day. When you unstake you will receive all the deposited amounts in DYP.
       </p>`,
          collapse: "collapseBuybackOne",
          heading: "headingBuybackOne",
        },
        {
          id: 36,
          title: "How can I withdraw my assets?",
          content: `<p class="faq-content">Follow these steps to withdraw assets:
       - Head to the dApp.
       - Scroll down to find Withdraw Section.
       - You can choose to withdraw part of your assets, or you can click Max to withdraw 100% of your assets.
       - Click Withdraw and complete the 2 transactions.
       </p>`,
          collapse: "collapseBuybackTwo",
          heading: "headingBuybackTwo",
        },
        {
          id: 37,
          title:
          "Where can I find these pools and are there tutorials on how to do Buyback?",
          content: `<p class="faq-content">These pools can be found on our website and tutorials are available for each of them. You can find more details below:</p>
       <div class='row d-grid pool-container p-4'>
       <div class="pool-card p-3">
         <div class="d-flex flex-row gap-2 mb-3">
         <img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/ethereumDropdown.svg' alt="" />
         <h5 class='ethereum mb-0'>ETH Pools</h5>
         </div>
       <div class="d-grid inner-pool">
       <div class='d-flex justify-content-center flex-column'>
         <a target="_blank" href="https://app.dyp.finance/staking-buyback-1">
         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center w-100">No Lock<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
         </a>
        </div>
        <div class='d-flex justify-content-center flex-column'>
         <a target="_blank" href="https://app.dyp.finance/staking-buyback-2">
         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center w-100">90 Days<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
         </a>
        </div>
        <div class='d-flex justify-content-center flex-column'>
         <a target="_blank" href="https://youtu.be/7CZ_ianX2bk">
         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center w-100">Tutorial<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
         </a>
        </div>
       </div>
       </div>
       <div class="pool-card p-3">
       <div class="d-flex flex-row gap-2 mb-3">
         <img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/bnbDropdown.svg' alt="" />
         <h5 class='bnb mb-0'>BNB Pools</h5>
         </div>
         <div class="d-grid inner-pool">
       <div class='d-flex justify-content-center flex-column'>
         <a target="_blank" href="https://app-bsc.dyp.finance/staking-buyback-1">
         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center w-100">No Lock <img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
         </a>
        </div>
        <div class='d-flex justify-content-center flex-column'>
         <a target="_blank" href="https://app-bsc.dyp.finance/staking-buyback-2">
         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center w-100">90 Days<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
         </a>
        </div>
        <div class='d-flex justify-content-center flex-column'>
         <a target="_blank" href="https://youtu.be/l3Jka88T308">
         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center w-100">Tutorial<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
         </a>
        </div>
       </div>
       </div>
       <div class="pool-card p-3">
       <div class="d-flex flex-row gap-2 mb-3">
         <img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/avaDropdown.svg' alt="" />
         <h5 class='avax mb-0'>AVAX Pools</h5>
         </div>
       <div class="d-grid inner-pool">
       <div class='d-flex justify-content-center flex-column'>
         <a target="_blank" href="https://app-avax.dyp.finance/staking-buyback-1">
         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center w-100">No Lock <img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
         </a>
        </div>
        <div class='d-flex justify-content-center flex-column'>
         <a target="_blank" href="https://app-avax.dyp.finance/staking-buyback-2">
         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center w-100">90 Days<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
         </a>
        </div>
        <div class='d-flex justify-content-center flex-column'>
         <a target="_blank" href="https://youtu.be/_WuIQUwwpGM">
         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center w-100">Tutorial<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
         </a>
        </div>
       </div>
       </div>
     </div>
       `,
          collapse: "collapseBuybackThree",
          heading: "headingBuybackThree",
        },
      ],
    },
    {
      categoryId: 5,
      title: "Vault",
      content: [
        {
          id: 38,
          title: "What is DYP Vault?",
          content: `<p class="faq-content">The DYP Vault is an automated smart contract with Compound Protocol integration and support for ETH, WBTC, USDC, USDT, and DAI markets. The rewards from Compound Protocol are distributed completely to the users. Users have the possibility to withdraw their tokens back to their deposit after the lockin period together with interest from compound interest.
       </p>`,
          collapse: "collapseVaultOne",
          heading: "headingVaultOne",
        },
        {
          id: 39,
          title:
          "Will I be getting the same amount of tokens I deposited when I withdraw?",
          content: `<p class="faq-content">Yes, users will withdraw the same amount of tokens as deposited.
       </p>`,
          collapse: "collapseVaultTwo",
          heading: "headingVaultTwo",
        },
        {
          id: 40,
          title:
          "Where can I find the DYP Vault and are there tutorials on how to take advantage of the Vault?",
          content: `<p class="faq-content">Below are the links to find Vault tutorials. Currently DYP Vault is only available on the ETH chain. In the future, DYP may launch Vault on more chains too.
       </p>
       <div class="pool-card p-3">      
       <div class="d-grid buyback-pool">
       <div class='d-flex justify-content-center flex-column'>
         <a target="_blank" href="https://vault.dyp.finance/vault-weth">
         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center w-100">Supply ETH<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
         </a>
        </div>
        <div class='d-flex justify-content-center flex-column'>
         <a target="_blank" href="https://vault.dyp.finance/vault-wbtc">
         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center w-100">Supply WBTC<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
         </a>
        </div>
        <div class='d-flex justify-content-center flex-column'>
         <a target="_blank" href="https://vault.dyp.finance/vault-usdc">
         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center w-100">Supply USDC<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
         </a>
        </div>
        <div class='d-flex justify-content-center flex-column'>
         <a target="_blank" href="https://vault.dyp.finance/vault-usdt">
         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center w-100">Supply USDT<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
         </a>
        </div>
        <div class='d-flex justify-content-center flex-column'>
         <a target="_blank" href="https://vault.dyp.finance/vault-dai">
         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center w-100">Supply DAI<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
         </a>
        </div>
        <div class='d-flex justify-content-center flex-column'>
         <a target="_blank" href="https://youtu.be/t8Yr3ZIxHJA?list=PL8K0d30DJYVMLMbhYcOmzQHmPGDRrDpnl">
         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center w-100">Tutorial<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
         </a>
        </div>
       </div>
       </div>
       `,
          collapse: "collapseVaultThree",
          heading: "headingVaultThree",
        },
      ],
    },
    {
      categoryId: 6,
      title: "CAWS NFT",
      content: [
        {
          id: 41,
          title: "What is an NFT?",
          content: `<p class="faq-content">
       Non-fungible tokens (NFT) are best understood as unique digital assets. They exist in a variety of industries from digital art and virtual real estate to collectibles, gaming and more. Basically, any type of media can be minted or tokenized and turned into an NFT: art, trading cards, memes, gifs, video clips, audio clips, tweets, this article—anything. Once tokenized, these assets can be bought, sold, and traded using cryptocurrency.
       </p>`,
          collapse: "collapseCawsOne",
          heading: "headingCawsOne",
        },
        {
          id: 42,
          title: "What is the Cats and Watches Society NFT?",
          content: `<p class="faq-content">The Cats and Watches Society (CAWS) NFT is a unique collection of 10,000 randomly generated, hand-drawn utility NFTs developed by Dypius. These unique NFTs are stored on IPFS utilizing the Ethereum blockchain and consist of over 235 different traits, each outfitted with its own luxury watch of various rarities. 
       </p>`,
          collapse: "collapseCawsTwo",
          heading: "headingCawsTwo",
        },
        {
          id: 43,
          title: "Who is the creator of Cats and Watches Society NFT?",
          content: `<p class="faq-content">CAWS was developed by Dypius and released in April 2022. The team is fully doxxed and can be found in the about section of the official website or Dypius LinkedIn profile.
       </p>`,
          collapse: "collapseCawsThree",
          heading: "headingCawsThree",
        },
        {
          id: 44,
          title: "What’s the minting process like?",
          content: `<p class="faq-content">The minting process has ended. The collection of 10,000 CAWS NFTs are sold out.
       </p>`,
          collapse: "collapseCawsFour",
          heading: "headingCawsFour",
        },
        {
          id: 45,
          title: "How can I get a Cats and Watches NFT?",
          content: `<p class="faq-content">Users may purchase a CAWS on the secondary market like the verified collection on OpenSea, Looks Rare or the upcoming metaverse open market.
       </p>`,
          collapse: "collapseCawsFive",
          heading: "headingCawsFive",
        },
        {
          id: 46,
          title: "Where are the NFTs stored?",
          content: `<p class="faq-content">CAWS NFTs will go right into your wallet after you purchase. You will be able to check them out on websites like OpenSea.
       </p>`,
          collapse: "collapseCawsSix",
          heading: "headingCawsSix",
        },
        {
          id: 47,
          title: "Can I sell or trade my NFT?",
          content: `<p class="faq-content">Absolutely. There are several websites that allow you to sell your NFT like OpenSea, Looksrare, Coinbase NFT, and Gem.xyz
       </p>`,
          collapse: "collapseCawsSeven",
          heading: "headingCawsSeven",
        },
        {
          id: 48,
          title: "What is the roadmap?",
          content: `<p class="faq-content">✓ Mint 10,000 CAWS 
       ✓ CAWS becomes available on secondary market 
       ✓ CAWS staking pool introduced with 50% fixed APR ETH rewards
       ✓ CAWS Adventures 2D mobile and PC side scrolling platformer released
       ✓ DYP pays 10% of minting fees to holders 
       ✓ DYP giveaway of 5 Rolexes worth over $150,000 (June 2022)
       
       Coming soon
       - Merch Release
       - Holders mint an additional standalone free watch NFT 
       - Virtual reality in Metaverse begins for CAWS
       - Play to earn NFT concept becomes active for CAWS holders
       
       </p>`,
          collapse: "collapseCawsEight",
          heading: "headingCawsEight",
        },
        {
          id: 49,
          title: "When will the Play2Earn game be released?",
          content: `<p class="faq-content">The virtual reality P2E game is scheduled for release Q4 2022.
       </p>`,
          collapse: "collapseCawsNine",
          heading: "headingCawsNine",
        },
        {
          id: 50,
          title: "How can I check the rarity of my NFT?",
          content: `<p class="faq-content">DYP has multiple rarity partners including rarity.tools, raritysniper.com, traitsniper.com and the rarity bot found in the Discord server
       </p>`,
          collapse: "collapseTCawsen",
          heading: "headingCawsTen",
        },
        {
          id: 51,
          title: "How can I contact the team?",
          content: `<p class="faq-content">The easiest way is to contact us directly through the website, twitter, discord or telegram. The links can be found below in the linktree
       </p>`,
          collapse: "collapseCawsEleven",
          heading: "headingCawsEleven",
        },
        {
          id: 52,
          title: "What are your official Links?",
          content: `<div class="pool-card p-3">      
       <div class="d-grid links-pool">
        <div class='d-flex justify-content-center flex-column'>
         <a target="_blank" href="https://dyp.finance/">
         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center w-100">Official website<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
         </a>
        </div>
        <div class='d-flex justify-content-center flex-column'>
         <a target="_blank" href="https://discord.gg/dypcaws">
         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center w-100">Official Discord<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
         </a>
        </div>
        <div class='d-flex justify-content-center flex-column'>
         <a target="_blank" href="https://linktr.ee/dyp.finance">
         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center w-100">Linktree<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
         </a>
        </div>
       </div>
       </div>`,
          collapse: "collapseCawsTwelve",
          heading: "headingCawsTwelve",
        },
        {
          id: 53,
          title: "Are there any prizes, giveaways, raffles etc?",
          content: `<p class="faq-content">
       - CAWS minters were eligible for free Rolex Watch Drawings worth over $150,000
       - CAWS holders received 10% of their minting fees returned to them via airdrop
       - Discord and Twitter giveaways have totaled over 25 ETH in prizes
       - DYP has also given away $APE coin and the $DYP token for various activities
       - Over $6,500 in prizes have been given away for CAWS Adventures players
       - Monthly Discord poker tournaments with exciting prizes      
       </p>`,
          collapse: "collapseCawsThirteen",
          heading: "headingCawsThirteen",
        },
        {
          id: 54,
          title: "Why should I purchase a Cats and Watches Society NFT?",
          content: `<p class="faq-content">- CAWS NFT has unmatched utility in the NFT space
       - Unlike other projects, the CAWS NFT floor price is much higher than mint price
       - Join an international community of really cool members
       - Utilize your NFT to earn Passive Income
       
       </p>`,
          collapse: "collapseCawsFourteen",
          heading: "headingCawsFourteen",
        },
        {
          id: 55,
          title: "Does CAWS have any IRL utility or sponsorships?",
          content: `<p class="faq-content">- The Caws NFT will be featured on DYP’s Racebox race team
       - Sponsors or Boat Mojo Yachting
       - Sponsors of Deep Forest Fest Music festival
       - Sponsors of Box Fighting
       - Winners of Blockchain Startup Award
       - Participants in the Global DeFi Investment Summit
       
       </p>`,
          collapse: "collapseCawsFifteen",
          heading: "headingCawsFifteen",
        },
      ],
    },
    {
      categoryId: 7,
      title: "Governance",
      content: [
        {
          id: 56,
          title: "What is DYP Governance?",
          content: `<p class="faq-content">
       DYP tokens represent voting shares in the Dypius governance. The introduction of DYP tokens enables shared community ownership of a vibrant, diverse, and dedicated governance system which will actively guide the protocol toward the future. Through governance, DYP holders can vote to add more pools, burn tokens, allocate DYP toward grants, strategic partnerships, governance initiatives, and other programs.
       </p>`,
          collapse: "collapseGovernanceOne",
          heading: "headingGovernanceOne",
        },
        {
          id: 57,
          title: "Is DYP Governance available across all 3 chains?",
          content: `<p class="faq-content">
       Yes, see below for more information:
       </p>
       <div class="pool-card p-3">      
       <div class="d-grid links-pool">
        <div class='d-flex justify-content-center flex-column'>
         <a target="_blank" href="https://gov.dyp.finance/">
         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center w-100">ETH Governance<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
         </a>
        </div>
        <div class='d-flex justify-content-center flex-column'>
         <a target="_blank" href="https://gov-bsc.dyp.finance/">
         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center w-100">BNB Governance<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
         </a>
        </div>
        <div class='d-flex justify-content-center flex-column'>
         <a target="_blank" href="https://gov-avax.dyp.finance/">
         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center w-100">AVAX Governance<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
         </a>
        </div>
       </div>
       </div>
       `,
          collapse: "collapseGovernanceTwo",
          heading: "headingGovernanceTwo",
        },
        {
          id: 58,
          title: "How does DYP Governance work?",
          content: `<p class="faq-content">
       Any user can create a proposal using 5000 DYP tokens from their holdings. The proposal can be related to Disbursing / Burning tokens, or users can create other proposal suggestions. After a proposal is created, holders can vote: 1 DYP token = 1 Vote. Proposals may be executed within 3 days after voting ends. Quorum requirement is a minimum of 25,000 $DYP. Proposals with winning votes less than QUORUM will not be executed. Disburse proposals will disburse a maximum amount of $DYP within a -2.5% Price Impact.
 
       Video tutorial can be found here: 
       </p>
       <a target="_blank" href="https://youtu.be/0WSYN2qHTNQ">
       <button class="btn filled-btn pool-btn d-flex align-items-center gap-2 d-flex align-items-center gap-2">View<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' /></button>
       </a>
       `,
          collapse: "collapseGovernanceThree",
          heading: "headingGovernanceThree",
        },
        {
          id: 59,
          title:
          "Is there a history of successfully executed Governance proposals available?",
          content: `<p class="faq-content">
       Yes! There are many Burn and Disburse proposals that have been executed and there were other proposals which lead to the creation of the Buyback pools. The governance is open and available now to holders. The team values and prioritizes new proposals.
       </p>`,
          collapse: "collapseGovernanceFour",
          heading: "headingGovernanceFour",
        },
        {
          id: 60,
          title:
          "What happens to my locked DYP tokens used for Governance? Are they lost?",
          content: `<p class="faq-content">
       No, users will simply need to withdraw their DYP back at the conclusion of the Governance voting period.
       </p>`,
          collapse: "collapseGovernanceFive",
          heading: "headingGovernanceFive",
        },
        {
          id: 61,
          title:
          "Can I withdraw my DYP token used for voting before the Governance proposal ends?",
          content: `<p class="faq-content">
       Yes, users can withdraw their DYP during a governance proposal, but the casted Vote will become null and void, and could possibly lead to a change in the end results of the vote.
       </p>`,
          collapse: "collapseGovernanceSix",
          heading: "headingGovernanceSix",
        },
      ],
    },
    {
      categoryId: 8,
      title: "iDYP",
      content: [
        {
          id: 61,
          title: "What is iDYP token and why was it launched?",
          content: `<p class="faq-content">
       iDYP is an ERC-20 token used in the Dypius ecosystem as a component of smart contract strategies. It is accessible on three majour networks like Ethereum, BNB chain, and Avalanche. The ecosystem it is designed to facilitate reward distribution to users from earn products using iDYP tokens. Dypius metaverse platform will use iDYP as a key token by being a crucial component of a fascinating play-to-earn game. Dypius has a multi-token economy and uses another ERC-20 token called Dypius (DYP) as a governance token for its ecosystem.
       </p>`,
          collapse: "collapseIDypOne",
          heading: "headingIDypOne",
        },
        {
          id: 62,
          title: "Where can I buy iDYP tokens?",
          content: `<div class="pool-card p-3">      
       <div class="d-grid links-pool">
        <div class='d-flex justify-content-center flex-column'>
         <a target="_blank" href="https://app.uniswap.org/#/swap?use=V2&inputCurrency=0xbd100d061e120b2c67a24453cf6368e63f1be056">
         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center w-100">Uniswap in ETH chain<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
         </a>
        </div>
        <div class='d-flex justify-content-center flex-column'>
         <a target="_blank" href="https://pancakeswap.finance/swap?inputCurrencty=BNB&outputCurrency=0xbd100d061e120b2c67a24453cf6368e63f1be056">
         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center w-100">Pancakeswap in BNB chain<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
         </a>
        </div>
        <div class='d-flex justify-content-center flex-column'>
         <a target="_blank" href="https://app.pangolin.exchange/#/swap?&outputCurrency=0xbd100d061e120b2c67a24453cf6368e63f1be056">
         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center w-100">Pangolin in AVAX chain<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
         </a>
        </div>
       </div>
       </div>`,
          collapse: "collapseIDypTwo",
          heading: "headingIDypTwo",
        },
        {
          id: 63,
          title: "Can I Stake iDYP?",
          content: `<p class="faq-content">
       Yes, DYP offers staking for iDYP on 3 chains. You can find more details below:
       </p>
       <div class='row d-grid pool-container p-4'>
       <div class="pool-card p-3">
         <div class="d-flex flex-row gap-2 mb-2">
         <img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/ethereumDropdown.svg' alt="" />
         <h5 class='ethereum mb-0'>ETH Pools</h5>
         </div>
       <div class="d-grid inner-pool">
       <div class='d-flex justify-content-center flex-column'>
        <p class='mb-0'>iDYP > iDYP</p>
        <a  target="_blank" href="https://app.dyp.finance/staking-idyp-1">
         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center">No Lock <img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
        </a>
        </div>
        <div class='d-flex justify-content-center flex-column'>
        <p class='mb-0'>iDYP > iDYP</p>
        <a  target="_blank" href="https://app.dyp.finance/staking-idyp-2">
         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center">90 Days Lock <img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
        </a>
        </div>
       </div>
       </div>
       <div class="pool-card p-3">
       <div class="d-flex flex-row gap-2 mb-2">
         <img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/bnbDropdown.svg' alt="" />
         <h5 class='bnb mb-0'>BNB Pools</h5>
         </div>
       <div class="d-grid inner-pool">
       <div class='d-flex justify-content-center flex-column'>
        <p class='mb-0'>iDYP > iDYP</p>
        <a  target="_blank" href="https://app-bsc.dyp.finance/staking-idyp-1">
         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center">No Lock <img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
        </a>
        </div>
        <div class='d-flex justify-content-center flex-column'>
        <p class='mb-0'>iDYP > iDYP</p>
        <a  target="_blank" href="https://app-bsc.dyp.finance/staking-idyp-2">
         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center">90 Days Lock <img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
        </a>
        </div>
        
       </div>
       </div>
       <div class="pool-card p-3">
       <div class="d-flex flex-row gap-2 mb-2">
         <img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/avaDropdown.svg' alt="" />
         <h5 class='avax mb-0'>AVAX Pools</h5>
         </div>
       <div class="d-grid inner-pool">
       <div class='d-flex justify-content-center flex-column'>
        <p class='mb-0'>iDYP > iDYP</p>
        <a  target="_blank" href="https://app-avax.dyp.finance/staking-idyp-1">
         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center">No Lock <img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
        </a>
        </div>
        <div class='d-flex justify-content-center flex-column'>
        <p class='mb-0'>iDYP > iDYP</p>
        <a  target="_blank" href="https://app-avax.dyp.finance/staking-idyp-2">
         <button class="btn filled-btn pool-btn w-100 gap-2 d-flex justify-content-between align-items-center">90 Days Lock <img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
        </a>
        </div>
       </div>
       </div>
     </div>
 
       `,
          collapse: "collapseIDypThree",
          heading: "headingIDypThree",
        },
      ],
    },
    {
      categoryId: 9,
      title: "Buy DYP",
      content: [
        {
          id: 64,
          title: "How and where can I buy DYP?",
          content: `<p class="faq-content">
       You can buy DYP on multiple CEX (Central Exchanges) and DEX (Decentralized Exchanges). 
       </p>
       <table class="table">
          <thead>
            <tr>
              <th scope="col">CEX (Central Exchanges)</th>
              <th scope="col">DEX (Decentrailized Exchanges)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Coinbase</td>
              <td>Uniswap</td>
            </tr>
            <tr>
              <td>Kucoin</td>
              <td>KyberDMM</td>
            </tr>
            <tr>
              <td>Gate.io</td>
              <td>PancakeSwap</td>
            </tr>
            <tr>
              <td>Poloniex</td>
              <td>Pangolin</td>
            </tr>
            <tr>
              <td>MexC Global</td>
              <td>1inch</td>
            </tr>
            <tr>
              <td>Huobi</td>
            </tr>
          </tbody>
        </table>
       `,
          collapse: "collapseBuyDypOne",
          heading: "headingBuyDypOne",
        },
        {
          id: 65,
          title: "Are there any tutorials available on how to buy DYP?",
          content: `<p class="faq-content">
       Yes, tutorials are available for each exchange DYP is offered. You can find more info below:
       </p>
       <div class='row d-grid pool-container buydyp-container p-4'>
       <div class="pool-card p-3">
         <h5 class='ethereum'>CEX</h5>
       <div class="d-grid inner-pool">
       <div class='d-flex justify-content-center flex-column'>
        <a  target="_blank" href="https://pro.coinbase.com/trade/DYP-USD">
         <button class="btn filled-btn w-100 pool-btn w-100 gap-2 d-flex justify-content-between align-items-center">Coinbase<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
        </a>
        </div>
        <div class='d-flex justify-content-center flex-column'>
        <a  target="_blank" href="https://youtu.be/mjUUqNy-zW8">
         <button class="btn filled-btn w-100 pool-btn w-100 gap-2 d-flex justify-content-between align-items-center">Tutorial<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
        </a>
        </div>
        <div class='d-flex justify-content-center flex-column'>
        <a  target="_blank" href="https://trade.kucoin.com/DYP-USDT">
         <button class="btn filled-btn w-100 pool-btn w-100 gap-2 d-flex justify-content-between align-items-center">Kucoin<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
        </a>
        </div>
        <div class='d-flex justify-content-center flex-column'>
        <a  target="_blank" href="https://youtu.be/BIuy1A-_-dU">
         <button class="btn filled-btn w-100 pool-btn w-100 gap-2 d-flex justify-content-between align-items-center">Tutorial<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
        </a>
        </div>
        <div class='d-flex justify-content-center flex-column'>
        <a  target="_blank" href="https://www.gate.io/trade/DYP_USDT">
         <button class="btn filled-btn w-100 pool-btn w-100 gap-2 d-flex justify-content-between align-items-center">Gate<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
        </a>
        </div>
        <div class='d-flex justify-content-center flex-column'>
        <a  target="_blank" href="https://youtu.be/arVFXf5hESE">
         <button class="btn filled-btn w-100 pool-btn w-100 gap-2 d-flex justify-content-between align-items-center">Tutorial<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
        </a>
        </div>
        <div class='d-flex justify-content-center flex-column'>
        <a  target="_blank" href="https://poloniex.com/exchange/USDT_DYP">
         <button class="btn filled-btn w-100 pool-btn w-100 gap-2 d-flex justify-content-between align-items-center">Poloniex<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
        </a>
        </div>
       </div>
       </div>
       <div class="pool-card p-3">
         <h5 class='bnb'>DEX</h5>
       <div class="d-grid inner-pool">
       <div class='d-flex justify-content-center flex-column'>
        <a  target="_blank" href="https://app.uniswap.org/#/swap?use=V2&inputCurrency=0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17">
         <button class="btn filled-btn w-100 pool-btn w-100 gap-2 d-flex justify-content-between align-items-center">Uniswap<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
        </a>
        </div>
        <div class='d-flex justify-content-center flex-column'>
        <a  target="_blank" href="https://youtu.be/XsmZ9xW_nps">
         <button class="btn filled-btn w-100 pool-btn w-100 gap-2 d-flex justify-content-between align-items-center">Tutorial<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
        </a>
        </div>
        <div class='d-flex justify-content-center flex-column'>
        <a  target="_blank" href="https://pancakeswap.finance/swap?inputCurrencty=BNB&outputCurrency=0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17">
         <button class="btn filled-btn w-100 pool-btn w-100 gap-2 d-flex justify-content-between align-items-center">Pancakeswap<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
        </a>
        </div>
        <div class='d-flex justify-content-center flex-column'>
        <a  target="_blank" href="https://youtu.be/sLHWYgNEbq8">
         <button class="btn filled-btn w-100 pool-btn w-100 gap-2 d-flex justify-content-between align-items-center">Tutorial<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
        </a>
        </div>
        <div class='d-flex justify-content-center flex-column'>
        <a  target="_blank" href="https://app.pangolin.exchange/#/swap?&outputCurrency=0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17 ">
         <button class="btn filled-btn w-100 pool-btn w-100 gap-2 d-flex justify-content-between align-items-center">Pangolin<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
        </a>
        </div>
        <div class='d-flex justify-content-center flex-column'>
        <a  target="_blank" href="https://youtu.be/T6qYvErqD-M">
         <button class="btn filled-btn w-100 pool-btn w-100 gap-2 d-flex justify-content-between align-items-center">Tutorial<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
        </a>
        </div>
        <div class='d-flex justify-content-center flex-column'>
        <a  target="_blank" href="https://app.1inch.io/#/1/swap/DYP/ETH">
         <button class="btn filled-btn w-100 pool-btn w-100 gap-2 d-flex justify-content-between align-items-center">1inch<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
        </a>
        </div>
        <div class='d-flex justify-content-center flex-column'>
        <a  target="_blank" href="https://youtu.be/IE5danKYD-c">
         <button class="btn filled-btn w-100 pool-btn w-100 gap-2 d-flex justify-content-between align-items-center">Tutorial<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
        </a>
        </div>
        <div class='d-flex justify-content-center flex-column'>
        <a  target="_blank" href="https://dmm.exchange/#/swap?outputCurrency=0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17&networkId=43114">
         <button class="btn filled-btn w-100 pool-btn w-100 gap-2 d-flex justify-content-between align-items-center">KyberDMM<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
        </a>
        </div>
        <div class='d-flex justify-content-center flex-column'>
        <a  target="_blank" href="https://youtu.be/olhIziGMs0Y">
         <button class="btn filled-btn w-100 pool-btn w-100 gap-2 d-flex justify-content-between align-items-center">Tutorial<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
        </a>
        </div>
       </div>
       </div>
     </div>
       `,
          collapse: "collapseBuyDypTwo",
          heading: "headingBuyDypTwo",
        },
      ],
    },
    {
      categoryId: 10,
      title: "Bridge",
      content: [
        {
          id: 66,
          title: "What is the DYP Bridge?",
          content: `<p class="faq-content">
       Users can bridge their DYP from one chain to other ETH => BNB and ETH => AVAX
       The ETH-BNB Bridge will help you swap DYP tokens between Ethereum Network and BNB Chain.
       </p>
       <div class="pool-card p-3">
       <div class="d-grid inner-pool">
        <div class='d-flex justify-content-center flex-column'>
        <a  target="_blank" href="https://bridge.dyp.finance/">
         <button class="btn filled-btn w-100 pool-btn w-100 gap-2 d-flex justify-content-between align-items-center">ETH < - > BNB Bridge<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
        </a>
        </div>
        <div class='d-flex justify-content-center flex-column'>
        <a  target="_blank" href="https://www.youtube.com/watch?v=SK-9PqZJM-I">
         <button class="btn filled-btn w-100 pool-btn w-100 gap-2 d-flex justify-content-between align-items-center">Tutorial<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
        </a>
        </div>
       </div>
       </div>
       <p class="faq-content">
       Users can bridge their DYP from one chain to other ETH => BNB and ETH => AVAX
       The ETH-BNB Bridge will help you swap DYP tokens between Ethereum Network and BNB Chain.
       </p>
       <div class="pool-card p-3">
       <div class="d-grid inner-pool">
        <div class='d-flex justify-content-center flex-column'>
        <a  target="_blank" href="https://avax-bridge.dyp.finance/">
         <button class="btn filled-btn w-100 pool-btn w-100 gap-2 d-flex justify-content-between align-items-center">ETH < - > AVAX Bridge<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
        </a>
        </div>
        <div class='d-flex justify-content-center flex-column'>
        <a  target="_blank" href="https://www.youtube.com/watch?v=k--YXSSYUMY">
         <button class="btn filled-btn w-100 pool-btn w-100 gap-2 d-flex justify-content-between align-items-center">Tutorial<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' alt="" /></button>
        </a>
        </div>
       </div>
       </div>
       `,
          collapse: "collapseBridgeOne",
          heading: "headingBridgeOne",
        },
        {
          id: 67,
          title:
          "Why does my bridge transaction fail and it shows insanely high gas fees?",
          content: `<p class="faq-content">
       This might be because the bridge needs a refill, please report this issue to our community moderators and they will keep you posted.
       </p>`,
          collapse: "collapseBridgeTwo",
          heading: "headingBridgeTwo",
        },
        {
          id: 68,
          title: "Why cannot I bridge DYP from AVAX <->BNB chains?",
          content: `<p class="faq-content">
       For security reasons we have not implemented this bridge. If you want to bridge from AVAX<->BNB chain, you need to follow this path: AVAX -> ETH and ETH-> BNB chain.
       </p>`,
          collapse: "collapseBridgeThree",
          heading: "headingBridgeThree",
        },
      ],
    },
    {
      categoryId: 11,
      title: "DYP Tools",
      content: [
        {
          id: 69,
          title: "What are DYP Tools?",
          content: `<p class="faq-content">
       A main feature of Dypius is going to be the decentralized tools dashboard (DYP Tools). These tools will increase the use case for DYP Token, provide a liquidity locker for DeFi projects, and at the same time protect the DeFi community by providing a decentralized trust score for DeFi projects.
       </p>`,
          collapse: "collapseDypToolsOne",
          heading: "headingDypToolsOne",
        },
        {
          id: 70,
          title: "What are the features of DYP Tools?",
          content: `<p class="faq-content">
       •	Uniswap Watchman
 •	Pool Explorer
 •	Pair Explorer
 •	Unique Community Trust Vote System
 •	Big Swap Explorer
 •	DYP Locker
 •	Top Tokens Page
 •	Yield FARM Data
 •	Account — User Subscription Page and Dashboard
 •	Launchpad for V2
 •	Submit Info for new projects
 •	Subscription Smart Contract Setup
 •	Buy DYP
 •	Change Theme
 More information about each of these features can be found on our medium article here
       </p>
       <a target="_blank" href="https://dypfinance.medium.com/defi-yield-protocol-dyp-tools-v1-launch-376fdf97d4f7">
       <button class="btn filled-btn pool-btn d-flex align-items-center gap-2">View More<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' /></button>
       </a>
       `,
          collapse: "collapseDypToolsTwo",
          heading: "headingDypToolsTwo",
        },
        {
          id: 71,
          title: "Where can I access DYP Tools?",
          content: `<a target="_blank" href="https://tools.dyp.finance/">
       <button class="btn filled-btn pool-btn d-flex align-items-center gap-2">Access Here<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' /></button>
       </a>`,
          collapse: "collapseDypToolsThree",
          heading: "headingDypToolsThree",
        },
        {
          id: 72,
          title:
          "Do I need to hold DYP token to access the Premium Subscription of DYP Tools?",
          content: `<p class="faq-content">
       Yes! In order to access the Premium Subscription, users must hold DYP tokens to benefit from the advanced features such as Decentralized Score, Unique Community Trust Vote System, DYP Locker, Yield Farm Data, and Launchpad.
       </p>`,
          collapse: "collapseDypToolsFour",
          heading: "headingDypToolsFour",
        },
        {
          id: 73,
          title: " Does DYP Tool have a trusted Community Vote System?",
          content: `<p class="faq-content">
       Yes! DYP Tools comes with a Unique Community Trust Vote System. Most of the current cryptocurrency data aggregators use a voting system that can be easily manipulated. DYP’s Unique Community Trust Vote System ensures project voting can be trusted and relied upon.
       </p>`,
          collapse: "collapseDypToolsFive",
          heading: "headingDypToolsFive",
        },
      ],
    },
    {
      categoryId: 12,
      title: "Launchpad",
      content: [
        {
          id: 74,
          title: "What is Launchpad?",
          content: `<p class="faq-content">
       A crypto launchpad is a platform that helps startups and enterprises launch their own cryptocurrency or blockchain projects. The launchpad provides the necessary tools, resources, and support to help these organizations succeed.
       </p>`,
          collapse: "collapseLaunchpadOne",
          heading: "headingLaunchpadOne",
        },
        {
          id: 75,
          title: "What is DYP Launchpad?",
          content: `<p class="faq-content">
       DYP Launchpad is an Ecosystem designed for DeFi users to earn a yield on their assets, supplying advanced features to track tokens, NFTs, and more. The Launchpad enables projects to raise capital in a decentralized environment utilizing DYP Tools to deliver the highest security for users.
 Learn more about DYP Launchpad and how it works from this medium article: 
       </p>
       <a target="_blank" href="https://dypfinance.medium.com/learn-about-defi-yield-protocol-launchpad-547c387409c2">
       <button class="btn filled-btn pool-btn d-flex align-items-center gap-2">View More<img src='https://newsbucketgino.s3.eu-central-1.amazonaws.com/right-arrow.svg' /></button>
       </a>
       `,
          collapse: "collapseLaunchpadTwo",
          heading: "headingLaunchpadTwo",
        },
        {
          id: 76,
          title: "What are the key features of DYP Launchpad?",
          content: `<p class="faq-content">
       - Mandatory smart contract audits by a top-tier auditor
       - Know Your Customer (“KYC”) of the project team
       - Liquidity locked utilizing DYP Locker
       - Team tokens locked in vesting contracts      
       </p>`,
          collapse: "collapseLaunchpadThree",
          heading: "headingLaunchpadThree",
        },
        {
          id: 77,
          title: "What are the key features of DYP Launchpad for users?",
          content: `<p class="faq-content">
       - Project outline
       - Due diligence reports
       - Audit reports for contracts
       - How much tokens will the project offer?
       - How much the project raised in capital? 
       - Multiple tiers depending on the amount of locked DYP
       - Varied max token buy available at different tiers
       </p>`,
          collapse: "collapseLaunchpadFour",
          heading: "headingLaunchpadFour",
        },
        {
          id: 78,
          title: "What are the key features of DYP Launchpad for teams?",
          content: `<p class="faq-content">
       - Tier smart contract to allow users to lockup DYP for relevant tiers
 - Integrated standard presale smart contracts accept USDC, USDT, DAI, WBTC, WBNB, WAVAX and WETH at predefined rates
 - Users get tokens instantly, and collected funds are in the DYP team’s custody to be delivered to the fundraising team by DYP
 - Integrated Token Locker smart contract with presale contract to automatically lock tokens for a predefined time after the purchase 
       </p>`,
          collapse: "collapseLaunchpadFive",
          heading: "headingLaunchpadFive",
        },
      ],
    },
    
  ];


  

  const [faqItems, setFaqItems] = useState(categories[0].content);
  const [faqTitle, setFaqTitle] = useState(categories[0].title)

  const setCategory = (category, title) => {
    setFaqItems(category)
    setFaqTitle(title)
  } 

  return (
    <div className="container-fluid faq-wrapper">
      <div className="container-lg d-flex justify-content-center align-items-center flex-column py-5">
        <div className="col-12 col-lg-6">
          <Title
            top="Got"
            bottom="a question?"
            align="d-flex flex-row gap-2 justify-content-center"
          />
          <p className="text-secondary text-center">
            We’re here to help and answer any question you might have.
          </p>
        </div>
        <div className="categories-container px-0 p-5 w-100">
          <div className="row align-items-center justify-content-center ">
            <div className=" search-container d-flex justify-content-center align-items-center w-50">
              <StyledTextField
                id="outlined-search"
                type="search"
                label="Search"
                size="small"
                sx={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="row categories-grid mt-5 gap-4">
           {categories.map((category, index) => (
             <div onClick={() => setCategory(category.content, category.title)} key={index} className={`category-card d-flex justify-content-center ${JSON.stringify(faqItems) === JSON.stringify(category.content) ? 'active-category' : null } align-items-center flex-column gap-2 mx-auto`}>
             <img src={JSON.stringify(faqItems) === JSON.stringify(category.content) ? activeBook : book} alt="" />
             <p className="mb-0">{category.title}</p>
           </div>
           ))}
          </div>
        </div>
      </div>

      <div className="faq-container container-lg w-100 mt-4 p-5">
        <div className="row justify-content-between align-items-center">
          <h2 className="fw-bold mb-5">
            {`${faqTitle} FAQs`}
          </h2>
        </div>
        <div className="row flex-column">
          <div className="accordion" id="faqAccordion">
            {faqItems.map((faq, index) => (
              <FAQAccordion
                key={index}
                title={faq.title}
                content={faq.content}
                id={faq.collapse}
                heading={faq.heading}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

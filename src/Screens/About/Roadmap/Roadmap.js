import React, { useEffect, useState } from "react";
import "./_roadmap.scss";
import RoadmapCard from "../../../components/RoadmapCard/RoadmapCard";
import Slider from "react-slick";
import { useRef } from "react";
import useWindowSize from "../../../hooks/useWindowSize";

const Roadmap = () => {
  const windowSize = useWindowSize();

  const roadmap = [
    {
      date: "2020 Q3",
      name: [
        "Creation of DeFi Yield Protocol",
        "DeFi Yield Protocol Documentation Release",
        "Building DYP ERC-20 Token Smart Contract",
        "DeFi Yield Protocol Community Marketing",
      ],
    },
    {
      date: "2020 Q4",
      name: [
        "Token Crowdsale",
        "Uniswap Listing",
        "Liquidity Lock",
        "Building Smart Contract for Uniswap LP",
        "Smart Contract Security Audit",
        "Launch Yield Farming Pools on Ethereum",
        "Development of New Smart Contracts",
        "Launch Governance",
        "Launch Referral",
      ],
    },
    {
      date: "2021 Q1",
      name: [
        "Launch Stake V1 on Ethereum",
        "Launch Yield Farming on Binance Smart Chain",
        "Launch DYP Vault V1 on Ethereum",
        "Building DYP Tools V1",
        "Building Bridge for Binance Smart Chain",
        "Partnerships and Integrations",
        "DeFi Yield Protocol Dapps Development",
      ],
    },
    {
      date: "2021 Q2",
      name: [
        "Release New UI Design for Main Website and Dapps",
        "Launch NFT Dapp V1 on Ethereum",
        "Launch Yield Farming on Avalanche Chain",
        "Bridge for Binance Smart Chain and Avalanche",
        "Launch DYP Tools V1 on Ethereum",
        "Launch Buyback Pools",
        "Integrating Chainlink Price Feeds",
        "Building DYP Launchpad with DYP Tools Safety Features Integrated",
      ],
    },
    {
      date: "2021 Q3",
      name: [
        "Launch DYP Tools V1 on Avalanche Chain",
        "Integration with Pangolin DEX, Coin98 Wallet, and Kyber Network",
        "Integration for Wallet Connect",
        "Building New Smart Contract for Farm, Stake, Buyback, and Governance",
        "Launch New Smart Contract for Farm, Stake, Buyback, and Governance",
        "Launch iDYP Token as part of the New Smart Contracts",
      ],
    },
    {
      date: "2021 Q4",
      name: [
        "Launch DYP Launchpad with DYP Tools Safety Features integrated",
        "Building New UI Design for Dapps",
        "Building New UI Design for Main Website",
        "Building New Smart Contract for DYP Vault",
        "Integration with Crypto.com RSS News Feed",
      ],
    },
    {
      date: "2022 Q1",
      name: [
        "Launch Cats and Watches Society NFT",
        "Launch New Smart Contract for DYP Vault",
        "Building CAWS Adventures 2D Game",
        "Building CAWS Staking Smart Contract",
        "Building New Smart Contract for DYP Staking",
      ],
    },
    {
      date: "2022 Q2",
      name: [
        "Launch New Smart Contract for DYP Staking",
        "Launch Cats and Watches Society Staking Pool",
        "Launch New UI Design for Main Website",
        "Launch New UI Design for Dapps",
        "Launch CAWS Adventures 2D Game",
        "Play to Earn NFT Concept becomes active for CAWS Holders",
      ],
    },
  ];

  const quarterThree2022 = [
    {
      title: "Building Extra Features for DYP Tools",
      content: [
        "News Section available on Ethereum, BNB Chain, and Avalanche",
        "Yields Section on BNB Chain",
        "DYP Locker on BNB Chain",
        "New benefits on DYP Tools Premium subscription",
        "Improved voting system",
      ],
    },

    {
      title: "Metaverse Research and Launch of Different Products",
      content: [
        "Deep analysis on Metaverse platforms",
        "Dypius product integration",
        "Partners areas development",
        "Navigation, looting, and fighting systems",
        "Character classes, abilities, tools, and gears",
        "Talent tree",
      ],
    },

    {
      title: "Further Extension and Project Growth in Different Areas",
      content: ["Multipe Partners integrations on World of Dypians"],
    },
    {
      title:
        "Incorporation of a Legal Entity for upcoming Regulation For Decentralized Finance",
      content: ["DYP Finance LTD registration certificate"],
    },
  ];

  const quarterFour2022 = [
    {
      title: "Rebranding Process",
      content: [
        "A brand-new and improved UI/UX",
        "Enhanced dApps on DYP Tools",
      ],
    },
    {
      title: "Metaverse Begins for the CAWS",
      content: ["CAWS NFT integration on World of Dypians"],
    },

    {
      title: "Expanding our products to other Chains",
      content: ["Multichain integration on World of Dypians"],
    },
    {
      title: "Launch App for iOS and Android",
      content: [
        "App approval pending (expected approval and release time estimated on Q1 2023)",
      ],
    },
    {
      title: "Launch Multi-Chain DEX",
      content: ["Token Swaps with 1inch Plugin on DYP Tools"],
    },
  ];

  const quarterOne2023 = [
    {
      title: "Beta Testers Program",
      content:
        "Release a Beta Testers Program that allows a selected group of users to play and experience the World of Dypians before it is officially released to the public.",
      completed: true,
    },
    {
      title: "Genesis Land NFT Launch",
      content:
        "World of Dypians Genesis edition is limited to 1,000 NFTs, each of which represents a piece of land located in a prime area within the game that will provide players with a wide range of benefits.",
      completed: true,
    },
    {
      title: "Dedicated Genesis staking pool",
      content:
        "A dedicated staking pool for Genesis Land NFTs that allows users to stake their NFTs into a 25% APR pool and earn rewards in Ethereum",
      completed: true,
    },
    {
      title: "Metaverse Multichain Integration",
      content:
        "By incorporating a multichain system into World of Dypians (WoD), the game and the native token, DYP will be able to interact with multiple blockchain networks, allowing for greater interoperability, more utility, and accessibility for players.",
      completed: true,
    },
    {
      title: "Introducing new staking pools",
      content:
        "Launch a dedicated staking pool that lets users receive rewards by depositing asset combinations such as DYP token, iDYP token, CAWS NFT, and Genesis NFT.",
      completed: true,
    },
    {
      title: "Introducing the CAWS Timepiece NFT collection",
      content:
        "The CAWS Timepiece NFT collection will provide users additional utility and perks in the World of Dypians Metaverse. CAWS owners will have the ability to mint CAWS Timepiece for free.",
      completed: true,
    },
  ];

  const quarterTwo2023 = [
    {
      title: "Introducing DYP Tools Premium users to Metaverse",
      content:
        "The introduction of DYP Tools Premium users to the metaverse opens up a world of opportunities for those who are looking for additional benefits and a more enhanced experience within the ecosystem.",
      completed: true,
    },

    {
      title: "Introduction of NFT Marketplace",
      content:
        "Users can access WoD marketplace to purchase assets used to customize and enhance their experience.",
      completed: true,
    },

    {
      title: "DYP Locker enhancement",
      content: "Improving DYP Locker functionalities on the BNB Chain",
      completed: true,
    },

    {
      title: "Introducing new users to Metaverse",
      content:
        "Introducing new users to crypto space and providing them with the tools and resources necessary to participate in the metaverse ecosystem.",
      completed: true,
    },
  ];

  const quarterThree2023 = [
    {
      title: "Marketplace enhancement",
      content:
        "Enhanced World of Dypians Marketplace with new features to provide users with a more comprehensive experience.",
      completed: true,
    },
    {
      title: "WoD 0.2.0 launch",
      content:
        "WoD 0.2.0 introduces a transformed cityscape, ushering in a futuristic era for Dypian enthusiasts.",
      completed: true,
    },
    {
      title: "New Earn Pools",
      content:
        "Introducing dedicated staking, farming, and vault pools, enabling users to maximize their earnings effortlessly.",
      completed: true,
    },
    {
      title: "Multiplayer PVE DEMO",
      content:
        "Experience cooperative gameplay with the multiplayer PVE demo, offering exciting challenges and teamwork opportunities.",
      completed: true,
    },
    {
      title: "Multiplayer PVP DEMO",
      content:
        "Engage in thrilling player-versus-player action with the multiplayer PVP demo, where you'll battle against other skilled players.",
      completed: true,
    },
    {
      title: "News v2",
      content:
        "Enhanced News section with new features to provide users with a more comprehensive and user-friendly experience.",
      completed: true,
    },
  ];

  const quarterFour2023 = [
    {
      title: "DYP v2 Migration",
      content:
        "Facilitating the migration process for the DYP token to boost its performance, security, and utility within the ecosystem.",
      completed: true,
    },

    {
      title: "Bridge Upgrade",
      content:
        "Upgrading the DYP token Bridge to ensure compatibility with the new DYP smart contract and reinforce security measures.",
      completed: true,
    },
    {
      title: "Premium Membership Upgrade",
      content:
        "Elevating our premium subscription by introducing additional benefits for Metaverse and dApps.",
      completed: true,
    },
    {
      title: "Expanding our Products to other Chains",
      content:
        "Broadening the reach of our products to other chains, enhancing solutions, and increasing accessibility for users.",
      completed: true,
    },
    // {
    //   title: "Cross-Chain Interoperability Protocol (CCIP) Integration",
    //   content:
    //     "Integrating Chainlink's CCIP solution into our primary NFT collections, enabling users to seamlessly bridge NFTs across multiple networks.",
    //   completed: true,
    // },
    {
      title: "Launch Mobile App DEMO",
      content:
        "The mobile app will provide each user with an interesting and engaging experience, thanks to its user-friendly UI and seamless integration with the WoD platform.",
      completed: true,
    },
    {
      title: "Multiplayer PVE",
      content:
        "Adventure with other players to complete quests, fight bosses, survive against waves of enemies, earn rewards and much more.",
      completed: true,
    },
    {
      title: "Multiplayer PVP",
      content:
        "Engage in huge battle events against other players in real-time. Players can compete and interact against each other in 1v1 or group battle to complete objectives.",
      completed: true,
    },
  ];

  const quarterOne2024 = [
    {
      title: "Cross-Chain Interoperability Protocol (CCIP) Integration",
      content:
        "Integrating Chainlink's CCIP solution into our primary NFT collections, enabling users to seamlessly bridge NFTs across diverse networks.",
      completed: true,
    },
    {
      title: "Launch of DeFi Aggregator",
      content:
        "Introduce a decentralized finance aggregator to provide users with access to various DeFi products from various projects.",
      completed: true,
    },
    {
      title: "New Earn Pool",
      content:
        "Introduce new ways for users to earn rewards through different DeFi mechanisms.",
      completed: true,
    },
    {
      title: "Upgrading Benefits of Premium Subscribers",
      content:
        "Enhance the benefits for premium subscribers to provide more value and incentives for their subscription.",
      completed: true,
    },

    {
      title: "New Chain Expansion",
      content:
        "Integrate additional blockchains into the game to broaden the reach and appeal.",
      completed: true,
    },

    {
      title: "Launch Mobile App",
      content:
        "Release a mobile application for Dypius to provide users with a more convenient way to access the platform and its features.",
      completed: true,
    },
  ];

  const quarterTwo2024 = [
    {
      title: "CAWS Mobile Game",
      content:
        "Launch a mobile game featuring CAWS NFTs that provides a new gaming experience for players.",
      completed: true,
    },
    {
      title: "Marketplace Improvements",
      content:
        "Enhance the marketplace features to improve user experience and facilitate smoother transactions.",
      completed: true,
    },
    {
      title: "Expanding our Products to other Blockchains",
      content:
        "Extend Dypius products and services to other blockchains, increasing accessibility and user base.",
      completed: true,
    },
    {
      title: "UI/UX Improvement",
      content:
        "Improve the user interface and experience across all platforms and products for a more seamless and enjoyable user experience.",
      completed: true,
    },
    // {
    //   title: "App Referral Program",
    //   content:
    //     "Introduce a referral program for the mobile app to incentivize users to invite others to join the platform.",
    // },
    // {
    //   title: "CCIP USDC Integration",
    //   content:
    //     "Integrate USDC (USD Coin) into the CCIP for seamless cross-chain transactions and interactions.",
    // },

    {
      title: "Omnichannel Login",
      content:
        "Implement a unified login system across all platforms (game, mobile app, and website) for a seamless user experience.",
      completed: true,
    },
  ];

  const quarterThree2024 = [
    {
      title: "New NFT Staking Pools",
      content:
        "Introduce new staking pools for NFTs, allowing users to earn rewards by staking their NFT assets.",
      completed: true,
    },
    {
      title: "WoD 0.3.0 Launch",
      content:
        "Release a major update for World of Dypians, bringing new features, content, and improvements to the game.",
      completed: true,
    },
    {
      title: "DYP Tools v3",
      content:
        "Launch a new and improved version of DYP Tools with enhanced features and functionalities.",
      completed: true,
    },

    {
      title: "Decentralized Launchpad Launch",
      content:
        "Introduce a decentralized launchpad for new projects, providing a platform for fair and transparent token launches.",
      completed: true,
    },

    {
      title: "Expansion to Base Network",
      content:
        "Introduce the integration of DYP Token on the Base network, unlocking new opportunities and increasing liquidity for users through the Base ecosystem.",
      completed: true,
    },
    {
      title: "DYP on Base Superbridge",
      content:
        "Enable users holding DYP v2 on Ethereum to bridge their tokens to Base using the Superbridge app, providing a smooth and hassle-free way to move assets between networks.",
      completed: true,
    },
    {
      title: "New Staking Pools on Base",
      content:
        "Introduce new staking pools on Base for DYPv2, offering users enhanced earning opportunities and increased utility for their tokens. These pools will encourage long-term participation and deeper engagement within the Base network.",
      completed: true,
    },
    {
      title: "Loyalty Program Introduction",
      content:
        "Introduce a loyalty program exclusive to Base users, offering gas incentives and other rewards, aimed at improving user onboarding and transaction efficiency.",
        completed: true,
      },
    {
      title: "Introduction of the Stone Crack Game",
      content:
        "Launch the Stone Crack game, an interactive and engaging mini-game where players break stones to earn valuable rewards. The game will be available on Base, adding an extra layer of entertainment for users.",
        completed: true,
      },
  ];

  const quarterFour2024 = [
    {
      title: "Stone Crack Enhancement",
      content:
        "Enhance the Stone Crack  mini-game on opBNB, offering an immersive and competitive experience with unique challenges and exclusive rewards.",
        completed: true,
      },
    // {
    //   title: "Mini-Games Expansion to Base",
    //   content:
    //     "Launch the popular mini-games on the Base network, enabling players to enjoy engaging activities and earn rewards on this innovative blockchain.",
    //     completed: true,
    //   },
    {
      title: "New Bridges Deployment",
      content:
        "Introduce the DYP Bridges on Base and opBNB to enable seamless and secure cross-chain asset transfers, enhancing interoperability for all users.",
        completed: true,
      },
    // {
    //   title: "Loyalty Program Introduction",
    //   content:
    //     "Roll out the Loyalty Program, offering tiered rewards and exclusive benefits to active participants across the DYP ecosystem.",
    //     completed: true,
    //   },
    {
      title: "Launchpad’s First Project Release",
      content:
        "Celebrate the release of the first project on the Launchpad, empowering innovative ventures and showcasing the platform’s potential.",
        completed: true,
      },
    {
      title: "CAWS Adventure Enhancements",
      content:
        "Upgrade the CAWS Adventure with improved journey and richer rewards to elevate the player experience.",
        completed: true,
      },
    {
      title: "Mini-Games Leaderboards Enhancement",
      content:
        "Enhance leaderboards for mini-games to track player achievements, foster competition, and reward top performers with exclusive incentives.",
        completed: true,
      },
    {
      title: "dApps UI/UX Improvement",
      content:
        "Improve the user interface and experience across all platforms and products for a more seamless and enjoyable user experience.",
        completed: true,
      },
  ];
  const quarterOne2025 = [
    {
      title: "Launch New Staking Pools",
      content:
        "Introduce new staking pools to provide diverse earning opportunities, offering competitive rewards and increased flexibility for users.",
      completed: true,
    },
    {
      title: "Complete DYP Migration",
      content:
        "Close the migration bridge to ensure a smooth transition for all users on the DYP v2 utilities.",
      completed: true,
    },
    {
      title: "Introducing the Buyback Program",
      content:
        "Launch of a strategic buyback initiative powered by AI, aimed at reducing $DYP supply, curbing inflation, and boosting rewards for staking pools and mini-games.",
      completed: false,
    },
    {
      title: "New Burn Mechanism",
      content:
        "Deploy a revamped token burn mechanism to enhance token value and maintain economic sustainability within the ecosystem.",
      completed: false,
    },
    {
      title: "Increase Premium Benefits",
      content:
        "Enhance the premium subscription model with exclusive perks such as higher rewards, early access to features, and premium-only events.",
      completed: false,
    },

    {
      title: "Introduce Growth Plans",
      content:
        "Roll out tailored plans to support emerging projects, including optimized tools, marketing assistance, and ecosystem integration services.",
      completed: false,
    },

    {
      title: "Increase DYP Token Utilities",
      content:
        "Expand the use cases for DYP tokens by integrating them into additional products and services, further embedding them into the ecosystem.",
      completed: false,
    },
    {
      title: "Partnership Development",
      content:
        "Continuously add new features and partners, advertising opportunities, user rewards, airdrops, and more, to enhance the user experience",
      completed: false,
    },
  ];

  const quarterTwo2025 = [
    {
      title: "DYP Tools v4",
      content:
        "Launch the next generation of DYP Tools with enhanced analytics, improved interface, and advanced features designed to provide users with more robust DeFi insights.",
      completed: false,
    },
    {
      title: "Expand to New Blockchains",
      content:
        "Integrate the ecosystem with additional blockchains to enhance cross-chain functionality, increase user accessibility, and diversify the platform’s reach.",
      completed: false,
    },
    {
      title: "UI/UX Improvements",
      content:
        "Introduce significant updates to the interface and navigation, ensuring a more seamless and intuitive user experience across all devices.",
      completed: false,
    },
    {
      title: "User Account Revamp",
      content:
        "Redesign account systems to improve user profiles, enhance account security, and provide a centralized dashboard for easier management of activities.",
      completed: false,
    },
    {
      title: "Leaderboard Enhancements",
      content:
        "Upgrade leaderboards to include more dynamic tracking, seasonal rewards, and deeper player insights to drive engagement and competition.",
      completed: false,
    },
    {
      title: "Mini-Games Improvement",
      content:
        "Improve mini-games with richer gameplay mechanics, more engaging challenges, and better integration of rewards to enhance player satisfaction.",
      completed: false,
    },

    {
      title: "Partnership Development",
      content:
        "Continuously add new features and partners, advertising opportunities, user rewards, airdrops, and more, to enhance the user experience.",
      completed: false,
    },
  ];

  const quarterThree2025 = [
    {
      title: "Launch Launchpad V2",
      content:
        "Introduce a revamped launchpad with improved features, offering innovative fundraising mechanisms and a more streamlined experience for both projects and participants.",
      completed: false,
    },
    {
      title: "Introduce Loyalty Program V2",
      content:
        "Roll out an enhanced version of the loyalty program with tier-based rewards, increased benefits for long-term users, and broader accessibility across ecosystems.",
      completed: false,
    },
    {
      title: "Expand Mini-Games Portfolio",
      content:
        "Add new mini-games with unique themes and gameplay styles, providing players with more variety and opportunities for rewards.",
      completed: false,
    },

    {
      title: "News Revamp",
      content:
        "Redesign the news section with a modern layout, real-time updates, and curated content to keep users informed about the latest developments in the ecosystem.",
      completed: false,
    },

    {
      title: "DYP Locker Improvements",
      content:
        "Enhance the DYP Locker with additional functionalities, improved security, and a more user-friendly interface to better serve token holders and project teams.",
      completed: false,
    },
    {
      title: "Partnership Development",
      content:
        "Continuously add new features and partners, advertising opportunities, user rewards, airdrops, and more, to enhance the user experience",
      completed: false,
    },
  ];

  const quarterFour2025 = [
    {
      title: "Launch Web3 DeFi Powered by AI Tools",
      content:
        "Introduce Advanced AI Assistants: Introduce AI-driven DeFi tools designed to provide users with personalized portfolio management, yield optimization strategies, and automated market insights.",
      completed: false,
    },
    {
      title: "Referral Program v2",
      content:
        "Introduce a revamped referral program for the to incentivize users to invite others to join the platform.",
      completed: false,
    },
    {
      title: "New NFT Staking Pools",
      content:
        "Introduce new staking pools for NFTs, allowing users to earn rewards by staking their NFT assets.",
      completed: false,
    },
    {
      title: "Governance v2",
      content:
        "Launch new features for the governance system, enhancing the platform's decentralization and community involvement.",
      completed: false,
    },
    {
      title: "Portfolio Management Dashboard",
      content:
        "Provide users with a comprehensive dashboard displaying real-time information about their investments, current yields, asset distribution across blockchains, and the platform's overall performance in optimizing returns.",
      completed: false,
    },

    {
      title: "Enhanced Security Features",
      content:
        "Roll out advanced security protocols across all platforms, ensuring user safety and protection against potential threats.",
      completed: false,
    },
    {
      title: "Partnership Development",
      content:
        "Continuously add new features and partners, advertising opportunities, user rewards, airdrops, and more, to enhance the user experience",
      completed: false,
    },
    // {
    //   title: "Introduction of Character NFT Generation",
    //   content:
    //     "Generate the main character in the game as an NFT item, adding value and uniqueness to the player's experience.",
    // },
    // {
    //   title: "Full Release of the Multiplayer PvE",
    //   content:
    //     "Launch the full version of the multiplayer player-versus-environment mode for all players to enjoy.",
    // },
  ];

  const [oldSlide, setOldSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(6);
  const [activeSlide2, setActiveSlide2] = useState(
    window.innerWidth < 786 ? 10 : 12
  );
  const [showText, setShowText] = useState(true);

  const [activeYear, setActiveYear] = useState({
    roadmap2020: false,
    roadmap2021: false,
    roadmap2022: false,
    roadmap2023: false,
    roadmap2024: false,
    roadmap2025: true,
  });

  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: window.innerWidth < 786 ? 18 : 20,

    beforeChange: (current, next) => {
      setOldSlide(current);
      setActiveSlide(next);
    },
    afterChange: (current) => {
      setActiveSlide2(current);
    },

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: roadmap.length,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 10,
        },
      },
    ],
  };

  const slider = useRef();

  const next = () => {
    if (windowSize.width > 786) {
      slider.current.slickNext();
      if (activeYear.roadmap2023 === true) {
        setActiveYear({
          roadmap2020: true,
          roadmap2021: false,
          roadmap2022: false,
          roadmap2023: false,
          roadmap2024: false,
          roadmap2025: false,

        });
        setShowText(false);
        slider.current.innerSlider.slickGoTo(0);
        setActiveSlide2(0);
      }

      if (activeSlide2 === 0) {
        setActiveYear({
          roadmap2020: false,
          roadmap2021: true,
          roadmap2022: false,
          roadmap2023: false,
          roadmap2024: false,
          roadmap2025: false,

        });
        setShowText(false);

        slider.current.innerSlider.slickGoTo(4);
      }

      if (activeSlide2 === 4) {
        setActiveYear({
          roadmap2020: false,
          roadmap2021: false,
          roadmap2022: true,
          roadmap2023: false,
          roadmap2024: false,
          roadmap2025: false,

        });
        setShowText(false);

        slider.current.innerSlider.slickGoTo(8);
      }
      if (activeSlide2 === 8) {
        setActiveYear({
          roadmap2020: false,
          roadmap2021: false,
          roadmap2022: false,
          roadmap2023: true,
          roadmap2024: false,
          roadmap2025: false,

        });
        setShowText(false);

        slider.current.innerSlider.slickGoTo(12);
      }
      if (activeSlide2 === 12) {
        setActiveYear({
          roadmap2020: false,
          roadmap2021: false,
          roadmap2022: false,
          roadmap2023: false,
          roadmap2024: true,
          roadmap2025: false,

        });
        setShowText(false);
        slider.current.innerSlider.slickGoTo(16);
      }
      if (activeSlide2 === 16) {
        setActiveYear({
          roadmap2020: false,
          roadmap2021: false,
          roadmap2022: false,
          roadmap2023: false,
          roadmap2024: false,
          roadmap2025: true,
        });
        setShowText(true);
        slider.current.innerSlider.slickGoTo(20);
      }
    } else {
      slider.current.innerSlider.slickNext();
      if (activeSlide2 < 1) {
        setActiveYear({
          roadmap2020: true,
          roadmap2021: false,
          roadmap2022: false,
          roadmap2023: false,
          roadmap2024: false,
          roadmap2025: false,
        });
      } else if (activeSlide2 < 5) {
        setActiveYear({
          roadmap2020: false,
          roadmap2021: true,
          roadmap2022: false,
          roadmap2023: false,
          roadmap2024: false,
          roadmap2025: false,
        });
      } else if (activeSlide2 < 9) {
        setActiveYear({
          roadmap2020: false,
          roadmap2021: false,
          roadmap2022: true,
          roadmap2023: false,
          roadmap2024: false,
          roadmap2025: false,
        });
      } else if (activeSlide2 < 13) {
        setActiveYear({
          roadmap2020: false,
          roadmap2021: false,
          roadmap2022: false,
          roadmap2023: true,
          roadmap2024: false,
          roadmap2025: false,
        });
      } else if (activeSlide2 < 17) {
        setActiveYear({
          roadmap2020: false,
          roadmap2021: false,
          roadmap2022: false,
          roadmap2023: false,
          roadmap2024: true,
          roadmap2025: false,

        });
      }
      else {
        setActiveYear({
          roadmap2020: false,
          roadmap2021: false,
          roadmap2022: false,
          roadmap2023: false,
          roadmap2024: false,
          roadmap2025: true,
        });
      }
    }
  };


  const previous = () => {
    if (windowSize.width > 786) {
      slider.current.slickPrev();
      if (activeYear.roadmap2023 === true) {
        if (activeSlide2 < 5) {
          setActiveYear({
            roadmap2020: false,
            roadmap2021: true,
            roadmap2022: false,
            roadmap2023: false,
            roadmap2024: false,
          });
        }
      }
      if (activeSlide2 === 20) {
        setActiveYear({
          roadmap2020: false,
          roadmap2021: false,
          roadmap2022: false,
          roadmap2023: false,
          roadmap2024: true,
          roadmap2025: false,
        });
        setShowText(true);
        slider.current.innerSlider.slickGoTo(16);
      }
      if (activeSlide2 === 16) {
        setActiveYear({
          roadmap2020: false,
          roadmap2021: false,
          roadmap2022: false,
          roadmap2023: true,
          roadmap2024: false,
          roadmap2025: false,

        });
        setShowText(false);
        slider.current.innerSlider.slickGoTo(12);
      }
      if (activeSlide2 === 12) {
        setActiveYear({
          roadmap2020: false,
          roadmap2021: false,
          roadmap2022: true,
          roadmap2023: false,
          roadmap2024: false,
          roadmap2025: false,

        });
        setShowText(false);

        slider.current.innerSlider.slickGoTo(8);
      }
      if (activeSlide2 === 8) {
        setActiveYear({
          roadmap2020: false,
          roadmap2021: true,
          roadmap2022: false,
          roadmap2023: false,
          roadmap2024: false,
          roadmap2025: false,
        });
        setShowText(false);

        slider.current.innerSlider.slickGoTo(4);
      }

      if (activeSlide2 === 4) {
        setActiveYear({
          roadmap2020: true,
          roadmap2021: false,
          roadmap2022: false,
          roadmap2023: false,
          roadmap2024: false,
          roadmap2025: false,

        });
        setShowText(false);

        slider.current.innerSlider.slickGoTo(0);
      }
      if (activeSlide2 === 0) {
        setActiveYear({
          roadmap2020: false,
          roadmap2021: false,
          roadmap2022: false,
          roadmap2023: false,
          roadmap2024: false,
          roadmap2025: true,

        });
        setShowText(false);
        slider.current.innerSlider.slickGoTo(20);
      }
     
    } else {
      slider.current.innerSlider.slickPrev();
      if (activeSlide2 < 3) {
        setActiveYear({
          roadmap2020: true,
          roadmap2021: false,
          roadmap2022: false,
          roadmap2023: false,
          roadmap2024: false,
          roadmap2025: false,

        });
      } else if (activeSlide2 < 7) {
        setActiveYear({
          roadmap2020: false,
          roadmap2021: true,
          roadmap2022: false,
          roadmap2023: false,
          roadmap2024: false,
          roadmap2025: false,

        });
      } else if (activeSlide2 < 11) {
        setActiveYear({
          roadmap2020: false,
          roadmap2021: false,
          roadmap2022: true,
          roadmap2023: false,
          roadmap2024: false,
          roadmap2025: false,

        });
      } else if (activeSlide2 < 15) {
        setActiveYear({
          roadmap2020: false,
          roadmap2021: false,
          roadmap2022: false,
          roadmap2023: true,
          roadmap2024: false,
          roadmap2025: false,

        });
      }
      
      else if (activeSlide2 < 19) {
        setActiveYear({
          roadmap2020: false,
          roadmap2021: false,
          roadmap2022: false,
          roadmap2023: false,
          roadmap2024: true,
          roadmap2025: false,
          
        });
      }
      else {
        setActiveYear({
          roadmap2020: false,
          roadmap2021: false,
          roadmap2022: false,
          roadmap2023: false,
          roadmap2024: false,
          roadmap2025: true,

        });
      }
    }
  };

  const goto2020 = () => {
    slider.current.innerSlider.slickGoTo(0);
    setActiveYear({
      roadmap2020: true,
      roadmap2021: false,
      roadmap2022: false,
      roadmap2023: false,
    });
    setShowText(false);
  };
  const goto2021 = () => {
    if (windowSize.width < 786) {
      slider.current.innerSlider.slickGoTo(2);
    } else {
      slider.current.innerSlider.slickGoTo(4);
    }
    setActiveYear({
      roadmap2020: false,
      roadmap2021: true,
      roadmap2022: false,
      roadmap2023: false,
    });
    setShowText(false);
  };
  const goto2022 = () => {
    if (windowSize.width < 786) {
      slider.current.innerSlider.slickGoTo(6);
    } else {
      slider.current.innerSlider.slickGoTo(8);
    }
    setActiveYear({
      roadmap2020: false,
      roadmap2021: false,
      roadmap2022: true,
      roadmap2023: false,
    });
    setShowText(false);
  };
  const goto2023 = () => {
    if (windowSize.width < 786) {
      slider.current.innerSlider.slickGoTo(10);
    } else {
      slider.current.innerSlider.slickGoTo(12);
    }
    setActiveYear({
      roadmap2020: false,
      roadmap2021: false,
      roadmap2022: false,
      roadmap2023: true,
      roadmap2024: false,
    });
    setShowText(false);
  };
  const goto2024 = () => {
    if (windowSize.width < 786) {
      slider.current.innerSlider.slickGoTo(14);
    } else {
      slider.current.innerSlider.slickGoTo(16);
    }
    setActiveYear({
      roadmap2020: false,
      roadmap2021: false,
      roadmap2022: false,
      roadmap2023: false,
      roadmap2024: true,
    });
    setShowText(false);
  };
  const goto2025 = () => {
    if (windowSize.width < 786) {
      slider.current.innerSlider.slickGoTo(18);
    } else {
      slider.current.innerSlider.slickGoTo(20);
    }
    setActiveYear({
      roadmap2020: false,
      roadmap2021: false,
      roadmap2022: false,
      roadmap2023: false,
      roadmap2024: false,
      roadmap2025: true,
    });
    setShowText(true);
  };

  useEffect(() => {
    if (windowSize.width < 786) {
      goto2025();
    }
  }, [windowSize.width]);

  useEffect(() => {
    if (windowSize.width < 786) {
      if (activeSlide2 < 18) {
        setShowText(false);
      } else {
        setShowText(true);
      }
    }
  }, [activeSlide2]);

  return (
    <div className="container-lg roadmap-wrapper overflow-hidden" id="roadmap">
      <div className="row flex-column gap-1 p-3 p-lg-5 roadmap-title">
        <div className="d-flex flex-column flex-lg-row align-items-center align-items-lg-end justify-content-between">
          <h1 className="text-white text-center text-lg-start">
            Dypius roadmap
          </h1>
          <p>Our journey to success</p>
        </div>
        <div className="d-flex flex-column-reverse flex-lg-row w-100 justify-content-between align-items-center align-items-lg-start gap-4">
          <div
            className={`roadmap-desc-wrapper p-3  ${
              !showText && "no-visibility"
            }`}
            style={{ zIndex: 9 }}
          >
            <p className={`roadmap-desc mb-0`}>
              It is important for us to keep our focus on delivering
              high-quality products and improving the current offerings to
              provide our users with the best experience possible. As part of
              our efforts to continuously improve our offerings, we will be
              continually developing new products and enhancing existing
              features in the roadmap. This will ensure that our users are
              always up-to-date with the latest advancements in technology and
              have access to the most advanced features and tools available.
              <a
                href="https://www.worldofdypians.com/roadmap"
                target="_blank"
                style={{ fontWeight: "800", color: "#F0603A" }}
              >
                {" "}
                World of Dypians roadmap
              </a>
            </p>
          </div>

          <div className="d-flex flex-row gap-lg-4 gap-xl-4 gap-md-4 gap-3">
            <div className="years-wrapper d-flex flex-row p-2 gap-1 justify-content-center align-items-center">
              <p
                className={`${activeYear.roadmap2020 && "selected-year"}`}
                onClick={goto2020}
              >
                2020
              </p>
              <p
                className={`${activeYear.roadmap2021 && "selected-year"}`}
                onClick={goto2021}
              >
                2021
              </p>
              <p
                className={`${activeYear.roadmap2022 && "selected-year"}`}
                onClick={goto2022}
              >
                2022
              </p>
              <p
                className={`${activeYear.roadmap2023 && "selected-year"}`}
                onClick={goto2023}
              >
                2023
              </p>
              <p
                className={`${activeYear.roadmap2024 && "selected-year"}`}
                onClick={goto2024}
              >
                2024
              </p>
              <p
                className={`${activeYear.roadmap2025 && "selected-year"}`}
                onClick={goto2025}
              >
                2025
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-evenly position-relative carousel-wrapper">
        <hr />
        <div
          className={`left-button d-flex justify-content-center align-items-center enabled`}
          onClick={previous}
        >
          <img
            src={"https://cdn.worldofdypians.com/dypius/filledLeft.svg"}
            alt="left arrow"
            className="p-4"
          />
        </div>
        <div
          className={`right-button d-flex justify-content-center align-items-center enabled`}
          onClick={next}
        >
          <img
            src={"https://cdn.worldofdypians.com/dypius/emptyRight.svg"}
            alt="rightArrow"
            className="p-4"
          />
        </div>
        <Slider ref={(c) => (slider.current = c)} {...settings}>
          {windowSize.width > 786 && (
            <div className="col-12 d-flex flex-column gap-4 selected-roadmap hidden-roadmap">
              <div className="date-card selected d-flex flex-column align-items-center">
                <img
                  src={
                    "https://cdn.worldofdypians.com/dypius/selectedRoadmap.svg"
                  }
                  style={{ visibility: "hidden" }}
                  alt=""
                />
                <h2 style={{ color: "#EFF0F6" }}>2022 Q4</h2>
                <div className="outer-circle d-flex justify-content-center align-items-center">
                  <div className="inner-circle"></div>
                </div>
              </div>
              <div
                className="accordion accordion-flush roadmap-items d-flex flex-column p-4"
                id="roadmapAccordion"
              >
                {quarterFour2022.map((item, index) => (
                  <div className="accordion-item">
                    <div
                      className="d-flex flex-row align-items-center gap-2 accordion-button roadmap-accordion collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapseQuarterFour${index}`}
                      aria-expanded="false"
                      aroa-aria-controls={`collapseQuarterFour${index}`}
                    >
                      <img
                        src={
                          "https://cdn.worldofdypians.com/dypius/completedIcon.svg"
                        }
                        alt=""
                      />
                      <p>{item.title}</p>
                    </div>
                    <div
                      id={`collapseQuarterFour${index}`}
                      className="accordion-collapse collapse"
                      aria-aria-labelledby={`headingQuarterFour${index}`}
                      data-bs-parent="#roadmapAccordion"
                    >
                      <ul className="mb-0 py-2 roadmap-list">
                        {item.content.map((listItem) => (
                          <li className="accordion-list-item">
                            {index === 0 ? (
                              <a
                                href="https://drive.google.com/file/d/16-aemFDx8ozgerUze6uMMKmAygTNWn0c/view?usp=sharing"
                                target={"_blank"}
                              >
                                {listItem}
                              </a>
                            ) : (
                              listItem
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {windowSize.width > 786 && (
            <div className="col-12 d-flex flex-column gap-4 selected-roadmap hidden-roadmap">
              <div className="date-card selected d-flex flex-column align-items-center">
                <img
                  src={
                    "https://cdn.worldofdypians.com/dypius/selectedRoadmap.svg"
                  }
                  style={{ visibility: "hidden" }}
                  alt=""
                />
                <h2 style={{ color: "#EFF0F6" }}>2022 Q4</h2>
                <div className="outer-circle d-flex justify-content-center align-items-center">
                  <div className="inner-circle"></div>
                </div>
              </div>
              <div
                className="accordion accordion-flush roadmap-items d-flex flex-column p-4"
                id="roadmapAccordion"
              >
                {quarterFour2022.map((item, index) => (
                  <div className="accordion-item">
                    <div
                      className="d-flex flex-row align-items-center gap-2 accordion-button roadmap-accordion collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapseQuarterFour${index}`}
                      aria-expanded="false"
                      aroa-aria-controls={`collapseQuarterFour${index}`}
                    >
                      <img
                        src={
                          "https://cdn.worldofdypians.com/dypius/completedIcon.svg"
                        }
                        alt=""
                      />
                      <p>{item.title}</p>
                    </div>
                    <div
                      id={`collapseQuarterFour${index}`}
                      className="accordion-collapse collapse"
                      aria-aria-labelledby={`headingQuarterFour${index}`}
                      data-bs-parent="#roadmapAccordion"
                    >
                      <ul className="mb-0 py-2 roadmap-list">
                        {item.content.map((listItem) => (
                          <li className="accordion-list-item">
                            {index === 0 ? (
                              <a
                                href="https://drive.google.com/file/d/16-aemFDx8ozgerUze6uMMKmAygTNWn0c/view?usp=sharing"
                                target={"_blank"}
                              >
                                {listItem}
                              </a>
                            ) : (
                              listItem
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {roadmap.map((item, index) => (
            <RoadmapCard key={index} data={item} />
          ))}

          <div className="col-12 d-flex flex-column gap-4 selected-roadmap">
            <div className="date-card selected d-flex flex-column align-items-center">
              <img
                src={
                  "https://cdn.worldofdypians.com/dypius/selectedRoadmap.svg"
                }
                style={{ visibility: "hidden" }}
                alt=""
              />
              <h2 style={{ color: "#EFF0F6" }}>2022 Q3</h2>
              <div className="outer-circle d-flex justify-content-center align-items-center">
                <div className="inner-circle"></div>
              </div>
            </div>
            <div
              className="accordion accordion-flush roadmap-items d-flex flex-column p-4"
              id="roadmapAccordion"
            >
              {quarterThree2022.map((item, index) => (
                <div className="accordion-item">
                  <div
                    className="d-flex flex-row align-items-center gap-2 accordion-button roadmap-accordion collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded="false"
                    aroa-aria-controls={`collapse${index}`}
                  >
                    <img
                      src={
                        "https://cdn.worldofdypians.com/dypius/completedIcon.svg"
                      }
                      alt=""
                    />
                    <p>{item.title}</p>
                  </div>
                  <div
                    id={`collapse${index}`}
                    className="accordion-collapse collapse"
                    aria-aria-labelledby={`heading${index}`}
                    data-bs-parent="#roadmapAccordion"
                  >
                    <ul className="mb-0 py-2 roadmap-list">
                      {item.content.map((listItem) => (
                        <li className="accordion-list-item">
                          {index === 3 ? (
                            <a
                              href="https://drive.google.com/file/d/16-aemFDx8ozgerUze6uMMKmAygTNWn0c/view?usp=sharing"
                              target={"_blank"}
                            >
                              {listItem}
                            </a>
                          ) : (
                            listItem
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 d-flex flex-column gap-4 selected-roadmap">
            <div className="date-card selected d-flex flex-column align-items-center">
              <img
                src={
                  "https://cdn.worldofdypians.com/dypius/selectedRoadmap.svg"
                }
                style={{ visibility: "hidden" }}
                alt=""
              />
              <h2 style={{ color: "#EFF0F6" }}>2022 Q4</h2>
              <div className="outer-circle d-flex justify-content-center align-items-center">
                <div className="inner-circle"></div>
              </div>
            </div>
            <div
              className="accordion accordion-flush roadmap-items d-flex flex-column p-4"
              id="roadmapAccordion"
            >
              {quarterFour2022.map((item, index) => (
                <div className="accordion-item">
                  <div
                    className="d-flex flex-row align-items-center gap-2 accordion-button roadmap-accordion collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapseQuarterFour${index}`}
                    aria-expanded="false"
                    aroa-aria-controls={`collapseQuarterFour${index}`}
                  >
                    <img
                      src={
                        "https://cdn.worldofdypians.com/dypius/completedIcon.svg"
                      }
                      alt=""
                    />
                    <p>{item.title}</p>
                  </div>
                  <div
                    id={`collapseQuarterFour${index}`}
                    className="accordion-collapse collapse"
                    aria-aria-labelledby={`headingQuarterFour${index}`}
                    data-bs-parent="#roadmapAccordion"
                  >
                    <ul className="mb-0 py-2 roadmap-list">
                      {item.content.map((listItem) => (
                        <li className="accordion-list-item">{listItem}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-12 d-flex flex-column gap-4 selected-roadmap">
            <div className="date-card selected d-flex flex-column align-items-center">
              <img
                src={
                  "https://cdn.worldofdypians.com/dypius/selectedRoadmap.svg"
                }
                style={{ visibility: "hidden" }}
                alt=""
              />
              <h2 style={{ color: "#EFF0F6" }}>2023 Q1</h2>
              <div className="outer-circle d-flex justify-content-center align-items-center">
                <div className="inner-circle"></div>
              </div>
            </div>
            <div
              className="accordion accordion-flush roadmap-items d-flex flex-column p-4"
              id="roadmapAccordion"
            >
              {quarterOne2023.map((item, index) => (
                <div className="accordion-item">
                  <div
                    className="d-flex flex-row align-items-center gap-2 accordion-button roadmap-accordion collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapseOne${index}`}
                    aria-expanded="false"
                    aroa-aria-controls={`collapseOne${index}`}
                  >
                    {item?.completed === true ? (
                      <img
                        src={
                          "https://cdn.worldofdypians.com/dypius/completedIcon.svg"
                        }
                        alt=""
                      />
                    ) : (
                      <img
                        src={
                          "https://cdn.worldofdypians.com/dypius/uncompletedIcon.svg"
                        }
                        alt=""
                      />
                    )}
                    <p>{item.title}</p>
                  </div>
                  <div
                    id={`collapseOne${index}`}
                    className="accordion-collapse collapse"
                    aria-aria-labelledby={`headingOne${index}`}
                    data-bs-parent="#roadmapAccordion"
                  >
                    <ul
                      className="mb-0 py-2 ps-2 roadmap-list"
                      style={{ listStyle: "none" }}
                    >
                      <li className="accordion-list-item">{item.content}</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 d-flex flex-column gap-4 selected-roadmap">
            <div className="date-card selected d-flex flex-column align-items-center">
              <img
                src={
                  "https://cdn.worldofdypians.com/dypius/selectedRoadmap.svg"
                }
                style={{ visibility: "hidden" }}
                alt=""
              />
              <h2 style={{ color: "#EFF0F6" }}>2023 Q2</h2>
              <div className="outer-circle d-flex justify-content-center align-items-center">
                <div className="inner-circle"></div>
              </div>
            </div>
            <div
              className="accordion accordion-flush roadmap-items d-flex flex-column p-4"
              id="roadmapAccordion"
            >
              {quarterTwo2023.map((item, index) => (
                <div className="accordion-item">
                  <div
                    className="d-flex flex-row align-items-center gap-2 accordion-button roadmap-accordion collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapseTwo${index}`}
                    aria-expanded="false"
                    aroa-aria-controls={`collapseTwo${index}`}
                  >
                    {item?.completed === true ? (
                      <img
                        src={
                          "https://cdn.worldofdypians.com/dypius/completedIcon.svg"
                        }
                        alt=""
                      />
                    ) : (
                      <img
                        src={
                          "https://cdn.worldofdypians.com/dypius/uncompletedIcon.svg"
                        }
                        alt=""
                      />
                    )}
                    <p>{item.title}</p>
                  </div>
                  <div
                    id={`collapseTwo${index}`}
                    className="accordion-collapse collapse"
                    aria-aria-labelledby={`headingTwo${index}`}
                    data-bs-parent="#roadmapAccordion"
                  >
                    <ul
                      className="mb-0 py-2 ps-2 roadmap-list"
                      style={{ listStyle: "none" }}
                    >
                      <li className="accordion-list-item">{item.content}</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 d-flex flex-column gap-4 selected-roadmap">
            <div className="date-card selected  d-flex flex-column align-items-center">
              <img
                src={
                  "https://cdn.worldofdypians.com/dypius/selectedRoadmap.svg"
                }
                style={{ visibility: "hidden" }}
                alt=""
              />
              <h2 style={{ color: "#EFF0F6" }}>2023 Q3</h2>
              <div className="outer-circle d-flex justify-content-center align-items-center">
                <div className="inner-circle"></div>
              </div>
            </div>
            <div
              className="accordion accordion-flush roadmap-items d-flex flex-column p-4"
              id="roadmapAccordion"
            >
              {quarterThree2023.map((item, index) => (
                <div className="accordion-item">
                  <div
                    className="d-flex flex-row align-items-center gap-2 accordion-button roadmap-accordion collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapseThree${index}`}
                    aria-expanded="false"
                    aroa-aria-controls={`collapseThree${index}`}
                  >
                    {item?.completed === true ? (
                      <img
                        src={
                          "https://cdn.worldofdypians.com/dypius/completedIcon.svg"
                        }
                        alt=""
                      />
                    ) : (
                      <img
                        src={
                          "https://cdn.worldofdypians.com/dypius/uncompletedIcon.svg"
                        }
                        alt=""
                      />
                    )}
                    <p>{item.title}</p>
                  </div>
                  <div
                    id={`collapseThree${index}`}
                    className="accordion-collapse collapse"
                    aria-aria-labelledby={`headingThree${index}`}
                    data-bs-parent="#roadmapAccordion"
                  >
                    <ul
                      className="mb-0 py-2 ps-2 roadmap-list"
                      style={{ listStyle: "none" }}
                    >
                      <li className="accordion-list-item">{item.content}</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 d-flex flex-column gap-4 selected-roadmap">
            <div className="date-card selected d-flex flex-column align-items-center">
              <img
                src={
                  "https://cdn.worldofdypians.com/dypius/selectedRoadmap.svg"
                }
                style={{ visibility: "hidden" }}
                alt=""
              />
              <h2 style={{ color: "#EFF0F6" }}>2023 Q4</h2>
              <div className="outer-circle d-flex justify-content-center align-items-center">
                <div className="inner-circle"></div>
              </div>
            </div>
            <div
              className="accordion accordion-flush roadmap-items d-flex flex-column p-4"
              id="roadmapAccordion"
            >
              {quarterFour2023.map((item, index) => (
                <div className="accordion-item">
                  <div
                    className="d-flex flex-row align-items-center gap-2 accordion-button roadmap-accordion collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapseFour${index}`}
                    aria-expanded="false"
                    aroa-aria-controls={`collapseFour${index}`}
                  >
                    {item?.completed === true ? (
                      <img
                        src={
                          "https://cdn.worldofdypians.com/dypius/completedIcon.svg"
                        }
                        alt=""
                      />
                    ) : (
                      <img
                        src={
                          "https://cdn.worldofdypians.com/dypius/uncompletedIcon.svg"
                        }
                        alt=""
                      />
                    )}
                    <p>{item.title}</p>
                  </div>
                  <div
                    id={`collapseFour${index}`}
                    className="accordion-collapse collapse"
                    aria-aria-labelledby={`headingFour${index}`}
                    data-bs-parent="#roadmapAccordion"
                  >
                    <ul
                      className="mb-0 py-2 ps-2 roadmap-list"
                      style={{ listStyle: "none" }}
                    >
                      <li className="accordion-list-item">{item.content}</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 d-flex flex-column gap-4 selected-roadmap">
            <div className="date-card selected d-flex flex-column align-items-center">
              <img
                src={
                  "https://cdn.worldofdypians.com/dypius/selectedRoadmap.svg"
                }
                style={{ visibility: "hidden" }}
                alt=""
              />
              <h2 style={{ color: "#EFF0F6" }}>2024 Q1</h2>
              <div className="outer-circle d-flex justify-content-center align-items-center">
                <div className="inner-circle"></div>
              </div>
            </div>
            <div
              className="accordion accordion-flush roadmap-items d-flex flex-column p-4"
              id="roadmapAccordion"
            >
           {quarterOne2024.map((item, index) => (
                <div className="accordion-item">
                  <div
                    className="d-flex flex-row align-items-center gap-2 accordion-button roadmap-accordion collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapseQuarterOne2024${index}`}
                    aria-expanded="false"
                    aroa-aria-controls={`collapseQuarterOne2024${index}`}
                  >
                    {item?.completed === true ? (
                      <img
                        src={
                          "https://cdn.worldofdypians.com/dypius/completedIcon.svg"
                        }
                        alt=""
                      />
                    ) : (
                      <img
                        src={
                          "https://cdn.worldofdypians.com/dypius/uncompletedIcon.svg"
                        }
                        alt=""
                      />
                    )}
                    <p>{item.title}</p>
                  </div>
                  <div
                    id={`collapseQuarterOne2024${index}`}
                    className="accordion-collapse collapse"
                    aria-aria-labelledby={`headingQuarterOne2024${index}`}
                    data-bs-parent="#roadmapAccordion"
                  >
                    <ul
                      className="mb-0 py-2 ps-2 roadmap-list"
                      style={{ listStyle: "none" }}
                    >
                      <li className="accordion-list-item">{item.content}</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 d-flex flex-column gap-4 selected-roadmap">
            <div className="date-card selected  d-flex flex-column align-items-center">
              <img
                src={
                  "https://cdn.worldofdypians.com/dypius/selectedRoadmap.svg"
                }
                style={{ visibility: "hidden" }}
                alt=""
              />
              <h2 style={{ color: "#EFF0F6" }}>2024 Q2</h2>
              <div className="outer-circle d-flex justify-content-center align-items-center">
                <div className="inner-circle"></div>
              </div>
            </div>
            <div
              className="accordion accordion-flush roadmap-items d-flex flex-column p-4"
              id="roadmapAccordion"
            >
              {quarterTwo2024.map((item, index) => (
                <div className="accordion-item">
                  <div
                    className="d-flex flex-row align-items-center gap-2 accordion-button roadmap-accordion collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapseQuarterTwo2024${index}`}
                    aria-expanded="false"
                    aroa-aria-controls={`collapseQuarterTwo2024${index}`}
                  >
                    {item?.completed === true ? (
                      <img
                        src={
                          "https://cdn.worldofdypians.com/dypius/completedIcon.svg"
                        }
                        alt=""
                      />
                    ) : (
                      <img
                        src={
                          "https://cdn.worldofdypians.com/dypius/uncompletedIcon.svg"
                        }
                        alt=""
                      />
                    )}
                    <p>{item.title}</p>
                  </div>
                  <div
                    id={`collapseQuarterTwo2024${index}`}
                    className="accordion-collapse collapse"
                    aria-aria-labelledby={`headingQuarterTwo2024${index}`}
                    data-bs-parent="#roadmapAccordion"
                  >
                    <ul
                      className="mb-0 py-2 ps-2 roadmap-list"
                      style={{ listStyle: "none" }}
                    >
                      <li className="accordion-list-item">{item.content}</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 d-flex flex-column gap-4 selected-roadmap">
            <div className="date-card selected d-flex flex-column align-items-center">
              <img
                src={
                  "https://cdn.worldofdypians.com/dypius/selectedRoadmap.svg"
                }
                style={{ visibility: "hidden" }}
                alt=""
              />
              <h2 style={{ color: "#EFF0F6" }}>2024 Q3</h2>
              <div className="outer-circle d-flex justify-content-center align-items-center">
                <div className="inner-circle"></div>
              </div>
            </div>
            <div
              className="accordion accordion-flush roadmap-items d-flex flex-column p-4"
              id="roadmapAccordion"
            >
              {quarterThree2024.map((item, index) => (
                <div className="accordion-item">
                  <div
                    className="d-flex flex-row align-items-center gap-2 accordion-button roadmap-accordion collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapseQuarterThree2024${index}`}
                    aria-expanded="false"
                    aroa-aria-controls={`collapseQuarterThree2024${index}`}
                  >
                    {item?.completed === true ? (
                      <img
                        src={
                          "https://cdn.worldofdypians.com/dypius/completedIcon.svg"
                        }
                        alt=""
                      />
                    ) : (
                      <img
                        src={
                          "https://cdn.worldofdypians.com/dypius/uncompletedIcon.svg"
                        }
                        alt=""
                      />
                    )}
                    <p>{item.title}</p>
                  </div>
                  <div
                    id={`collapseQuarterThree2024${index}`}
                    className="accordion-collapse collapse"
                    aria-aria-labelledby={`headingQuarterThree2024${index}`}
                    data-bs-parent="#roadmapAccordion"
                  >
                    <ul
                      className="mb-0 py-2 ps-2 roadmap-list"
                      style={{ listStyle: "none" }}
                    >
                      <li className="accordion-list-item">{item.content}</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 d-flex flex-column gap-4 selected-roadmap">
            <div className="date-card selected d-flex flex-column align-items-center">
              <img
                src={
                  "https://cdn.worldofdypians.com/dypius/selectedRoadmap.svg"
                }
                style={{ visibility: "hidden" }}
                alt=""
              />
              <h2 style={{ color: "#EFF0F6" }}>2024 Q4</h2>
              <div className="outer-circle d-flex justify-content-center align-items-center">
                <div className="inner-circle"></div>
              </div>
            </div>
            <div
              className="accordion accordion-flush roadmap-items d-flex flex-column p-4"
              id="roadmapAccordion"
            >
              {quarterFour2024.map((item, index) => (
                <div className="accordion-item">
                  <div
                    className="d-flex flex-row align-items-center gap-2 accordion-button roadmap-accordion collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapseQuarterFour2024${index}`}
                    aria-expanded="false"
                    aroa-aria-controls={`collapseQuarterFour2024${index}`}
                  >
                    {item?.completed === true ? (
                      <img
                        src={
                          "https://cdn.worldofdypians.com/dypius/completedIcon.svg"
                        }
                        alt=""
                      />
                    ) : (
                      <img
                        src={
                          "https://cdn.worldofdypians.com/dypius/uncompletedIcon.svg"
                        }
                        alt=""
                      />
                    )}
                    <p>{item.title}</p>
                  </div>
                  <div
                    id={`collapseQuarterFour2024${index}`}
                    className="accordion-collapse collapse"
                    aria-aria-labelledby={`headingQuarterFour2024${index}`}
                    data-bs-parent="#roadmapAccordion"
                  >
                    <ul
                      className="mb-0 py-2 ps-2 roadmap-list"
                      style={{ listStyle: "none" }}
                    >
                      <li className="accordion-list-item">{item.content}</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 d-flex flex-column gap-4 selected-roadmap">
            <div className="date-card d-flex flex-column align-items-center">
              <img
                src={
                  "https://cdn.worldofdypians.com/dypius/selectedRoadmap.svg"
                }
                style={{ visibility: "hidden" }}
                alt=""
              />
              <h2 style={{ color: "#EFF0F6" }}>2025 Q1</h2>
              <div className="outer-circle d-flex justify-content-center align-items-center">
                <div className="inner-circle"></div>
              </div>
            </div>
            <div
              className="accordion accordion-flush highlight roadmap-items d-flex flex-column p-4"
              id="roadmapAccordion"
            >
              {quarterOne2025.map((item, index) => (
                <div className="accordion-item">
                  <div
                    className="d-flex flex-row align-items-center gap-2 accordion-button roadmap-accordion-white collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapseQuarterOne2025${index}`}
                    aria-expanded="false"
                    aroa-aria-controls={`collapseQuarterOne2025${index}`}
                  >
                    {item?.completed === true ? (
                      <img
                        src={
                          "https://cdn.worldofdypians.com/dypius/completedOrangeIcon.svg"
                        }
                        alt=""
                      />
                    ) : (
                      <img
                        src={
                          "https://cdn.worldofdypians.com/dypius/uncompletedIcon.svg"
                        }
                        alt=""
                      />
                    )}
                    <p>{item.title}</p>
                  </div>
                  <div
                    id={`collapseQuarterOne2025${index}`}
                    className="accordion-collapse collapse"
                    aria-aria-labelledby={`headingQuarterOne2025${index}`}
                    data-bs-parent="#roadmapAccordion"
                  >
                    <ul
                      className="mb-0 py-2 ps-2"
                      style={{ listStyle: "none" }}
                    >
                      <li className="accordion-list-item">{item.content}</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 d-flex flex-column gap-4 selected-roadmap">
            <div className="date-card  d-flex flex-column align-items-center">
              <img
                src={
                  "https://cdn.worldofdypians.com/dypius/selectedRoadmap.svg"
                }
                style={{ visibility: "hidden" }}
                alt=""
              />
              <h2 style={{ color: "#EFF0F6" }}>2025 Q2</h2>
              <div className="outer-circle d-flex justify-content-center align-items-center">
                <div className="inner-circle"></div>
              </div>
            </div>
            <div
              className="accordion accordion-flush highlight roadmap-items d-flex flex-column p-4"
              id="roadmapAccordion"
            >
              {quarterTwo2025.map((item, index) => (
                <div className="accordion-item">
                  <div
                    className="d-flex flex-row align-items-center gap-2 accordion-button roadmap-accordion-white collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapseQuarterTwo2025${index}`}
                    aria-expanded="false"
                    aroa-aria-controls={`collapseQuarterTwo2025${index}`}
                  >
                    {item?.completed === true ? (
                      <img
                        src={
                          "https://cdn.worldofdypians.com/dypius/completedOrangeIcon.svg"
                        }
                        alt=""
                      />
                    ) : (
                      <img
                        src={
                          "https://cdn.worldofdypians.com/dypius/uncompletedIcon.svg"
                        }
                        alt=""
                      />
                    )}
                    <p>{item.title}</p>
                  </div>
                  <div
                    id={`collapseQuarterTwo2025${index}`}
                    className="accordion-collapse collapse"
                    aria-aria-labelledby={`headingQuarterTwo2025${index}`}
                    data-bs-parent="#roadmapAccordion"
                  >
                    <ul
                      className="mb-0 py-2 ps-2"
                      style={{ listStyle: "none" }}
                    >
                      <li className="accordion-list-item">{item.content}</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 d-flex flex-column gap-4 selected-roadmap">
            <div className="date-card  d-flex flex-column align-items-center">
              <img
                src={
                  "https://cdn.worldofdypians.com/dypius/selectedRoadmap.svg"
                }
                style={{ visibility: "hidden" }}
                alt=""
              />
              <h2 style={{ color: "#EFF0F6" }}>2025 Q3</h2>
              <div className="outer-circle d-flex justify-content-center align-items-center">
                <div className="inner-circle"></div>
              </div>
            </div>
            <div
              className="accordion accordion-flush highlight roadmap-items d-flex flex-column p-4"
              id="roadmapAccordion"
            >
              {quarterThree2025.map((item, index) => (
                <div className="accordion-item">
                  <div
                    className="d-flex flex-row align-items-center gap-2 accordion-button roadmap-accordion-white collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapseQuarterThree2025${index}`}
                    aria-expanded="false"
                    aroa-aria-controls={`collapseQuarterThree2025${index}`}
                  >
                    {item?.completed === true ? (
                      <img
                        src={
                          "https://cdn.worldofdypians.com/dypius/completedOrangeIcon.svg"
                        }
                        alt=""
                      />
                    ) : (
                      <img
                        src={
                          "https://cdn.worldofdypians.com/dypius/uncompletedIcon.svg"
                        }
                        alt=""
                      />
                    )}
                    <p>{item.title}</p>
                  </div>
                  <div
                    id={`collapseQuarterThree2025${index}`}
                    className="accordion-collapse collapse"
                    aria-aria-labelledby={`headingQuarterThree2025${index}`}
                    data-bs-parent="#roadmapAccordion"
                  >
                    <ul
                      className="mb-0 py-2 ps-2"
                      style={{ listStyle: "none" }}
                    >
                      <li className="accordion-list-item">{item.content}</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 d-flex flex-column gap-4 selected-roadmap">
            <div className="date-card  d-flex flex-column align-items-center">
              <img
                src={
                  "https://cdn.worldofdypians.com/dypius/selectedRoadmap.svg"
                }
                style={{ visibility: "hidden" }}
                alt=""
              />
              <h2 style={{ color: "#EFF0F6" }}>2025 Q4</h2>
              <div className="outer-circle d-flex justify-content-center align-items-center">
                <div className="inner-circle"></div>
              </div>
            </div>
            <div
              className="accordion accordion-flush highlight roadmap-items d-flex flex-column p-4"
              id="roadmapAccordion"
            >
              {quarterFour2025.map((item, index) => (
                <div className="accordion-item">
                  <div
                    className="d-flex flex-row align-items-center gap-2 accordion-button roadmap-accordion-white collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapseQuarterFour2025${index}`}
                    aria-expanded="false"
                    aroa-aria-controls={`collapseQuarterFour2025${index}`}
                  >
                    {item?.completed === true ? (
                      <img
                        src={
                          "https://cdn.worldofdypians.com/dypius/completedOrangeIcon.svg"
                        }
                        alt=""
                      />
                    ) : (
                      <img
                        src={
                          "https://cdn.worldofdypians.com/dypius/uncompletedIcon.svg"
                        }
                        alt=""
                      />
                    )}
                    <p>{item.title}</p>
                  </div>
                  <div
                    id={`collapseQuarterFour2025${index}`}
                    className="accordion-collapse collapse"
                    aria-aria-labelledby={`headingQuarterFour2025${index}`}
                    data-bs-parent="#roadmapAccordion"
                  >
                    <ul
                      className="mb-0 py-2 ps-2"
                      style={{ listStyle: "none" }}
                    >
                      <li className="accordion-list-item">{item.content}</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Roadmap;

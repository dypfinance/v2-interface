import React, { useState, useContext, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import CoinCard from "../CoinCard/CoinCard";
import "./_infinite.scss";
import axios from "axios";

const Card = ({
  card,
  style,
  onDirectionLock,
  onDragStart,
  onDragEnd,
  animate,
}) => (
  <motion.div
    className="card"
    drag
    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
    dragDirectionLock
    onDirectionLock={onDirectionLock}
    onDragEnd={onDragEnd}
    animate={animate}
    transition={{ ease: [0.6, 0.05, -0.01, 0.9] }}
    whileTap={{ scale: 0.85 }}
  >
    <CoinCard
      title={card.title}
      stakeAmount={card.stake}
      description={card.description}
    />
  </motion.div>
);
const InfiniteCards = () => {


const [stakeApr, setStakeApr] = useState()


const fetchBnbStaking = async () => {
  await axios
    .get(`https://api.dyp.finance/api/get_staking_info_bnb`)
    .then((res) => {
      setStakeApr(res.data.highestAPY_BNB[0].highest_apy)
    })
    .catch((err) => {
      console.log(err);
    });
};

useEffect(() => {
  
fetchBnbStaking();
  
}, [])


  const [cards, setCards] = useState([
    {
      title: "Dypius Vault",
      stake: "20%",
      description:
        "Earn rewards by securely depositing your assets into the vault smart contract",
    },
    {
      title: "Dypius Stake",
      stake: stakeApr ? stakeApr + "%" : "30%",
      description:
        "Earn rewards by securely depositing your assets into the staking smart contract",
    },
    // {
    //   title: "Dypius Farm",
    //   stake: "80%",
    //   description:
    //     "Earn rewards by securely depositing your assets into the farming smart contract",
    // },
  ]);
  const [dragStart, setDragStart] = useState({
    axis: null,
    animation: { x: 0, y: 0 },
  });
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useTransform(
    dragStart.axis === "x" ? x : y,
    [-175, 0, 175],
    [1, 0.5, 1]
  );

  const onDirectionLock = (axis) => setDragStart({ ...dragStart, axis: axis });
  const animateCardSwipe = (animation) => {
    setDragStart({ ...dragStart, animation });

    setTimeout(() => {
      setDragStart({ axis: null, animation: { x: 0, y: 0 } });
      x.set(0);
      y.set(0);
      setCards([
        {
          title: "Dypius Vault",
          stake: "20%",
          description:
            "Earn rewards by securely depositing your assets into the staking smart contract",
        },
        {
          title: "Dypius Stake",
          stake: stakeApr ? stakeApr + "%" : "30%",
          description:
            "Earn rewards by securely depositing your assets into the staking smart contract",
        },
        // {
        //   title: "Dypius Farm",
        //   stake: "80%",
        //   description:
        //     "Earn rewards by securely depositing your assets into the staking smart contract",
        // },
        ...cards.slice(0, cards.length - 1),
      ]);
    }, 200);
  };
  const onDragEnd = (info) => {
    if (dragStart.axis === "x") {
      if (info.offset.x >= 100) animateCardSwipe({ x: 175, y: 0 });
      else if (info.offset.x <= -100) animateCardSwipe({ x: -175, y: 0 });
    } else {
      if (info.offset.y >= 100) animateCardSwipe({ x: 0, y: 175 });
      else if (info.offset.y <= -100) animateCardSwipe({ x: 0, y: -175 });
    }
  };
  const renderCards = () => {
    return cards.map((card, index) => {
      if (index === cards.length - 1) {
        return (
          <Card
            card={card}
            key={index}
            style={{ x, y, zIndex: index }}
            onDirectionLock={(axis) => onDirectionLock(axis)}
            onDragEnd={(e, info) => onDragEnd(info)}
            animate={dragStart.animation}
          />
        );
      } else
        return (
          <Card
            card={card}
            key={index}
            style={{
              scale,
              zIndex: index,
            }}
          />
        );
    });
  };
  return <div className="infinite-cards">{renderCards()}</div>;
};

export default InfiniteCards;

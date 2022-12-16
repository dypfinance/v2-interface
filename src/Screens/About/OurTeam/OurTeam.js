import React from "react";
import Title from "../../../components/Title/Title";
import "./_ourteam.scss";
import TeamCard from "../../../components/TeamCard/TeamCard";
import michael from "../../../assets/team/mihai.jpg";
import razvan from "../../../assets/team/razvan.jpg";
import teki from "../../../assets/team/teki.jpg";
import gino from "../../../assets/team/gino.jpg";
import fatjon from "../../../assets/team/fatjon.jpg";
import lorena from "../../../assets/team/lorena.jpg";
import aldi from "../../../assets/team/aldi.jpg";
import alexandra from "../../../assets/team/alexandra.jpg";
import gazmend from "../../../assets/team/gazmend.jpg";
import bogdan from "../../../assets/team/bogdan.jpg";
import daniel from "../../../assets/team/daniel.jpg";
import dinakar from "../../../assets/team/dinakar.jpg";
import sheyn from "../../../assets/team/jubi.jpg";
import gjata from "../../../assets/team/jgjata.jpg";
import toni from "../../../assets/team/toni.jpg";
import vlad from "../../../assets/team/vlad.jpg";
import cristian from "../../../assets/team/cristian.jpg";

import useWindowSize from "../../../hooks/useWindowSize";
import { useState } from "react";

const OurTeam = () => {
  const windowSize = useWindowSize();

  const bios = [
    {
      id: "mihai",
      name: "Mihai Nicusor",
      position: "Chief Executive Officer",
      photo: michael,
      link: "https://www.linkedin.com/in/mihai-nicusor/",
      content:
        "I am a self-professed crypto-capitalist. I got involved in crypto in early 2017 when I purchased my first Ethereum mining rigs and in 2018 I've created a company that is offering different services (like hosting and maintenance) for people that own mining rigs. I learned all about cryptocurrency and blockchain technology during this time. In July 2020, I discovered Uniswap and yield farming. Thus, I started to explore different protocols and learn more about Decentralized finance. Shortly afterward, I had the idea to create DeFi Yield Protocol, a platform that would allow anyone to provide their liquidity, receive rewards in Ethereum for the first time since DeFi started, and use an anti-manipulation feature to convert the rewards into ETH without overly affecting the price. In other words, any person can provide liquidity and earn ETH with minimum risks. DeFi Yield Protocol is my vision, so I am working on the business development and operations background.",
    },
    {
      id: "razvan",
      name: "Razvan Ion",
      position: "Chief Technical Officer",
      photo: razvan,
      link: "https://www.linkedin.com/in/razvan-ion-b455ba95/",
      content:
        "Razvan holds a Bachelor's degree from Politehnica University of Bucharest, Faculty of Automatic Control and Computer Science. Prior to his role at DeFi Yield Protocol, Razvan worked on implementing and maintaining data security plans, Database Design and Programming with SQL, Oracle Academy. He also received a CISCO Networking Academy reward. Razvan is committed to driving the innovation and research of Defi, as well the real use case for DYP token.",
    },
    {
      id: "teki",
      name: "Teki Kolaneci",
      position: "Global Strategy Director",
      photo: teki,
      link: "https://www.linkedin.com/in/teki-kolaneci",
      content:
        "An enthusiastic, dedicated and highly self-motivated professional. Naturally questioning, with an aptitude for developing innovative, effective ideas to issues. Strong analytical and strategic planning skills are combined with the ability to communicate and build relationships effectively at all levels. Well organized and possessing the leadership and influencing skills required to motivate multidisciplinary teams.",
    },
    {
      id: "gazi",
      name: "Gazmend Mici",
      position: "Project Manager",
      photo: gazmend,
      link: "https://www.linkedin.com/in/gazmendmicii/",
      content: `Experienced, ambitious and enthusiastic project manager with excellent leadership skills and a performance driven individual who can create immeasurable success on a team and turn complex problems into solutions. Over the last few years, I have been defining vision and launching solutions in telecommunication industry related to fixed and cloud connectivity, IoT, cyber security and so on. It is crucial to plan and design the vision today in order to create a future tomorrow. Key thing in great management is to up to date with new developments, understand and represent user needs, monitor the market and develop competitive analysis in order to gain momentum. I am a person who loves arts, sports and nature and on my free time I like to research new information, travel and making new friends.
  
                “When the wind blows, some people build walls, others build windmills” - Gazmend.`,
    },
    {
      id: "gino",
      name: "Gino Vizintin",
      position: "Chief Ecosystem Officer",
      photo: gino,
      link: "https://github.com/gianviz",
      content:
        " I'm 34 years old, and at the age of 10, I started coding and learning programming basics. I have 20 years of experience in system design, software architecture, and I am a security researcher. I currently work in PHP, C#, Python, Perl, C, Ruby on Rails, Html, Mysql databases, Javascript, and Java.",
    },
    {
      id: "fatjon",
      name: "Fatjon Shaba",
      position: "Lead UI/UX Designer",
      photo: fatjon,
      link: "https://www.linkedin.com/in/fatjon-shaba-9a751313a",
      content:
        "Over the last few years, I’ve worked with a wide range of products to create an insight led, human-centred digital experiences. My approach to UI/UX combines design thinking, user research and with a focus on the humans who use the designs I create. In my free time, I enjoy exploring design by seeing what can be done next in the future, trying to push my knowledge and abilities even further. I enjoy playing with designs and exploring new pathways I haven’t tried before… but most importantly I love what I do.",
    },
    {
      id: "toni",
      name: "Renato Toni",
      position: "Technical Lead |                      Unity Game Developer",
      photo: toni,
      link: "https://www.linkedin.com/in/renato-toni-92417193/",
      content:
        "I'm a game developer who has a strong interest in the Metaverse. I became interested in video games and computer programming since high school. I have a strong interest in the metaverse and work hard to give users engaging and participatory experiences. I put a lot of effort into my work and continuously try to push the limits of what is feasible. I work hard to keep on top of industry advancements while continuously picking up new skills. I also strongly believe in working together with others to produce the finest possible product, and I always try to do that.",
    },
    {
      id: "lorena",
      name: "Lorena Liçi",
      position: "Front-End Lead Engineer",
      photo: lorena,
      link: "https://www.linkedin.com/in/lorena-li%C3%A7i-276965185/",
      content:
        "I'm a Software Developer driven to explore different solutions in order to deliver the best in a software product. After graduating in Software Enginnering I had the luck to discover DeFi and since then my life turned to a different new direction. I enjoy exploring different technologies in my free time, like React Native or Blender3D, as well as new music genres.",
    },
    {
      id: "aldi",
      name: "Aldi Alinj",
      position: "React Developer",
      photo: aldi,
      content: `I am a passionate Software Developer mostly interested in Front End development. I consistently try to challenge 
      myself with complex problems so I can grow professionally. During my free 
      time I like going to the gym, watch a documentary or two about history or 
      politics and generally enjoy going outdoors.`,
      link: "https://www.linkedin.com/in/aldi-alinj-97166b1ba/",
    },

    {
      id: "cristian",
      name: "Cristian Nitu",
      position: "Back-End Engineer",
      photo: cristian,
      link: "https://www.linkedin.com/in/nitucristian",
      content:
        "I'm a Blockchain Developer that is still exploring every corner of the domain. I haven't graduated yet (Currently pursuing a Computer Science Bachelor's Degree at Politehnica University of Bucharest). I had the luck to discover DeFi and since then my life has turned to a different new direction. I've been a part of the blockchain sphere for 3 years now. I also enjoy exploring different technologies in my free time, like React or Kotlin. I am also a gamer that enjoys well built MMO's.",
    },
    {
      id: "gjata",
      name: "Fatjon Gjata",
      position: "Metaverse Expert",
      photo: gjata,
      link: "https://www.linkedin.com/in/fatjon-gjata/",
      content:
        "I have several years of experience in the game business and am a Metaverse Expert. I acquired a great affinity for Unity, a game engine that enables you to make 3D games, as a result of my keen interest in the metaverse and how it can be utilized to provide immersive experiences for gamers. I work diligently and make it a point to develop my abilities. My ability to work well in a team and like collaborating with others to produce the finest possible results is one of my stronger traits. I'm excited to continue working in the video game business and putting my talents to use in making incredible experiences for players.",
    },
    {
      id: "alexandra",
      name: "Chifor Alexandra",
      position: "Head of Marketing",
      photo: alexandra,
      link: "https://www.linkedin.com/in/alexandra-chifor/",
      content:
        "Highly self – motivated marketing specialist with a Master Degree in Media Communication. Managing the marketing activities by demonstrating expertise in various areas, including optimization, advertising, social media, direct marketing and event planning. With a strong attention to details, knowledge of current marketing tools and a high level of creativity my goal is to bring humanity into digital. I’m developing marketing strategies and creative content that separates DeFi Yield Protocol from the crowd.",
    },
    {
      id: "daniel",
      name: "Daniel Garret",
      position: "Marketing &          Communications Manager",
      photo: daniel,
      link: "https://www.linkedin.com/in/thedg3/",
      content:
        "With 20 years of experience in Finance and Business Development, I have found my true passion in the Cryptocurrency and NFT marketplace. I've been involved in Cryptocurrency since 2015 and have been collecting and selling NFT's for the last year. I love art, technology, finance and entrepreneurship so when I was introduced to the DYP team it felt like a dream come true. In my spare time I enjoy nature and spending time with my wife and my dog.  I am excited about the opportunities that DYP offers and I truly believe in our Cats and Watches Society NFT. I look forward to help grow the discord community into something uniquely special where our members can feel welcome, safe and rewarded for being part in this new, exciting, and growing space. With rapid change comes great opportunity - Daniel.",
    },

    {
      id: "vlad",
      name: "Vlad Stefan",
      position: "Content Manager",
      photo: vlad,
      link: "https://www.linkedin.com/in/vlad-stefan-874124164/",
      content:
        "A crypto enthusiast and a passionate content creator, responsible for developing, planning and implementing DYP's content strategy. Managing the creation and production of marketing materials online but also offline.",
    },

    {
      id: "dinakar",
      name: "Dinakar Kodati",
      position: "Community Manager",
      photo: dinakar,
      link: "https://www.linkedin.com/in/dinakar-kodati-985ba25a/",
      content:
        "I am a Web Developer by profession and Crypto enthusiast by passion, I started getting involved in Crypto Late 2020's that is when I came across DYP (Defi Yield Protocol), I joined them as an user fell in love with project learned about DYP out and out, and then started helping the community sharing the knowledge I already gained. On one fine day DYP team Digital Strategy Manager Teki Kolaneci approached me to offer Moderator role to handle DYP Telegram and Discords and then rest are best movements I enjoyed every part of being part of hard working, enthusiast DYP Team, gained good name from community with this progress I got promoted to Community Manager of DYP, I am so glad and thankful for DYPians and DYP Team for putting me in this position. I will improve my skills everyday to provide better services in all the aspects I can to make DYP a successful project.",
    },
    {
      id: "sheyn",
      name: "Sheyn Cabalse",
      position: "Community Manager",
      photo: sheyn,
      link: "https://www.linkedin.com/in/gerlie-cabalse-yael07/",
      content:
        "I discovered Cryptocurrency back in 2017 when bounty campaign from Bitcointalk.org is the crypto marketing trend. I saw that there is a future on digital assets and I believe that it is the future so I decided to learn more and did some trading. I started to work as bounty campaign manager and community manager for several projects since 2019. I offered a bounty campaign to Sir Mihai for DeFi Yield Protocol during the ICO and managed it then He assigned me as a telegram and discord moderator after the campaign ended. My aim as a moderator is to assist the community with every query they bring and ensure to convey the right answer. I believe that a better communication is crucial for building a solid community. I am grateful to be a part and looking forward for DeFi Yield Protocol to achieve a successfully complete DeFi ecosystem.",
    },
  ];

  const [slice, setSlice] = useState(3);

  const loadMore = () => {
    setSlice(slice + 3);
  };

  return (
    <div className="container-fluid our-team my-5 px-0" id="ourteam">
      <div className="our-team-background"></div>
      <div className="container-lg d-flex flex-column align-items-center mt-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-lg-6">
            <Title
              top="Our"
              bottom="team"
              align="d-flex flex-row gap-2 justify-content-center"
            />
            <p className="text-secondary text-center">
              Dypius is made up of a global team of experts with decades of
              experience in crypto, business, engineering, development, finance,
              and more. Furthermore, each team member's background and
              contributions are available to the public.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="team-container d-grid">
            {windowSize.width < 786
              ? bios
                  .slice(0, slice)
                  .map((person, index) => (
                    <TeamCard
                      key={index}
                      id={person.id}
                      name={person.name}
                      position={person.position}
                      content={person.content}
                      photo={person.photo}
                      link={person.link}
                    />
                  ))
              : bios.map((person, index) => (
                  <TeamCard
                    key={index}
                    id={person.id}
                    name={person.name}
                    position={person.position}
                    content={person.content}
                    photo={person.photo}
                    link={person.link}
                  />
                ))}
          </div>
        </div>
        <div className="row mt-4 w-100 justify-content-center">
          <button
            className={`btn outline-btn ${
              windowSize.width > 786 || slice >= bios.length ? "d-none" : ""
            }`}
            onClick={loadMore}
            style={{ zIndex: 5 }}
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;

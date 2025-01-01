import React from "react";
import Title from "../../../components/Title/Title";
import "./_ourteam.scss";
import TeamCard from "../../../components/TeamCard/TeamCard";
import useWindowSize from "../../../hooks/useWindowSize";
import { useState } from "react";

const OurTeam = () => {
  const windowSize = useWindowSize();

  const bios = [
    {
      id: "mihai",
      name: "Mihai Nicusor",
      position: "Chief Executive Officer",
      photo: "https://cdn.worldofdypians.com/dypius/mihai.jpg",
      link: "https://www.linkedin.com/in/mihai-nicusor/",
      content:
        "I am a self-professed crypto-capitalist. I got involved in crypto in early 2017 when I purchased my first Ethereum mining rigs and in 2018 I've created a company that is offering different services (like hosting and maintenance) for people that own mining rigs. I learned all about cryptocurrency and blockchain technology during this time. In July 2020, I discovered Uniswap and yield farming. Thus, I started to explore different protocols and learn more about Decentralized finance. Shortly afterward, I had the idea to create DeFi Yield Protocol, a platform that would allow anyone to provide their liquidity, receive rewards in Ethereum for the first time since DeFi started, and use an anti-manipulation feature to convert the rewards into ETH without overly affecting the price. In other words, any person can provide liquidity and earn ETH with minimum risks. DeFi Yield Protocol is my vision, so I am working on the business development and operations background.",
    },
    {
      id: "razvan",
      name: "Razvan Ion",
      position: "Chief Technical Officer",
      photo: "https://cdn.worldofdypians.com/dypius/razvan.jpg",
      link: "https://www.linkedin.com/in/razvan-ion-b455ba95/",
      content:
        "Razvan holds a Bachelor's degree from Politehnica University of Bucharest, Faculty of Automatic Control and Computer Science. Prior to his role at DeFi Yield Protocol, Razvan worked on implementing and maintaining data security plans, Database Design and Programming with SQL, Oracle Academy. He also received a CISCO Networking Academy reward. Razvan is committed to driving the innovation and research of Defi, as well the real use case for DYP token.",
    },
    {
      id: "teki",
      name: "Teki Kolaneci",
      position: "Chief Operating Officer",
      photo: "https://cdn.worldofdypians.com/dypius/teki.jpg",
      link: "https://www.linkedin.com/in/teki-kolaneci",
      content:
        "An enthusiastic, dedicated and highly self-motivated professional. Naturally questioning, with an aptitude for developing innovative, effective ideas to issues. Strong analytical and strategic planning skills are combined with the ability to communicate and build relationships effectively at all levels. Well organized and possessing the leadership and influencing skills required to motivate multidisciplinary teams.",
    },
    {
      id: "gazi",
      name: "Gazmend Mici",
      position: "Project Manager",
      photo: "https://cdn.worldofdypians.com/dypius/gazmend.jpg",
      link: "https://www.linkedin.com/in/gazmendmicii/",
      content: `Experienced, ambitious and enthusiastic project manager with excellent leadership skills and a performance driven individual who can create immeasurable success on a team and turn complex problems into solutions. Over the last few years, I have been defining vision and launching solutions in telecommunication industry related to fixed and cloud connectivity, IoT, cyber security and so on. It is crucial to plan and design the vision today in order to create a future tomorrow. Key thing in great management is to up to date with new developments, understand and represent user needs, monitor the market and develop competitive analysis in order to gain momentum. I am a person who loves arts, sports and nature and on my free time I like to research new information, travel and making new friends.
  
                “When the wind blows, some people build walls, others build windmills” - Gazmend.`,
    },
    {
      id: "toni",
      name: "Renato Toni",
      position: "Technical Lead |                      Unity Game Developer",
      photo: "https://cdn.worldofdypians.com/dypius/toni.jpg",
      link: "https://www.linkedin.com/in/renato-toni-92417193/",
      content:
        "I'm a game developer who has a strong interest in the Metaverse. I became interested in video games and computer programming since high school. I have a strong interest in the metaverse and work hard to give users engaging and participatory experiences. I put a lot of effort into my work and continuously try to push the limits of what is feasible. I work hard to keep on top of industry advancements while continuously picking up new skills. I also strongly believe in working together with others to produce the finest possible product, and I always try to do that.",
    },
    {
      id: "lorena",
      name: "Lorena Liçi",
      position: "Front-End Lead Engineer",
      photo: "https://cdn.worldofdypians.com/dypius/lorena.jpg",
      link: "https://www.linkedin.com/in/lorena-li%C3%A7i-276965185/",
      content:
        "I'm a Software Developer driven to explore different solutions in order to deliver the best in a software product. After graduating in Software Enginnering I had the luck to discover DeFi and since then my life turned to a different new direction. I enjoy exploring different technologies in my free time, like React Native or Blender3D, as well as new music genres.",
    },
    {
      id: "aldi",
      name: "Aldi Alinj",
      position: "React Developer",
      photo: "https://cdn.worldofdypians.com/dypius/aldi.jpg",
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
      photo: "https://cdn.worldofdypians.com/dypius/cristian.jpg",
      link: "https://www.linkedin.com/in/nitucristian",
      content:
        "I'm a Blockchain Developer that is still exploring every corner of the domain. I haven't graduated yet (Currently pursuing a Computer Science Bachelor's Degree at Politehnica University of Bucharest). I had the luck to discover DeFi and since then my life has turned to a different new direction. I've been a part of the blockchain sphere for 3 years now. I also enjoy exploring different technologies in my free time, like React or Kotlin. I am also a gamer that enjoys well built MMO's.",
    },

    {
      id: "gjata",
      name: "Fatjon Gjata",
      position: "Metaverse Expert",
      photo: "https://cdn.worldofdypians.com/dypius/jgjata.jpg",
      link: "https://www.linkedin.com/in/fatjon-gjata/",
      content:
        "I have several years of experience in the game business and am a Metaverse Expert. I acquired a great affinity for Unity, a game engine that enables you to make 3D games, as a result of my keen interest in the metaverse and how it can be utilized to provide immersive experiences for gamers. I work diligently and make it a point to develop my abilities. My ability to work well in a team and like collaborating with others to produce the finest possible results is one of my stronger traits. I'm excited to continue working in the video game business and putting my talents to use in making incredible experiences for players.",
    },
    {
      id: "arben",
      name: "Arben Meta",
      position: "Senior 3D/VFX Artist",
      photo: "https://cdn.worldofdypians.com/dypius/arben.jpg",
      link: "https://www.linkedin.com/in/arbenmeta/",
      content: `I am a 3D/VFX Artist specialized in 3D Modeling Digital Sculpting and PBR Texturing. I am also involved in Rigging and Dynamic Simulations.
        My Pipeline is based on Procedural Creation
        Techniques that applies on various fields like:
        Games, Movies, VR and Real-Time Visualizations.
        I have over 23 years of experience in 3D and
        26 years in total including Computer Science.
        I started coding in QBasic at age 16 and ended up
        in C++ and 3D Applications later.
        I keep sharpening my skills, learn new stuff and
        update my self to the latest Technologies.`,
    },
    {
      id: "soni",
      name: "Soni Seli",
      position: "Unity Developer",
      photo: "https://cdn.worldofdypians.com/dypius/soni.jpeg",
      link: "https://www.linkedin.com/in/soni-seli-b6abb6213/",
      content:
        "Soni possesses a wealth of expertise in game development, having contributed to numerous gaming and metaverse projects. His involvement in such initiatives has resulted in widespread user engagement, with several of the projects garnering a global audience in the millions.",
    },
    {
      id: "samuel",
      name: "Samuel Mema",
      position: "3D Artist",
      photo: "https://cdn.worldofdypians.com/dypius/samuel.jpeg",
      link: "https://www.linkedin.com/in/samuel-mema-baa35a1ba/",
      content:
        "Drawing on his extensive expertise in 3D modeling, Samuel has participated in several international projects throughout his career. Driven by a natural affinity for gaming, he has dedicated himself to game development and is currently at the forefront of advancing best practices for 3D modeling within this dynamic and rapidly evolving industry.",
    },

    {
      id: "sheyn",
      name: "Sheyn Cabalse",
      position: "Project Coordinator",
      photo: "https://cdn.worldofdypians.com/dypius/jubi.jpg",
      link: "https://www.linkedin.com/in/gerlie-cabalse-yael07/",
      content:
        "I discovered Cryptocurrency back in 2017 when bounty campaign from Bitcointalk.org is the crypto marketing trend. I saw that there is a future on digital assets and I believe that it is the future so I decided to learn more and did some trading. I started to work as bounty campaign manager and community manager for several projects since 2019. I offered a bounty campaign to Sir Mihai for DeFi Yield Protocol during the ICO and managed it then He assigned me as a telegram and discord moderator after the campaign ended. My aim as a moderator is to assist the community with every query they bring and ensure to convey the right answer. I believe that a better communication is crucial for building a solid community. I am grateful to be a part and looking forward for DeFi Yield Protocol to achieve a successfully complete DeFi ecosystem.",
    },
    {
      id: "bogdan",
      name: "Constantin Bogdan",
      position: "Marketing Manager",
      photo: "https://cdn.worldofdypians.com/dypius/bogdan.jpg",
      link: "https://www.linkedin.com/in/bogdan-constantin-1105b7201/",
      content:
        "Constantin Bogdan graduated from the University of Bucharest in 2007 and he holds a Master in Human Resource Psychology. Bogdan has ten years of experience in enterprise in a variety of roles at startups, private companies, and ANOFM Bucharest including product management, product marketing, and sales management, and is the Marketing Manager for Dypius.",
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

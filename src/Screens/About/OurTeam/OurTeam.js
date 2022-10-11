import React from "react";
import Title from "../../../components/Title/Title";
import "./_ourteam.scss";
import TeamCard from "../../../components/TeamCard/TeamCard";
import michael from '../../../assets/team/michael.png'
import razvan from '../../../assets/team/razvan.png'
import teki from '../../../assets/team/tek.png'
import gino from '../../../assets/team/gino.jpg'
import fatjon from '../../../assets/team/fatjon.jpg'
import lorena from '../../../assets/team/lorena.jpeg'
import alexandra from '../../../assets/team/alexandra.jpg'
import gazmend from '../../../assets/team/gazmend.jpg'
import bogdan from '../../../assets/team/const.png'
import daniel from '../../../assets/team/daniel.jpg'
import dinakar from '../../../assets/team/dinakar.jpg'
import sheyn from '../../../assets/team/jubi.jpg'

const OurTeam = () => {
  const bios = [
    {
      id: "mihai",
      name: "Mihai Nicusor",
      position: "Chief Executive Officer",
      photo: michael,
      content:
        "I am a self-professed crypto-capitalist. I got involved in crypto in early 2017 when I purchased my first Ethereum mining rigs and in 2018 I've created a company that is offering different services (like hosting and maintenance) for people that own mining rigs. I learned all about cryptocurrency and blockchain technology during this time. In July 2020, I discovered Uniswap and yield farming. Thus, I started to explore different protocols and learn more about Decentralized finance. Shortly afterward, I had the idea to create DeFi Yield Protocol, a platform that would allow anyone to provide their liquidity, receive rewards in Ethereum for the first time since DeFi started, and use an anti-manipulation feature to convert the rewards into ETH without overly affecting the price. In other words, any person can provide liquidity and earn ETH with minimum risks. DeFi Yield Protocol is my vision, so I am working on the business development and operations background.,",
    },
    {
      id: "razvan",
      name: "Razvan Ion",
      position: "Chief Technical Officer",
      photo: razvan,
      content:
        "Razvan holds a Bachelor's degree from Politehnica University of Bucharest, Faculty of Automatic Control and Computer Science. Prior to his role at DeFi Yield Protocol, Razvan worked on implementing and maintaining data security plans, Database Design and Programming with SQL, Oracle Academy. He also received a CISCO Networking Academy reward. Razvan is committed to driving the innovation and research of Defi, as well the real use case for DYP token.,",
    },
    {
      id: "teki",
      name: "Teki Kolaneci",
      position: "Global Strategy Director",
      photo: teki,
      content:
        "An enthusiastic, dedicated and highly self-motivated professional. Naturally questioning, with an aptitude for developing innovative, effective ideas to issues. Strong analytical and strategic planning skills are combined with the ability to communicate and build relationships effectively at all levels. Well organized and possessing the leadership and influencing skills required to motivate multidisciplinary teams.,",
    },
    {
      id: "gino",
      name: "Gino Vizintin",
      position: "Chief Ecosystem Officer",
      photo: gino,
      content:
        " I'm 34 years old, and at the age of 10, I started coding and learning programming basics. I have 20 years of experience in system design, software architecture, and I am a security researcher. I currently work in PHP, C#, Python, Perl, C, Ruby on Rails, Html, Mysql databases, Javascript, and Java.,",
    },
    {
      id: "fatjon",
      name: "Fatjon Shaba",
      position: "Lead UI/UX Designer",
      photo: fatjon,
      content:
        "Over the last few years, I’ve worked with a wide range of products to create an insight led, human-centred digital experiences. My approach to UI/UX combines design thinking, user research and with a focus on the humans who use the designs I create. In my free time, I enjoy exploring design by seeing what can be done next in the future, trying to push my knowledge and abilities even further. I enjoy playing with designs and exploring new pathways I haven’t tried before… but most importantly I love what I do.",
    },
    {
      id: "lorena",
      name: "Lorena Liçi",
      position: "Front-End Engineer",
      photo: lorena,
      content:
        "I'm a Software Developer driven to explore different solutions in order to deliver the best in a software product. After graduating in Software Enginnering I had the luck to discover DeFi and since then my life turned to a different new direction. I enjoy exploring different technologies in my free time, like React Native or Blender3D, as well as new music genres.",
    },
    {
      id: "alexandra",
      name: "Chifor Alexandra",
      position: "Head of Marketing",
      photo: alexandra,
      content:
        "Highly self – motivated marketing specialist with a Master Degree in Media Communication. Managing the marketing activities by demonstrating expertise in various areas, including optimization, advertising, social media, direct marketing and event planning. With a strong attention to details, knowledge of current marketing tools and a high level of creativity my goal is to bring humanity into digital. I’m developing marketing strategies and creative content that separates DeFi Yield Protocol from the crowd.",
    },
    {
      id: "gazi",
      name: "Gazmend Mici",
      position: "Project Manager",
      photo: gazmend,
      content: `Experienced, ambitious and enthusiastic project manager with excellent leadership skills and a performance driven individual who can create immeasurable success on a team and turn complex problems into solutions. Over the last few years, I have been defining vision and launching solutions in telecommunication industry related to fixed and cloud connectivity, IoT, cyber security and so on. It is crucial to plan and design the vision today in order to create a future tomorrow. Key thing in great management is to up to date with new developments, understand and represent user needs, monitor the market and develop competitive analysis in order to gain momentum. I am a person who loves arts, sports and nature and on my free time I like to research new information, travel and making new friends.
  
                “When the wind blows, some people build walls, others build windmills” - Gazmend`,
    },
    {
      id: "bogdan",
      name: "Constantin Bogdan",
      position: "Marketing Manager",
      photo: bogdan,
      content:
        "Constantin Bogdan graduated from the University of Bucharest in 2007 and he holds a Master in Human Resource Psychology. Bogdan has ten years of experience in enterprise in a variety of roles at startups, private companies, and ANOFM Bucharest including product management, product marketing, and sales management, and is the Marketing Manager for DeFi Yield Protocol.,",
    },
    {
      id: "daniel",
      name: "Daniel Garret",
      position: "Marketing &          Communications Manager",
      photo: daniel,
      content:
        "With 20 years of experience in Finance and Business Development, I have found my true passion in the Cryptocurrency and NFT marketplace. I've been involved in Cryptocurrency since 2015 and have been collecting and selling NFT's for the last year. I love art, technology, finance and entrepreneurship so when I was introduced to the DYP team it felt like a dream come true. In my spare time I enjoy nature and spending time with my wife and my dog.  I am excited about the opportunities that DYP offers and I truly believe in our Cats and Watches Society NFT. I look forward to help grow the discord community into something uniquely special where our members can feel welcome, safe and rewarded for being part in this new, exciting, and growing space. With rapid change comes great opportunity - Daniel,",
    },
    {
      id: "dinakar",
      name: "Dinakar Kodati",
      position: "Community Manager",
      photo: dinakar,
      content:
        "I am a Web Developer by profession and Crypto enthusiast by passion, I started getting involved in Crypto Late 2020's that is when I came across DYP (Defi Yield Protocol), I joined them as an user fell in love with project learned about DYP out and out, and then started helping the community sharing the knowledge I already gained. On one fine day DYP team Digital Strategy Manager Teki Kolaneci approached me to offer Moderator role to handle DYP Telegram and Discords and then rest are best movements I enjoyed every part of being part of hard working, enthusiast DYP Team, gained good name from community with this progress I got promoted to Community Manager of DYP, I am so glad and thankful for DYPians and DYP Team for putting me in this position. I will improve my skills everyday to provide better services in all the aspects I can to make DYP a successful project.",
    },
    {
      id: "sheyn",
      name: "Sheyn Cabalse",
      position: "Community Manager",
      photo: sheyn,
      content:
        "I discovered Cryptocurrency back in 2017 when bounty campaign from Bitcointalk.org is the crypto marketing trend. I saw that there is a future on digital assets and I believe that it is the future so I decided to learn more and did some trading. I started to work as bounty campaign manager and community manager for several projects since 2019. I offered a bounty campaign to Sir Mihai for DeFi Yield Protocol during the ICO and managed it then He assigned me as a telegram and discord moderator after the campaign ended. My aim as a moderator is to assist the community with every query they bring and ensure to convey the right answer. I believe that a better communication is crucial for building a solid community. I am grateful to be a part and looking forward for DeFi Yield Protocol to achieve a successfully complete DeFi ecosystem.",
    },
  ];

  return (
    <div className="container-fluid our-team my-5 px-0" id="ourteam">
      <div className="our-team-background"></div>
      <div className="container-lg d-flex flex-column mt-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-lg-6">
            <Title
              top="Our"
              bottom="team"
              align="d-flex flex-row gap-2 justify-content-center"
            />
            <p className="text-secondary text-center">
              Dypius is made up of a team of people with decades of experience
              in business, engineering, development, finance and more. We
              believe in our expertise and we know you can trust us to do what's
              best for you.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="team-container d-grid">
            {bios.map((person, index) => (
              <TeamCard
                key={index}
                id={person.id}
                name={person.name}
                position={person.position}
                content={person.content}
                photo={person.photo}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;

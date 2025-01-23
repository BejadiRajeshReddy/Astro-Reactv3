/* eslint-disable react/no-unescaped-entities */
// /* eslint-disable react/no-unescaped-entities */
// // import { useState } from 'react';
// // import './Horo.css';

// // const zodiacSigns = [
// //   {
// //     name: "Aries",
// //     dates: "March 21 - April 19",
// //     element: "Fire",
// //     symbol: "♈",
// //     traits: ["Courageous", "Energetic", "Confident"],
// //     description: "Aries is the first sign of the zodiac, representing new beginnings and pioneering spirit. Ruled by Mars, Aries individuals are known for their bold and adventurous nature."
// //   },
// //   {
// //     name: "Taurus",
// //     dates: "April 20 - May 20",
// //     element: "Earth",
// //     symbol: "♉",
// //     traits: ["Reliable", "Patient", "Practical"],
// //     description: "Taurus is an earth sign symbolized by the bull. Known for their steadiness and appreciation for comfort, Taureans value stability and sensory experiences."
// //   },
// //   {
// //     name: "Gemini",
// //     dates: "May 21 - June 20",
// //     element: "Air",
// //     symbol: "♊",
// //     traits: ["Adaptable", "Communicative", "Witty"],
// //     description: "Gemini, represented by the twins, is an air sign known for its versatility and intellectual curiosity. They thrive on communication and mental stimulation."
// //   },
// //   {
// //     name: "Cancer",
// //     dates: "June 21 - July 22",
// //     element: "Water",
// //     symbol: "♋",
// //     traits: ["Intuitive", "Emotional", "Protective"],
// //     description: "Cancer is a water sign symbolized by the crab. Deeply emotional and intuitive, Cancerians are known for their nurturing and empathetic nature."
// //   },
// //   {
// //     name: "Leo",
// //     dates: "July 23 - August 22",
// //     element: "Fire",
// //     symbol: "♌",
// //     traits: ["Confident", "Creative", "Charismatic"],
// //     description: "Leo, ruled by the sun, is a fire sign represented by the lion. Known for their dramatic and leadership qualities, Leos love being the center of attention."
// //   },
// //   {
// //     name: "Virgo",
// //     dates: "August 23 - September 22",
// //     element: "Earth",
// //     symbol: "♍",
// //     traits: ["Analytical", "Practical", "Perfectionist"],
// //     description: "Virgo is an earth sign symbolized by the maiden. Methodical and detail-oriented, Virgos excel in organization and critical thinking."
// //   },
// //   {
// //     name: "Libra",
// //     dates: "September 23 - October 22",
// //     element: "Air",
// //     symbol: "♎",
// //     traits: ["Diplomatic", "Balanced", "Harmonious"],
// //     description: "Libra is an air sign represented by the scales. They seek balance and are known for their diplomatic approach to life and relationships."
// //   },
// //   {
// //     name: "Scorpio",
// //     dates: "October 23 - November 21",
// //     element: "Water",
// //     symbol: "♏",
// //     traits: ["Passionate", "Resourceful", "Determined"],
// //     description: "Scorpio is a water sign known for its intensity and depth. They are characterized by their powerful emotions and transformative nature."
// //   },
// //   {
// //     name: "Sagittarius",
// //     dates: "November 22 - December 21",
// //     element: "Fire",
// //     symbol: "♐",
// //     traits: ["Optimistic", "Adventurous", "Philosophical"],
// //     description: "Sagittarius is a fire sign represented by the archer. They are adventurers who love exploring new ideas and expanding their horizons."
// //   },
// //   {
// //     name: "Capricorn",
// //     dates: "December 22 - January 19",
// //     element: "Earth",
// //     symbol: "♑",
// //     traits: ["Ambitious", "Disciplined", "Responsible"],
// //     description: "Capricorn is an earth sign symbolized by the mountain goat. Known for their ambition and practicality, they are master strategists of the zodiac."
// //   },
// //   {
// //     name: "Aquarius",
// //     dates: "January 20 - February 18",
// //     element: "Air",
// //     symbol: "♒",
// //     traits: ["Innovative", "Independent", "Humanitarian"],
// //     description: "Aquarius is an air sign known for its progressive and unconventional thinking. They are visionaries who value innovation and social causes."
// //   },
// //   {
// //     name: "Pisces",
// //     dates: "February 19 - March 20",
// //     element: "Water",
// //     symbol: "♓",
// //     traits: ["Intuitive", "Creative", "Compassionate"],
// //     description: "Pisces is a water sign symbolized by two fish. Deeply spiritual and empathetic, they are the most intuitive sign of the zodiac."
// //   }
// // ];

// // const Horoscope = () => {
// //   const [selectedSign, setSelectedSign] = useState(null);

// //   return (
// //     <div className="horoscope-page">
// //       <div className="horoscope-header">
// //         <h1>Cosmic Journey: Understanding Horoscopes</h1>
// //         <p>Explore the mystical world of astrology and discover your celestial blueprint</p>
// //       </div>

// //       <div className="astrology-intro">
// //         <h2>What is Astrology?</h2>
// //         <p>Astrology is an ancient practice that studies the movements and relative positions of celestial bodies, interpreting their influence on human affairs and natural phenomena. It suggests that the positioning of planets and stars at the time of your birth can provide insights into your personality, relationships, and life path.</p>
// //       </div>

// //       <div className="zodiac-section">
// //         <h2>Zodiac Signs</h2>
// //         <div className="zodiac-grid">
// //           {zodiacSigns.map((sign, index) => (
// //             <div
// //               key={index}
// //               className={`zodiac-card ${selectedSign === index ? 'active' : ''}`}
// //               onClick={() => setSelectedSign(selectedSign === index ? null : index)}
// //             >
// //               <div className="zodiac-symbol">{sign.symbol}</div>
// //               <h3>{sign.name}</h3>
// //               <div className="zodiac-details">
// //                 {selectedSign === index && (
// //                   <div>
// //                     <p><strong>Dates:</strong> {sign.dates}</p>
// //                     <p><strong>Element:</strong> {sign.element}</p>
// //                     <p><strong>Traits:</strong> {sign.traits.join(", ")}</p>
// //                     <p>{sign.description}</p>
// //                   </div>
// //                 )}
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       <div className="horoscope-principles">
// //         <h2>Core Principles of Astrology</h2>
// //         <ul>
// //           <li>Birth Chart (Natal Chart): A cosmic snapshot of celestial positions at your birth</li>
// //           <li>Planetary Influences: Each planet represents different aspects of life</li>
// //           <li>Houses: Divide life into 12 distinct areas of experience</li>
// //           <li>Aspects: Relationships between planetary positions</li>
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Horoscope;

// // import { useState } from 'react';
// // import './Horo.css'
// // import {
// //   Star, Sun, Moon, Fire, Water,
// //   Wind, Earth, Flower, Heart
// // } from 'lucide-react';

// // const zodiacSigns = [
// //   {
// //     name: 'Aries',
// //     icon: <Fire color="#FF5733" size={40} />,
// //     dates: 'Mar 21 - Apr 19',
// //     element: 'Fire'
// //   },
// //   {
// //     name: 'Taurus',
// //     icon: <Earth color="#4CAF50" size={40} />,
// //     dates: 'Apr 20 - May 20',
// //     element: 'Earth'
// //   },
// //   {
// //     name: 'Gemini',
// //     icon: <Wind color="#2196F3" size={40} />,
// //     dates: 'May 21 - Jun 20',
// //     element: 'Air'
// //   },
// //   {
// //     name: 'Cancer',
// //     icon: <Water color="#3F51B5" size={40} />,
// //     dates: 'Jun 21 - Jul 22',
// //     element: 'Water'
// //   },
// //   {
// //     name: 'Leo',
// //     icon: <Sun color="#FFC107" size={40} />,
// //     dates: 'Jul 23 - Aug 22',
// //     element: 'Fire'
// //   },
// //   {
// //     name: 'Virgo',
// //     icon: <Flower color="#9C27B0" size={40} />,
// //     dates: 'Aug 23 - Sep 22',
// //     element: 'Earth'
// //   },
// //   {
// //     name: 'Libra',
// //     icon: <Heart color="#E91E63" size={40} />,
// //     dates: 'Sep 23 - Oct 22',
// //     element: 'Air'
// //   },
// //   {
// //     name: 'Scorpio',
// //     icon: <Star color="#673AB7" size={40} />,
// //     dates: 'Oct 23 - Nov 21',
// //     element: 'Water'
// //   },
// //   {
// //     name: 'Sagittarius',
// //     icon: <Moon color="#795548" size={40} />,
// //     dates: 'Nov 22 - Dec 21',
// //     element: 'Fire'
// //   },
// //   {
// //     name: 'Capricorn',
// //     icon: <Earth color="#607D8B" size={40} />,
// //     dates: 'Dec 22 - Jan 19',
// //     element: 'Earth'
// //   },
// //   {
// //     name: 'Aquarius',
// //     icon: <Wind color="#00BCD4" size={40} />,
// //     dates: 'Jan 20 - Feb 18',
// //     element: 'Air'
// //   },
// //   {
// //     name: 'Pisces',
// //     icon: <Water color="#009688" size={40} />,
// //     dates: 'Feb 19 - Mar 20',
// //     element: 'Water'
// //   }
// // ];

// // const dailyHoroscopes = {
// //   'Aries': 'An unexpected opportunity will arise. Stay open-minded.',
// //   'Taurus': 'Financial stability looks promising this week.',
// //   'Gemini': 'Communication will be key in resolving a personal conflict.',
// //   'Cancer': 'Emotional insights will guide you to better relationships.',
// //   'Leo': 'Your creativity is at its peak. Start that project!',
// //   'Virgo': 'Attention to detail will lead to professional success.',
// //   'Libra': 'Balance and harmony are your strengths today.',
// //   'Scorpio': 'Trust your intuition in important decisions.',
// //   'Sagittarius': 'Adventure calls. Be prepared for spontaneity.',
// //   'Capricorn': 'Disciplined approach will yield significant results.',
// //   'Aquarius': 'Innovative thinking solves complex problems.',
// //   'Pisces': 'Emotional intelligence is your superpower today.'
// // };

// // const Horoscope = () => {
// //   const [selectedSign, setSelectedSign] = useState(null);

// //   return (
// //     <div className="horoscope-container">
// //       <h1>Daily Horoscopes</h1>
// //       <div className="zodiac-grid">
// //         {zodiacSigns.map((sign) => (
// //           <div
// //             key={sign.name}
// //             className="zodiac-card"
// //             onClick={() => setSelectedSign(sign)}
// //           >
// //             {sign.icon}
// //             <h3>{sign.name}</h3>
// //             <p>{sign.dates}</p>
// //           </div>
// //         ))}
// //       </div>

// //       {selectedSign && (
// //         <div className="horoscope-details">
// //           <h2>{selectedSign.name} Horoscope</h2>
// //           <p><strong>Dates:</strong> {selectedSign.dates}</p>
// //           <p><strong>Element:</strong> {selectedSign.element}</p>
// //           <div className="daily-horoscope">
// //             <h3>Today's Insight</h3>
// //             <p>{dailyHoroscopes[selectedSign.name]}</p>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Horoscope;

// import { useState } from 'react';
// import './Horo.css';
// import {
//   Star, Sun, Moon, Flame,
//   Wind, Earth, Flower, Heart
// } from 'lucide-react';

// const zodiacSigns = [
//   {
//     name: 'Aries',
//     icon: <Flame color="#FF5733" size={40} />,
//     dates: 'Mar 21 - Apr 19',
//     element: 'Fire'
//   },
//   {
//     name: 'Taurus',
//     icon: <Earth color="#4CAF50" size={40} />,
//     dates: 'Apr 20 - May 20',
//     element: 'Earth'
//   },
//   {
//     name: 'Gemini',
//     icon: <Wind color="#2196F3" size={40} />,
//     dates: 'May 21 - Jun 20',
//     element: 'Air'
//   },
//   {
//     name: 'Cancer',
//     icon: <Sun color="#3F51B5" size={40} />,
//     dates: 'Jun 21 - Jul 22',
//     element: 'Water'
//   },
//   {
//     name: 'Leo',
//     icon: <Sun color="#FFC107" size={40} />,
//     dates: 'Jul 23 - Aug 22',
//     element: 'Fire'
//   },
//   {
//     name: 'Virgo',
//     icon: <Flower color="#9C27B0" size={40} />,
//     dates: 'Aug 23 - Sep 22',
//     element: 'Earth'
//   },
//   {
//     name: 'Libra',
//     icon: <Heart color="#E91E63" size={40} />,
//     dates: 'Sep 23 - Oct 22',
//     element: 'Air'
//   },
//   {
//     name: 'Scorpio',
//     icon: <Star color="#673AB7" size={40} />,
//     dates: 'Oct 23 - Nov 21',
//     element: 'Water'
//   },
//   {
//     name: 'Sagittarius',
//     icon: <Moon color="#795548" size={40} />,
//     dates: 'Nov 22 - Dec 21',
//     element: 'Fire'
//   },
//   {
//     name: 'Capricorn',
//     icon: <Earth color="#607D8B" size={40} />,
//     dates: 'Dec 22 - Jan 19',
//     element: 'Earth'
//   },
//   {
//     name: 'Aquarius',
//     icon: <Wind color="#00BCD4" size={40} />,
//     dates: 'Jan 20 - Feb 18',
//     element: 'Air'
//   },
//   {
//     name: 'Pisces',
//     icon: <Wind color="#009688" size={40} />,
//     dates: 'Feb 19 - Mar 20',
//     element: 'Water'
//   }
// ];

// const dailyHoroscopes = {
//   'Aries': 'An unexpected opportunity will arise. Stay open-minded.',
//   'Taurus': 'Financial stability looks promising this week.',
//   'Gemini': 'Communication will be key in resolving a personal conflict.',
//   'Cancer': 'Emotional insights will guide you to better relationships.',
//   'Leo': 'Your creativity is at its peak. Start that project!',
//   'Virgo': 'Attention to detail will lead to professional success.',
//   'Libra': 'Balance and harmony are your strengths today.',
//   'Scorpio': 'Trust your intuition in important decisions.',
//   'Sagittarius': 'Adventure calls. Be prepared for spontaneity.',
//   'Capricorn': 'Disciplined approach will yield significant results.',
//   'Aquarius': 'Innovative thinking solves complex problems.',
//   'Pisces': 'Emotional intelligence is your superpower today.'
// };

// const Horoscope = () => {
//   const [selectedSign, setSelectedSign] = useState(null);

//   return (
//     <div className="horoscope-container">
//       <h1>Daily Horoscopes</h1>
//       <div className="zodiac-grid">
//         {zodiacSigns.map((sign) => (
//           <div
//             key={sign.name}
//             className="zodiac-card"
//             onClick={() => setSelectedSign(sign)}
//           >
//             {sign.icon}
//             <h3>{sign.name}</h3>
//             <p>{sign.dates}</p>
//           </div>
//         ))}
//       </div>

//       {selectedSign && (
//         <div className="horoscope-details">
//           <h2>{selectedSign.name} Horoscope</h2>
//           <p><strong>Dates:</strong> {selectedSign.dates}</p>
//           <p><strong>Element:</strong> {selectedSign.element}</p>
//           <div className="daily-horoscope">
//             <h3>Today's Insight</h3>
//             <p>{dailyHoroscopes[selectedSign.name]}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Horoscope;

// import { useState } from "react";
// import {
//   Star,
//   Sun,
//   Moon,
//   Flame,
//   Wind,
//   Earth,
//   Flower,
//   Heart,
// } from "lucide-react";
// import "./Horo.css";

// const zodiacSigns = [
//   {
//     name: "Aries",
//     icon: <Flame color="#FF5733" size={40} />,
//     dates: "Mar 21 - Apr 19",
//     element: "Fire",
//   },
//   {
//     name: "Taurus",
//     icon: <Earth color="#4CAF50" size={40} />,
//     dates: "Apr 20 - May 20",
//     element: "Earth",
//   },
//   {
//     name: "Gemini",
//     icon: <Wind color="#2196F3" size={40} />,
//     dates: "May 21 - Jun 20",
//     element: "Air",
//   },
//   {
//     name: "Cancer",
//     icon: <Sun color="#3F51B5" size={40} />,
//     dates: "Jun 21 - Jul 22",
//     element: "Water",
//   },
//   {
//     name: "Leo",
//     icon: <Flame color="#FFC107" size={40} />,
//     dates: "Jul 23 - Aug 22",
//     element: "Fire",
//   },
//   {
//     name: "Virgo",
//     icon: <Flower color="#9C27B0" size={40} />,
//     dates: "Aug 23 - Sep 22",
//     element: "Earth",
//   },
//   {
//     name: "Libra",
//     icon: <Heart color="#E91E63" size={40} />,
//     dates: "Sep 23 - Oct 22",
//     element: "Air",
//   },
//   {
//     name: "Scorpio",
//     icon: <Star color="#673AB7" size={40} />,
//     dates: "Oct 23 - Nov 21",
//     element: "Water",
//   },
//   {
//     name: "Sagittarius",
//     icon: <Moon color="#795548" size={40} />,
//     dates: "Nov 22 - Dec 21",
//     element: "Fire",
//   },
//   {
//     name: "Capricorn",
//     icon: <Earth color="#607D8B" size={40} />,
//     dates: "Dec 22 - Jan 19",
//     element: "Earth",
//   },
//   {
//     name: "Aquarius",
//     icon: <Wind color="#00BCD4" size={40} />,
//     dates: "Jan 20 - Feb 18",
//     element: "Air",
//   },
//   {
//     name: "Pisces",
//     icon: <Wind color="#009688" size={40} />,
//     dates: "Feb 19 - Mar 20",
//     element: "Water",
//   },
// ];

// const dailyHoroscopes = {
//   Aries: "An unexpected opportunity will arise. Stay open-minded.",
//   Taurus: "Financial stability looks promising this week.",
//   Gemini: "Communication will be key in resolving a personal conflict.",
//   Cancer: "Emotional insights will guide you to better relationships.",
//   Leo: "Your creativity is at its peak. Start that project!",
//   Virgo: "Attention to detail will lead to professional success.",
//   Libra: "Balance and harmony are your strengths today.",
//   Scorpio: "Trust your intuition in important decisions.",
//   Sagittarius: "Adventure calls. Be prepared for spontaneity.",
//   Capricorn: "Disciplined approach will yield significant results.",
//   Aquarius: "Innovative thinking solves complex problems.",
//   Pisces: "Emotional intelligence is your superpower today.",
// };

// const HoroscopePage = () => {
//   const [selectedSign, setSelectedSign] = useState(zodiacSigns[0]);

//   return (
//     <div className="horoscope-container">
//       <div className="horoscope-layout">
//         <div className="zodiac-sidebar">
//           <h2>Zodiac Signs</h2>
//           <div className="zodiac-list">
//             {zodiacSigns.map((sign) => (
//               <div
//                 key={sign.name}
//                 className={`zodiac-item ${
//                   selectedSign.name === sign.name ? "active" : ""
//                 }`}
//                 onClick={() => setSelectedSign(sign)}
//               >
//                 {sign.icon}
//                 <span>{sign.name}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="horoscope-details">
//           <h1>{selectedSign.name} Horoscope</h1>
//           <div className="sign-info">
//             <div className="sign-icon">{selectedSign.icon}</div>
//             <div className="sign-meta">
//               <p>
//                 <strong>Dates:</strong> {selectedSign.dates}
//               </p>
//               <p>
//                 <strong>Element:</strong> {selectedSign.element}
//               </p>
//             </div>
//           </div>
//           <div className="daily-horoscope">
//             <h3>Today's Insight</h3>
//             <p>{dailyHoroscopes[selectedSign.name]}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HoroscopePage;
import { useState } from "react";
import {
  Flame,
  Earth,
  Wind,
  Sun,
  Flower,
  Heart,
  Star,
  Moon,
} from "lucide-react";
import "./Horo.css";

const zodiacSigns = [
  {
    name: "Aries",
    icon: <Flame color="#FF5733" size={30} />,
    dates: "Mar 21 - Apr 19",
    element: "Fire",
  },
  {
    name: "Taurus",
    icon: <Earth color="#4CAF50" size={30} />,
    dates: "Apr 20 - May 20",
    element: "Earth",
  },
  {
    name: "Gemini",
    icon: <Wind color="#2196F3" size={30} />,
    dates: "May 21 - Jun 20",
    element: "Air",
  },
  {
    name: "Cancer",
    icon: <Sun color="#3F51B5" size={30} />,
    dates: "Jun 21 - Jul 22",
    element: "Water",
  },
  {
    name: "Leo",
    icon: <Sun color="#FFC107" size={30} />,
    dates: "Jul 23 - Aug 22",
    element: "Fire",
  },
  {
    name: "Virgo",
    icon: <Flower color="#9C27B0" size={30} />,
    dates: "Aug 23 - Sep 22",
    element: "Earth",
  },
  {
    name: "Libra",
    icon: <Heart color="#E91E63" size={30} />,
    dates: "Sep 23 - Oct 22",
    element: "Air",
  },
  {
    name: "Scorpio",
    icon: <Star color="#673AB7" size={30} />,
    dates: "Oct 23 - Nov 21",
    element: "Water",
  },
  {
    name: "Sagittarius",
    icon: <Moon color="#795548" size={30} />,
    dates: "Nov 22 - Dec 21",
    element: "Fire",
  },
  {
    name: "Capricorn",
    icon: <Earth color="#607D8B" size={30} />,
    dates: "Dec 22 - Jan 19",
    element: "Earth",
  },
  {
    name: "Aquarius",
    icon: <Wind color="#00BCD4" size={30} />,
    dates: "Jan 20 - Feb 18",
    element: "Air",
  },
  {
    name: "Pisces",
    icon: <Flame color="#009688" size={30} />,
    dates: "Feb 19 - Mar 20",
    element: "Water",
  },
];

// const dailyHoroscopes = {
//   Aries: "An unexpected opportunity will arise. Stay open-minded.",
//   Taurus: "Financial stability looks promising this week.",
//   Gemini: "Communication will be key in resolving a personal conflict.",
//   Cancer: "Emotional insights will guide you to better relationships.",
//   Leo: "Your creativity is at its peak. Start that project!",
//   Virgo: "Attention to detail will lead to professional success.",
//   Libra: "Balance and harmony are your strengths today.",
//   Scorpio: "Trust your intuition in important decisions.",
//   Sagittarius: "Adventure calls. Be prepared for spontaneity.",
//   Capricorn: "Disciplined approach will yield significant results.",
//   Aquarius: "Innovative thinking solves complex problems.",
//   Pisces: "Emotional intelligence is your superpower today.",
// };

const dailyHoroscopes = {
  Aries:
    "You'll Commit Suicide in Few Minutes, If you don't you'll die by Accident",
  Taurus:
    "Money isn't everything… which is good because you won't have any soon.",
  Gemini: "Your Wi-Fi will betray you during an important moment.",
  Cancer: "Your crush will send you a message… in your dreams.",
  Leo: "You'll try to be the center of attention, but the spotlight will break.",
  Virgo:
    "Perfection is overrated… which is great, because you're not even close today.",
  Libra: "You'll finally find balance… right before you fall off a chair.",
  Scorpio: "Your mysterious vibe will confuse everyone, including yourself.",
  Sagittarius: "Adventure is out there! But so is bad weather. Stay home.",
  Capricorn: "Hard work pays off… but probably not for you today.",
  Aquarius: "You'll have a brilliant idea, but no one will listen.",
  Pisces: "Your emotional depth will scare a cat today. Congrats!",
};

const Horoscope = () => {
  const [selectedSign, setSelectedSign] = useState(zodiacSigns[0]);

  return (
    <div className="horoscope-container">
      <div className="horoscope-layout">
        <div className="zodiac-sidebar">
          {zodiacSigns.map((sign) => (
            <div
              key={sign.name}
              className={`zodiac-item ${
                selectedSign.name === sign.name ? "active" : ""
              }`}
              onClick={() => setSelectedSign(sign)}
            >
              {sign.icon}
              <span>{sign.name}</span>
            </div>
          ))}
        </div>

        <div className="horoscope-details">
          <h1>{selectedSign.name} Horoscope</h1>
          <div className="sign-info">
            <div className="sign-icon">{selectedSign.icon}</div>
            <div className="sign-meta">
              <p>
                <strong>Dates:</strong> {selectedSign.dates}
              </p>
              <p>
                <strong>Element:</strong> {selectedSign.element}
              </p>
            </div>
          </div>
          <div className="daily-horoscope">
            <h3>Today's Insights</h3>
            <p>{dailyHoroscopes[selectedSign.name]}</p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Horoscope;

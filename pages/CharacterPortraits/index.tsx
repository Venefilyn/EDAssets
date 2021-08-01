import Head from 'next/head';
import Card from '../../components/card';
import styles from '../../styles/Home.module.css';


export const cards: {
  title: string;
  desc: string;
  src: string;
  creator: string;
}[] = [
  {
    title: 'Aisling Duval',
    desc: 'The Aisling Duval portrait',
    src: '/Character Portraits/Aisling Duval/Aisling-Duval-portrait-preview.png',
    creator: 'Frontier Developments plc.',
  },
  {
    title: 'Archon Delaine',
    desc: 'Low quality Archon Delaine portrait',
    src: '/Character Portraits/Archon Delaine/Archon-Delaine-portrait-preview.png',
    creator: 'Frontier Developments plc.',
  },
  {
    title: 'Arissa Lavigny Duval',
    desc: 'Low quality Arissa Lavigny-Duval portrait',
    src: '/Character Portraits/Arissa Lavigny Duval/Arissa-Lavigny-Duval-portrait-preview.png',
    creator: 'Frontier Developments plc.',
  },
  {
    title: 'Denton Patreus',
    desc: 'The Denton Patreus portrait',
    src: '/Character Portraits/Denton Patreus/Denton-Patreus-portrait-Preview.png',
    creator: 'Frontier Developments plc.',
  },
  {
    title: 'Edmund Mahon',
    desc: 'Low quality Edmund Mahon portrait',
    src: '/Character Portraits/Edmund Mahon/Edmund-Mahon-portrait-preview.png',
    creator: 'Frontier Developments plc.',
  },
  {
    title: 'Felicia Winters',
    desc: 'Low quality Felicia Winters portrait',
    src: '/Character Portraits/Felicia Winters/Felicia-Winters-portrait-preview.png',
    creator: 'Frontier Developments plc.',
  },
  {
    title: 'Li Yong Rui',
    desc: 'Low quality Li Yong-Rui portrait',
    src: '/Character Portraits/Li Yong Rui/Li-Yong-Rui-portrait-preview.png',
    creator: 'Frontier Developments plc.',
  },
  {
    title: 'Pranav Antal',
    desc: 'Low quality Simguru Pranav Antal portrait',
    src: '/Character Portraits/Pranav Antal/Pranav-Antal-portrait-preview.png',
    creator: 'Frontier Developments plc.',
  },
  {
    title: 'Zachary Hudson',
    desc: 'Low quality Zachary Hudson portrait',
    src: '/Character Portraits/Zachary Hudson/Zachary-Hudson-portrait-preview.png',
    creator: 'Frontier Developments plc.',
  },
  {
    title: 'Zemina Torval',
    desc: 'Low quality Zemina Torval portrait.',
    src: '/Character Portraits/Zemina Torval/Zemina-Torval-portrait-preview.png',
    creator: 'Frontier Developments plc.',
  },
];

const Character_Portraits = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Elite Dangerous Assets</title>
        <meta name='description' content='The database for all your Elite Dangerous Assets' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <table>
          <tbody>
            {cards.map((card, index) => {
              if (((index % 6) / 100) === 0) return (
                <>
                  <tr>
                  </tr>
                  <td key={card.title}>
                    <Card title={card.title} desc={card.desc} src={card.src} creator={card.creator}/>
                  </td>
                </>
              )
              else return (
                  <td key={card.title}>
                    <Card title={card.title} desc={card.desc} src={card.src} creator={card.creator}/>
                  </td>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Character_Portraits;

import { Grommet, Box as GBox, Image, Text as GText } from 'grommet';
import { FAQ } from './components/FAQ/FAQ';
import { Header } from './components/Header/Header';
import venmo from './images/IMG_7375.png';
import leftCollage from './images/collage1.png';
import rightCollage from './images/collage2.png';

const theme = {
  global: {
    font: {
      family: "Alex Brush",
      size: "64px",
      height: "66px",
    },
  },
};
const globalTheme = {
  global: {
    font: {
      family: "Roboto",
      size: "22px",
      height: "24px",
    },
  },
};
const headerTheme = {
  global: {
    hover: {
      background: {
        color: "#eeeeee",
      },
    },
    font: {
      family: "Roboto",
      size: "22px",
      height: "24px",
    },
  },
};

export default function App() {
  return (
    <Grommet theme={globalTheme} full>
      <GBox background={'black'} fill>
      <GBox background={{image: 'url(//localhost:3000/bgd.jpg)', size: 'cover', opacity: '90%'}} direction='row' fill justify='center' flex={false} overflow='auto' height='100vh'>
        <GBox pad='none' width='medium' flex={false} elevation='medium'>
          <Image src={leftCollage} fill fit='cover' margin={'none'}/>
        </GBox>
        <GBox align='center' fill overflow='auto' flex={false} pad={{top: 'small', bottom: 'large'}}>
          <Header theme={theme} />
          <GBox align='center' flex={false} margin={{top: 'small', bottom: 'medium'}}>
            <GText size='xlarge'>The Sterling at Arrowhead Golfclub</GText>
            <GText size='xlarge'>12292 Clarence Center Rd, Akron, NY 14001</GText>
          </GBox>
          <GBox align='center' background={'white'} pad='medium' margin={{bottom: 'large'}} width='small' height='small' border={{color: '#550000', size: '1px'}} flex={false} round={'small'}>
            <Image margin={{left: 'xxsmall'}} src={venmo} size='xsmall' fit='contain' />
            <GText size="medium"></GText>
          </GBox>
          <FAQ headerTheme={headerTheme} textTheme={globalTheme} headerText={'Wedding Day Timeline:'} dropText={'Our ceremony will begin at 4:30pm on Friday the 31st. Following the ceremony will be cocktail hour, which will be followed by a buffet dinner. '} />
          <FAQ headerTheme={headerTheme} textTheme={globalTheme} headerText={'Attire:'} dropText={'Although we are having our special day on Halloween, we do ask that everyone please wear normal wedding attire (no costumes). The wedding color will be maroon, so kindly avoid this color as well if possible!'} />
          <FAQ headerTheme={headerTheme} textTheme={globalTheme} headerText={'Reservations:'} dropText={'There are a few hotels nearby The Sterling for those of you who would like to book reservations on your own time. We will be booking a block of rooms out at blah blah blah near the Buffalo Airport.'} />
          <FAQ headerTheme={headerTheme} textTheme={globalTheme} headerText={'Phone-Free Ceremony:'} dropText={`We kindly ask you to be fully present with us during the ceremony. We understand everyone will want to have a snapshot of the moment we say our 'I do's', but we assure you our professional photgrapher will be sure to capture this moment for us all.`} />
          <FAQ headerTheme={headerTheme} textTheme={globalTheme} headerText={'Adults Only:'} dropText={'To ensure that all of our wedding guests, including parents, are able to enjoy a fun and relaxing night, we respectfully ask that no children attend our wedding day.'} />
        </GBox>
        <GBox pad='none' width='medium' flex={false} elevation='medium'>
          <Image src={rightCollage} fill fit='cover' margin={'none'} />
        </GBox>
      </GBox>
      </GBox>
    </Grommet>
  );
}
import { Grommet, Box as GBox, Image, Text as GText, InfiniteScroll } from 'grommet';
import { FAQ } from './components/FAQ/FAQ';
import { Header } from './components/Header/Header';
import venmo from './images/IMG_7375.png';

const theme = {
  global: {
    font: {
      family: "Alex Brush",
      size: "60px",
      height: "62px",
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

export default function App() {
  return (
    <Grommet theme={globalTheme} full>
      <GBox align='center' fill overflow='scroll'>
        <Header theme={theme} />
        <GBox align='center' margin={{top: 'small', bottom: 'medium'}}>
          <GText size='xlarge'>The Sterling at Arrowhead Golfclub</GText>
          <GText size='xlarge'>12292 Clarence Center Rd, Akron, NY 14001</GText>
        </GBox>
        <GBox align='center' pad='medium' margin={{bottom: 'large'}} width='small' height='small' border={{color: '#550000', size: '1px'}} round={'small'}>
          <Image margin={{left: 'xxsmall'}} src={venmo} size='xsmall' fit='contain' />
        </GBox>
        <FAQ headerTheme={globalTheme} textTheme={globalTheme} headerText={'Attire:'} dropText={'No fucking costumes'} />
        <FAQ headerTheme={globalTheme} textTheme={globalTheme} headerText={'Reservations:'} dropText={'Somewhere near there'} />
      </GBox>
    </Grommet>
  );
}
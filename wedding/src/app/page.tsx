import { Box, Main, Grommet } from 'grommet'
import Head from '../../node_modules/next/head'
import { Header } from '../components/MainHeader/Header'

export default function Home() {
  return (
    <Grommet full>
      <Box align='center' height='100vh' fill pad='small'>
          <Box pad='medium' direction='column' fill>
            <Header />
            <Box align='center'>
              Hi
            </Box>
          </Box>
      </Box>
    </Grommet>
  );
}

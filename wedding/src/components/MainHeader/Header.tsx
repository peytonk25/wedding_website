import { Box, Text as GText } from 'grommet'

export const Header = () => {
    return (
        <Box align='center' background='white'>
            <GText margin={{right: 'large'}}size='xlarge' color='black' >The Wedding of</GText>
            <GText margin={{left: 'large'}} size='xlarge' color='darkred'>Peyton + Sarah</GText>
        </Box>
    )
}
import {Box as GBox, Text as GText, Grommet, ThemeType} from 'grommet';

export type HeaderProps = {
    theme: ThemeType;
}

export const Header = ({theme}: HeaderProps) => {
    return (
        <Grommet theme={theme} margin={{top: 'medium'}}>
        <GBox align='center' width={'large'} pad='medium'>
            <GBox animation={{type: 'slideLeft', delay: 400, duration: 1500, size: 'xlarge'}} align='center'>
                <GText size='xlarge'>The Wedding of</GText>
            </GBox>
            <GBox pad='xsmall'/>
            <GBox animation={{type: 'slideRight', delay: 400, duration: 1500, size: 'large'}} align='center'>
                <GText size='xxxlarge' color='#550000'>Peyton + Sarah</GText>
            </GBox>
            <GBox align='center'>
                <GText size='xlarge' color='#550000'>10 - 31 - 2025</GText>
            </GBox>
        </GBox>
        </Grommet>
    )
}
import {Box as GBox, Text as GText, Grommet, ThemeType, DropButton} from 'grommet';
import React, { useState } from 'react';

export type HeaderProps = {
    headerTheme: ThemeType;
    textTheme: ThemeType;
    headerText: string;
    dropText: string;
}

type DropContentProps = {
    text: string;
}

const DropContent = ({text}: DropContentProps) => {
    return (
        <GBox pad='medium'>
            <GText>{text}</GText>
        </GBox>
    )
}

export const FAQ = ({headerTheme, textTheme, headerText, dropText}: HeaderProps) => {

    const [open, setOpen] = useState<boolean>(false);

    return (
        <Grommet theme={headerTheme} margin={{top: 'medium'}}>
            <GBox align='center' width='large' margin={{top: 'xsmall'}} onClick={() => setOpen(!open)}>
                <GBox fill='horizontal' round='xsmall' border='all' pad='xsmall'>
                    {headerText}
                </GBox>
                {open ? (
                    <GBox align='start' fill='horizontal'>
                    <DropContent text={dropText} />
                    </GBox>
                ) : (
                    <>
                    </>
                )}
            </GBox>
        </Grommet>
    )
}
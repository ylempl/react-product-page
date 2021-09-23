import React, { FC, useState } from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    FormControlLabel,
    FormControl,
    InputLabel,
    Input,
    Radio,
    RadioGroup,
    makeStyles,
    Typography
} from '@material-ui/core';
import { Search } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        flexDirection: 'row'
    },
    form: {
        display: 'flex',
        alignItems: 'center'
    },
    importButton: {
        marginRight: theme.spacing(1)
    },
    exportButton: {
        marginRight: theme.spacing(1)
    },
    textField: {
        marginRight: theme.spacing(2)
    },
}));

export interface IQuery {
    id: number | string,
    apiVersion: string
}

export interface IToolbar {
    handleOnSearch: any,
    handleChange: any,
    query: IQuery
}

declare global {
    interface Window {
        webkitAudioContext: any;
    }
}

const notesChar = ['A', 'A#/B', 'H', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/B', 'H', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab'];
const scaleDur = [2, 2, 1, 2, 2, 2, 1];

const notes = {
    a: 440,
    b: 466.164,
    h: 493.883,
    c: 261.625565300598634,
    cis: 277.183,
    d: 293.665,
    dis: 311.127,
    e: 329.627556912869929,
    f: 349.228,
    fis: 261.626,
    g: 391.995435981749294,
    gis: 415.305
}

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

const gainNode1 = audioCtx.createGain();
const gainNode2 = audioCtx.createGain();
const gainNode3 = audioCtx.createGain();
gainNode1.gain.value = 0.5;
gainNode2.gain.value = gainNode1.gain.value;
gainNode3.gain.value = gainNode1.gain.value;

const constantNode = audioCtx.createConstantSource();
constantNode.connect(gainNode2.gain);
constantNode.connect(gainNode3.gain);
constantNode.start();

gainNode1.connect(audioCtx.destination);
gainNode2.connect(audioCtx.destination);
gainNode3.connect(audioCtx.destination);

const oscillator = audioCtx.createOscillator();
oscillator.type = 'sine';
oscillator.frequency.value = notes.a;
const oscillator2 = audioCtx.createOscillator();
oscillator2.type = 'sine';
oscillator2.frequency.value = notes.c;
const oscillator3 = audioCtx.createOscillator();
oscillator3.type = 'sine';
oscillator3.frequency.value = notes.e;

oscillator.start();
oscillator2.start();
oscillator3.start();

constantNode.offset.value = gainNode1.gain.value;

let connected = false

const input = 'A'
const chord: any = [input];

const reducer = (accumulator: any, currentValue: any) => {
    const index = (accumulator + notesChar.indexOf(input));
    chord.push(notesChar[index]);
    return accumulator + currentValue
};

scaleDur.reduce(reducer)

console.warn('chord', chord)

const play = () => {
    if (!connected) {
        oscillator.connect(gainNode1);
        oscillator2.connect(gainNode2);
        oscillator3.connect(gainNode3);
    } else {
        oscillator.disconnect(gainNode1);
        oscillator2.disconnect(gainNode2);
        oscillator3.disconnect(gainNode3);
    }
    connected = !connected;
}

const Toolbar: FC<IToolbar> = ({
    handleOnSearch,
    handleChange,
    query
}) => {
    const classes = useStyles();

    return (
        <div>
            <Box mt={3}>
                <Card>
                    <CardContent>
                        <Box justifyContent="flex-start" display="flex" alignItems="center">
                            <FormControl className={classes.textField}>
                                <InputLabel htmlFor="id">ID</InputLabel>
                                <Input onChange={handleChange} value={query.id} name="id" />
                            </FormControl>
                            <FormControl>
                                <RadioGroup className={classes.root} name="apiVersion" value={query.apiVersion} onChange={handleChange}>
                                    <FormControlLabel value="pimapi" control={<Radio />} label="PIM API" />
                                    <FormControlLabel value="occtoo" control={<Radio />} label="Occtoo" />
                                </RadioGroup>
                            </FormControl>
                            <Button
                                color="primary"
                                variant="contained"
                                type="submit"
                                onClick={handleOnSearch}
                            >
                                Search
                            </Button>
                            <Button
                                color="primary"
                                variant="contained"
                                type="button"
                                onClick={play}
                            >
                                Play
                            </Button>
                            <Box marginLeft="1rem">
                                <Typography>96149 Harmony for test</Typography>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </div>
    );
};

export default Toolbar;

import React, { useState, useEffect } from 'react';

import useStyles from './styles';
//------- MUI cores
import { Typography } from '@material-ui/core';  // use it to any text style
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Grow from '@mui/material/Grow';




function NameAnimation(props) {

    const timer = React.useRef();
    const tempoInicial = props.tempoInicial;
    const [copiedSelection, setcopiedSelection] = useState([false, false, false])

    function selectOption(selectedOption) {
        setcopiedSelection([false, false, false]);
        let options = [...copiedSelection];
        options[selectedOption] = true;
        setcopiedSelection(options);
        timer.current = window.setTimeout(() => {
            setcopiedSelection([false, false, false]);
        }, 1000);
    }

    return (<Stack
        sx={{ width: props.mobile ? '100%':'60%', height: "100%", marginTop:'7vh' }}
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        spacing={2}
    >
        <Stack

            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            spacing={0}
        >
            <Grow in={tempoInicial[0]}>
                <Typography variant="h5" align='left' color='primary' style={{ display: 'inline-block' }}>
                    Hey there!
                </Typography>
            </Grow>



        </Stack>


        <Typography variant="subtitle1" align='left' >
            My name is Matheus Garcia, and I got my degree in Electrical Engineering at Instituto Militar de Engenharia - IME, with an internship at University of Ottawa - Canada.
            I'm currently working as a full stack web developer freelancer, focused on JavaScript, nodeJS, React, React Native and MongoDB.
            From back (authentication, data base, data analysis, etc.) to front (web design, data rendering, etc.), I'm here to help you!

        </Typography>
        <Typography variant="subtitle2" align='left' gutterBottom style={{ color: '#053742' }}>
            <IconButton onClick={() => { selectOption(0) }}>
                <CopyToClipboard text={'matheusgarcia.developer@gmail.com'}
                >
                    <ContentCopyIcon fontSize='small' />
                </CopyToClipboard>
                <Grow in={copiedSelection[0]} style={{ position: 'absolute', bottom: '-50%' }}>
                    <Typography variant="subtitle2" align='left' gutterBottom style={{ color: '#557C55', padding: 0, display: 'inline-block', margin: 0 }}>Copied!</Typography>
                </Grow>
            </IconButton>
            matheusgarcia.developer@gmail.com


            <br /><br />
            <IconButton onClick={() => { selectOption(1) }}>
                <CopyToClipboard text={'https://github.com/mgarciaDeveloper'}
                >
                    <ContentCopyIcon fontSize='small' />
                </CopyToClipboard>
                <Grow in={copiedSelection[1]} style={{ position: 'absolute', bottom: '-50%' }}>
                    <Typography variant="subtitle2" align='left' gutterBottom style={{ color: '#557C55', padding: 0, display: 'inline-block', margin: 0 }}>Copied!</Typography>
                </Grow>
            </IconButton>
            https://github.com/mgarciaDeveloper


            <br /><br />
            <IconButton onClick={() => { selectOption(2) }}>
                <CopyToClipboard text={'+55 51 9136-4207'}
                >
                    <ContentCopyIcon fontSize='small' />
                </CopyToClipboard>
                <Grow in={copiedSelection[2]} style={{ position: 'absolute', bottom: '-50%' }}>
                    <Typography variant="subtitle2" align='left' gutterBottom style={{ color: '#557C55', padding: 0, display: 'inline-block', margin: 0 }}>Copied!</Typography>
                </Grow>
            </IconButton>

            +55 51 9136-4207
        </Typography>



    </Stack>)
}

export default NameAnimation;
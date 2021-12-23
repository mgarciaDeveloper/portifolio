import React, { useState, useEffect } from 'react';

import useStyles from './styles';
//------- MUI cores
import { Typography } from '@material-ui/core';  // use it to any text style


import Stack from '@mui/material/Stack';
import Grow from '@mui/material/Grow';




function NameAnimation(props) {

    const tempoInicial = props.tempoInicial;



    return (<Stack
        sx={{ width: '40%', height: "100%", }}
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
            {tempoInicial[0] && <>
                <Grow in={tempoInicial[0]}>
                    <Typography variant="h5" align='left' color='primary' style={{ display: 'inline-block' }}>
                        M
                        {tempoInicial[1]
                            && <Grow in={tempoInicial[1]}>
                                <Typography variant="h5" align='left' color='primary' style={{ display: 'inline-block', }}>
                                    atheus
                                </Typography>
                            </Grow>
                        }

                        G
                        {tempoInicial[2]
                            && <Grow in={tempoInicial[2]}>
                                <Typography variant="h5" align='left' color='primary' style={{ display: 'inline-block', }}>
                                    arcia
                                </Typography>
                            </Grow>
                        }
                        D
                        {tempoInicial[3]
                            && <Grow in={tempoInicial[3]}>
                                <Typography variant="h5" align='left' color='primary' style={{ display: 'inline-block', }}>
                                    eveloper
                                </Typography>
                            </Grow>
                        }
                    </Typography>
                </Grow>

            </>}


        </Stack>


        <Typography variant="subtitle1" align='left' >
            Hey There! My name is Matheus Garcia, and I got my degree in Electrical Engineering with an internship at University of Ottawa - Canada.
            Now I'm working as a full stack web developer freelancer, focused on JavaScript, nodeJS, React, React Native and MongoDB.
            From back (authentication, data base, data analysis, etc.) to front (web design, data rendering, etc.), I'm here to help you!

        </Typography>
        <Typography variant="subtitle2" align='left' gutterBottom style={{ color: '#053742' }}>
            matheusgarcia.developer@gmail.com <br />
        </Typography>



    </Stack>)
}

export default NameAnimation;

// React and NPM imports
import React, { useState, useEffect } from 'react';

import useStyles from './styles';
//------- MUI cores
import { Typography, Button, CssBaseline, Container, CircularProgress, Grid } from '@material-ui/core';  // use it to any text style

import Paper from '@mui/material/Paper';

import Stack from '@mui/material/Stack';
import Grow from '@mui/material/Grow';
import Divider from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ListSubheader from '@mui/material/ListSubheader';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Tooltip from '@mui/material/Tooltip';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import IconButton from '@mui/material/IconButton';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import Map from "./Map";
import heatMapData from './heatMapData';
import HeatMap from './HeatMap';
import NameAnimation from './NameAnimation';
import { Doughnut } from "react-chartjs-2";
import Chart from "react-google-charts";
import { MilitaryTech } from '@mui/icons-material';
//------- MUI icons



function Presentation(props) {

    const timer = React.useRef();
    const classes = useStyles();

    const [tempoInicial, setTempoInicial] = useState([false, false, false, false]); // Open, Matheus, Garcia, Developer



    function contarTempo() {
        timer.current = window.setTimeout(() => {
            setTempoInicial([true, false, false, false]);
            timer.current = window.setTimeout(() => {
                setTempoInicial([true, true, false, false]);
                timer.current = window.setTimeout(() => {
                    setTempoInicial([true, false, true, false]);
                    timer.current = window.setTimeout(() => {
                        setTempoInicial([true, false, false, true]);
                        timer.current = window.setTimeout(() => {
                            setTempoInicial([true, false, false, false]);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);

    }

    React.useEffect(() => {
        contarTempo();
    }, []);










    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <Stack justifyContent='center' direction="column" alignContent='center' sx={{ width: '100%', height: '100%', margin: 0, }} spacing={7}
        >

            <Stack
                sx={{ width: '100%', minHeight: window.screen.width < 1200 ? '100vh' : '50vh' }}
                direction={window.screen.width < 1200 ? 'column' : 'row'}
                justifyContent="space-around"
                alignItems="flex-start"
                spacing={2}
            >

                <NameAnimation tempoInicial={tempoInicial} mobile={window.screen.width < 1200 ? true : false} />



                <Paper sx={{ width: window.screen.width < 1200 ? '100%' : '40%', height: '80%' }}>
                    <ImageList sx={{ width: '100%', height: window.screen.width < 1200 ? '50vh' : '40vh' }}>

                        <ImageListItem cols={2} sx={{ margin: window.screen.width < 1200 ? 0 : 1 }} key='map' >
                            {tempoInicial[0] &&
                                <Map data={
                                    [{
                                        myID: '000',
                                        name: 'Porto Alegre',
                                        location: [-30.0544, -51.2235]
                                    }
                                    ]
                                }
                                    center={{ lat: -30.0544, lng: -51.2335 }} zoom={10} goToFacility={false} />}

                            <ImageListItemBar
                                title={'Where am I ?'}
                                subtitle={'Porto Alegre / RS / BR '}
                                actionIcon={
                                    <IconButton
                                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}

                                    >
                                        <LocationOnIcon />
                                    </IconButton>
                                }


                            />
                        </ImageListItem>

                    </ImageList>


                    {window.screen.width < 1000
                        && <Stack
                            direction="column"
                            justifyContent="space-between"
                            alignItems="center"
                            spacing={1}
                        >
                            <Stack direction="row" justifyContent="center" alignItems="center" spacing={12} >
                                <Typography variant="subtitle2" align='left' gutterBottom style={{ color: '#053742' }}>Skills:</Typography>
                            </Stack>

                            <Stack direction="row" justifyContent="center" alignItems="center" spacing={12} >
                                {[
                                    {
                                        title: 'MongoDB/Mongoose - NoSQL database',
                                        src: "/images/JSIcons/mongo.png",
                                        url: 'https://www.mongodb.com/'
                                    },
                                    {
                                        title: 'NodeJS - Biblioteca para desenvolvimento web',
                                        src: "/images/JSIcons/nodejs.png",
                                        url: 'https://nodejs.org/en/'
                                    },
                                    {
                                        title: 'Javascript - Linguagem universal de programação',
                                        src: "/images/JSIcons/javascript.png",
                                        url: 'https://www.w3schools.com/js/'
                                    },
                                ].map((eachIcon, index) =>

                                    <Tooltip title={eachIcon.title}>
                                        <a
                                            href={eachIcon.url} target="_blank"
                                            style={{
                                                margin: '5vw',
                                                background: 'none',
                                                color: 'inherit',
                                                border: 'none',
                                                padding: 0,
                                                font: 'inherit',
                                                cursor: 'pointer',
                                                outline: 'inherit',
                                                width: window.screen.width < 1200 ? '7vw' : '2vw'
                                            }}
                                        >
                                            <img src={eachIcon.src} alt="JS" width={'100%'} ></img>
                                        </a>



                                    </Tooltip>
                                )
                                }
                            </Stack>
                            <Stack direction="row" justifyContent="center" alignItems="center" spacing={12} >
                                {[{
                                    title: 'React - Biblioteca JS para desenvolvimento frontend',
                                    src: "/images/JSIcons/atom.png",
                                    url: 'https://reactjs.org/'
                                },
                                {
                                    title: "Google Cloud - API's de ferramentas para desenvolvimento Web",
                                    src: "/images/JSIcons/google.png",
                                    url: 'https://console.cloud.google.com'
                                },
                                {
                                    title: "Amazon Web Services - Diversos serviços para desenvolvimento web, entre eles, os buckets de download/upload de arquivos",
                                    src: "/images/JSIcons/aws.png",
                                    url: 'https://aws.amazon.com/pt/'
                                },].map((eachIcon, index) =>

                                    <Tooltip title={eachIcon.title}>
                                        <a
                                            href={eachIcon.url} target="_blank"
                                            style={{
                                                margin: '5vw',
                                                background: 'none',
                                                color: 'inherit',
                                                border: 'none',
                                                padding: 0,
                                                font: 'inherit',
                                                cursor: 'pointer',
                                                outline: 'inherit',
                                                width: window.screen.width < 1200 ? '7vw' : '2vw'
                                            }}
                                        >
                                            <img src={eachIcon.src} alt="JS" width={'100%'} ></img>
                                        </a>



                                    </Tooltip>
                                )}
                            </Stack>


                        </Stack>

                    }


                </Paper>

            </Stack>

            <iframe style={{width:'100%', height:window.screen.width < 1200 ? '80vh' : '80vh'}} src="https://www.linkedin.com/in/matheus-garcia-a01b9113b" frameborder="0"></iframe>


            { window.screen.width > 1000 && <footer className={classes.footer}>
                <Stack justifyContent='center' direction="column" alignContent='center' sx={{ width: '100%', margin: 0, }} spacing={2}>

                    <Typography variant="subtitle2" align='center' gutterBottom style={{ color: '#053742' }}>
                        skills:
                    </Typography>


                    <Stack justifyContent='center' direction="row" alignContent='center' sx={{ width: '100%', margin: 0, }} spacing={5}>
                        <Stack justifyContent='center' direction="column" alignContent='center' sx={{ width: '100%', }} spacing={5}>

                            <Stack direction="row" justifyContent="center" alignItems="center" spacing={12} >
                                {[
                                    {
                                        title: 'Github - Controle de versões no desenvolvimento de um projeto',
                                        src: "/images/JSIcons/github.png",
                                        url: 'https://github.com/'
                                    },
                                    {
                                        title: 'Visual Studio - Edição de código',
                                        src: "/images/JSIcons/visual-studio.png",
                                        url: 'https://code.visualstudio.com/'
                                    },
                                    {
                                        title: 'MongoDB/Mongoose - NoSQL database',
                                        src: "/images/JSIcons/mongo.png",
                                        url: 'https://www.mongodb.com/'
                                    },
                                    {
                                        title: 'NodeJS - Biblioteca para desenvolvimento web',
                                        src: "/images/JSIcons/nodejs.png",
                                        url: 'https://nodejs.org/en/'
                                    },
                                    {
                                        title: 'Javascript - Linguagem universal de programação',
                                        src: "/images/JSIcons/javascript.png",
                                        url: 'https://www.w3schools.com/js/'
                                    },
                                    {
                                        title: 'React - Biblioteca JS para desenvolvimento frontend',
                                        src: "/images/JSIcons/atom.png",
                                        url: 'https://reactjs.org/'
                                    },
                                    {
                                        title: 'MUI - Biblioteca React para web design',
                                        src: "/images/JSIcons/mui.png",
                                        url: 'https://mui.com/pt/'
                                    },
                                    {
                                        title: "Google Cloud - API's de ferramentas para desenvolvimento Web",
                                        src: "/images/JSIcons/google.png",
                                        url: 'https://console.cloud.google.com'
                                    },
                                    {
                                        title: "Unsplash - Galeria online de fotografias",
                                        src: "/images/JSIcons/unsplash.png",
                                        url: 'https://unsplash.com/'
                                    },
                                    {
                                        title: "Amazon Web Services - Diversos serviços para desenvolvimento web, entre eles, os buckets de download/upload de arquivos",
                                        src: "/images/JSIcons/aws.png",
                                        url: 'https://aws.amazon.com/pt/'
                                    },
                                ].map((eachIcon, index) =>

                                    <Tooltip title={eachIcon.title}>
                                        <a
                                            href={eachIcon.url} target="_blank"
                                            style={{
                                                background: 'none',
                                                color: 'inherit',
                                                border: 'none',
                                                padding: 0,
                                                font: 'inherit',
                                                cursor: 'pointer',
                                                outline: 'inherit',
                                                width: '2vw'
                                            }}
                                        >
                                            <img src={eachIcon.src} alt="JS" width={'100%'} ></img>
                                        </a>



                                    </Tooltip>
                                )
                                }
                            </Stack>

                        </Stack>
                    </Stack>





                </Stack>
            </footer> }
        </Stack>



    );
}

export default Presentation;
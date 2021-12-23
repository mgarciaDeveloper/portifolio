
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


import HeatMap from "./HeatMap";
import heatMapData from "./heatMapData";
import NameAnimation from './NameAnimation';
import { Doughnut } from "react-chartjs-2";
import Chart from "react-google-charts";
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





    const chartData = {
        labels: [
            "China",
            "EU",
            "USA",
            "Japan",
            "Germany",
            "Italy",
            "India",
            "Australia",
            "Vietnam",
            "South Corea",
            "Spain",
            "United Kingdom",
            "France",
            'Netherlands',
            'Brazil'
        ],
        datasets: [
            {
                label: "Solar PV capacity (MW)",
                data: [254, 152, 75, 67, 53, 39, 21, 17, 16, 14, 14, 13, 11, 10, 7],
                backgroundColor: [
                    "rgba(50, 80, 46, 1)",
                    "rgba(236, 231, 180, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(91, 13, 30, 1)",
                    "rgba(236, 150, 25, 1)",
                    "rgba(94, 105, 180, 1)",
                    "rgba(78, 55, 78, 1)",
                    'rgba(255, 89, 89, 1)',
                    'rgba(103, 111, 163, 1)',
                    'rgba(205, 222, 255,1)',
                    'rgba(26, 55, 77,1)',
                    'rgba(110, 60, 188, 1)',
                    'rgba(184, 228, 240,1)'

                ],
                borderColor: [
                    "rgba(255, 255, 255, 1)",
                    "rgba(255, 255, 255, 1)",
                    "rgba(255, 255, 255, 1)",
                    "rgba(255, 255, 255, 1)",
                    "rgba(255, 255, 255, 1)",
                    "rgba(255, 255, 255, 1)",
                    "rgba(255, 255, 255, 1)",
                    "rgba(255, 255, 255, 1)",
                    "rgba(255, 255, 255, 1)",
                    "rgba(255, 255, 255, 1)",
                    "rgba(255, 255, 255, 1)",
                    "rgba(255, 255, 255, 1)",
                    "rgba(255, 255, 255, 1)",
                    "rgba(255, 255, 255, 1)",
                    "rgba(255, 255, 255, 1)",
                ],
                borderWidth: 1,
                hoverOffset: 4,
            },
        ],
    };









    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    const onClickUrl = (url) => {
        return () => openInNewTab(url)
    }

    return (
        <Stack justifyContent='center' direction="column" alignContent='center' sx={{ width: '100%', height: '100%', margin: 0, }} spacing={7}>

            <Stack
                sx={{ width: '100%', height: '70vh' }}
                direction="row"
                justifyContent="space-around"
                alignItems="flex-start"
                spacing={2}
            >

                <NameAnimation tempoInicial={tempoInicial} />



                <Paper sx={{ width: '60%', height: '100%' }}>
                    <ImageList sx={{ width: '100%', height: '100%' }}>

                        <ImageListItem cols={2} sx={{ margin: 3 }} key='map' >
                            <div width='50%' height='40vh'><HeatMap data={heatMapData} center={{ lat: -18.5873, lng: -46.5177 }} /></div>
                            <ImageListItemBar
                                title={'Google Maps React'}
                                subtitle={'APIs with Google Clound allows you to integrate Maps with your application '}

                            />
                        </ImageListItem>

                        <ImageListItem cols={2} sx={{ margin: 3 }} key='chart' >
                            <Chart
                                width={'100%'}
                                height={'100%'}
                                chartType="BarChart"
                                loader={<div>Loading Chart</div>}
                                data={[
                                    ['City', 'Capacity (MW)'],
                                    ['Várzea de Palma', 11],
                                    ['Uberlândia', 9],
                                    ['Buritizeiro', 8],
                                    ['Belo Horizonte', 5],
                                    ['Jaíba', 4],
                                ]}
                                options={{
                                    title: "Solar PV genetaion at the province of 'Minas Gerais/BR'",
                                    // For the legend to fit, we make the chart area smaller
                                    chartArea: { width: '70%', height: '70%' },
                                    // lineWidth: 25
                                }}
                                // For tests
                                rootProps={{ 'data-testid': '1' }}
                            />
                            <ImageListItemBar
                                title={'Charts'}
                                subtitle={'APIs with React-JS can give you a good data visualization '}

                            />
                        </ImageListItem>


                    </ImageList>

                </Paper>

            </Stack>
            <footer className={classes.footer}>
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

                                        {/* <button
                                            onClick={(e) => { e.preventDefault(); onClickUrl(eachIcon.url);  }}
                                            style={{
                                                background: 'none',
                                                color: 'inherit',
                                                border: 'none',
                                                padding: 0,
                                                font: 'inherit',
                                                cursor: 'pointer',
                                                outline: 'inherit',
                                                width: '2%'}}
                                        > </button> */}
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
                                                width: '2%'
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
            </footer>
        </Stack>



    );
}

export default Presentation;
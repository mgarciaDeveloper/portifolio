
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

import Tooltip from '@mui/material/Tooltip';

//------- MUI icons



function Presentation(props) {

    const timer = React.useRef();
    const classes = useStyles();

    const [tempoInicial, setTempoInicial] = useState([false, false]);


    function contarTempo() {
        timer.current = window.setTimeout(() => {
            setTempoInicial([true, false]);
            timer.current = window.setTimeout(() => {
                setTempoInicial([true, true]);
            }, 500);
        }, 500);

    }


    React.useEffect(() => {
        contarTempo();
    }, []);

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    const onClickUrl = (url) => {
        return () => openInNewTab(url)
    }

    return (
        <Stack justifyContent='center' direction="column" alignContent='center' sx={{ width: '100%', margin: 0, }} spacing={7}>

            <Stack
                sx={{ width: '100%', }}
                direction="row"
                justifyContent="space-around"
                alignItems="flex-start"
                spacing={2}
            >


                <Stack
                    sx={{ width: '25%', height: "100%", marginLeft: '2%', }}
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
                                MGD
                            </Typography>
                        </Grow>
                        <Grow in={tempoInicial[1]}>
                            <Typography variant="h5" align='left' color='primary' style={{ display: 'inline-block', }}>
                                eveloper
                            </Typography>
                        </Grow>

                    </Stack>





                    <Typography variant="subtitle1" align='left' >
                        Distribuição e organização de tarefas, controle e visualização de projetos, armazenamento e processamento de dados: Tudo isto e muito mais em uma só plataforma.
                    </Typography>
                    <Typography variant="h8" align='left' gutterBottom style={{ color: '#053742' }}>
                        TC Rodrigo (Concepção) <br /> 1º Ten Sixel (Análise de dados) <br /> 1º Ten Matheus Garcia (Desenvolvimento) <br /> Sd Alves (Server management )
                    </Typography>



                </Stack>
                <Paper sx={{ width: '50%', height: '100%' }}>
                    <ImageList variant="quilted" sx={{ width: '50%', height: '55vh' }}>
                        {
                            React.Children.map(props.children, (child) =>
                                <ImageListItem cols={child.props.propsCol ? 1 : 2} sx={{ margin: 3 }} >
                                    {child}
                                </ImageListItem>
                            )
                        }
                    </ImageList>

                </Paper>

            </Stack>
            <footer className={classes.footer}>
                <Stack justifyContent='center' direction="column" alignContent='center' sx={{ width: '100%', margin: 0, }} spacing={2}>

                    <Typography variant="p" align='center' gutterBottom style={{ color: '#053742' }}>
                        Desenvolvido por completo na CRO/3. Para isto, a equipe de programadores Full Stack escreveu mais de 10.000 linhas de código em Javascript, e contou com as seguintes ferramentas :
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
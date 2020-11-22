import React from 'react';

import { 
    makeStyles, 
    AppBar, 
    Toolbar, 
    IconButton,
    Drawer,
    Button,
    List, 
    Typography, 
    Divider, 
    ListItem,
    ListItemIcon,
    ListItemText,  
    ListSubheader,      
    Box,
    Grid,
    Hidden,
    Switch
} from '@material-ui/core';

import { useTheme } from '@material-ui/core/styles';

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

import Apps from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';
import VideoCall from '@material-ui/icons/VideoCall';

import HomeIcon from '@material-ui/icons/Home';
import Subscriptions from '@material-ui/icons/Subscriptions';
import Whatshot from '@material-ui/icons/Whatshot';

import VideoLibrary from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History';

import AddCircle from '@material-ui/icons/AddCircle';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import TheatersIcon from '@material-ui/icons/Theaters';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import SettingsInputAntennaIcon from '@material-ui/icons/SettingsInputAntenna';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import PhonelinkRingIcon from '@material-ui/icons/PhonelinkRing';
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation';
import SettingsIcon from '@material-ui/icons/Settings';
import FlagIcon from '@material-ui/icons/Flag';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SettingsInputAntennaSharpIcon from '@material-ui/icons/SettingsInputAntennaSharp';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        backgroundColor: theme.palette.background.dark,
    },
    appBar: {
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1,
    },
    logo: {
        height: 28,
    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 250,
        borderRight: 'none',
        overflowX: "hidden",
    },
    menuIcon: {
        paddingRight: theme.spacing(5),
        paddingLeft: theme.spacing(6),
    },
    icons: {
        paddingRight: theme.spacing(5),
    },
    grow: {
        flexGrow: 1
    },
    listItemText: {
        fontSize: 14,
    },
    listItem : {
        paddingTop: 4,
        paddingBottom: 4,
    },
    listItemFooter : {
        fontSize: 12,
        fontWeight: 'bold',
        paddingLeft: theme.spacing(6),
        color: '#a9a9a9',
        margin: -5,
        cursor: "pointer",
    },
    listItemRightBox1 : {
        fontSize: 12,
        fontWeight: 'bold',
        paddingRight: 96,
        color: '#a9a9a9',
        margin: -5,
        cursor: "pointer",
    },
    listItemRightBox2 : {
        fontSize: 12,
        fontWeight: 'bold',
        paddingRight: 15,
        color: '#a9a9a9',
        margin: -5,
        cursor: "pointer",
    },
    listItemRightBox3 : {
        fontSize: 12,
        fontWeight: 'bold',
        paddingRight: 70,
        color: '#a9a9a9',
        margin: -5,
        cursor: "pointer",
    },
    lastText: {
        
        fontSize: 11,
        fontWeight: 'bold',
        color: '#878787',
        paddingLeft: theme.spacing(5),
        paddingTop: 35,
        paddingBottom: 4,
    },
    subheader: {
        textTransform: "uppercase",
    }
  }));

const videos = [
    {
        id: 1,
        title:
        'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
        channel: 'Lucas Nhimi',
        views: '11 mi de visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb1.png',
    },
    {
        id: 2,
        title:
        'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
        channel: 'Lucas Nhimi',
        views: '957 mil visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb2.png',
    },
    {
        id: 3,
        title:
        'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
        channel: 'Lucas Nhimi',
        views: '106 mil visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb3.png',
    },
    {
        id: 4,
        title:
        'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
        channel: 'Lucas Nhimi',
        views: '5,6 mi de visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb4.png',
    },
    {
        id: 5,
        title:
        'EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26',
        channel: 'Lucas Nhimi',
        views: '2,2 mi de visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb5.png',
    },
    {
        id: 6,
        title: 'COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01',
        channel: 'Lucas Nhimi',
        views: '233 mil visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb6.png',
    },
    {
        id: 7,
        title:
        'PRÉ-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01',
        channel: 'Lucas Nhimi',
        views: '118 mil visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb7.png',
    },
    {
        id: 8,
        title:
        'GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04',
        channel: 'Lucas Nhimi',
        views: '1,9 mi de visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb8.png',
    },
    {
        id: 9,
        title:
        'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
        channel: 'Lucas Nhimi',
        views: '7,9 mi de visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb4.png',
    },
    {
        id: 10,
        title:
        'EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26',
        channel: 'Lucas Nhimi',
        views: '2,4 mi de visualizações',
        date: 'há 2 semanas',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb5.png',
    },
    {
        id: 11,
        title: 'COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01',
        channel: 'Lucas Nhimi',
        views: '233 mil visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb6.png',
    },
    {
        id: 12,
        title:
        'PRÉ-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01',
        channel: 'Lucas Nhimi',
        views: '128 mil visualizações',
        date: 'há 2 semanas',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb7.png',
    },
    {
        id: 13,
        title:
        'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
        channel: 'Lucas Nhimi',
        views: '11 mi de visualizações',
        date: 'há 3 semanas',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb1.png',
    },
    {
        id: 14,
        title:
        'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
        channel: 'Lucas Nhimi',
        views: '960 mil visualizações',
        date: 'há 3 semanas',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb2.png',
    },
    {
        id: 15,
        title:
        'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #30',
        channel: 'Lucas Nhimi',
        views: '109 mil visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb3.png',
    },
    {
        id: 16,
        title:
        'CONTEXT API NO EDITOR DE POST | Criando um site de vendas com React.js e .NET Core #27',
        channel: 'Lucas Nhimi',
        views: '4,1 mi de visualizações',
        date: 'há 2 semanas',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb4.png',
    },    
];
  
function Home({ darkMode, setDarkMode}) {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <div className={classes.root}>
            <AppBar color="inherit" className={classes.appBar}>
                <Toolbar>
                    <IconButton 
                        edge="start" 
                        className={classes.menuIcon} 
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>  

                    <img 
                        src={ theme.palette.type === 'dark' ? '/images/branco.png' : '/images/preto.png' } 
                        alt="logo" className={classes.logo} 
                    />
                    <div className={classes.grow} /> 
                    <Switch 
                        value={darkMode} 
                        onChange={ () => setDarkMode(!darkMode)} 
                        className={classes.icons} 
                    />
                    <IconButton className={classes.icons}>
                        <VideoCall />
                    </IconButton>
                    <IconButton className={classes.icons}>
                        <Apps />
                    </IconButton>
                    <IconButton className={classes.icons}>
                        <MoreVert />
                    </IconButton>
                    
                      
                    <Button 
                        startIcon={<AccountCircle />} 
                        variant="outlined" 
                        color="secondary"
                    >
                        Fazer Login
                    </Button>
                </Toolbar>
            </AppBar>
            <Box display='flex'>     
                <Hidden mdDown>
                    <Drawer
                        className={classes.drawer}
                        variant="permanent"
                        classes={{
                        paper: classes.drawerPaper,
                        }}
                    >
                        <Toolbar />
                        <div className={classes.drawerContainer}>
                            <List>                       
                                <ListItem button classes={{root: classes.listItem}}>
                                    <ListItemIcon>{<HomeIcon />}</ListItemIcon> 
                                    <ListItemText classes={{
                                        primary: classes.listItemText
                                    }} 
                                    primary={'Início'} 
                                />
                                </ListItem>     
                                <ListItem button classes={{root: classes.listItem}}>
                                    <ListItemIcon>{<Whatshot />}</ListItemIcon> 
                                    <ListItemText classes={{
                                        primary: classes.listItemText
                                    }} 
                                    primary={'Em Alta'} 
                                />
                                </ListItem>    
                                <ListItem button classes={{root: classes.listItem}}>
                                    <ListItemIcon>{<Subscriptions />}</ListItemIcon> 
                                    <ListItemText classes={{
                                        primary: classes.listItemText
                                    }} 
                                    primary={'Inscrições'} />
                                </ListItem>                      
                            </List>
                            <Divider />
                            <List>
                                <ListItem button classes={{root: classes.listItem}}>
                                    <ListItemIcon>
                                        <VideoLibrary />
                                    </ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.listItemText
                                    }} 
                                    primary={'Biblioteca'} />      
                                </ListItem>

                                <ListItem button classes={{root: classes.listItem}}>
                                    <ListItemIcon>
                                        <History />
                                    </ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.listItemText
                                    }} 
                                    primary={'Histórico'} />      
                                </ListItem>
                            </List>
                            <Divider />
                            <Box p={7}>
                                <Typography variant='body2'>
                                    Faça login para curtir vídeos, comentar e se inscrever.
                                </Typography>
                                <Box mt={2}>
                                    <Button
                                        variant='outlined'
                                        color='secondary'
                                        startIcon={<AccountCircle />}
                                    >
                                        Fazer Login
                                    </Button>                                
                                </Box>
                            </Box>
                            <Divider />
                            <List
                                component='nav'
                                aria-labelledby='nested-list-subheader'
                                subheader={
                                    <ListSubheader
                                        component='div'
                                        id='nested-list-subheader'
                                        className={classes.subheader}
                                    >
                                        O Melhor do youtube
                                    </ListSubheader>
                            }
                            >
                            <ListItem button classes={{ root: classes.listItem }}>
                                <ListItemIcon>
                                    <MusicNoteIcon />
                                </ListItemIcon>
                                <ListItemText
                                    classes={{
                                        primary: classes.listItemText,
                                    }}
                                    primary={'Música'}
                                />
                            </ListItem>
                            <ListItem button classes={{ root: classes.listItem }}>
                                <ListItemIcon>
                                    <SportsSoccerIcon />
                                </ListItemIcon>
                                <ListItemText
                                    classes={{
                                        primary: classes.listItemText,
                                    }}
                                    primary={'Esportes'}
                                />
                            </ListItem>
                            <ListItem button classes={{ root: classes.listItem }}>
                            <ListItemIcon>
                                <SportsEsportsIcon />
                            </ListItemIcon>
                                <ListItemText
                                    classes={{
                                        primary: classes.listItemText,
                                    }}
                                    primary={'Jogos'}
                                />
                            </ListItem>
                            <ListItem button classes={{ root: classes.listItem }}>
                                <ListItemIcon>
                                    <TheatersIcon />
                                </ListItemIcon>
                                <ListItemText
                                    classes={{
                                        primary: classes.listItemText,
                                    }}
                                    primary={'Filmes'}
                                />
                            </ListItem>
                            <ListItem button classes={{ root: classes.listItem }}>
                                <ListItemIcon>
                                    <InsertInvitationIcon />
                                </ListItemIcon>
                                <ListItemText
                                    classes={{
                                        primary: classes.listItemText,
                                    }}
                                    primary={'Notícias'}
                                />
                            </ListItem>
                            <ListItem button classes={{ root: classes.listItem }}>
                                <ListItemIcon>
                                    <SettingsInputAntennaIcon />
                                </ListItemIcon>
                                <ListItemText
                                    classes={{
                                        primary: classes.listItemText,
                                    }}
                                    primary={'Ao vivo'}
                                />
                            </ListItem>
                            <ListItem button classes={{ root: classes.listItem }}>
                                <ListItemIcon>
                                    <EmojiObjectsIcon />
                                </ListItemIcon>
                                <ListItemText
                                    classes={{
                                        primary: classes.listItemText,
                                    }}
                                    primary={'Aprender'}
                                />
                            </ListItem>
                            <ListItem button classes={{ root: classes.listItem }}>
                                <ListItemIcon>
                                    <PhonelinkRingIcon />
                                </ListItemIcon>
                                <ListItemText
                                    classes={{
                                        primary: classes.listItemText,
                                    }}
                                    primary={'Vídeos do Momento'}
                                />
                            </ListItem>
                            <ListItem button classes={{ root: classes.listItem }}>
                                <ListItemIcon>
                                <ThreeDRotationIcon />
                                </ListItemIcon>
                                <ListItemText
                                    classes={{
                                        primary: classes.listItemText,
                                    }}
                                    primary={'Vídeos em 360°'}
                                />
                            </ListItem>
                            
                        </List>
                        <Divider />
                        <List>                           
                            <ListItem button classes={{ root: classes.listItem }}>
                                <ListItemIcon>
                                    <AddCircle />
                                </ListItemIcon>
                                <ListItemText
                                    classes={{
                                        primary: classes.listItemText,
                                    }}
                                    primary={'Procurar canais'}
                                />
                            </ListItem>                           
                        </List>
                        <Divider/>
                        <List
                                component='nav'
                                aria-labelledby='nested-list-subheader'
                                subheader={
                                    <ListSubheader>
                                        MAIS DO YOUTUBE
                                    </ListSubheader>
                            }
                            >
                            <ListItem button classes={{ root: classes.listItem }}>
                                <ListItemIcon>
                                    <YouTubeIcon />
                                </ListItemIcon>
                                <ListItemText
                                    classes={{
                                        primary: classes.listItemText,
                                    }}
                                    primary={'Youtube Premium'}
                                />
                            </ListItem>
                            <ListItem button classes={{ root: classes.listItem }}>
                                <ListItemIcon>
                                    <SettingsInputAntennaSharpIcon />
                                </ListItemIcon>
                                <ListItemText
                                    classes={{
                                        primary: classes.listItemText,
                                    }}
                                    primary={'Ao vivo'}
                                />
                            </ListItem>                                                                       
                        </List>
                        <Divider />
                        <List>                           
                            <ListItem button classes={{ root: classes.listItem }}>
                                <ListItemIcon>
                                    <SettingsIcon />
                                </ListItemIcon>
                                <ListItemText
                                    classes={{
                                        primary: classes.listItemText,
                                    }}
                                    primary={'Configurações'}
                                />
                            </ListItem>
                            <ListItem button classes={{ root: classes.listItem }}>
                                <ListItemIcon>
                                    <FlagIcon />
                                </ListItemIcon>
                                <ListItemText
                                    classes={{
                                        primary: classes.listItemText,
                                    }}
                                    primary={'Histórico de denúncias'}
                                />
                            </ListItem>      
                            <ListItem button classes={{ root: classes.listItem }}>
                                <ListItemIcon>
                                    <HelpIcon />
                                </ListItemIcon>
                                <ListItemText
                                    classes={{
                                        primary: classes.listItemText,
                                    }}
                                    primary={'Ajuda'}
                                />
                            </ListItem>      
                            <ListItem button classes={{ root: classes.listItem }}>
                                <ListItemIcon>
                                    <FeedbackIcon />
                                </ListItemIcon>
                                <ListItemText
                                    classes={{
                                        primary: classes.listItemText,
                                    }}
                                    primary={'Enviar feedback'}
                                />
                            </ListItem>                                 
                        </List>
                        <Divider/>
                            <List>    
                                <Box display="flex" paddingTop={4}>
                                    <ListItemText 
                                        classes={{
                                            primary: classes.listItemFooter,
                                        }}
                                        primary={'Sobre'}
                                    />
                                    <ListItemText
                                        classes={{
                                            primary: classes.listItemRightBox1, classes,
                                        }}
                                        primary={'Imprensa'}
                                    />                                  
                                </Box>                            
                                <ListItemText
                                    classes={{
                                        primary: classes.listItemFooter,
                                    }}
                                    primary={'Direitos Autorais'}
                                />   
                                <ListItemText
                                    classes={{
                                        primary: classes.listItemFooter,
                                    }}
                                    primary={'Entre em Contato'}
                                />   
                                <ListItemText
                                    classes={{
                                        primary: classes.listItemFooter,
                                    }}
                                    primary={'Criadores de conteúdo'}
                                />   
                                <Box display="flex">
                                    <ListItemText
                                        classes={{
                                            primary: classes.listItemFooter,
                                        }}
                                        primary={'Publicidade'}
                                    />
                                    <ListItemText
                                        classes={{
                                            primary: classes.listItemRightBox2,
                                        }}
                                        primary={'Desenvolvedores'}
                                    />  
                                </Box>    
                            </List> 
                            <List>    
                                <Box display="flex">
                                    <ListItemText
                                        classes={{
                                            primary: classes.listItemFooter,
                                        }}
                                        primary={'Termos'}
                                    />
                                    <ListItemText
                                        classes={{
                                            primary: classes.listItemRightBox3, classes,
                                        }}
                                        primary={'Privacidade'}
                                    />                                  
                                </Box>                            
                                <ListItemText
                                    classes={{
                                        primary: classes.listItemFooter,
                                    }}
                                    primary={'Política e Segurança'}
                                />   
                                <ListItemText
                                    classes={{
                                        primary: classes.listItemFooter,
                                    }}
                                    primary={'Como Funciona o YouTube'}
                                />   
                                <ListItemText
                                    classes={{
                                        primary: classes.listItemFooter,
                                    }}
                                    primary={'Testar os novos recursos'}
                                />   
                                <ListItemText
                                    classes={{
                                        primary: classes.lastText,
                                    }}
                                    primary={'© 2020 Google LLC'}
                                />   
                            </List>                           
                        </div>
                    </Drawer>
                </Hidden>     
            
                <Box p={8}>
                <Toolbar />
                    <Typography 
                        variant='h5'
                        color='textPrimary'
                        style={{ fontWeight: 600 }}
                    >
                        Recomendados
                    </Typography>        
                    <Grid container spacing={4}>
                        {
                            videos.map((item, index) => (
                                <Grid item lg={3} md={4} sm={6} xs={12}>
                                    <Box>
                                        <img
                                            style={{ width: '100%' }}
                                            alt={item.title}
                                            src={item.thumb}
                                        />
                                        <Box>
                                            <Typography
                                                style={{ fontWeight: 600 }}
                                                gutterBottom
                                                variant='body1'
                                                color='textPrimary'
                                            >
                                                {item.title}
                                            </Typography>
                                            <Typography
                                                display='block'
                                                variant='body2'
                                                color='textSecondary'
                                            >
                                                {item.channel}
                                            </Typography>
                                            <Typography variant='body2' color='textSecondary'>
                                                {`${item.views} • ${item.date}`}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))
                        }
                                                    
                    </Grid>        
                </Box>
            </Box>
        </div>
    );
}

export default Home;
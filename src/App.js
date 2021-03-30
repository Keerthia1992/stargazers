import TopicContainer from './components/topic/TopicsContainer';
import {
    AppBar,
    Toolbar,
    Typography,
    Container,
    makeStyles,
    MuiThemeProvider,
    CssBaseline,
} from '@material-ui/core';
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    appData: {
        maxWidth: 1200,
        padding: theme.spacing(2),
    },
}));

const theme = createMuiTheme();

function App() {
    const classes = useStyles();
    return (
        <main>
            <CssBaseline />
            <MuiThemeProvider theme={theme}>
                <AppBar>
                    <Toolbar>
                        <Typography variant="h5">
                            Git Topics Search App
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Toolbar />
                <Container className={classes.appData}>
                    <TopicContainer />
                </Container>
            </MuiThemeProvider>
        </main>
    );
}

export default App;

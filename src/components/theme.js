import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: grey[800],
        }
    },
    typography: {
        // Tell Material-UI what's the font-size on the html element is.
        htmlFontSize: 10,
    },
});

export default theme;
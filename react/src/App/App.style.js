import { makeStyles } from '@material-ui/core/styles'

const Styles = makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
    borderThing: {
        border: '1px solid red',
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    main: {
        marginBottom: theme.spacing(2),
        width: '100%'
    },
    footer: {
        padding: theme.spacing(2, 2),
        marginTop: 'auto',
        width: '100%',
        background: theme.palette.primary.main,
        color: '#fff',
        display: 'flex'
    },
}));

export default Styles;
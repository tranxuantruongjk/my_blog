import { makeStyles } from 'tss-react/mui';

export default makeStyles()((theme) => {
    return {
        fab: {
            position: 'fixed',
            bottom: theme.spacing(2),
            right: theme.spacing(2),
        }
    }
})
import { makeStyles } from 'tss-react/mui';

export default makeStyles()((theme) => {
    return {
        container: {
            backgroundColor: theme.palette.primary.main,
            color: 'white',
            marginBottom: 20,
            fontWeight: 'lighter',
            padding: '5px 0',
        }
    }
})
import { AppBar, Button, Toolbar, Typography } from '@mui/material'


const AppHeader = () => {
    return (
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Tree app
            </Typography>
            <Button color="inherit">Guest</Button>
            </Toolbar>
        </AppBar>
    )
}

export default AppHeader
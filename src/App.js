import React, {useState} from 'react'
import { Grid, Container, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import image from './assets/image.jpg'


const useStyles =makeStyles(theme => ({
  root: {
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh'
    },
    container: {
      opacity: '0.8',
      height: '60%',
      marginTop: theme.spacing(10),
      [theme.breakpoints.down(400 + theme.spacing(2)+2)]:{
        marginTop: 0,
        width: '100%',
        height: '100%'
      }
    },
    div: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    avatar:{
      marginTop: theme.spacing(1),
      backgroundColor: theme.palette.primary.main
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1)
    },
    button: {
      margin: theme.spacing(3, 0, 2)
    }
}))

export const App = () => {
  const [body, setBody] = useState({nikname: '', contrasena: ''})

  const classes = useStyles()

  return (
    
    <Grid container component='main' className={classes.root}>
      <Container component={Paper} elevation={5} maxWidth='xs' className={classes.container}>
      <div className={classes.div}>
        <Avatar className={classes.avatar}>
          
        </Avatar>
          <Typography component='h1' variant='h5' color='yellow'>HARD WORK</Typography>
            <form className={classes.form}>
              <TextField
                  fullWidth
                  autoFocus
                  color='primary'
                  margin='normal'
                  variant='outlined'
                  label='Correo'
                  name='nikname'
                  value={body.nikname}
              />
               <TextField
                  fullWidth
                  type='password'
                  color='primary'
                  margin='normal'
                  variant='outlined'
                  label='Contraseña'
                  value={body.contrasena}
              />
              <Button
              fullWidth
              variant='contained'
              color='secondary'
              className={classes.button}
              >
                Ingresar
              </Button>
            </form>
        </div>
      </Container>
    </Grid>
  )
}

export default App
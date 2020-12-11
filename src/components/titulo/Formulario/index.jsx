import "./index.css";
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function Formulario() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div class="form">
        <div class="titu">rellene los campos</div>
        <div class="nombre">  
        <TextField
          required
          id="outlined-required"
          label="Nome"
          defaultValue=""
          variant="outlined"
        />
        </div>
        <div class="apellido">
         <TextField
          required
          id="outlined-required"
          label="Sobrenome"
          defaultValue=""
          variant="outlined"
        />
        </div>
        <div class="form-control">
         <label for="mi-campo">Email</label>
         <input  class="vacio" id="mi-campo" aria-describedby="ayuda" />
        </div>
        <div class="edad">
        <TextField
          id="outlined-number"
          label="Idade"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />   
        </div>
        <Button onClick={() => { alert('ingreso correctamente') }}>ingrese</Button>
      </div>
    </form>
  );
}

export default Formulario;
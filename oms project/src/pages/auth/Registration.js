import { TextField,Grid, FormControlLabel, Checkbox, Button, Box, Alert, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '../../services/userAuthApi'
import { storeToken } from '../../services/LocalStorageService';
const Registration = () => {
  const [server_error, setServerError] = useState({})
  const navigate = useNavigate();
  const [registerUser, { isLoading }] = useRegisterUserMutation()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      username: data.get('username'),
      email: data.get('email'),
      mobile: data.get('mobile'),
      password: data.get('password'),
      password2: data.get('password2'),
      tc: data.get('tc'),
    }
    const res = await registerUser(actualData)
    if (res.error) {
      // console.log(typeof (res.error.data.errors))
      // console.log(res.error.data.errors)
      setServerError(res.error.data.errors)
    }
    if (res.data) {
      console.log(typeof (res.data))
      console.log(res.data)
      storeToken(res.data.token)
      navigate('/dashboard')
    }
  }
  return <>
     <Grid container justifyContent='center' >
      <Grid item sm={6} xs={12} >
    <Box  component='form' noValidate sx={{ mt: 1 }} id='registration-form' onSubmit={handleSubmit}>
      <TextField margin='normal' required fullWidth id='username' name='username' label='username' />
      {server_error.username ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.username[0]}</Typography> : ""}
      <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
      {server_error.email ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.email[0]}</Typography> : ""}
      <TextField margin='normal' required fullWidth id='mobile' name='mobile' label='mobile' />
      {server_error.mobile ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.mobile[0]}</Typography> : ""}
      <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' />
      {server_error.password ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.password[0]}</Typography> : ""}
      <TextField margin='normal' required fullWidth id='password2' name='password2' label='Confirm Password' type='password' />
      {server_error.password2 ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.password2[0]}</Typography> : ""}
      <FormControlLabel control={<Checkbox value={true} color="primary" name="tc" id="tc" />} label="I agree to term and condition." />
      {server_error.tc ? <span style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.tc[0]}</span> : ""}
      <Box textAlign='center'>
        <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Join</Button>
      </Box>
      {server_error.non_field_errors ? <Alert severity='error'>{server_error.non_field_errors[0]}</Alert> : ''}
    </Box>
    </Grid>
    </Grid>
  </>;
};
export default Registration;

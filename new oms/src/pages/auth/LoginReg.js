import { Grid, Card, Tabs, Tab, Box } from '@mui/material';
import { useState } from 'react';
import logo from '../../images/logo.jpg'
import Registration from './Registration';
import Loginwithphonenumber from './Loginwithphonenumber';
import UserLogin from './UserLogin';


const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div role='tabpanel' hidden={value !== index}>
      {
        value === index && (
          <Box>{children}</Box>
        )
      }
    </div>
  )
}
const LoginReg = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  return <>
    <Grid container sx={{ height: '91.9vh' }}>
      <Grid item lg={13}>
      
        <Card sx={{ width: '100%', height: '100%', backgroundImage: `url(${logo})`,backgroundSize: 'cover',backgroundPosition: 'center',backgroundRepeat: 'no-repeat',opacity:"15" }}>
          <Box sx={{ mx: 3, height: 530 }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} textColor='secondary' indicatorColor='secondary' onChange={handleChange}>
                <Tab label='Login' sx={{ textTransform: 'none', fontWeight: 'bold',color:"white" }}></Tab>
                <Tab label='Registration' sx={{ textTransform: 'none', fontWeight: 'bold',color:"white" }}></Tab>
                <Tab label='Login with Number ' sx={{ textTransform: 'none', fontWeight: 'bold',color:"white" }}></Tab>
              </Tabs>
            </Box>
            <Grid container justifyContent='center' >
      <Grid item sm={6} xs={12}  >
            <TabPanel value={value} index={0}>
              <UserLogin />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Registration />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Loginwithphonenumber />
            </TabPanel>
            </Grid>
            </Grid>
          </Box>
        </Card>
      </Grid>
    </Grid>
  </>;
};

export default LoginReg;

import React from 'react'
import {
    Box,
    Grid,
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    Avatar,
    Input,
    AppBar,
    Tabs,
    Tab,
  } from '@mui/material';
    import { useForm } from 'react-hook-form';

export const CraeteUserRegistartion = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
   
  const onSubmit = () => {
    // console.log(data);
};

  
  
    return (
      <Box className="container-fluid" sx={{ mt: 5 }}>
      <Grid container spacing={2}>
        {/* Main form section */}
        <Grid item lg={8}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div" textAlign="center" gutterBottom>
                User Registration
              </Typography>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Company Name and Avatar Inline */}
                <Grid container spacing={2} alignItems="center" mb={3}>
                  <Grid item xs={8}>
                    <TextField
                      label="User Name"
                      variant="outlined"
                      fullWidth
                      error={!!errors.userName}
                      helperText={errors.userName ? 'User Name is required' : ''}
                      {...register('userName', { required: true })}
                    />
                  </Grid>
                  <Grid item xs={2} textAlign="center">
                    <Box mb={3}>
                      <Avatar
                        alt="Avatar"
                        src="https://via.placeholder.com/80"
                        sx={{ width: 100, height: 100, objectFit: 'cover', margin: 'auto' }}
                      />
                    </Box>
                    <Input type="file" />
                  </Grid>
                </Grid>

                {/* Other form fields */}
                <Grid container spacing={2} mb={3}>
                  <Grid item sm={6}>
                    <TextField
                      label="Street"
                      variant="outlined"
                      fullWidth
                      error={!!errors.street}
                      helperText={errors.street ? 'Street is required' : ''}
                      {...register('street', { required: true })}
                    />
                  </Grid>
                  <Grid item sm={6}>
                    <TextField
                      label="Street 2"
                      variant="outlined"
                      fullWidth
                      {...register('street2')}
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={2} mb={3}>
                  <Grid item sm={4}>
                    <TextField
                      label="City"
                      variant="outlined"
                      fullWidth
                      error={!!errors.city}
                      helperText={errors.city ? 'City is required' : ''}
                      {...register('city', { required: true })}
                    />
                  </Grid>
                  <Grid item sm={4}>
                    <TextField
                      label="State"
                      variant="outlined"
                      fullWidth
                      error={!!errors.state}
                      helperText={errors.state ? 'State is required' : ''}
                      {...register('state', { required: true })}
                    />
                  </Grid>
                  <Grid item sm={4}>
                    <TextField
                      label="PIN"
                      variant="outlined"
                      fullWidth
                      error={!!errors.pin}
                      helperText={errors.pin ? 'Valid PIN is required' : ''}
                      {...register('pin', { required: true, pattern: /^[1-9][0-9]{5}$/ })}
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={2} mb={3}>
                  <Grid item sm={4}>
                    <TextField
                      label="GSTIN"
                      variant="outlined"
                      fullWidth
                      {...register('gstin')}
                    />
                  </Grid>
                  <Grid item sm={4}>
                    <TextField
                      label="PAN NO"
                      variant="outlined"
                      fullWidth
                      {...register('pan')}
                    />
                  </Grid>
                  <Grid item sm={4}>
                    <TextField
                      label="TAN NO"
                      variant="outlined"
                      fullWidth
                      {...register('tan')}
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={2} mb={3}>
                  <Grid item sm={6}>
                    <TextField
                      label="Phone"
                      variant="outlined"
                      fullWidth
                      error={!!errors.phone}
                      helperText={errors.phone ? 'Phone number is required' : ''}
                      {...register('phone', { required: true })}
                    />
                  </Grid>
                  <Grid item sm={6}>
                    <TextField
                      label="Mobile"
                      variant="outlined"
                      fullWidth
                      error={!!errors.mobile}
                      helperText={errors.mobile ? 'Valid Mobile number is required' : ''}
                      {...register('mobile', { required: true, pattern: /^[6-9]\d{9}$/ })}
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={2} mb={3}>
                  <Grid item xs={12}>
                    <TextField
                      label="Email"
                      variant="outlined"
                      fullWidth
                      error={!!errors.email}
                      helperText={errors.email ? 'Valid Email is required' : ''}
                      {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })}
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={2} mb={3}>
                  <Grid item xs={12}>
                    <TextField
                      label="Password"
                      type="password"
                      variant="outlined"
                      fullWidth
                      error={!!errors.password}
                      helperText={errors.password ? 'Password is required' : ''}
                      {...register('password', { required: true })}
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={2} mb={3}>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                      Save
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>

          {/* Navigation and additional sections */}
          <AppBar position="static" sx={{ mt: 4 }}>
            <Tabs centered>
              <Tab label="Contact Detail" />
              <Tab label="Bank Details" />
              <Tab label="Internal Notes" />
            </Tabs>
          </AppBar>

          {/* Contact Detail Section */}
          <Card sx={{ mt: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Contact Detail
              </Typography>
              <Grid container spacing={2} mb={3}>
                <Grid item sm={3}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    {...register('contactName')}
                  />
                </Grid>
                <Grid item sm={3}>
                  <TextField
                    label="Mobile No."
                    variant="outlined"
                    fullWidth
                    {...register('contactMobile')}
                  />
                </Grid>
                <Grid item sm={3}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    {...register('contactEmail')}
                  />
                </Grid>
                <Grid item sm={3}>
                  <TextField
                    label="Role"
                    variant="outlined"
                    fullWidth
                    {...register('contactRole')}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Chat section */}
        <Grid item lg={4} sx={{ display: 'flex', flexDirection: 'column' }}>
          <Card sx={{ flexGrow: 1 }}>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Chat Section
              </Typography>
              <Box sx={{ height: 300, overflowY: 'scroll' }}>
                {/* Chat messages */}
                <Box sx={{ display: 'flex', mb: 2 }}>
                  <Avatar
                    alt="User 1"
                    src="https://via.placeholder.com/40"
                    sx={{ width: 40, height: 40, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="subtitle2">User 1</Typography>
                    <Typography variant="body2">Hello! How are you?</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', mb: 2 }}>
                  <Avatar
                    alt="User 2"
                    src="https://via.placeholder.com/40"
                    sx={{ width: 40, height: 40, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="subtitle2">User 2</Typography>
                    <Typography variant="body2">I'm good, thanks! How about you?</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', mb: 2 }}>
                  <Avatar
                    alt="User 1"
                    src="https://via.placeholder.com/40"
                    sx={{ width: 40, height: 40, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="subtitle2">User 1</Typography>
                    <Typography variant="body2">I'm doing well. Thanks for asking!</Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', mt: 3 }}>
                <TextField fullWidth placeholder="Type a message..." variant="outlined" />
                <Button variant="contained" color="primary" sx={{ ml: 1 }}>
                  Send
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
    );
}

 

 
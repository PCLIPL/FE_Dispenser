import React, { useState } from "react";
import {
  Grid,
  TextField,
  Typography,
  Button,
  Card,
  CardContent,
  Box,
  Avatar,
  Container,
} from "@mui/material";

interface Item {
  itemName: string;
  quantity: number;
  unitPrice: string;
  total: string;
}

interface FormData {
  companyName: string;
  date: string;
  firstName: string;
  lastName: string;
  businessName: string;
  phoneNumber: string;
  emailAddress: string;
  shippingAddress: {
    firstName: string;
    lastName: string;
    businessName: string;
    email: string;
    streetAddress: string;
    streetAddressLine2: string;
    city: string;
    state: string;
    zipCode: string;
  };
}

export const CreateSales = () => {
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    date: "",
    firstName: "",
    lastName: "",
    businessName: "",
    phoneNumber: "",
    emailAddress: "",
    shippingAddress: {
      firstName: "",
      lastName: "",
      businessName: "",
      email: "",
      streetAddress: "",
      streetAddressLine2: "",
      city: "",
      state: "",
      zipCode: "",
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field?: keyof FormData["shippingAddress"]
  ) => {
    const { name, value } = e.target;
    if (field) {
      setFormData((prevState) => ({
        ...prevState,
        shippingAddress: {
          ...prevState.shippingAddress,
          [field]: value,
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const [messages, setMessages] = useState<{ user: string; text: string }[]>(
    []
  );
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { user: "User", text: newMessage }]);
      setNewMessage("");
    }
  };

  return (
    <Container maxWidth={false} sx={{ padding: 0 }}>
      <Grid container spacing={2}>
        <Grid item lg={8} md={7} sm={12}>
          <Card sx={{ padding: 3, backgroundColor: '', color: '' }}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Sales Order Form
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Company Name"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    variant="outlined"
                    required
                    
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    variant="outlined"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                      
                    }}
                    required
                    
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6" gutterBottom>
                    Customer/Account Information
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    variant="outlined"
                    required
                    
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    variant="outlined"
                    required
                    
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Business Name"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    variant="outlined"
                    required
                    
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    variant="outlined"
                    type="tel"
                    required
                    
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    variant="outlined"
                    type="email"
                    required
                    
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6" gutterBottom>
                    Shipping Address (if different from above)
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    name="shippingFirstName"
                    value={formData.shippingAddress.firstName}
                    onChange={(e) => handleChange(e, "firstName")}
                    variant="outlined"
                    
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    name="shippingLastName"
                    value={formData.shippingAddress.lastName}
                    onChange={(e) => handleChange(e, "lastName")}
                    variant="outlined"
                    
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Business Name"
                    name="shippingBusinessName"
                    value={formData.shippingAddress.businessName}
                    onChange={(e) => handleChange(e, "businessName")}
                    variant="outlined"
                    
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="shippingEmail"
                    value={formData.shippingAddress.email}
                    onChange={(e) => handleChange(e, "email")}
                    variant="outlined"
                    type="email"
                    
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Street Address"
                    name="shippingStreetAddress"
                    value={formData.shippingAddress.streetAddress}
                    onChange={(e) => handleChange(e, "streetAddress")}
                    variant="outlined"
                    
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Street Address Line 2"
                    name="shippingStreetAddressLine2"
                    value={formData.shippingAddress.streetAddressLine2}
                    onChange={(e) => handleChange(e, "streetAddressLine2")}
                    variant="outlined"
                    
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="City"
                    name="shippingCity"
                    value={formData.shippingAddress.city}
                    onChange={(e) => handleChange(e, "city")}
                    variant="outlined"
                    
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="State"
                    name="shippingState"
                    value={formData.shippingAddress.state}
                    onChange={(e) => handleChange(e, "state")}
                    variant="outlined"
                    
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Zip Code"
                    name="shippingZipCode"
                    value={formData.shippingAddress.zipCode}
                    onChange={(e) => handleChange(e, "zipCode")}
                    variant="outlined"
                    InputLabelProps={{
                      
                    }}
                    
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={4} md={5} sm={12}>
          <Card sx={{ height: '50%', padding: 3, backgroundColor: '', color: '' }}>
            <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h6" gutterBottom>
                Chat Section
              </Typography>
              <Box sx={{ flexGrow: 1, overflowY: 'auto', padding: 2, backgroundColor: '', borderRadius: 2 }}>
                {messages.map((message, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: 1,
                      borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                    }}
                  >
                    <Avatar sx={{ marginRight: 2 }}>U</Avatar>
                    <Typography variant="body1">{message.text}</Typography>
                  </Box>
                ))}
              </Box>
              <Box sx={{ marginTop: 2, display: 'flex' }}>
                <TextField
                  fullWidth
                  label="Type your message..."
                  variant="outlined"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  
                  
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSend}
                  sx={{ marginLeft: 2 }}
                >
                  Send
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};


 
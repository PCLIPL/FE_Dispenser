import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Grid,
  MenuItem,
  Typography,
  Box,
  Card,
  CardContent,
  Avatar,
  InputAdornment,
  IconButton,
  
} from "@mui/material";



import { Add, Remove } from '@mui/icons-material'

export const CreatePurchaseForm = () => {
  const [formData, setFormData] = useState({
    buyerName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    itemName: "",
    itemDescription: "",
    quantity: 1,
    pricePerUnit: "",
    shippingMethod: "",
    shippingAddress: "",
    billingAddress: "",
    paymentMethod: "",
    cardNumber: "",
    cardExpiry: "",
    cardCVV: "",
  });

  const paymentMethods = [
    "Credit Card",
    "Debit Card",
    "PayPal",
    "Bank Transfer",
  ];
  const shippingMethods = [
    "Standard Shipping",
    "Express Shipping",
    "Overnight Shipping",
  ];

  const handleChange = () => {
    // const { name, value } = e.target;
    // setFormData({
    //   ...formData,
    //   [name]: value,
    // });
  };

  const handleSubmit = () => {
    // e.preventDefault();
    // console.log('Form Data:', formData);
    // Add your form submission logic here (e.g., API call)
  };

  const handleQuantityChange = (change: number) => {
    setFormData((prevState) => ({
      ...prevState,
      quantity: Math.max(1, prevState.quantity + change),
    }));
  };

  return (
    <Container maxWidth="lg" className="custom-scrollbar">
      <Grid container spacing={3}>
        <Grid item lg={8} md={7} sm={12}>
          <Typography variant="h4" gutterBottom>
            Purchase Form
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              {/* Buyer Information */}
              <Grid item xs={12}>
                <Typography variant="h6">Buyer Information</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Buyer Name"
                  name="buyerName"
                  value={formData.buyerName}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="State"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Zip Code"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
              </Grid>

              {/* Order Information */}
              <Grid item xs={12}>
                <Typography variant="h6">Order Information</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Item Name"
                  name="itemName"
                  value={formData.itemName}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Item Description"
                  name="itemDescription"
                  value={formData.itemDescription}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  fullWidth
                  label="Quantity"
                  name="quantity"
                  type="number"
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                  inputProps={{ min: 1 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton
                          onClick={() => handleQuantityChange(-1)}
                          disabled={formData.quantity <= 1}
                        >
                          <Remove />
                        </IconButton>
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => handleQuantityChange(1)}>
                          <Add />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  fullWidth
                  label="Price per Unit"
                  name="pricePerUnit"
                  type="number"
                  value={formData.pricePerUnit}
                  onChange={handleChange}
                  required
                  inputProps={{ min: 0 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  select
                  label="Shipping Method"
                  name="shippingMethod"
                  value={formData.shippingMethod}
                  onChange={handleChange}
                  required
                >
                  {shippingMethods.map((method) => (
                    <MenuItem key={method} value={method}>
                      {method}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Shipping Address"
                  name="shippingAddress"
                  value={formData.shippingAddress}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Billing Address"
                  name="billingAddress"
                  value={formData.billingAddress}
                  onChange={handleChange}
                  required
                />
              </Grid>

              {/* Payment Information */}
              <Grid item xs={12}>
                <Typography variant="h6">Payment Information</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  select
                  label="Payment Method"
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                  required
                >
                  {paymentMethods.map((method) => (
                    <MenuItem key={method} value={method}>
                      {method}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Card Number"
                  name="cardNumber"
                  type="text"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  required={
                    formData.paymentMethod === "Credit Card" ||
                    formData.paymentMethod === "Debit Card"
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Card Expiry"
                  name="cardExpiry"
                  type="text"
                  placeholder="MM/YY"
                  value={formData.cardExpiry}
                  onChange={handleChange}
                  required={
                    formData.paymentMethod === "Credit Card" ||
                    formData.paymentMethod === "Debit Card"
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Card CVV"
                  name="cardCVV"
                  type="password"
                  value={formData.cardCVV}
                  onChange={handleChange}
                  required={
                    formData.paymentMethod === "Credit Card" ||
                    formData.paymentMethod === "Debit Card"
                  }
                />
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>

        {/* Chat Section */}
        <Grid
          item
          lg={4}
          md={5}
          sm={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "sticky",
            top: 20,
            alignSelf: "flex-start",
          }}
        >
          <Card sx={{ flexGrow: 1 }}>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Chat Section
              </Typography>
              <Box sx={{ height: 300, overflowY: "scroll" }}>
                {/* Chat messages */}
                <Box sx={{ display: "flex", mb: 2 }}>
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
                <Box sx={{ display: "flex", mb: 2 }}>
                  <Avatar
                    alt="User 2"
                    src="https://via.placeholder.com/40"
                    sx={{ width: 40, height: 40, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="subtitle2">User 2</Typography>
                    <Typography variant="body2">
                      I'm good, thanks! How about you?
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", mb: 2 }}>
                  <Avatar
                    alt="User 1"
                    src="https://via.placeholder.com/40"
                    sx={{ width: 40, height: 40, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="subtitle2">User 1</Typography>
                    <Typography variant="body2">
                      I'm doing well. Thanks for asking!
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", mb: 2 }}>
                  <Avatar
                    alt="User 1"
                    src="https://via.placeholder.com/40"
                    sx={{ width: 40, height: 40, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="subtitle2">User 1</Typography>
                    <Typography variant="body2">
                      I'm doing well. Thanks for asking!
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", mb: 2 }}>
                  <Avatar
                    alt="User 1"
                    src="https://via.placeholder.com/40"
                    sx={{ width: 40, height: 40, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="subtitle2">User 1</Typography>
                    <Typography variant="body2">
                      I'm doing well. Thanks for asking!
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", mb: 2 }}>
                  <Avatar
                    alt="User 1"
                    src="https://via.placeholder.com/40"
                    sx={{ width: 40, height: 40, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="subtitle2">User 1</Typography>
                    <Typography variant="body2">
                      I'm doing well. Thanks for asking!
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ display: "flex", mt: 3 }}>
                <TextField
                  fullWidth
                  placeholder="Type a message..."
                  variant="outlined"
                />
                <Button variant="contained" color="primary" sx={{ ml: 1 }}>
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


import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  MenuItem,
  Box,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";

export const CreatePurchaseRfq = () => {
  const [formData, setFormData] = useState({
    supplierName: "",
    contactPerson: "",
    contactEmail: "",
    contactPhone: "",
    itemDescription: "",
    itemQuantity: "",
    itemUnit: "",
    requiredDate: "",
    deliveryTerms: "",
    paymentTerms: "",
    additionalNotes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("RFQ Form Data:", formData);
  };

  //   chat section

  const [messages, setMessages] = useState<{ user: string; text: string }[]>([
    { user: "User 1", text: "Hello! How are you?" },
    { user: "User 2", text: "I'm good, thanks! How about you?" },
    { user: "User 1", text: "I'm doing well. Thanks for asking!" },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { user: "User 1", text: newMessage }]);
      setNewMessage("");
    }
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          {/* Main RFQ Form Section */}
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Request for Quotation (RFQ) Form
              </Typography>

              <Grid container spacing={2}>
                {/* Supplier Name */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Supplier Name"
                    name="supplierName"
                    value={formData.supplierName}
                    onChange={handleChange}
                    required
                    variant="standard"
                  />
                </Grid>

                {/* Contact Person */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Contact Person"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    required
                    variant="standard"
                  />
                </Grid>

                {/* Contact Email */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Contact Email"
                    name="contactEmail"
                    type="email"
                    value={formData.contactEmail}
                    onChange={handleChange}
                    required
                    variant="standard"
                  />
                </Grid>

                {/* Contact Phone */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Contact Phone"
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleChange}
                    required
                    variant="standard"
                  />
                </Grid>

                {/* Item Description */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Item Description"
                    name="itemDescription"
                    multiline
                    rows={4}
                    value={formData.itemDescription}
                    onChange={handleChange}
                    required
                    variant="standard"
                  />
                </Grid>

                {/* Item Quantity */}
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <TextField
                      fullWidth
                      label="Item Quantity"
                      name="itemQuantity"
                      type="number"
                      value={formData.itemQuantity}
                      onChange={handleChange}
                      required
                      inputProps={{ min: 1 }}
                      variant="standard"
                    />
                    {/* <Button onClick={() => handleQuantityChange(1)}>+</Button>
                        <Button onClick={() => handleQuantityChange(-1)}>-</Button> */}
                  </Box>
                </Grid>

                {/* Item Unit */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Item Unit"
                    name="itemUnit"
                    select
                    value={formData.itemUnit}
                    onChange={handleChange}
                    required
                    variant="standard"
                  >
                    <MenuItem value="pcs">Pcs</MenuItem>
                    <MenuItem value="kg">Kg</MenuItem>
                    <MenuItem value="liters">Liters</MenuItem>
                    <MenuItem value="meters">Meters</MenuItem>
                    <MenuItem value="boxes">Boxes</MenuItem>
                  </TextField>
                </Grid>

                {/* Required Date */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Required Date"
                    name="requiredDate"
                    type="date"
                    value={formData.requiredDate}
                    onChange={handleChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    required
                    variant="standard"
                  />
                </Grid>

                {/* Delivery Terms */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Delivery Terms"
                    name="deliveryTerms"
                    value={formData.deliveryTerms}
                    onChange={handleChange}
                    required
                    variant="standard"
                  />
                </Grid>

                {/* Payment Terms */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Payment Terms"
                    name="paymentTerms"
                    value={formData.paymentTerms}
                    onChange={handleChange}
                    required
                    variant="standard"
                  />
                </Grid>

                {/* Additional Notes */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Additional Notes"
                    name="additionalNotes"
                    multiline
                    rows={4}
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    variant="standard"
                  />
                </Grid>

                {/* Submit Button */}
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleSubmit}
                  >
                    Submit RFQ
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
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
                {messages.map((message, index) => (
                  <Box key={index} sx={{ display: "flex", mb: 2 }}>
                    <Avatar
                      alt={message.user}
                      src="https://via.placeholder.com/40"
                      sx={{ width: 40, height: 40, mr: 2 }}
                    />
                    <Box>
                      <Typography variant="subtitle2">
                        {message.user}
                      </Typography>
                      <Typography variant="body2">{message.text}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
              <Box sx={{ display: "flex", mt: 3 }}>
                <TextField
                  fullWidth
                  placeholder="Type a message..."
                  variant="outlined"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ ml: 1 }}
                  onClick={handleSend}
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

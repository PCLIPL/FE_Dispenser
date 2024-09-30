import React, { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Typography,
  Box,
  Button,
  Paper,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";

interface Message {
  user: string;
  text: string;
}

export const CreateInvoice = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");

  const handleChatSend = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { user: "User", text: newMessage }]);
      setNewMessage("");
    }
  };

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h4" gutterBottom>
              New Invoice
            </Typography>
            <Box component="form">
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="SO Id" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Invoice Date"
                    type="datetime-local"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Customer Name" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Total Paid" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Billing Address" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Shipping Address"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">Order Line</Typography>
                  <Button variant="contained">Add a line</Button>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    label="Define your terms and conditions ..."
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body1">Untaxed Amount: 0.00 ₹</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body1" align="right">
                    Total: 0.00 ₹
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Button fullWidth variant="contained" color="primary">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
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
              <Box sx={{ height: 400, overflowY: "scroll" }}>
                {messages.map((message, index) => (
                  <Box key={index} sx={{ display: "flex", mb: 2 }}>
                    <Avatar
                      alt={message.user}
                      src="https://via.placeholder.com/40"
                      sx={{ width: 40, height: 40, mr: 2 }}
                    />
                    <Box>
                      <Typography variant="subtitle2">{message.user}</Typography>
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
                  onClick={handleChatSend}
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


 
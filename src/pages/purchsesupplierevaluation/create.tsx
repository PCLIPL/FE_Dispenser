import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Checkbox,
  FormControlLabel,
  Avatar,
  Box,
} from "@mui/material";

interface SupplierEvaluationData {
  supplierName: string;
  contactPerson: string;
  contactNumber: string;
  email: string;
  address: string;
  productsSupplied: string;
  deliveryTime: number;
  qualityRating: number;
  priceCompetitiveness: number;
  communication: number;
  reliability: number;
  comments: string;
  isApproved: boolean;
}

interface Message {
    user: string;
    text: string;
  }

export const CreatePuechaseSupplierEvolution = () => {
  const [formData, setFormData] = useState<SupplierEvaluationData>({
    supplierName: "",
    contactPerson: "",
    contactNumber: "",
    email: "",
    address: "",
    productsSupplied: "",
    deliveryTime: 0,
    qualityRating: 0,
    priceCompetitiveness: 0,
    communication: 0,
    reliability: 0,
    comments: "",
    isApproved: false,
  });

//   const [chatMessages, setChatMessages] = useState<string[]>([]);
//   const [chatInput, setChatInput] = useState<string>("");

const [messages, setMessages] = useState<Message[]>([
    { user: 'User 1', text: 'Hello! How are you?' },
    { user: 'User 2', text: 'I\'m good, thanks! How about you?' },
    { user: 'User 1', text: 'I\'m doing well. Thanks for asking!' },
    // Add more initial messages if needed
  ]);
  
  const [newMessage, setNewMessage] = useState('');

  const handleChatSend = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { user: 'User 1', text: newMessage }]);
      setNewMessage(''); // Clear the input field
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof SupplierEvaluationData
  ) => {
    // Type guard to determine the element type
    if (e.target.type === "checkbox") {
      const checkbox = e.target as HTMLInputElement; // Type assertion for HTMLInputElement
      setFormData({ ...formData, [field]: checkbox.checked });
    } else {
      setFormData({ ...formData, [field]: e.target.value });
    }
  };

  const handleSelectChange = (e: any, field: keyof SupplierEvaluationData) => {
    setFormData({ ...formData, [field]: e.target.value as number });
  };

//   const handleChatSend = () => {
//     setChatMessages([...chatMessages, chatInput]);
//     setChatInput("");
//   };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
  };

  return (
    <Grid container spacing={3}>
      <Grid item lg={8} md={7} sm={12}>
        <Card>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Supplier Evaluation Form
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Supplier Name"
                  value={formData.supplierName}
                  onChange={(e) => handleChange(e, "supplierName")}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Contact Person"
                  value={formData.contactPerson}
                  onChange={(e) => handleChange(e, "contactPerson")}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Contact Number"
                  value={formData.contactNumber}
                  onChange={(e) => handleChange(e, "contactNumber")}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email"
                  value={formData.email}
                  onChange={(e) => handleChange(e, "email")}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Address"
                  value={formData.address}
                  onChange={(e) => handleChange(e, "address")}
                  fullWidth
                  multiline
                  rows={2}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Products Supplied"
                  value={formData.productsSupplied}
                  onChange={(e) => handleChange(e, "productsSupplied")}
                  fullWidth
                  multiline
                  rows={2}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel>Delivery Time</InputLabel>
                  <Select
                    value={formData.deliveryTime}
                    onChange={(e) => handleSelectChange(e, "deliveryTime")}
                  >
                    {[1, 2, 3, 4, 5].map((value) => (
                      <MenuItem key={value} value={value}>
                        {value} -{" "}
                        {value === 1
                          ? "Very Fast"
                          : value === 5
                          ? "Very Slow"
                          : ""}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel>Quality Rating</InputLabel>
                  <Select
                    value={formData.qualityRating}
                    onChange={(e) => handleSelectChange(e, "qualityRating")}
                  >
                    {[1, 2, 3, 4, 5].map((value) => (
                      <MenuItem key={value} value={value}>
                        {value} -{" "}
                        {value === 1 ? "Poor" : value === 5 ? "Excellent" : ""}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel>Price Competitiveness</InputLabel>
                  <Select
                    value={formData.priceCompetitiveness}
                    onChange={(e) =>
                      handleSelectChange(e, "priceCompetitiveness")
                    }
                  >
                    {[1, 2, 3, 4, 5].map((value) => (
                      <MenuItem key={value} value={value}>
                        {value} -{" "}
                        {value === 1
                          ? "Very Expensive"
                          : value === 5
                          ? "Very Cheap"
                          : ""}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel>Communication</InputLabel>
                  <Select
                    value={formData.communication}
                    onChange={(e) => handleSelectChange(e, "communication")}
                  >
                    {[1, 2, 3, 4, 5].map((value) => (
                      <MenuItem key={value} value={value}>
                        {value} -{" "}
                        {value === 1
                          ? "Very Poor"
                          : value === 5
                          ? "Excellent"
                          : ""}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel>Reliability</InputLabel>
                  <Select
                    value={formData.reliability}
                    onChange={(e) => handleSelectChange(e, "reliability")}
                  >
                    {[1, 2, 3, 4, 5].map((value) => (
                      <MenuItem key={value} value={value}>
                        {value} -{" "}
                        {value === 1
                          ? "Very Unreliable"
                          : value === 5
                          ? "Very Reliable"
                          : ""}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Comments"
                  value={formData.comments}
                  onChange={(e) => handleChange(e, "comments")}
                  fullWidth
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.isApproved}
                      onChange={(e) => handleChange(e as any, "isApproved")}
                    />
                  }
                  label="Approved Supplier"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  Submit Evaluation
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
                  onClick={handleChatSend}
                >
                  Send
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
    </Grid>
  );
};

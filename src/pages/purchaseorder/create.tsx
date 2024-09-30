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
} from "@mui/material";

interface Item {
  itemName: string;
  quantity: number;
  unitPrice: string;
  total: string;
}

interface FormData {
  poNumber: string;
  supplierName: string;
  orderDate: string;
  deliveryDate: string;
  items: Item[];
  notes: string;
}

export const CreatePurhcaseOrder = () => {
  const [formData, setFormData] = useState<FormData>({
    poNumber: "",
    supplierName: "",
    orderDate: "",
    deliveryDate: "",
    items: [{ itemName: "", quantity: 1, unitPrice: "", total: "" }],
    notes: "",
  });

  

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index?: number,
    field?: keyof Item
  ) => {
    if (field !== undefined && index !== undefined) {
      setFormData((prevState) => {
        const newItems = [...prevState.items];
        newItems[index] = { ...newItems[index], [field]: e.target.value };
        return { ...prevState, items: newItems };
      });
    } else {
      const { name, value } = e.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleQuantityChange = (index: number, change: number) => {
    const newItems = [...formData.items];
    newItems[index].quantity = Math.max(1, newItems[index].quantity + change);
    setFormData({ ...formData, items: newItems });
  };

  const handleAddItem = () => {
    setFormData({
      ...formData,
      items: [
        ...formData.items,
        { itemName: "", quantity: 1, unitPrice: "", total: "" },
      ],
    });
  };

  const handleRemoveItem = (index : Number) => {
    setFormData((prevState) => {
      const newItems = prevState.items.filter((_, i) => i !== index);
      return { ...prevState, items: newItems };
    });
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
    <Grid container spacing={2}>
      <Grid item lg={8} md={7} sm={12}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Purchase Order Form
            </Typography>
            <TextField
              label="PO Number"
              name="poNumber"
              value={formData.poNumber}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Supplier Name"
              name="supplierName"
              value={formData.supplierName}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Order Date"
              name="orderDate"
              type="date"
              value={formData.orderDate}
              onChange={handleChange}
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Delivery Date"
              name="deliveryDate"
              type="date"
              value={formData.deliveryDate}
              onChange={handleChange}
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
            {formData.items.map((item, index) => (
              <Box
                key={index}
                sx={{ display: "flex", gap: 2, marginBottom: 2 }}
              >
                <TextField
                  label="Item Name"
                  value={item.itemName}
                  onChange={(e) => handleChange(e, index, "itemName")}
                  fullWidth
                />
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Button onClick={() => handleQuantityChange(index, -1)}>
                    -
                  </Button>
                  <TextField
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleChange(
                        e as React.ChangeEvent<HTMLInputElement>,
                        index,
                        "quantity"
                      )
                    }
                    sx={{ width: 70, textAlign: "center" }}
                  />
                  <Button onClick={() => handleQuantityChange(index, 1)}>
                    +
                  </Button>
                </Box>
                <TextField
                  label="Unit Price"
                  value={item.unitPrice}
                  onChange={(e) => handleChange(e, index, "unitPrice")}
                  fullWidth
                />
                <TextField
                  label="Total"
                  value={(Number(item.unitPrice) * item.quantity).toFixed(2)}
                  fullWidth
                  disabled
                />
              </Box>
            ))}
            <Button variant="contained" color="primary" onClick={handleAddItem}>
              Add Item
            </Button>
            {/* <Button
                    variant="contained"
                    color="secondary"
                    // onClick={() => handleRemoveItem(index)}
                    fullWidth
                  >
                    Remove
                  </Button> */}
            <TextField
              label="Notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              fullWidth
              margin="normal"
              multiline
              rows={4}
            />
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Submit
            </Button>
          </CardContent>
        </Card>
      </Grid>

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
                onClick={handleSend}
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


 
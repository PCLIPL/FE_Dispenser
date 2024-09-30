import React, { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  Checkbox,
  Select,
  MenuItem,
  Typography,
  Box,
} from '@mui/material';

export function CreateBugReport() {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { user: 'User 1', text: 'Hello! How are you?' },
    { user: 'User 2', text: "I'm good, thanks! How about you?" },
    { user: 'User 1', text: "I'm doing well. Thanks for asking!" },
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setChatMessages([...chatMessages, { user: 'You', text: message }]);
      setMessage('');
    }
  };

  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={4}>
        <Grid item lg={7} xs={12}>
          <Card variant="outlined">
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Button variant="contained" color="success">Mark As Processed</Button>
                <Box>
                  <Button>Processing</Button>
                  <Button>Processed</Button>
                  <Button color="success" variant="outlined">Solved</Button>
                </Box>
              </Box>

              <Typography variant="h5" component="h4" gutterBottom>
                New Support Ticket
              </Typography>

              <form>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Creator Name" variant="outlined" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth type="file" variant="outlined" InputLabelProps={{ shrink: true }} />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField fullWidth type="datetime-local" label="Date of Query" variant="outlined" InputLabelProps={{ shrink: true }} />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField fullWidth type="date" label="Last Date" variant="outlined" InputLabelProps={{ shrink: true }} />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField fullWidth type="date" label="Resolved Date" variant="outlined" InputLabelProps={{ shrink: true }} />
                  </Grid>
                  <Grid item xs={12}>
                    <Select fullWidth variant="outlined" defaultValue="">
                      <MenuItem value="Bug">Bug</MenuItem>
                      <MenuItem value="Feature Request">Feature Request</MenuItem>
                      <MenuItem value="General Query">General Query</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label="Query" multiline rows={4} variant="outlined" />
                  </Grid>
                </Grid>
              </form>

              <Typography variant="h6" component="h5" mt={3}>
                Troubleshooting Steps
              </Typography>

              <Box>
                <Typography variant="body1" gutterBottom>
                  Troubleshooting Steps To Follow
                </Typography>
                <Box id="editor" mb={3}></Box>
                <Box display="flex" alignItems="center">
                  <Typography variant="body2" component="h6" mr={2}>
                    Did you follow all the steps?
                  </Typography>
                  <Checkbox />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Chat section */}
        <Grid item lg={5} xs={12}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" component="div" textAlign="center" gutterBottom>
                Chat Section
              </Typography>
              <Box
                className="chat-window"
                flexGrow={1}
                mb={3}
                p={3}
                // border={1}
                // borderRadius={1}
                // borderColor="grey.300"
                sx={{ height: '350px', overflowY: 'auto' }}
              >
                {chatMessages.map((msg, index) => (
                  <Box key={index} display="flex" mb={2}>
                    <Box mr={2} sx={{ width: 40, height: 40, borderRadius: '50%', bgcolor: 'grey.300' }} />
                    <Box>
                      <Typography variant="body2" fontWeight="bold">
                        {msg.user}
                      </Typography>
                      <Typography variant="body2">{msg.text}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
              <Box display="flex">
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <Button variant="contained" color="primary" onClick={handleSendMessage}>
                  Send
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}



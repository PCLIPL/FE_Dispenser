import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
  Avatar,
  Tabs,
  Tab,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";

interface Message {
  user: string;
  text: string;
}

export const CreateConfiguration = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");

  // Flag Control

  const [gsmFlag, setGsmFlag] = useState<string>("ON");
  const [audioFlag, setAudioFlag] = useState<string>("ON");
  const [qualitySensorFlag, setQualitySensorFlag] = useState<string>("OFF");
  const [tankSensorFlag, setTankSensorFlag] = useState<string>("OFF");
  const [vehicleEntryFlag, setVehicleEntryFlag] = useState<string>("ON");
  const [emergencyDispenseFlag, setEmergencyDispenseFlag] =
    useState<string>("OFF");
  const [largeVolumeDispenseFlag, setLargeVolumeDispenseFlag] =
    useState<string>("OFF");

  //   Printer Prameters

  const [printCopy, setPrintCopy] = useState<string>("1");
  const [printHeader, setPrintHeader] = useState<string>("");
  const [printFooter, setPrintFooter] = useState<string>(
    "Thank you for visiting us."
  );

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleChatSend = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { user: "User", text: newMessage }]);
      setNewMessage("");
    }
  };

  const [maxPresetValue, setMaxPresetValue] = useState<string>("99,999.00");
  const [presetValues, setPresetValues] = useState({
    preset1Value: "100.00",
    preset1Unit: "Amount",
    preset2Value: "5.00",
    preset2Unit: "Volume",
    preset3Value: "200.00",
    preset3Unit: "Amount",
    preset4Value: "10.00",
    preset4Unit: "Volume",
    preset5Value: "20.00",
    preset5Unit: "Volume",
  });

  const handlePresetChange = (key: string, value: string) => {
    setPresetValues({ ...presetValues, [key]: value });
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container spacing={2}>
      {/* Form Section */}
      <Grid item lg={8} md={7} sm={12}>
        <Card>
          <CardContent>
            <Typography variant="h4" component="div" gutterBottom>
              Configuration
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Dispenser ID" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Pump Owner Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Company Name" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="State" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Machine Name" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="City" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Agent Name" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Phone Number" variant="outlined" />
              </Grid>
            </Grid>

            {/* Tabs for Parameters */}
            <Box sx={{ mt: 3 }}>
              <Tabs
                 value={activeTab}
                 onChange={handleTabChange}
                 variant={isSmallScreen || isMediumScreen ? "fullWidth" : "standard"}
                 orientation={isSmallScreen ? "vertical" : "horizontal"}
                 textColor="primary"
                 indicatorColor="primary"
                 sx={{
                     borderRight: isSmallScreen ? 1 : 0,
                     borderBottom: !isSmallScreen && !isMediumScreen ? 1 : 0,
                     borderColor: 'divider',
                 }}
              >
                <Tab label="General Parameters" />
                <Tab label="Flag Parameters" />
                <Tab label="Printer Parameters" />
                <Tab label="Tank Parameters" />
                <Tab label="PreSet Parameters" />
              </Tabs>

              {/* Tab Panels */}
              {activeTab === 0 && (
                <Box sx={{ mt: 2 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Boot Type"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Nozzle Out Time (Sec)"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Current Shift No."
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Fill out protection time (Sec)"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Normal cal factor"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Leakage Alarm Count (Pulse)"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Preset cal factor"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Flow Display delay (Ltr)"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Max Amt Value (Rs)"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="LV opening delay (Ltr)"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Max Liter Value (Ltr)"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="LV closing delay (Ltr)"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Minimum raise amount (Ltr)"
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                </Box>
              )}
              {activeTab === 1 && (
                <Box sx={{ mt: 2 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel>GSM Flag</InputLabel>
                        <Select
                          value={gsmFlag}
                          label="GSM Flag"
                          onChange={(e) => setGsmFlag(e.target.value as string)}
                        >
                          <MenuItem value="ON">ON</MenuItem>
                          <MenuItem value="OFF">OFF</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel>Vehicle Entry Flag</InputLabel>
                        <Select
                          value={vehicleEntryFlag}
                          label="Vehicle Entry Flag"
                          onChange={(e) =>
                            setVehicleEntryFlag(e.target.value as string)
                          }
                        >
                          <MenuItem value="ON">ON</MenuItem>
                          <MenuItem value="OFF">OFF</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel>Audio Flag</InputLabel>
                        <Select
                          value={audioFlag}
                          label="Audio Flag"
                          onChange={(e) =>
                            setAudioFlag(e.target.value as string)
                          }
                        >
                          <MenuItem value="ON">ON</MenuItem>
                          <MenuItem value="OFF">OFF</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel>Emergency Dispense Flag</InputLabel>
                        <Select
                          value={emergencyDispenseFlag}
                          label="Emergency Dispense Flag"
                          onChange={(e) =>
                            setEmergencyDispenseFlag(e.target.value as string)
                          }
                        >
                          <MenuItem value="ON">ON</MenuItem>
                          <MenuItem value="OFF">OFF</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel>Quality Sensor Flag</InputLabel>
                        <Select
                          value={qualitySensorFlag}
                          label="Quality Sensor Flag"
                          onChange={(e) =>
                            setQualitySensorFlag(e.target.value as string)
                          }
                        >
                          <MenuItem value="ON">ON</MenuItem>
                          <MenuItem value="OFF">OFF</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel>Large Volume Dispense Flag</InputLabel>
                        <Select
                          value={largeVolumeDispenseFlag}
                          label="Large Volume Dispense Flag"
                          onChange={(e) =>
                            setLargeVolumeDispenseFlag(e.target.value as string)
                          }
                        >
                          <MenuItem value="ON">ON</MenuItem>
                          <MenuItem value="OFF">OFF</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel>Tank Sensor Flag</InputLabel>
                        <Select
                          value={tankSensorFlag}
                          label="Tank Sensor Flag"
                          onChange={(e) =>
                            setTankSensorFlag(e.target.value as string)
                          }
                        >
                          <MenuItem value="ON">ON</MenuItem>
                          <MenuItem value="OFF">OFF</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Box>
              )}
              {activeTab === 2 && (
                <Box sx={{ mt: 2 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        label="Print Copy"
                        value={printCopy}
                        onChange={(e) => setPrintCopy(e.target.value)}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        label="Print Header"
                        value={printHeader}
                        onChange={(e) => setPrintHeader(e.target.value)}
                        multiline
                        rows={4}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        label="Print Footer"
                        value={printFooter}
                        onChange={(e) => setPrintFooter(e.target.value)}
                        multiline
                        rows={2}
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                </Box>
              )}
              {activeTab === 3 && (
                <Box sx={{ mt: 2 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="P.O. Level Tank Alert"
                        variant="outlined"
                        defaultValue="0"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Length (in mm)"
                        variant="outlined"
                        defaultValue="0.00"
                      />
                    </Grid>
                    {/* <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Alert (%)"
                        variant="outlined"
                        defaultValue="0"
                      />
                    </Grid> */}
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Breadth/Width (in mm)"
                        variant="outlined"
                        defaultValue="0.00"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Full Tank Cal Factor"
                        variant="outlined"
                        defaultValue="585"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Height (in mm)"
                        variant="outlined"
                        defaultValue="0.00"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Empty Tank Cal Factor"
                        variant="outlined"
                        defaultValue="2990"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Full Tank Volume (in liter)"
                        variant="outlined"
                        defaultValue="1000"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Tank Low Level (%)"
                        variant="outlined"
                        defaultValue="0"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Tank High Level (%)"
                        variant="outlined"
                        defaultValue="100"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel>Tanker Shape</InputLabel>
                        <Select label="Tanker Shape" defaultValue="Rectangle">
                          <MenuItem value="Rectangle">Rectangle</MenuItem>
                          <MenuItem value="Horizontal Cylinder">
                            Horizontal Cylinder
                          </MenuItem>
                          <MenuItem value="Vertical Cylinder">
                            Vertical Cylinder
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Box>
              )}
              {activeTab === 4 && (
                <Box sx={{ mt: 2 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Max. Preset Value"
                        value={maxPresetValue}
                        onChange={(e) => setMaxPresetValue(e.target.value)}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Preset 1(Value)"
                        value={presetValues.preset1Value}
                        onChange={(e) =>
                          handlePresetChange("preset1Value", e.target.value)
                        }
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel>Preset 1(Unit)</InputLabel>
                        <Select
                          value={presetValues.preset1Unit}
                          label="Preset 1(Unit)"
                          onChange={(e) =>
                            handlePresetChange(
                              "preset1Unit",
                              e.target.value as string
                            )
                          }
                        >
                          <MenuItem value="Amount">Amount</MenuItem>
                          <MenuItem value="Volume">Volume</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Preset 2(Value)"
                        value={presetValues.preset2Value}
                        onChange={(e) =>
                          handlePresetChange("preset2Value", e.target.value)
                        }
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel>Preset 2(Unit)</InputLabel>
                        <Select
                          value={presetValues.preset2Unit}
                          label="Preset 2(Unit)"
                          onChange={(e) =>
                            handlePresetChange(
                              "preset2Unit",
                              e.target.value as string
                            )
                          }
                        >
                          <MenuItem value="Amount">Amount</MenuItem>
                          <MenuItem value="Volume">Volume</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Preset 3(Value)"
                        value={presetValues.preset3Value}
                        onChange={(e) =>
                          handlePresetChange("preset3Value", e.target.value)
                        }
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel>Preset 3(Unit)</InputLabel>
                        <Select
                          value={presetValues.preset3Unit}
                          label="Preset 3(Unit)"
                          onChange={(e) =>
                            handlePresetChange(
                              "preset3Unit",
                              e.target.value as string
                            )
                          }
                        >
                          <MenuItem value="Amount">Amount</MenuItem>
                          <MenuItem value="Volume">Volume</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Preset 4(Value)"
                        value={presetValues.preset4Value}
                        onChange={(e) =>
                          handlePresetChange("preset4Value", e.target.value)
                        }
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel>Preset 4(Unit)</InputLabel>
                        <Select
                          value={presetValues.preset4Unit}
                          label="Preset 4(Unit)"
                          onChange={(e) =>
                            handlePresetChange(
                              "preset4Unit",
                              e.target.value as string
                            )
                          }
                        >
                          <MenuItem value="Amount">Amount</MenuItem>
                          <MenuItem value="Volume">Volume</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Preset 5(Value)"
                        value={presetValues.preset5Value}
                        onChange={(e) =>
                          handlePresetChange("preset5Value", e.target.value)
                        }
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel>Preset 5(Unit)</InputLabel>
                        <Select
                          value={presetValues.preset5Unit}
                          label="Preset 5(Unit)"
                          onChange={(e) =>
                            handlePresetChange(
                              "preset5Unit",
                              e.target.value as string
                            )
                          }
                        >
                          <MenuItem value="Amount">Amount</MenuItem>
                          <MenuItem value="Volume">Volume</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Box>
              )}
            </Box>
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
                onChange={(
                  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                ) => setNewMessage(e.target.value)}
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

 
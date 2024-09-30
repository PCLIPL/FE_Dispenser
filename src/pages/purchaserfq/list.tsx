import React, { useState } from 'react';
import { Box, Grid, TextField, MenuItem, Button, Stack } from '@mui/material';

import '../../Demotable.css'

export const ListPurchaseRfq = () => {
  const [formData, setFormData] = useState({
    formulation_id: '',
    variant_id: '',
    variant_name: '',
    def_concentration: '',
    def_volume: '',
    batch_number: '',
    manufacturing_date: '',    
    expiry_date: '',
    supplier_name: '',
    supplier_contact_number: '',
    status: '',
    authorized_by: '',
    remarks: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Form Data Submitted:', formData);
  };

  document.body.style.overflowY = "hidden";

  return (
    <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }}
    spacing={{ xs: 4, sm: 4, md: 4 }} minHeight={'100vh'}>
    
      {/* Form Section */}
      <Box
        className="form-box"
        sx={{
          padding: '20px',
          // maxWidth: '800px',
          minWidth:'55%',
          maxHeight: '87vh',
          
          overflowY: 'auto',
          margin: '0',
          marginLeft: '1%',
          marginTop: '0.5%',
          color: 'black',
          border: '1px solid black',
          borderRadius: '15px',
          boxShadow: '0px 0px 15px 1px',
          '&::-webkit-scrollbar': {
            display: 'none',
      
          },

        }}
      >
        <form onSubmit={handleSubmit}>
          <Grid container spacing={4} minHeight={"100vh"}>
            {/* Heading */}
            <Grid item xs={12}>
              <h2>DEF Formulation Form</h2>
            </Grid>

            {/* Form Fields */}
            <Grid item xs={12} sm={6}>
              <TextField
                name="formulation_id"
                label="Formulation ID"
                variant="outlined"
                fullWidth
                value={formData.formulation_id}
                onChange={handleChange}
                className="txtf"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="variant_id"
                label="Variant ID"
                variant="outlined"
                fullWidth
                value={formData.variant_id}
                onChange={handleChange}
                className="txtf"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="variant_name"
                label="Variant Name"
                variant="outlined"
                fullWidth
                value={formData.variant_name}
                onChange={handleChange}
                className="txtf"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="def_concentration"
                label="DEF Concentration (%)"
                type="number"
                variant="outlined"
                fullWidth
                value={formData.def_concentration}
                onChange={handleChange}
                className="txtf"
                InputProps={{ endAdornment: '%' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="def_volume"
                label="DEF Volume (Liters)"
                type="number"
                variant="outlined"
                fullWidth
                value={formData.def_volume}
                onChange={handleChange}
                className="txtf"
                InputProps={{ endAdornment: 'L' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="batch_number"
                label="Batch Number"
                variant="outlined"
                fullWidth
                value={formData.batch_number}
                onChange={handleChange}
                className="txtf"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="manufacturing_date"
                label="Manufacturing Date"
                type="date"
                variant="outlined"
                fullWidth
                value={formData.manufacturing_date}
                onChange={handleChange}
                className="txtf"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="expiry_date"
                label="Expiry Date"
                type="date"
                variant="outlined"
                fullWidth
                value={formData.expiry_date}
                onChange={handleChange}
                className="txtf"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="supplier_name"
                label="Supplier Name"
                variant="outlined"
                fullWidth
                value={formData.supplier_name}
                onChange={handleChange}
                className="txtf"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="supplier_contact_number"
                label="Supplier Contact Number"
                type="tel"
                variant="outlined"
                fullWidth
                value={formData.supplier_contact_number}
                onChange={handleChange}
                className="txtf"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="status"
                label="Status"
                select
                variant="outlined"
                fullWidth
                value={formData.status}
                onChange={handleChange}
                className="txtf"
              >
                <MenuItem value="Approved">Approved</MenuItem>
                <MenuItem value="Pending">Pending</MenuItem>
                <MenuItem value="Rejected">Rejected</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="authorized_by"
                label="Authorized By"
                variant="outlined"
                fullWidth
                value={formData.authorized_by}
                onChange={handleChange}
                className="txtf"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="remarks"
                label="Remarks"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={formData.remarks}
                onChange={handleChange}
                className="txtf"
              />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>

      {/* Invoice Report Section */}
      <Box
        sx={{
          padding: '20px',
          // maxWidth: '800px',
          maxHeight:"87vh",
          minWidth:'35%',
          margin: '0',
          marginLeft: '1%',
          marginTop: '0.5%',
          color: 'black',
          border: '1px solid black',
          borderRadius: '15px',
          boxShadow: '0px 0px 15px 1px',
        }}
      >
        <h3>Invoice Report</h3>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <strong>Formulation ID:</strong>
            <p>{formData.formulation_id}</p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <strong>Variant ID:</strong>
            <p>{formData.variant_id}</p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <strong>Variant Name:</strong>
            <p>{formData.variant_name}</p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <strong>DEF Concentration (%):</strong>
            <p>{formData.def_concentration}%</p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <strong>DEF Volume (Liters):</strong>
            <p>{formData.def_volume} L</p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <strong>Batch Number:</strong>
            <p>{formData.batch_number}</p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <strong>Manufacturing Date:</strong>
            <p>{formData.manufacturing_date}</p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <strong>Expiry Date:</strong>
            <p>{formData.expiry_date}</p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <strong>Supplier Name:</strong>
            <p>{formData.supplier_name}</p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <strong>Supplier Contact Number:</strong>
            <p>{formData.supplier_contact_number}</p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <strong>Status:</strong>
            <p>{formData.status}</p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <strong>Authorized By:</strong>
            <p>{formData.authorized_by}</p>
          </Grid>
          <Grid item xs={12}>
            <strong>Remarks:</strong>
            <p>{formData.remarks}</p>
          </Grid>
        </Grid>
      </Box>
    
  </Stack>
  );
};

import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
  Link,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';


const ClaimForm = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    dob: null,
    jobTitle: '',
    diagnosisDate: null,
    diagnosisType: '',
    story: '',
    agree: false,
    human: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleDateChange = (name, value) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Form submitted successfully!');
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          p: { xs: 2, sm: 8 },
          background: "#2E4A7D", // Simulate overlay
          opacity: "61%",
          borderRadius: 4,
          maxWidth: 550,
          margin: '40px auto',
          boxShadow: 3,
          color: 'white',
        }}
      >
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
          Claim Form
        </Typography>

        <Box display="flex" gap={2} mb={2} flexDirection={{ xs: 'column', sm: 'row' }}>
          <TextField
            required
            fullWidth
            label="First Name"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            variant="standard"
            InputLabelProps={{
    style: { color: '#fff' },
  }}
  variantColor="white"
            sx={{ input: { color: 'white' },
    '.MuiInput-underline:before': { borderBottomColor: '#fff' },
    '.MuiInput-underline:after': { borderBottomColor: '#fff' },
    '& .MuiInputLabel-root': { color: '#fff' }, }} // Ensure text is visible on
             color= 'white'
             
          />
          <TextField
            required
            fullWidth
            label="Last Name"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            variant="standard"
            InputLabelProps={{
    style: { color: '#fff' },
  }}
            sx={{ input: { color: 'white' },
    '.MuiInput-underline:before': { borderBottomColor: '#fff' },
    '.MuiInput-underline:after': { borderBottomColor: '#fff' },
    '& .MuiInputLabel-root': { color: '#fff' }, }} 
          />
        </Box>

        <Box display="flex" gap={2} mb={2} flexDirection={{ xs: 'column', sm: 'row' }}>
          <TextField
            required
            fullWidth
            label="Phone Number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            variant="standard"
            type="tel"
            InputLabelProps={{
    style: { color: '#fff' },
  }}
           sx={{ input: { color: 'white' },
    '.MuiInput-underline:before': { borderBottomColor: '#fff' },
    '.MuiInput-underline:after': { borderBottomColor: '#fff' },
    '& .MuiInputLabel-root': { color: '#fff' }, }} 
          />
          <TextField
            required
            fullWidth
            label="Email ID"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            variant="standard"
           sx={{ input: { color: 'white' },
    '.MuiInput-underline:before': { borderBottomColor: '#fff' },
    '.MuiInput-underline:after': { borderBottomColor: '#fff' },
    '& .MuiInputLabel-root': { color: '#fff' }, }} 
InputLabelProps={{
    style: { color: '#fff' },
  }}
          />
        </Box>

        <Box display="flex" gap={2} mb={2} flexDirection={{ xs: 'column', sm: 'row' }}>
          <DatePicker
            label="Date of birth"
  sx={{
    '& .MuiInputLabel-root': { color: '#fff' }
  }}
            value={form.dob}
            onChange={(newValue) => handleDateChange('dob', newValue)}
            slotProps={{
              textField: {
                name: 'dob',
                required: true,
                fullWidth: true,
                  variant:"standard",
                   InputLabelProps: {
        style: { color: '#fff' },       // Label text white
      },
                   sx: {
        input: {
          backgroundColor: '#fff', // White background
          color: '#000',           // Black text for contrast
        },
        '.MuiInput-underline:before': {
          borderBottomColor: '#fff', // White underline (default)
        },
        '.MuiInput-underline:after': {
          borderBottomColor: '#fff', // White underline (focused)
        },
        '& .MuiInputLabel-root': {
          color: '#fff',             // White label (extra assurance)
        },
      },
              },
            }}
          />
          <TextField
            required
            fullWidth
            label="Job Title"
            name="jobTitle"
            value={form.jobTitle}
            onChange={handleChange}
            variant="standard"
            sx={{ input: { color: 'white' },
    '.MuiInput-underline:before': { borderBottomColor: '#fff' },
    '.MuiInput-underline:after': { borderBottomColor: '#fff' },
    '& .MuiInputLabel-root': { color: '#fff' }, }} 
            InputLabelProps={{
    style: { color: '#fff' },
  }}
          />
        </Box>

        <Box display="flex" gap={2} mb={2} flexDirection={{ xs: 'column', sm: 'row' }}>
          <DatePicker
            label="Date of Diagnosis"
            sx={{
    '& .MuiInputLabel-root': { color: '#fff' }
  }}
            value={form.diagnosisDate}
            onChange={(newValue) => handleDateChange('diagnosisDate', newValue)}
            slotProps={{
              textField: {
                name: 'diagnosisDate',
                required: true,
                fullWidth: true,
                 color: 'white',
                   variant:"standard",
                    InputLabelProps: {
        style: { color: '#fff' },       // Label text white
      },
                     sx: {
        input: {
          backgroundColor: '#fff', // White background
          color: '#000',           // Black text for contrast
        },
        '.MuiInput-underline:before': {
          borderBottomColor: '#fff', // White underline (default)
        },
        '.MuiInput-underline:after': {
          borderBottomColor: '#fff', // White underline (focused)
        },
        '& .MuiInputLabel-root': {
          color: '#fff',             // White label (extra assurance)
        },
      },

              },
            }}
            
          />
          <FormControl fullWidth required variant="standard">
            <InputLabel>Type of Diagnosis</InputLabel>
            <Select
              name="diagnosisType"
              label="Type of Diagnosis"
              value={form.diagnosisType}
              onChange={handleChange}
 
                sx={{ color: 'white', '.MuiSelect-icon': { color: 'white' } ,  '& .MuiInputLabel-root': { color: '#fff' }}} // Ensure text is visible on
            >
              <MenuItem value="Type A">Type A</MenuItem>
              <MenuItem value="Type B">Type B</MenuItem>
              <MenuItem value="Type C">Type C</MenuItem>
              {/* Add more types as needed */}
            </Select>
          </FormControl>
        </Box>

        <TextField
          label="Tell us your story (optional)"
          name="story"
          multiline
          fullWidth
          rows={3}
          value={form.story}
          onChange={handleChange}
         
          variant="standard"
          InputProps={{ style: { color: 'white' } }} 
          InputLabelProps={{
    style: { color: '#fff' },
  }}
   sx={{ input: { color: 'white' },
    '.MuiInput-underline:before': { borderBottomColor: '#fff' },
    '.MuiInput-underline:after': { borderBottomColor: '#fff' },
    '& .MuiInputLabel-root': { color: '#fff' },  mb: 2 }} 
        />

        <FormGroup sx={{ mb: 2 }}>
          <FormControlLabel
            control={
              <Checkbox
                required
                name="agree"
                checked={form.agree}
                onChange={handleChange}
                sx={{ color: 'white' }}
              />
            }
            label={
              <span>
                I agree to the{" "}
                <Link href="#" color="secondary" underline="hover" target="_blank">
                  privacy policy
                </Link>{" "}
                and{" "}
                <Link href="#" color="secondary" underline="hover" target="_blank">
                  disclaimer
                </Link>
                {" "}and give my express written consent to be contacted regarding my case options. I understand that I may be contacted using automatic dialing equipment. Message and data rates may apply. My consent does not require purchase. This is Legal advertising.
              </span>
            }
          />
          <FormControlLabel
            control={
              <Checkbox
                required
                name="human"
                checked={form.human}
                onChange={handleChange}
                sx={{ color: 'white' }}
              />
            }
            label="Please check this box to verify you're a person."
          />
        </FormGroup>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 1,
            py: 1.5,
            bgcolor: 'white',
            color: '#333',
            fontWeight: 'bold',
            fontSize: 18,
            ':hover': { bgcolor: '#f3eae3' },
          }}
        >
          Start your claim now
        </Button>
      </Box>
    </LocalizationProvider>
  );
};

export default ClaimForm;

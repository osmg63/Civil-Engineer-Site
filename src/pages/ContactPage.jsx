import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  Paper,
  Alert,
} from '@mui/material';
import MapSection from '../components/MapSection';
import contactbg from "../assets/contact5.webp"; // arka plan görseli ekle

const ContactCard = ({ icon, label, value, href }) => (
  <Paper
    elevation={2}
    sx={{
      p: 1,
      textAlign: 'center',
      borderRadius: 2,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 1,
      minWidth: 180,
      flex: '1 1 0',
    }}
  >
    <Typography variant="h5" component="div">
      {icon}
    </Typography>
    <Typography variant="subtitle1" color="text.secondary">
      {label}
    </Typography>
    {href ? (
      <Box
        component="a"
        href={href}
        sx={{
          color: 'primary.main',
          textDecoration: 'none',
          fontWeight: '600',
          '&:hover': {
            textDecoration: 'underline',
            cursor: 'pointer',
          },
        }}
      >
        {value}
      </Box>
    ) : (
      <Typography variant="body1" fontWeight="semibold">
        {value}
      </Typography>
    )}
  </Paper>
);

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formsubmit.co/ajax/dinoekin@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => setSuccess(false), 2000);
      } else {
        alert('Gönderim başarısız oldu.');
      }
    } catch (error) {
      alert('Bir hata oluştu.');
    }
  };

  return (
    <>
      {/* 🔹 Üst Kapak Resmi */}
      <Box
        sx={{
          width: '100%',
          height: { xs: 200, md: 550 },
          backgroundImage: `url(${contactbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: "-64px", // ✅ Resmi yukarı taşır
        }}
      >
      
      </Box>

      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" mb={2}  sx={{
           
            fontWeight: 'bold',
           
          }} >
           
        
          Bize Ulaşın
        </Typography>
        

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            gap: 3,
            mb: 5,
            flexWrap: 'wrap',
          }}
        >
          <ContactCard icon="📞" label="Telefon" value="+90 506 934 8329" href="tel:+905551234567" />
          <ContactCard icon="📧" label="E-posta" value="mustafagumus@okantowers.com" href="mailto:info@insaatmuhendisi.com" />
          <ContactCard icon="📍" label="Adres" value="Mücahitler, 52078 Sk Bina No:2, Kat:1 Ofis: 19  Şehitkamil/Gaziantep" />
        </Box>

        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            Mesajınız gönderildi!
          </Alert>
        )}

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            width: '100%',
          }}
        >
          <Box sx={{ flex: 1, height: { xs: 300, md: 'auto' } }}>
            <MapSection />
          </Box>

          <Paper
            elevation={2}
            sx={{
              flex: 1,
              ml: { md: 2 },
              mt: { xs: 2, md: 0 },
              display: 'flex',
              flexDirection: 'column',
              p: 2,
              borderRadius: 2,
              maxHeight: 400,
            }}
            component="form"
            onSubmit={handleSubmit}
          >
            <TextField
              fullWidth
              label="Adınız"
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <TextField
              fullWidth
              label="E-posta"
              margin="normal"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              fullWidth
              label="Mesajınız"
              multiline
              rows={5}
              margin="normal"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <Button type="submit" variant="contained" sx={{ mt: 1, alignSelf: 'flex-start' }}>
              Gönder
            </Button>
          </Paper>
        </Box>
      </Container >
    </>
  );
};

export default ContactPage;

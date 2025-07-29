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
                body: JSON.stringify({
                    name,
                    email,
                    message,
                }),
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
        <Container sx={{ mt: 4 }}>
            <Typography variant="h5" mb={2}>
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
                <ContactCard icon="📞" label="Telefon" value="+90 555 123 45 67" href="tel:+905551234567" />
                <ContactCard icon="📧" label="E-posta" value="info@insaatmuhendisi.com" href="mailto:info@insaatmuhendisi.com" />
                <ContactCard icon="📍" label="Adres" value="Mücahitler, 72037. Sk No:2, 27060 Şehitkamil/Gaziantep" />
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
                    minHeight: 'calc(100vh - 64px)',
                    width: '100%',
                }}
            >
                <Box
                    sx={{
                        flex: 1,
                        height: { xs: 300, md: 'auto' },
                    }}
                >
                    <MapSection />
                </Box>
               
                <Paper
                    elevation={2}
                    sx={{
                        flex: 1,
                        ml: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        p: 1,
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
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ mt: 1, alignSelf: 'flex-start' }}
                    >
                        Gönder
                    </Button>
                </Paper>
            </Box>
        </Container>
    );
};

export default ContactPage;

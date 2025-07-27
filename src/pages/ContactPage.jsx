import React from 'react';
import {
    Box,
    Typography,
    Container,
    TextField,
    Button,
    Grid,
    Paper,
} from '@mui/material';
import MapSection from '../components/MapSection';

const ContactCard = ({ icon, label, value }) => (
    <Paper
        elevation={3}
        sx={{
            p: 3,
            textAlign: 'center',
            borderRadius: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
            minWidth: 180,
            flex: '1 1 0', // Esnek ve eşit genişlik
        }}
    >
        <Typography variant="h5" component="div">
            {icon}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
            {label}
        </Typography>
        <Typography variant="body1" fontWeight="bold">
            {value}
        </Typography>
    </Paper>
);

const ContactPage = () => {
    return (
        <Container sx={{ mt: 4 }}>
            {/* Kart satırı: iletişim bilgileri */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    gap: 3,
                    mb: 5,
                    flexWrap: 'wrap', // mobilde alt alta insin
                }}
            >
                <ContactCard icon="📞" label="Telefon" value="+90 555 123 45 67" />
                <ContactCard icon="📧" label="E-posta" value="info@insaatmuhendisi.com" />
                <ContactCard icon="📍" label="Adres" value="Gaziantep, Türkiye" />
            </Box>

            {/* Harita ve Form yan yana, eşit genişlik ve yükseklik */}
            <Grid container spacing={6} sx={{ minHeight: 400 ,   justifyContent: 'space-evenly', }}>
                {/* Harita */}
                <Grid
                    item
                    xs={12}
                    md={12}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: { xs: '300px', md: 'auto' }, // mobilde belirli yükseklik, desktopta otomatik
                    }}
                >
                    <Box sx={{ flexGrow: 1 }}>
                        <MapSection />
                    </Box>
                </Grid>

                {/* Form */}
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: { xs: 'auto', md: 'auto' },
                    }}
                >
                    <Box
                        component="form"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            height: '100%',
                            minHeight: 300,
                            overflowY: 'auto', // taşmayı önler, kaydırma çıkar
                        }}
                    >
                        <Typography variant="h5" mb={2}>
                            Bize Ulaşın
                        </Typography>
                        <TextField fullWidth label="Adınız" margin="normal" />
                        <TextField fullWidth label="E-posta" margin="normal" />
                        <TextField
                            fullWidth
                            label="Mesajınız"
                            multiline
                            rows={5}
                            margin="normal"
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ mt: 2, alignSelf: 'flex-start' }}
                        >
                            Gönder
                        </Button>
                    </Box>
                </Grid>
            </Grid>

        </Container>
    );
};

export default ContactPage;

import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';

const OnlySlotsBadge = () => (
  <Box
    sx={{
      position: 'absolute',
      top: '50%',
      right: { xs: -60, sm: -90 },
      transform: 'translateY(-50%)',
      width: 200,
      height: 200,
      bgcolor: '#27416b',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10,
      boxShadow: 3,
    }}
  >
    <Typography
      sx={{
        color: '#fff',
        fontWeight: 700,
        textAlign: 'center',
        fontSize: 24,
        letterSpacing: 1,
        lineHeight: 1.15,
        transform: 'rotate(-27deg)'
      }}
    >
      ONLY 6 SLOTS<br />LEFT
    </Typography>
  </Box>
);

const BenefitsList = () => (
  <Stack spacing={2} sx={{ mt: 4 }}>
    <Box display="flex" alignItems="center" gap={1}>
      <ShieldOutlinedIcon fontSize="small" sx={{ color: '#5e6570' }} />
      <Typography fontSize={16} color="#333">100% Confidential</Typography>
    </Box>
    <Box display="flex" alignItems="center" gap={1}>
      <CheckCircleOutlinedIcon fontSize="small" sx={{ color: '#5e6570' }} />
      <Typography fontSize={16} color="#333">No Win, No Fee</Typography>
    </Box>
    <Box display="flex" alignItems="center" gap={1}>
      <GavelOutlinedIcon fontSize="small" sx={{ color: '#5e6570' }} />
      <Typography fontSize={16} color="#333">Free Case Evaluation</Typography>
    </Box>
  </Stack>
);

const CaseReviewCard = () => (
  <Box
    sx={{
      display: 'flex',
      width: { xs: '100%', sm: 500 },
      borderRadius: 5,
      boxShadow: 8,
      overflow: 'hidden',
      bgcolor: '#fff',
      minHeight: 330,
      position: 'relative',
      mx: 'auto',
    }}
  >
    {/* Left Gradient Panel */}
    <Box
      sx={{
        flex: 1.4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        py: 4,
        px: 3,
        background:
          'linear-gradient(160deg, #fff 75%, rgba(93, 86, 158, 0.22) 100%)',
        position: 'relative',
        zIndex: 2,
        minWidth: 180,
      }}
    >
      <Box>
        <Typography sx={{ fontWeight: 700, fontSize: 32, color: '#222' }}>Free</Typography>
        <Typography sx={{ fontWeight: 400, fontSize: 30, color: '#616161' }}>Case</Typography>
        <Typography sx={{ fontWeight: 500, fontSize: 30, color: '#232323' }}>Review</Typography>
      </Box>
      <BenefitsList />
    </Box>

    {/* Right Panel */}
    <Box
      sx={{
        flex: 2.2,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        py: 4,
        px: 3,
        bgcolor: '#fff',
        minHeight: 330,
        zIndex: 2,
      }}
    >
      <Typography
        sx={{
          color: '#464646',
          fontSize: 20,
          fontWeight: 400,
          alignSelf: 'flex-end',
          marginRight: 0,
          mb: 7,
        }}
      >
        We are here<br />to help!
      </Typography>
      <Box sx={{ flexGrow: 1 }} />
      <Button
        variant="contained"
        sx={{
          mt: { xs: 2, sm: 0 },
          width: 160,
          background: '#c1a079',
          borderRadius: 6,
          textTransform: 'none',
          fontWeight: 600,
          fontSize: 18,
          boxShadow: '0 3px 12px 0 rgba(0,0,0,0.07)',
          '&:hover': {
            background: '#ae9366'
          },
        }}
      >
        Contact us
      </Button>
      <OnlySlotsBadge />
    </Box>
  </Box>
);

export default CaseReviewCard;

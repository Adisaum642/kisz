import React from 'react';
import { Box, Typography, Button, Stack,IconButton } from '@mui/material';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ReactCurvedText from 'react-curved-text';

const OnlySlotsBadge = () => (
  <Box
    sx={{
      position: 'absolute',
      top: '38%',
      right: { xs: -60, sm: 190 },
      transform: 'translateY(-50%)',
      width: 290,
      height: 290,
      bgcolor: '#27416b',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2,
      boxShadow: 3,
      opacity:2,
      clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)',
    }}
  >
    
    <ReactCurvedText
      width={290}
      height={290}
      cx={145}
      cy={145}
      rx={120}
      ry={120}
      opacity={100}
      startOffset={215} // Adjust to position text
      text="ONLY 6 SLOTS LEFT"
      textProps={{
        style: {
          fill: '#fff',
          fontWeight: 700,
          fontSize: 30,
          letterSpacing: 2,
   
        },
      }}
    />
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
      width: { xs: '100%', sm: 581 },
      borderRadius: 5,
      boxShadow: 8,
      overflow: 'hidden',
      bgcolor: '#fff',
      minHeight: 577,
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
          'linear-gradient(160deg, #fff 20%, #c1a079 240%)',
        position: 'relative',
        zIndex: 2,
        minWidth: 180,
      borderRadius: "12px",
       boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // Added subtle shadow
      overflow: 'hidden',
      margin: "12px 0 12px 12px "
      
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
          paddingRight: '28px',
        }}
      >
        We are here<br />to help!
      </Typography>
      <Box sx={{ flexGrow: 1 }} />
     <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 0,
      paddingLeft:"55px"
    }}
  >
    <Button
      variant="contained"
      sx={{
        width: 134,
        height: 56,
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

    <IconButton
      sx={{
        width: 56,
        height: 56,
        borderRadius: '50%',
        background: '#c1a079',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        border: '1.5px solid rgba(255,255,255,0.30)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.13)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s',
        color: '#fff',
        '&:hover': {
          background: 'rgba(193, 160, 121, 0.45)',
          boxShadow: '0 12px 40px 0 rgba(0,0,0,0.19)',
          transform: 'scale(1.05)',
        },
      }}
    >
      <ArrowForwardIosIcon sx={{ fontSize: 30, color: '#fff' }} />
    </IconButton>
  </Box>
      <OnlySlotsBadge />
    </Box>
  </Box>
);

export default CaseReviewCard;

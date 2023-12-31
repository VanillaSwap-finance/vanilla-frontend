import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  IconButton,
  Link,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material'
import HistoryIcon from '@mui/icons-material/History'
import RefreshIcon from '@mui/icons-material/Refresh'
import SyncIcon from '@mui/icons-material/Sync'
import TuneIcon from '@mui/icons-material/Tune'
import TokenInput from '@/views/Swap/components/TokenInput'

const SwapView: React.FC = () => {
  return (
    <Box>
      <Breadcrumbs sx={{ mb: 4 }}>
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography color="text.primary">Swap</Typography>
      </Breadcrumbs>
      <Grid container spacing={2} justifyContent="center">
        <Grid xs={6}>
          <Card sx={{ p: 1 }}>
            <CardContent>
              <Box>
                <Typography variant="h5" component="div">
                  Swap
                </Typography>
                <Typography variant="body1" component="div" color="text.secondary">
                  Trade tokens in an instant
                </Typography>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Box textAlign="right">
                <IconButton size="small">
                  <TuneIcon />
                </IconButton>
                <IconButton size="small">
                  <HistoryIcon />
                </IconButton>
                <IconButton size="small">
                  <RefreshIcon />
                </IconButton>
              </Box>
              <Box textAlign="center">
                <Box textAlign="left" sx={{ my: 1 }}>
                  <TokenInput defaultCurrency="XRP" />
                </Box>
                <IconButton sx={{ mt: 1 }}>
                  <SyncIcon />
                </IconButton>
                <Box textAlign="left" sx={{ mb: 1 }}>
                  <TokenInput defaultCurrency="BTC" />
                </Box>
              </Box>
            </CardContent>
            <CardActions>
              <Button variant="contained" size="large" fullWidth disableElevation sx={{ mx: 1 }}>
                Swap
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SwapView

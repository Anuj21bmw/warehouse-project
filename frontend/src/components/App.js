// import React from 'react';
// import Hero from './components/Hero';
// import Navbar from './components/Navbar';
// import FeatureCard from './components/FeatureCard';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Hero />
//       <div className="p-10">
//         <FeatureCard />
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { Container, Typography, Button } from '@mui/material';

function App() {
  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Warehouse Management System
      </Typography>
      <Typography variant="body1">
        Manage your inventory efficiently with real-time data and predictive analytics.
      </Typography>
      <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
        Get Started
      </Button>
    </Container>
  );
}

export default App;

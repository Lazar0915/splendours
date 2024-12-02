// 'use client'

// // src/App.tsx
// import React, { useState } from 'react';
// import { Box, Typography } from '@mui/material';
// import Image from 'next/image';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ZoomInIcon from '@mui/icons-material/ZoomIn';
// import Header from '../components/Header';
// import CustomButton from '../components/Button';
// import Scene from '../components/Visualizer/Model';
// import Link from 'next/link';

// const App: React.FC = () => {

//   const [selectedTexture, setSelectedTexture] = useState<string | null>(null);

//   const handleTextureChange = (texturePath: string) => {
//     setSelectedTexture(texturePath);
//   };

//   return (
//     <Box className="container mx-auto" style={{ height: '100vh' }}>
//       <Box style={{ height: '5vh' }}>
//       </Box>
//       <Box className="flex w-full justify-between" style={{ height: '5vh' }}>
//         <Box className="w-1/6">
//           <Link href="/">
//             <Image
//               src="/images/Visualizer/Navar/logo.png"
//               alt="Logo"
//               width={333}
//               height={105}
//             />
//           </Link>

//         </Box>
//         <Box className="flex w-1/12 justify-around space-x-3">
//           <Box className="w-2/3 flex justify-center items-center">
//             <Image
//               src="/images/Visualizer/Navar/zooms.svg"
//               alt="Logo"
//               width={50}
//               height={50}
//             />
//           </Box>
//           <Box className="w-2/3 flex justify-center items-center">
//             <Image
//               src="/images/Visualizer/Navar/rotate_panel.svg"
//               alt="Logo"
//               width={50}
//               height={50}
//             />
//             <Image
//               src="/images/Visualizer/Navar/rotate.svg"
//               alt="Logo"
//               width={50}
//               height={50}
//               className='absolute'
//             />
//           </Box>
//         </Box>
//       </Box>
//       <Box className="2/3" style={{ height: '60vh' }}>
//         <Scene selectedTexture={selectedTexture} />
//       </Box>
//       <Box className="flex w-full justify-between items-end" style={{ height: '25vh' }}>
//         <Box className="flex w-1/4">
//           <Box className="w-1/3">
//             <Image
//               src="/images/Visualizer/static.jpg"
//               alt="Image1"
//               width={100}
//               height={100}
//               className='rounded-lg'
//             />
//           </Box>
//           <Box className="flex flex-col w-2/3 justify-center">
//             <Typography
//               variant="h3"
//               color="#ffffff"
//               sx={{
//                 fontWeight: 700,
//                 alignContent: 'flex-start',
//                 fontFamily: 'Montserrat',
//                 fontSize: {
//                   xs: "10px",
//                   sm: "15px",  // Small screens
//                   md: "20px",  // Medium screens
//                   lg: "25px"
//                 }
//               }}
//             >
//               CHARLOTTE
//             </Typography>
//             <Typography
//               variant="h3"
//               color="#ffffff"
//               sx={{
//                 fontWeight: 300,
//                 alignContent: 'flex-start',
//                 fontFamily: 'Montserrat',
//                 fontSize: {
//                   xs: "6px",
//                   sm: "10px",  // Small screens
//                   md: "10px",  // Medium screens
//                   lg: "12px"
//                 }
//               }}
//             >
//               Available in our freeform style, the Charlotte sandstone is made up of beautiful soft hues such as cream, yellow and pink.
//             </Typography>
//           </Box>
//         </Box>
//         <Box className="flex flex-col w-1/3 space-y-3">
//           <Box className="flex w-full flex-col items-center">
//             <Typography
//               variant="h3"
//               color="#ffffff"
//               sx={{
//                 fontWeight: 700,
//                 alignContent: 'flex-start',
//                 fontFamily: 'Montserrat',
//                 fontSize: {
//                   xs: "10px",
//                   sm: "15px",  // Small screens
//                   md: "20px",  // Medium screens
//                   lg: "25px"
//                 }
//               }}
//             >
//               FIREPLACE
//             </Typography>
//             <Typography
//               variant="h3"
//               color="#ffffff"
//               sx={{
//                 fontWeight: 300,
//                 alignContent: 'flex-start',
//                 fontFamily: 'Montserrat',
//                 fontSize: {
//                   xs: "8px",
//                   sm: "10px",  // Small screens
//                   md: "12px",  // Medium screens
//                   lg: "15px"
//                 }
//               }}
//             >
//               Marble Charlotte and other to choose from
//             </Typography>
//           </Box>
//           {/* <Box className="flex w-full">
//             <Box className="w-1/4">
//               <Image
//                 src="/images/About/Stones/stone1.png"
//                 alt="Logo"
//                 width={80}
//                 height={80}
//               />
//             </Box>
//             <Box className="w-1/4">
//               <Image
//                 src="/images/About/Stones/stone2.png"
//                 alt="Logo"
//                 width={80}
//                 height={80}
//               />
//             </Box>
//             <Box className="w-1/4">
//               <Image
//                 src="/images/About/Stones/stone3.png"
//                 alt="Logo"
//                 width={80}
//                 height={80}
//               />
//             </Box>
//             <Box className="w-1/4">
//               <Image
//                 src="/images/About/Stones/stone4.png"
//                 alt="Logo"
//                 width={80}
//                 height={80}
//               />
//             </Box>
//           </Box> */}

//           {/* Images for texture selection */}
//           <Box className="flex w-full">
//             <Box className="w-1/4" onClick={() => handleTextureChange('/textures/texture1.jpg')}>
//               <Image src="/images/About/Stones/stone1.png" alt="Texture 1" width={80} height={80} />
//             </Box>
//             <Box className="w-1/4" onClick={() => handleTextureChange('/textures/texture2.jpg')}>
//               <Image src="/images/About/Stones/stone2.png" alt="Texture 2" width={80} height={80} />
//             </Box>
//             <Box className="w-1/4" onClick={() => handleTextureChange('/textures/texture3.jpg')}>
//               <Image src="/images/About/Stones/stone3.png" alt="Texture 3" width={80} height={80} />
//             </Box>
//             <Box className="w-1/4" onClick={() => handleTextureChange('/textures/texture4.jpg')}>
//               <Image src="/images/About/Stones/stone4.png" alt="Texture 4" width={80} height={80} />
//             </Box>
//           </Box>

//         </Box>
//         <Box className="w-1/6 space-y-5">
//           <Box>
//             <Box>
//               <Typography variant="h3"
//                 color="#ffffff"
//                 sx={{
//                   fontWeight: 500,
//                   alignContent: 'flex-start',
//                   fontFamily: 'Montserrat',
//                   fontSize: {
//                     xs: "8px",
//                     sm: "10px",  // Small screens
//                     md: "12px",  // Medium screens
//                     lg: "15px"
//                   }
//                 }}>Category: <span style={{ color: "#DBC6BC" }} > Stairs</span></Typography>
//               <Typography variant="h3"
//                 color="#ffffff"
//                 sx={{
//                   fontWeight: 500,
//                   alignContent: 'flex-start',
//                   fontFamily: 'Montserrat',
//                   fontSize: {
//                     xs: "8px",
//                     sm: "10px",  // Small screens
//                     md: "12px",  // Medium screens
//                     lg: "15px"
//                   }
//                 }}>Tag: <span style={{ color: "#DBC6BC" }}> Exclusive</span></Typography>
//             </Box>
//           </Box>
//           <Box className="flex">
//             <Box className="flex w-1/2 items-center">
//               <ArrowBackIosNewIcon sx={{ color: 'white' }} />
//               <Typography
//                 variant="h3"
//                 color="#ffffff"
//                 sx={{
//                   fontWeight: 500,
//                   alignContent: 'flex-start',
//                   fontFamily: 'Montserrat',
//                   fontSize: {
//                     xs: "8px",
//                     sm: "10px",  // Small screens
//                     md: "12px",  // Medium screens
//                     lg: "15px"
//                   }
//                 }}
//               >
//                 P R E V
//               </Typography>
//             </Box>
//             <Box className="flex w-1/2 items-center">
//               <Typography
//                 variant="h3"
//                 color="#ffffff"
//                 sx={{
//                   fontWeight: 500,
//                   alignContent: 'flex-start',
//                   fontFamily: 'Montserrat',
//                   fontSize: {
//                     xs: "8px",
//                     sm: "10px",  // Small screens
//                     md: "12px",  // Medium screens
//                     lg: "15px"
//                   }
//                 }}
//               >
//                 N E X T
//               </Typography>
//               <ArrowForwardIosIcon sx={{ color: 'white' }} />
//             </Box>
//           </Box>

//         </Box>
//       </Box>
//       <Box style={{ height: '5vh' }}>
//       </Box>
//     </Box>
//   );
// };

// export default App;
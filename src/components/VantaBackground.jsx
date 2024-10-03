// import React, { useEffect, useRef, useState } from 'react'
// import NET from 'vanta/dist/vanta.net.min'
// import * as THREE from 'three'

// const VantaBackground = () => {
//   const [vantaEffect, setVantaEffect] = useState(null)
//   const vantaRef = useRef(null)

//   useEffect(() => {
//     if (!vantaEffect) {
//       setVantaEffect(
//         NET({
//           el: vantaRef.current,
//           THREE: THREE,
//           mouseControls: true,
//           touchControls: true,
//           gyroControls: false,
//           minHeight: 200.00,
//           minWidth: 200.00,
//           scale: 1.00,
//           scaleMobile: 1.00,
//           color: 0x3461eb,
//           backgroundColor: 0x1f2937,
//           points: 20.00,
//           maxDistance: 15.00,
//           spacing: 15.00
//         })
//       )
//     }
//     return () => {
//       if (vantaEffect) vantaEffect.destroy()
//     }
//   }, [vantaEffect])

//   return <div ref={vantaRef} className="absolute inset-0" />
// }

// export default VantaBackground ;







// 2nd Templates ** RINGS *****

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import RINGS from "vanta/dist/vanta.rings.min.js";

const VantaBackground = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      vantaEffect.current = RINGS({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: 0x1f2937, 
        color: 0x502D72,            
        color2: 0xBE3465,          
        backgroundAlpha: 1,
      });
    }
  
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return (
    <div 
      ref={vantaRef} 
      className="absolute inset-0 -z-10"
      aria-hidden="true"
    />
  );
};

export default VantaBackground;




// 3rd Template **** GLOBES *****

// import React, { useEffect, useRef } from "react";
// import * as THREE from "three";
// import GLOBES from "vanta/dist/vanta.globe.min.js";

// const VantaBackground = () => {
//   const vantaRef = useRef(null);
//   const vantaEffect = useRef(null);

//   useEffect(() => {
//     if (!vantaEffect.current && vantaRef.current) {
//       vantaEffect.current = GLOBES({
//         el: vantaRef.current,
//         THREE: THREE,
//         mouseControls: true,
//         touchControls: true,
//         gyroControls: false,
//         minHeight: 200.0,
//         minWidth: 200.0,
//         scale: 1.0,
//         scaleMobile: 1.0,
//         backgroundColor: 0x1f2937, // This matches Tailwind's bg-gray-800
//         color: 0x502D72,           // Your skyColor converted to hex
//         color2: 0xBE3465,          // Your cloudColor converted to hex
//         backgroundAlpha: 1,
//       });
//     }
  
//     return () => {
//       if (vantaEffect.current) {
//         vantaEffect.current.destroy();
//       }
//     };
//   }, []);

//   return (
//     <div 
//       ref={vantaRef} 
//       className="absolute inset-0 -z-10"
//       aria-hidden="true"
//     />
//   );
// };

// export default VantaBackground;






// 4th *** HALO ****

// import React, { useEffect, useRef } from "react";
// import * as THREE from "three";
// import HALOS from "vanta/dist/vanta.halo.min.js";

// const VantaBackground = () => {
//   const vantaRef = useRef(null);
//   const vantaEffect = useRef(null);

//   useEffect(() => {
//     if (!vantaEffect.current && vantaRef.current) {
//       vantaEffect.current = HALOS({
//         el: vantaRef.current,
//         THREE: THREE,
//         mouseControls: true,
//         touchControls: true,
//         gyroControls: false,
//         minHeight: 200.0,
//         minWidth: 200.0,
//         scale: 1.0,
//         scaleMobile: 1.0,
//         backgroundColor: 0x131a43, 
//         color: 0x502D72,           
//         color2: 0xBE3465,          
//         backgroundAlpha: 1,
//       });
//     }
  
//     return () => {
//       if (vantaEffect.current) {
//         vantaEffect.current.destroy();
//       }
//     };
//   }, []);

//   return (
//     <div 
//       ref={vantaRef} 
//       className="absolute inset-0 -z-10"
//       aria-hidden="true"
//     />
//   );
// };

// export default VantaBackground;







// ########## BIRDS  ############

// import React, { useEffect, useRef } from "react";
// import * as THREE from "three";
// import BIRDS from "vanta/dist/vanta.birds.min.js";

// const VantaBackground = () => {
//   const vantaRef = useRef(null);
//   const vantaEffect = useRef(null);

//   useEffect(() => {
//     if (!vantaEffect.current && vantaRef.current) {
//       vantaEffect.current = BIRDS({
//         el: vantaRef.current,
//         THREE: THREE,
//         mouseControls: true,
//         touchControls: true,
//         gyroControls: false,
//         minHeight: 200.0,
//         minWidth: 200.0,
//         scale: 1.0,
//         scaleMobile: 1.0,
//         backgroundColor: 0x7192f, 
//         color: 0xff0000,           
//         color2: 0xd1ff,          
//         backgroundAlpha: 1,
//       });
//     }
  
//     return () => {
//       if (vantaEffect.current) {
//         vantaEffect.current.destroy();
//       }
//     };
//   }, []);

//   return (
//     <div 
//       ref={vantaRef} 
//       className="absolute inset-0 -z-10"
//       aria-hidden="true"
//     />
//   );
// };

// export default VantaBackground;
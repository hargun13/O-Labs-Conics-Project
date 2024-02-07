import React from 'react';

function DeviceOrientationModal({ onClose, isMobile, orientation, isIE }) {
  return (
    <>
      {isMobile && orientation === 0 ? (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={onClose}>
              &times;
            </span>
            <div className="bg-red-500 p-4 rounded-lg text-white text-center">
              <p className="font-bold">Warning</p>
              <br />
              <p className="text-lg">
                You are using a mobile phone.
                <br />
                <br />
                This game is best played and understood on a laptop or a PC setup.
                <br />
                <br />
                If you are only viewing it, please turn your phone to landscape mode for the best viewing experience.
              </p>
            </div>
          </div>
        </div>
      ) : isIE ? (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={onClose}>
              &times;
            </span>
            <div className="bg-red-500 p-4 rounded-lg text-white text-center">
              <p className="font-bold">Warning</p>
              <br />
              <p className="text-lg">
                Please switch to Chrome browser for the best experience.
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default DeviceOrientationModal;


// import React from 'react';

// function DeviceOrientationModal({ onClose, isMobile, orientation }) {
//   return (
//     <>
//       {isMobile && orientation === 0 ? (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close" onClick={onClose}>
//               &times;
//             </span>
//             <div className="bg-red-500 p-4 rounded-lg text-white text-center">
//               <p className="font-bold">Warning</p>
//               <br />
//               <p className="text-lg">
//                 You are using a mobile phone.
//                 <br />
//                 <br />
//                 This game is best played and understood on a laptop or a PC setup.
//                 <br />
//                 <br />
//                 If you are only viewing it, please turn your phone to landscape mode for the best viewing experience.
//               </p>
//             </div>
//           </div>
//         </div>
//       ) : null}
//     </>
//   );
// }

// export default DeviceOrientationModal;

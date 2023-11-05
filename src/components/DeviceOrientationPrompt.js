import React, { useState, useEffect } from 'react';
import DeviceOrientationModal from './DeviceOrientationModal';

function DeviceOrientationPrompt() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Adjust the threshold as needed
  const [orientation, setOrientation] = useState(window.orientation);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    // Add an event listener to track changes in device orientation
    window.addEventListener('orientationchange', handleOrientationChange);

    // Add an event listener to track changes in window size
    window.addEventListener('resize', handleResize);

    return () => {
      // Clean up the event listeners when the component unmounts
      window.removeEventListener('orientationchange', handleOrientationChange);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleOrientationChange = () => {
    // Update the orientation state when the device orientation changes
    setOrientation(window.orientation);
  };

  const handleResize = () => {
    // Update the isMobile state when the window size changes
    setIsMobile(window.innerWidth < 768); // Adjust the threshold as needed
  };

  return (
    <div>
      {isModalOpen && (
        <DeviceOrientationModal
          onClose={toggleModal}
          isMobile={isMobile}
          orientation={orientation}
        />
      )}
    </div>
  );
}

export default DeviceOrientationPrompt;
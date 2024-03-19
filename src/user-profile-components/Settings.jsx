// import React from 'react'

// const Settings = () => {
//   return (
//     <div style={{display:'flex',justifyContent:"center",marginTop:"100px",alignItems:"center"}}>Settings</div>
//   )
// }

// export default Settings

import React, { useState,useEffect } from 'react';

const Settings = () => {
    const [settings, setSettings] = useState({
        notificationsEnabled: true,
        darkModeEnabled: false,
      });
    
      // Function to toggle notifications
      const toggleNotifications = () => {
        setSettings({ ...settings, notificationsEnabled: !settings.notificationsEnabled });
      };
    
      // Function to toggle dark mode
      const toggleDarkMode = () => {
        setSettings({ ...settings, darkModeEnabled: !settings.darkModeEnabled });
      };
    
      // Function to save settings to local storage
      const saveSettings = () => {
        localStorage.setItem('settings', JSON.stringify(settings));
      };
    
      // Function to load settings from local storage
      const loadSettings = () => {
        const storedSettings = localStorage.getItem('settings');
        if (storedSettings) {
          setSettings(JSON.parse(storedSettings));
        }
      };
    
      // Load settings from local storage when component mounts
      useEffect(() => {
        loadSettings();
      }, []);
    
      // Save settings to local storage whenever settings change
      useEffect(() => {
        saveSettings();
      }, [settings]);
    
      return (
        <div className="settings-page">
          <h2>Settings</h2>
          <div className="setting-item">
            <label>
              Notifications:
              <input
                type="checkbox"
                checked={settings.notificationsEnabled}
                onChange={toggleNotifications}
              />
            </label>
          </div>
          <div className="setting-item">
            <label>
              Dark Mode:
              <input
                type="checkbox"
                checked={settings.darkModeEnabled}
                onChange={toggleDarkMode}
              />
            </label>
          </div>
          {/* Add more settings options */}
        </div>
  )
}

export default Settings
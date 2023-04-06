// Service worker registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service worker registered:', registration);
        })
        .catch(error => {
          console.log('Service worker registration failed:', error);
        });
    });
  }
  
  // Service worker implementation
  self.addEventListener('install', event => {
    console.log('Service worker installed');
  });
  
  self.addEventListener('activate', event => {
    console.log('Service worker activated');
  });
  
  self.addEventListener('fetch', event => {
    console.log('Service worker intercepted a fetch event:', event.request.url);
  });
  
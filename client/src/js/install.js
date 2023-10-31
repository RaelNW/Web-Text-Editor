const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Store the triggered events
  window.deferredPrompt = event;
  //remove the hidden class from the install button
  butInstall.classList.toggle("hidden", false);
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
    // Show prompt
    promptEvent.prompt();

    //reset the deferred prompt variable, since prompt() can only be called once.
    window.deferredPrompt = null;

    butInstall.classList.toggle("hidden", true);
});

// Added an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    //clear the deferredPrompt
    window.deferredPrompt = null;
});

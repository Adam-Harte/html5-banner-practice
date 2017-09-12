
// Reference to the creative's various properties and elements.
var creative = {};


/**
 * Called on the window load event.
 */
function preInit() {
  setupDom();

  if (Enabler.isInitialized()) {
    init();
  } else {
    Enabler.addEventListener(
      studio.events.StudioEvent.INIT,
      init
    );
  }
}

/**
 * Set up references to DOM elements.
 */
function setupDom() {
  creative.dom = {};
  creative.dom.mainContainer = document.getElementById('main-container');
  creative.dom.exit = document.getElementById('exit');
  creative.dom.banner = document.getElementById('banner');
  creative.dom.heading1 = document.getElementById('heading-1');
  creative.dom.heading2 = document.getElementById('heading-2');
  creative.dom.heading3 = document.getElementById('heading-3');
  creative.dom.heading4 = document.getElementById('heading-4');
  creative.dom.text1 = document.getElementById('text-1');
  creative.dom.text2 = document.getElementById('text-2');
  creative.dom.footer = document.getElementById('footer');
}

/**
 * The Enabler is now initialized and any extra modules have been loaded.
 */
function init() {
  addListeners();
  // Polite loading
  if (Enabler.isVisible()) {
    show();
  }
  else {
    Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, show);
  }
}

/**
 * Add appropriate listeners after the creative's DOM has been set up.
 */
function addListeners() {
  creative.dom.exit.addEventListener('click', exitClickHandler);
}

function animate() {
  setTimeout(function() {
    creative.dom.banner.style.transform = 'translateX(-100px)';
    creative.dom.heading1.style.transform = 'translate(0px, 0px) scale(1)';
  }, 1)

  setTimeout(function() {
    creative.dom.heading2.style.transform = 'translate(0px, 0px) scale(1)';
  }, 300);

  setTimeout(function() {
    creative.dom.heading3.style.transform = 'translate(0px, 0px) scale(1)';
  }, 600);

  setTimeout(function() {
    creative.dom.heading4.style.transform = 'translate(0px, 0px) scale(1)';
    creative.dom.footer.style.transform = 'translateY(0px)';
  }, 900);

  setTimeout(function() {
    creative.dom.text1.classList.replace('fade-out', 'fade-in');
  }, 1000);

  setTimeout(function() {
    creative.dom.text1.classList.replace('fade-in', 'fade-out');
  }, 5500);

  setTimeout(function() {
    creative.dom.text2.classList.replace('fade-out', 'fade-in');
  }, 5800);
}

/**
 *  Shows the ad.
 */
function show() {
  creative.dom.exit.style.display = "block";
  animate();
}

// ---------------------------------------------------------------------------------
// MAIN
// ---------------------------------------------------------------------------------

function exitClickHandler() {
  Enabler.exit('BackgroundExit');
}

/**
 *  Main onload handler
 */
window.addEventListener('load', preInit);
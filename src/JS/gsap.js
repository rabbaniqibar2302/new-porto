import { gsap } from "gsap";

// Setup
const bgColor = "#FEFBF7";
const easing = "none"; 

const tl = gsap.timeline({
  repeat: -1,
  yoyo: true
});

// top
tl.fromTo("#top-side", 
  { width: 0, backgroundColor: bgColor, ease: easing },
  { width: "100%" , backgroundColor: bgColor, duration: 2.5}
);

// right
tl.fromTo("#right-side", 
  { height: 0, backgroundColor: bgColor, ease: easing },
  { height: "100%", backgroundColor: bgColor, duration: 1 }
);

// bottom
tl.fromTo("#bottom-side", 
  { width: 0, backgroundColor: bgColor, ease: easing },
  { width: "100%", backgroundColor: bgColor, duration: 2.5 }
);

// left
tl.fromTo("#left-side", 
  { height: 0, backgroundColor: bgColor, ease: easing },
  { height: "100%", backgroundColor: bgColor, duration: 1 }
);
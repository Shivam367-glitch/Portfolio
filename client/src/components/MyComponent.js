import React from 'react';
import Typed from 'typed.js';

function MyComponent() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
         strings: ['<h1>Full Stack Developer</h1>','<h1> Web Developer</h1>','<h1>Problem Solver</h1>', '<h1>Web Developer</h1>', '<h1>Full Stack Developer</h1>','<h1>Problem Solver</h1>', '<h1>Web Developer</h1>','<h1>Problem Solver<h1>', '<h1>Full Stack Developer</h1>'],
         typeSpeed: 50, 
        cursorChar:""
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App text-success">
      <span ref={el} />
    </div>
  );
}
export default MyComponent
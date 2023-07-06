import React from 'react';

const Nav = () => {
  return (
    <div>
      <div className="navbar" style={{ overflow: 'hidden', background: '#333', position: 'fixed', top: 0, width: '100%' }}>
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="main">
        <h1>Fixed Top Menu</h1>
        <h2>Scroll this page to see the effect</h2>
        <h2>The navigation bar will stay at the top of the page while scrolling</h2>

        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        <p>Some text some text some text some text..</p>
        {/* ...Rest of the content */}
      </div>
    </div>
  );
};

export default Nav;

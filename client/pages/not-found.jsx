import React from 'react';

const styles = {
  pageContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100%'
  }
};

export default function NotFound(props) {
  return (
    <div style={styles.pageContent}>
      <div className="">
        <div className="">
          <h3>
            Uh oh, we could not find the page you were looking for!
          </h3>
          <p className="">
            <a href="#">Return Home</a>
          </p>
        </div>
      </div>
    </div>
  );
}

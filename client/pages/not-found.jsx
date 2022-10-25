import React from 'react';

const styles = {
  pageContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100%',
    color: 'white'
  }
};

export default function NotFound(props) {
  return (
    <div style={styles.pageContent}>
      <div className="row">
        <div className="col text-center mt-5">
          <h3>
            Uh oh, we could not find the page you were looking for!
          </h3>
          <p className="mt-5">
            <a className="text-gold" href="#">Return Home</a>
          </p>
        </div>
      </div>
    </div>
  );
}

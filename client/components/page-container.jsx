import React from 'react';

const styles = {
  page: {
    minHeight: '100vh'
  }
};

export default function PageContainer({ children }) {
  return (
    <div className="bg-blue">
      <div className="container bg-gold mw100" style={styles.page}>
        {children}
      </div>
    </div>
  );
}

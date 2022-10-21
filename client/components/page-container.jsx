import React from 'react';

const styles = {
  page: {
    minHeight: 'calc(100vh - 3.5rem)'
  }
};

export default function PageContainer({ children }) {
  return (
    <div className="bg-blue">
      <div className="container bg-gold" style={styles.page}>
        {children}
      </div>
    </div>
  );
}

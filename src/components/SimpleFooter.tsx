import React from 'react';

export const SimpleFooter: React.FC = () => {
  return (
    <footer className="bg-accent/20 border-t border-border">
      <div className="container mx-auto px-6 py-8 max-w-4xl">
        <div className="text-center text-muted-foreground">
          <p>
            thank you for visiting my portfolio
          </p>
        </div>
      </div>
    </footer>
  );
};
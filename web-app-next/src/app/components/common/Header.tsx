import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-indigo-600 text-white py-6">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center">{title}</h1>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';

const SocialMediaIcon = ({ 
  provider, 
  onClick, 
  size = 45, 
  variant = 'default',
  className = '',
  style = {},
  ...props 
}) => {
  const getProviderIcon = () => {
    switch (provider.toLowerCase()) {
      case 'google':
        return 'G';
      case 'facebook':
        return 'f';
      case 'linkedin':
        return 'in';
      case 'twitter':
        return 'T';
      default:
        return provider.charAt(0).toUpperCase();
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'default':
        return {
          backgroundColor: '#666',
          color: '#fff'
        };
      case 'google':
        return {
          backgroundColor: '#db4437',
          color: '#fff'
        };
      case 'facebook':
        return {
          backgroundColor: '#4267B2',
          color: '#fff'
        };
      case 'linkedin':
        return {
          backgroundColor: '#0077b5',
          color: '#fff'
        };
      case 'twitter':
        return {
          backgroundColor: '#1DA1F2',
          color: '#fff'
        };
      default:
        return {
          backgroundColor: '#666',
          color: '#fff'
        };
    }
  };

  const iconStyles = {
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: '50%',
    border: 'none',
    fontSize: size > 40 ? '1.2rem' : '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.2s ease, opacity 0.2s ease',
    ...getVariantStyles(),
    ...style
  };


  const handleMouseEnter = (e) => {
    e.target.style.transform = 'scale(1.05)';
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = 'scale(1)';
  };

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={iconStyles}
      aria-label={`Sign in with ${provider}`}
      {...props}
    >
      {getProviderIcon()}
    </button>
  );
};

export default SocialMediaIcon;

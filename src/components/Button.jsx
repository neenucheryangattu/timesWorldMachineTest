import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary', 
  size = 'medium', 
  disabled = false, 
  className = '',
  style = {},
  ...props 
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: '#333',
          border: 'none',
          color: '#fff'
        };
      case 'secondary':
        return {
          backgroundColor: '#666',
          border: 'none',
          color: '#fff'
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          border: '1px solid #333',
          color: '#333'
        };
      default:
        return {
          backgroundColor: '#333',
          border: 'none',
          color: '#fff'
        };
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          padding: '8px 16px',
          fontSize: '0.875rem'
        };
      case 'medium':
        return {
          padding: '12px 16px',
          fontSize: '1rem'
        };
      case 'large':
        return {
          padding: '16px 24px',
          fontSize: '1.125rem'
        };
      default:
        return {
          padding: '12px 16px',
          fontSize: '1rem'
        };
    }
  };

  const buttonStyles = {
    borderRadius: '4px',
    fontWeight: '500',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    transition: 'opacity 0.2s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    ...getVariantStyles(),
    ...getSizeStyles(),
    ...style
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
      style={buttonStyles}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

import * as React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'default', size = 'default', className, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50';
    const variantStyles = {
      default: 'bg-primary text-white hover:bg-primary-dark',
      destructive: 'bg-red-600 text-white hover:bg-red-700',
      outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-100',
      secondary: 'bg-gray-600 text-white hover:bg-gray-700',
      ghost: 'bg-transparent text-gray-700 hover:bg-gray-100',
      link: 'text-blue-600 underline hover:text-blue-700',
    };
    const sizeStyles = {
      default: 'h-10 px-4',
      sm: 'h-8 px-3',
      lg: 'h-12 px-6',
      icon: 'h-10 w-10',
    };

    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    return (
      <button ref={ref} className={combinedStyles} {...props} />
    );
  }
);

Button.displayName = 'Button';

export { Button };
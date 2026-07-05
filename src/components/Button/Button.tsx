import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/cn';
import './Button.css';

export type ButtonIntent = 'default' | 'primary' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  intent?: ButtonIntent;
  size?: ButtonSize;
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { intent = 'default', size = 'md', loading = false, disabled, children, className, ...rest },
  ref
) {
  return (
    <button
      ref={ref}
      className={cn('oc-btn', className)}
      data-intent={intent}
      data-size={size}
      data-loading={loading || undefined}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...rest}
    >
      {loading && <span className="oc-btn__spinner" aria-hidden="true" />}
      <span className="oc-btn__label">{children}</span>
    </button>
  );
});

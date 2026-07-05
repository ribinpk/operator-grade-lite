import { forwardRef, type SVGAttributes } from 'react';
import { cn } from '../../lib/cn';
import { ICON_PATHS, type IconName } from './paths';
import './Icon.css';

export type { IconName };
export type IconSize = 'sm' | 'md';

export interface IconProps extends Omit<SVGAttributes<SVGSVGElement>, 'name'> {
  /** Registry glyph name. */
  name: IconName;
  /** 16px (sm) or 20px (md). Default sm. */
  size?: IconSize;
  /**
   * Accessible label. When provided the icon is exposed as an image with this
   * name; when omitted the icon is decorative (aria-hidden) and must be paired
   * with adjacent text or an aria-label on the interactive parent.
   */
  label?: string;
}

export const Icon = forwardRef<SVGSVGElement, IconProps>(function Icon(
  { name, size = 'sm', label, className, ...rest },
  ref
) {
  const body = ICON_PATHS[name];
  const decorative = label == null;
  return (
    <svg
      ref={ref}
      className={cn('oc-icon', className)}
      data-icon={name}
      data-size={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      role={decorative ? undefined : 'img'}
      aria-hidden={decorative || undefined}
      aria-label={label}
      dangerouslySetInnerHTML={{ __html: body }}
      {...rest}
    />
  );
});

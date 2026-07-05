import './StatusIndicator.css';

export type ThreatKind = 'hostile' | 'friendly' | 'neutral' | 'unknown';
export type StatusKind = 'nominal' | 'caution' | 'critical';

export const THREAT_SHAPE: Record<ThreatKind, string> = {
  hostile: 'diamond',
  friendly: 'rectangle',
  neutral: 'square',
  unknown: 'quatrefoil'
};
export const STATUS_SHAPE: Record<StatusKind, string> = {
  nominal: 'circle',
  caution: 'triangle',
  critical: 'triangle-alert'
};

export interface StatusIndicatorProps {
  threat?: ThreatKind;
  status?: StatusKind;
  label?: string;
  pulse?: boolean;
}

export function StatusIndicator({ threat, status, label, pulse }: StatusIndicatorProps) {
  const kind = threat ?? status ?? 'unknown';
  const shape = threat ? THREAT_SHAPE[threat] : status ? STATUS_SHAPE[status] : 'square';
  const colorVar = threat
    ? `var(--semantic-color-threat-${threat})`
    : `var(--semantic-color-status-${status})`;
  return (
    <span className="oc-status" data-pulse={pulse || undefined}>
      <span
        className="oc-status__mark"
        data-shape={shape}
        style={{ color: colorVar }}
        role="img"
        aria-label={`${kind} (${shape})`}
      >
        {shape === 'triangle-alert' && (
          <span className="oc-status__glyph" aria-hidden="true">!</span>
        )}
      </span>
      {label && <span className="oc-status__label">{label}</span>}
    </span>
  );
}

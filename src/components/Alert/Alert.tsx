import { type ReactNode } from 'react';
import { cn } from '../../lib/cn';
import './Alert.css';

export type Severity = 'info' | 'caution' | 'critical';

const RANK: Record<Severity, { tag: string; glyph: string; order: number; live: 'polite' | 'assertive' }> = {
  critical: { tag: 'P1', glyph: '!', order: 0, live: 'assertive' },
  caution: { tag: 'P2', glyph: '\u25B2', order: 1, live: 'polite' },
  info: { tag: 'P3', glyph: 'i', order: 2, live: 'polite' }
};

export interface AlertItem {
  id: string;
  severity: Severity;
  title: string;
  detail?: string;
}

export function Alert({
  severity,
  title,
  detail,
  onDismiss
}: {
  severity: Severity;
  title: string;
  detail?: string;
  onDismiss?: () => void;
}) {
  const meta = RANK[severity];
  return (
    <div
      className="oc-alert"
      data-severity={severity}
      role={meta.live === 'assertive' ? 'alert' : 'status'}
      aria-live={meta.live}
    >
      <span className="oc-alert__glyph" aria-hidden="true">{meta.glyph}</span>
      <span className="oc-alert__rank" aria-label={`Priority ${meta.tag}`}>{meta.tag}</span>
      <div className="oc-alert__body">
        <p className="oc-alert__title">{title}</p>
        {detail && <p className="oc-alert__detail">{detail}</p>}
      </div>
      {onDismiss && (
        <button className="oc-alert__dismiss" aria-label="Dismiss" onClick={onDismiss}>×</button>
      )}
    </div>
  );
}

export function AlertStack({ items, onDismiss, children }: { items?: AlertItem[]; onDismiss?: (id: string) => void; children?: ReactNode }) {
  const sorted = (items ?? []).slice().sort((a, b) => RANK[a.severity].order - RANK[b.severity].order);
  return (
    <div className={cn('oc-alert-stack')} role="log" aria-label="Alerts">
      {sorted.map((it) => (
        <Alert key={it.id} severity={it.severity} title={it.title} detail={it.detail} onDismiss={onDismiss ? () => onDismiss(it.id) : undefined} />
      ))}
      {children}
    </div>
  );
}

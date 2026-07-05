import { ThemeProvider } from '../components/ThemeProvider';
import { Button } from '../components/Button/Button';
import { StatusIndicator } from '../components/StatusIndicator/StatusIndicator';
import { Alert } from '../components/Alert/Alert';
import { Icon, type IconName } from '../components/Icon/Icon';
import { ICON_PATHS } from '../components/Icon/paths';

const ICON_NAMES = Object.keys(ICON_PATHS) as IconName[];

export function Demo() {
  return (
    <ThemeProvider theme="night" dir="ltr">
      <main className="lite-shell">
        <header className="lite-shell__header">
          <h1 className="lite-shell__title">Operator-Grade Lite</h1>
          <p className="lite-shell__subtitle">Night-NVG mode. Sample panel: Button, StatusIndicator, Alert.</p>
        </header>

        <section className="lite-panel" aria-label="Track status">
          <h2 className="lite-panel__heading">Track Status</h2>
          <div className="lite-row">
            <StatusIndicator threat="hostile" label="Hostile" />
            <StatusIndicator threat="friendly" label="Friendly" />
            <StatusIndicator threat="neutral" label="Neutral" />
            <StatusIndicator threat="unknown" label="Unknown" pulse />
          </div>
          <div className="lite-row">
            <StatusIndicator status="nominal" label="Nominal" />
            <StatusIndicator status="caution" label="Caution" />
            <StatusIndicator status="critical" label="Critical" pulse />
          </div>
        </section>

        <section className="lite-panel" aria-label="Actions">
          <h2 className="lite-panel__heading">Actions</h2>
          <div className="lite-row">
            <Button intent="default">Acknowledge</Button>
            <Button intent="primary">Engage</Button>
            <Button intent="danger">Abort</Button>
          </div>
        </section>

        <section className="lite-panel" aria-label="Alerts">
          <h2 className="lite-panel__heading">Alerts</h2>
          <div className="lite-stack">
            <Alert severity="critical" title="Perimeter breach" detail="Sector 4, north fence line." />
            <Alert severity="caution" title="Comms degraded" detail="Link margin below threshold." />
            <Alert severity="info" title="Shift handover in 10 minutes" />
          </div>
        </section>

        <section className="lite-panel" aria-label="Icon sampler">
          <h2 className="lite-panel__heading">Icon Sampler ({ICON_NAMES.length})</h2>
          <div className="lite-icon-grid">
            {ICON_NAMES.map((name) => (
              <div className="lite-icon-cell" key={name}>
                <Icon name={name} size="md" label={name} />
                <span className="lite-icon-cell__name">{name}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </ThemeProvider>
  );
}

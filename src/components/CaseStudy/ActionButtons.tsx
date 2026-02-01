import { Link } from "react-router-dom";

type Action = { label: string; href: string; external?: boolean; img?: string };
type Actions = { primary: Action; secondary?: Action };

function ActionButton({
  action,
  width,
}: {
  action: Action;
  width: number;
}) {
  const base =
    "inline-flex rounded-full bg-white text-black " +
    "min-h-[56px] px-8 py-3 shadow-sm " + // <-- min height + padding for wrap
    "transition-transform duration-150 hover:scale-[1.01] active:scale-[0.99] " +
    "select-none";

  const content = (
    <span className="flex w-full items-center justify-center gap-3">
      {action.img && (
        <img
          src={action.img}
          alt=""
          className="h-10 w-10 object-contain shrink-0"
          aria-hidden="true"
        />
      )}

      {/* wrap + center */}
      <span className="text-[24px] font-segoe-ui tracking-[0.08em] leading-tight wrap-break-word whitespace-normal">
        {action.label}
      </span>
    </span>
  );

  const style = { width };

  if (action.external) {
    return (
      <a
        href={action.href}
        target="_blank"
        rel="noreferrer"
        className={base}
        style={style}
      >
        {content}
      </a>
    );
  }

  return (
    <Link to={action.href} className={base} style={style}>
      {content}
    </Link>
  );
}

export default function CaseStudyActions({ actions }: { actions?: Actions }) {
  if (!actions?.primary) return null;

  const hasSecondary = Boolean(actions.secondary);

  const BTN_W = 350; // pick the fixed width you want for each button
  const GAP = 24;
  const SINGLE_W = BTN_W * 2 + GAP; // “sum of 2 btns” for single primary

  return (
    <div className="py-24">
      <div className="mx-auto flex w-full justify-center">
        {hasSecondary ? (
          <div className="flex gap-6 items-stretch">
            <ActionButton action={actions.primary} width={BTN_W} />
            <ActionButton action={actions.secondary!} width={BTN_W} />
          </div>
        ) : (
          <ActionButton action={actions.primary} width={SINGLE_W} />
        )}
      </div>
    </div>
  );
}


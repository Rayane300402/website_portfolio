import React from "react";

export type MetaCol = {
  label: string; // e.g. "WORK"
  lines: React.ReactNode[]; // lines under the label
};

type GridProps = {
  cols: [MetaCol, MetaCol, MetaCol];
};

export default function CaseStudyGrid({ cols }: GridProps) {
  return (
    <div
  className="grid w-full grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10 md:gap-y-0"
>
  {cols.map((col, i) => (
    <div
      key={i}
      className="flex flex-col items-center text-center"
    >
      <div className="uppercase underline underline-offset-4 tracking-wide text-xl font-semibold">
        {col.label}
      </div>
      <div className="mt-4 space-y-1 text-xl leading-relaxed">
        {col.lines.map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}
      </div>
    </div>
  ))}
</div>

  );
}

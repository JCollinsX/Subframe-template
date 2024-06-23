"use client";
/*
 * Documentation:
 * Social Suggested Card — https://app.subframe.com/0404b3bb1ee2/library?component=Social+Suggested+Card_33d24479-6d86-4570-9464-7d2b63bc13a8
 * Avatar — https://app.subframe.com/0404b3bb1ee2/library?component=Avatar_bec25ae6-5010-4485-b46b-cf79e3943ab2
 * Button — https://app.subframe.com/0404b3bb1ee2/library?component=Button_3b777358-b86b-40af-9327-891efc6826fe
 */

import React from "react";
import * as SubframeCore from "@subframe/core";

interface SocialSuggestedCardRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

const SocialSuggestedCardRoot = React.forwardRef<
  HTMLElement,
  SocialSuggestedCardRootProps
>(function SocialSuggestedCardRoot(
  { title, children, className, ...otherProps }: SocialSuggestedCardRootProps,
  ref
) {
  return (
    <div
      className={SubframeCore.twClassNames(
        "flex min-w-[320px] flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background pt-6 pr-6 pb-6 pl-6",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      {title ? (
        <span className="w-full text-heading-3 font-heading-3 text-default-font">
          {title}
        </span>
      ) : null}
      {children ? (
        <div className="flex w-full flex-col items-start gap-4">{children}</div>
      ) : null}
    </div>
  );
});

export const SocialSuggestedCard = SocialSuggestedCardRoot;

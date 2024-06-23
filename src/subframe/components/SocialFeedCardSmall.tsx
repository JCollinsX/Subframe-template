"use client";
/*
 * Documentation:
 * Social Feed Card Small — https://app.subframe.com/0404b3bb1ee2/library?component=Social+Feed+Card+Small_7261bfa3-f0b9-4a55-8e3e-7a4b484711ca
 */

import React from "react";
import * as SubframeCore from "@subframe/core";

interface SocialFeedCardSmallRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  icon?: SubframeCore.IconName;
  title?: string;
  caption?: string;
  className?: string;
}

const SocialFeedCardSmallRoot = React.forwardRef<
  HTMLElement,
  SocialFeedCardSmallRootProps
>(function SocialFeedCardSmallRoot(
  {
    icon = "FeatherGlobe",
    title,
    caption,
    className,
    ...otherProps
  }: SocialFeedCardSmallRootProps,
  ref
) {
  return (
    <div
      className={SubframeCore.twClassNames(
        "flex w-full cursor-pointer flex-wrap items-start overflow-hidden rounded-lg border border-solid border-neutral-border bg-default-background",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      <div className="flex h-28 w-28 flex-none items-center justify-center gap-2 overflow-hidden border-r border-solid border-neutral-border bg-neutral-50">
        <SubframeCore.Icon
          className="text-heading-1 font-heading-1 text-neutral-300"
          name={icon}
        />
      </div>
      <div className="flex grow shrink-0 basis-0 flex-col items-start justify-center gap-1 self-stretch pt-4 pr-4 pb-4 pl-4">
        {title ? (
          <span className="line-clamp-1 w-full text-body-bold font-body-bold text-default-font">
            {title}
          </span>
        ) : null}
        {caption ? (
          <span className="line-clamp-2 w-full text-caption font-caption text-subtext-color">
            {caption}
          </span>
        ) : null}
      </div>
    </div>
  );
});

export const SocialFeedCardSmall = SocialFeedCardSmallRoot;

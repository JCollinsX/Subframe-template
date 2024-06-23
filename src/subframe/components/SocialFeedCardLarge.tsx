"use client";
/*
 * Documentation:
 * Social Feed Card Large — https://app.subframe.com/0404b3bb1ee2/library?component=Social+Feed+Card+Large_2ccb2b63-c10d-4ebb-bbcf-dc5ec3f58602
 */

import React from "react";
import * as SubframeCore from "@subframe/core";

interface SocialFeedCardLargeRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  image?: string;
  title?: string;
  subtitle?: string;
  caption?: string;
  className?: string;
}

const SocialFeedCardLargeRoot = React.forwardRef<
  HTMLElement,
  SocialFeedCardLargeRootProps
>(function SocialFeedCardLargeRoot(
  {
    image,
    title,
    subtitle,
    caption,
    className,
    ...otherProps
  }: SocialFeedCardLargeRootProps,
  ref
) {
  return (
    <div
      className={SubframeCore.twClassNames(
        "flex w-full cursor-pointer flex-col items-start overflow-hidden rounded-lg border border-solid border-neutral-border bg-default-background",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      <div className="flex h-48 w-full flex-none flex-col items-center justify-center gap-2 overflow-hidden border-b border-solid border-neutral-border bg-neutral-50">
        {image ? <img className="w-full flex-none" src={image} /> : null}
      </div>
      <div className="flex w-full flex-col items-start gap-1 pt-4 pr-4 pb-4 pl-4">
        {title ? (
          <span className="line-clamp-2 w-full text-body-bold font-body-bold text-default-font">
            {title}
          </span>
        ) : null}
        {subtitle ? (
          <span className="line-clamp-3 w-full text-body font-body text-subtext-color">
            {subtitle}
          </span>
        ) : null}
        {caption ? (
          <span className="line-clamp-1 w-full text-caption font-caption text-subtext-color">
            {caption}
          </span>
        ) : null}
      </div>
    </div>
  );
});

export const SocialFeedCardLarge = SocialFeedCardLargeRoot;

"use client";
/*
 * Documentation:
 * Social Feed Image — https://app.subframe.com/0404b3bb1ee2/library?component=Social+Feed+Image_b4e6fdf1-c712-4e29-8da8-51503234b8f2
 */

import React from "react";
import * as SubframeCore from "@subframe/core";

interface SocialFeedImageRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  image?: string;
  className?: string;
}

const SocialFeedImageRoot = React.forwardRef<
  HTMLElement,
  SocialFeedImageRootProps
>(function SocialFeedImageRoot(
  { image, className, ...otherProps }: SocialFeedImageRootProps,
  ref
) {
  return (
    <div
      className={SubframeCore.twClassNames(
        "flex w-full cursor-pointer flex-col items-start gap-3 overflow-hidden",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      <div className="flex w-full flex-col items-start gap-4 overflow-hidden rounded-lg shadow-default">
        {image ? <img className="w-full flex-none" src={image} /> : null}
      </div>
    </div>
  );
});

export const SocialFeedImage = SocialFeedImageRoot;

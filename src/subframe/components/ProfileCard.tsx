"use client";
/*
 * Documentation:
 * Profile Card — https://app.subframe.com/0404b3bb1ee2/library?component=Profile+Card_e79c70c5-59a4-425a-852c-e5d87a9edfdb
 */

import React from "react";
import * as SubframeCore from "@subframe/core";

interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  value?: string;
  className?: string;
}

const Stat = React.forwardRef<HTMLElement, StatProps>(function Stat(
  { label, value, className, ...otherProps }: StatProps,
  ref
) {
  return (
    <div
      className={SubframeCore.twClassNames(
        "flex w-full flex-col items-start gap-1",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      {label ? (
        <span className="line-clamp-1 w-full text-caption font-caption text-subtext-color">
          {label}
        </span>
      ) : null}
      {value ? (
        <span className="line-clamp-1 w-full text-body-bold font-body-bold text-default-font">
          {value}
        </span>
      ) : null}
    </div>
  );
});

interface ProfileCardRootProps extends React.HTMLAttributes<HTMLDivElement> {
  image?: string;
  title?: string;
  icon?: SubframeCore.IconName;
  children?: React.ReactNode;
  className?: string;
}

const ProfileCardRoot = React.forwardRef<HTMLElement, ProfileCardRootProps>(
  function ProfileCardRoot(
    {
      image,
      title,
      icon = "FeatherVerified",
      children,
      className,
      ...otherProps
    }: ProfileCardRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeCore.twClassNames(
          "group/e79c70c5 flex w-full cursor-pointer flex-col items-start overflow-hidden rounded-lg bg-neutral-100 hover:bg-neutral-50 hover:shadow-default",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        {image ? (
          <img className="h-40 w-full flex-none object-cover" src={image} />
        ) : null}
        <div className="flex w-full flex-col items-start gap-4 pt-4 pr-4 pb-4 pl-4">
          <div className="flex w-full items-center gap-1">
            <div className="flex items-center gap-2">
              {title ? (
                <span className="grow shrink-0 basis-0 text-heading-3 font-heading-3 text-default-font">
                  {title}
                </span>
              ) : null}
            </div>
            <SubframeCore.Icon
              className="text-heading-3 font-heading-3 text-brand-700"
              name={icon}
            />
          </div>
          {children ? (
            <div className="flex w-full items-start gap-4 pb-1">{children}</div>
          ) : null}
        </div>
      </div>
    );
  }
);

export const ProfileCard = Object.assign(ProfileCardRoot, {
  Stat,
});

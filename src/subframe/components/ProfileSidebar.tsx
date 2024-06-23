"use client";
/*
 * Documentation:
 * Profile Sidebar — https://app.subframe.com/0404b3bb1ee2/library?component=Profile+Sidebar_46fac1b2-c454-41ce-92b8-f103e1a1fa2b
 */

import React from "react";
import * as SubframeCore from "@subframe/core";

interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: SubframeCore.IconName;
  children?: string;
  selected?: boolean;
  className?: string;
}

const Item = React.forwardRef<HTMLElement, ItemProps>(function Item(
  {
    icon = "FeatherHome",
    children,
    selected = false,
    className,
    ...otherProps
  }: ItemProps,
  ref
) {
  return (
    <div
      className={SubframeCore.twClassNames(
        "group/43fe3b9f flex w-full cursor-pointer items-center gap-4 rounded-lg pt-3 pr-4 pb-3 pl-4 hover:bg-neutral-100",
        { "bg-white shadow-default hover:bg-white": selected },
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      <div className="flex items-start gap-2 pb-0.5">
        <SubframeCore.Icon
          className="text-[18px] font-[500] leading-[28px] text-default-font group-hover/43fe3b9f:text-neutral-800"
          name={icon}
        />
      </div>
      {children ? (
        <span className="text-body-bold font-body-bold text-default-font group-hover/43fe3b9f:text-neutral-800">
          {children}
        </span>
      ) : null}
    </div>
  );
});

interface ProfileSidebarRootProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

const ProfileSidebarRoot = React.forwardRef<
  HTMLElement,
  ProfileSidebarRootProps
>(function ProfileSidebarRoot(
  { children, className, ...otherProps }: ProfileSidebarRootProps,
  ref
) {
  return (
    <nav
      className={SubframeCore.twClassNames(
        "group/46fac1b2 flex h-full w-56 flex-col items-start border-r border-solid border-neutral-border bg-white border-none bg-neutral-50",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      <div className="flex w-full items-start gap-2 pt-6 pr-6 pb-6 pl-6">
        <SubframeCore.Icon
          className="text-heading-1 font-heading-1 text-brand-600"
          name="FeatherMountain"
        />
      </div>
      {children ? (
        <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-1 pt-4 pr-4 pb-4 pl-4">
          {children}
        </div>
      ) : null}
    </nav>
  );
});

export const ProfileSidebar = Object.assign(ProfileSidebarRoot, {
  Item,
});

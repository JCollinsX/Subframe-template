"use client";
/*
 * Documentation:
 * Social Nav — https://app.subframe.com/0404b3bb1ee2/library?component=Social+Nav_df72f970-322d-4061-b412-ecba2fb1e567
 * Dropdown Menu — https://app.subframe.com/0404b3bb1ee2/library?component=Dropdown+Menu_99951515-459b-4286-919e-a89e7549b43b
 * Avatar — https://app.subframe.com/0404b3bb1ee2/library?component=Avatar_bec25ae6-5010-4485-b46b-cf79e3943ab2
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import { DropdownMenu } from "./DropdownMenu";
import { Tooltip } from "./Tooltip";

interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  selected?: boolean;
  icon?: SubframeCore.IconName;
  children?: string;
  className?: string;
}

const Item = React.forwardRef<HTMLElement, ItemProps>(function Item(
  {
    selected = false,
    icon = "FeatherPlus",
    children,
    className,
    ...otherProps
  }: ItemProps,
  ref
) {
  return (
    <SubframeCore.Tooltip.Provider>
      <SubframeCore.Tooltip.Root>
        <SubframeCore.Tooltip.Trigger asChild={true}>
          <div
            className={SubframeCore.twClassNames(
              "group/fa34bcb9 flex cursor-pointer flex-col items-start gap-4 rounded-lg pt-2 pr-2 pb-2 pl-2 hover:bg-neutral-100 active:bg-neutral-50",
              { "bg-brand-50 hover:bg-brand-50 active:bg-brand-50": selected },
              className
            )}
            ref={ref as any}
            {...otherProps}
          >
            <SubframeCore.Icon
              className={SubframeCore.twClassNames(
                "text-[24px] font-[500] leading-[24px] text-default-font",
                { "text-brand-700": selected }
              )}
              name={icon}
            />
          </div>
        </SubframeCore.Tooltip.Trigger>
        <SubframeCore.Tooltip.Portal>
          <SubframeCore.Tooltip.Content
            side="right"
            align="center"
            sideOffset={4}
            asChild={true}
          >
            <Tooltip>{children}</Tooltip>
          </SubframeCore.Tooltip.Content>
        </SubframeCore.Tooltip.Portal>
      </SubframeCore.Tooltip.Root>
    </SubframeCore.Tooltip.Provider>
  );
});

interface SocialNavRootProps extends React.HTMLAttributes<HTMLDivElement> {
  logo?: string;
  children?: React.ReactNode;
  className?: string;
}

const SocialNavRoot = React.forwardRef<HTMLElement, SocialNavRootProps>(
  function SocialNavRoot(
    { logo, children, className, ...otherProps }: SocialNavRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeCore.twClassNames(
          "flex h-full flex-col items-end gap-6 border-r border-solid border-neutral-border pt-6 pr-6 pb-6 pl-6",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        <div className="flex grow shrink-0 basis-0 flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            {logo ? <img className="w-8 flex-none" src={logo} /> : null}
          </div>
          {children ? (
            <div className="flex grow shrink-0 basis-0 flex-col items-center gap-4">
              {children}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
);

export const SocialNav = Object.assign(SocialNavRoot, {
  Item,
});

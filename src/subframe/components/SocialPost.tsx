"use client";
/*
 * Documentation:
 * Social Post — https://app.subframe.com/0404b3bb1ee2/library?component=Social+Post_b183a943-e6dc-4de8-bdbe-571a3ab10630
 * Avatar — https://app.subframe.com/0404b3bb1ee2/library?component=Avatar_bec25ae6-5010-4485-b46b-cf79e3943ab2
 * Link Button — https://app.subframe.com/0404b3bb1ee2/library?component=Link+Button_a4ee726a-774c-4091-8c49-55b659356024
 * Social Feed Card Large — https://app.subframe.com/0404b3bb1ee2/library?component=Social+Feed+Card+Large_2ccb2b63-c10d-4ebb-bbcf-dc5ec3f58602
 * Social Feed Image — https://app.subframe.com/0404b3bb1ee2/library?component=Social+Feed+Image_b4e6fdf1-c712-4e29-8da8-51503234b8f2
 * Social Feed Card Small — https://app.subframe.com/0404b3bb1ee2/library?component=Social+Feed+Card+Small_7261bfa3-f0b9-4a55-8e3e-7a4b484711ca
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import { Avatar } from "./Avatar";
import { LinkButton } from "./LinkButton";
import { Tooltip } from "./Tooltip";
import { Button } from "./Button";
import { IconButton } from "./IconButton";
import { DropdownMenu } from "./DropdownMenu";

interface SocialPostToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const SocialPostToolbar = React.forwardRef<HTMLElement, SocialPostToolbarProps>(
  function SocialPostToolbar(
    { className, ...otherProps }: SocialPostToolbarProps,
    ref
  ) {
    return (
      <div
        className={SubframeCore.twClassNames(
          "flex w-full items-center justify-between pt-3",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        <SubframeCore.Tooltip.Provider>
          <SubframeCore.Tooltip.Root>
            <SubframeCore.Tooltip.Trigger asChild={true}>
              <Button
                variant="neutral-tertiary"
                size="large"
                icon="FeatherMessageCircle"
              />
            </SubframeCore.Tooltip.Trigger>
            <SubframeCore.Tooltip.Portal>
              <SubframeCore.Tooltip.Content
                side="bottom"
                align="center"
                sideOffset={4}
                asChild={true}
              >
                <Tooltip>Comment</Tooltip>
              </SubframeCore.Tooltip.Content>
            </SubframeCore.Tooltip.Portal>
          </SubframeCore.Tooltip.Root>
        </SubframeCore.Tooltip.Provider>
        <SubframeCore.Tooltip.Provider>
          <SubframeCore.Tooltip.Root>
            <SubframeCore.Tooltip.Trigger asChild={true}>
              <IconButton size="large" icon="FeatherRepeat" />
            </SubframeCore.Tooltip.Trigger>
            <SubframeCore.Tooltip.Portal>
              <SubframeCore.Tooltip.Content
                side="bottom"
                align="center"
                sideOffset={4}
                asChild={true}
              >
                <Tooltip>Repost</Tooltip>
              </SubframeCore.Tooltip.Content>
            </SubframeCore.Tooltip.Portal>
          </SubframeCore.Tooltip.Root>
        </SubframeCore.Tooltip.Provider>
        <SubframeCore.Tooltip.Provider>
          <SubframeCore.Tooltip.Root>
            <SubframeCore.Tooltip.Trigger asChild={true}>
              <Button
                variant="neutral-tertiary"
                size="large"
                icon="FeatherHeart"
              />
            </SubframeCore.Tooltip.Trigger>
            <SubframeCore.Tooltip.Portal>
              <SubframeCore.Tooltip.Content
                side="bottom"
                align="center"
                sideOffset={4}
                asChild={true}
              >
                <Tooltip>Like</Tooltip>
              </SubframeCore.Tooltip.Content>
            </SubframeCore.Tooltip.Portal>
          </SubframeCore.Tooltip.Root>
        </SubframeCore.Tooltip.Provider>
        <SubframeCore.Tooltip.Provider>
          <SubframeCore.Tooltip.Root>
            <SubframeCore.Tooltip.Trigger asChild={true}>
              <IconButton size="large" icon="FeatherBookmark" />
            </SubframeCore.Tooltip.Trigger>
            <SubframeCore.Tooltip.Portal>
              <SubframeCore.Tooltip.Content
                side="bottom"
                align="center"
                sideOffset={4}
                asChild={true}
              >
                <Tooltip>Save</Tooltip>
              </SubframeCore.Tooltip.Content>
            </SubframeCore.Tooltip.Portal>
          </SubframeCore.Tooltip.Root>
        </SubframeCore.Tooltip.Provider>
        <SubframeCore.DropdownMenu.Root>
          <SubframeCore.DropdownMenu.Trigger asChild={true}>
            <IconButton size="large" icon="FeatherMoreHorizontal" />
          </SubframeCore.DropdownMenu.Trigger>
          <SubframeCore.DropdownMenu.Portal>
            <SubframeCore.DropdownMenu.Content
              side="bottom"
              align="end"
              sideOffset={4}
              asChild={true}
            >
              <DropdownMenu className="h-auto w-auto flex-none">
                <DropdownMenu.DropdownItem icon="FeatherLink">
                  Copy link
                </DropdownMenu.DropdownItem>
                <DropdownMenu.DropdownItem icon="FeatherFlag">
                  Report
                </DropdownMenu.DropdownItem>
              </DropdownMenu>
            </SubframeCore.DropdownMenu.Content>
          </SubframeCore.DropdownMenu.Portal>
        </SubframeCore.DropdownMenu.Root>
      </div>
    );
  }
);

interface SocialPostRootProps extends React.HTMLAttributes<HTMLDivElement> {
  avatar?: string;
  name?: string;
  badge?: SubframeCore.IconName;
  handle?: string;
  timestamp?: string;
  commentCount?: string;
  likeCount?: string;
  children?: React.ReactNode;
  preview?: React.ReactNode;
  className?: string;
}

const SocialPostRoot = React.forwardRef<HTMLElement, SocialPostRootProps>(
  function SocialPostRoot(
    {
      avatar,
      name,
      badge = "FeatherVerified",
      handle,
      timestamp,
      commentCount,
      likeCount,
      children,
      preview,
      className,
      ...otherProps
    }: SocialPostRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeCore.twClassNames(
          "flex w-full flex-col items-start border-b border-solid border-neutral-border pt-6 pr-6 pb-4 pl-6",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        <div className="flex w-full items-center gap-4">
          <Avatar size="large" image={avatar}>
            AB
          </Avatar>
          <div className="flex grow shrink-0 basis-0 flex-col items-start justify-center">
            <div className="flex items-center gap-1">
              {name ? (
                <span className="text-body-bold font-body-bold text-default-font">
                  {name}
                </span>
              ) : null}
              <SubframeCore.Icon
                className="text-body font-body text-brand-700"
                name={badge}
              />
            </div>
            <LinkButton>{handle}</LinkButton>
          </div>
        </div>
        <div className="flex w-full flex-col items-start">
          <div className="flex w-full flex-col items-start gap-1 pt-4">
            {children ? (
              <div className="flex w-full flex-col items-start gap-1">
                {children}
              </div>
            ) : null}
            {preview ? (
              <div className="flex w-full flex-col items-start gap-4 pt-3 pb-3">
                {preview}
              </div>
            ) : null}
          </div>
          <div className="flex w-full flex-col items-start border-b border-solid border-neutral-border pt-4 pb-4">
            {timestamp ? (
              <span className="w-full text-body font-body text-subtext-color">
                {timestamp}
              </span>
            ) : null}
          </div>
          <div className="flex w-full items-start gap-4 border-b border-solid border-neutral-border pt-4 pb-4">
            <div className="flex items-start gap-1">
              <LinkButton>{likeCount}</LinkButton>
              <span className="text-body font-body text-subtext-color">
                Likes
              </span>
            </div>
            <div className="flex items-start gap-1">
              <LinkButton>{commentCount}</LinkButton>
              <span className="text-body font-body text-subtext-color">
                Comments
              </span>
            </div>
          </div>
          <SocialPostToolbar />
        </div>
      </div>
    );
  }
);

export const SocialPost = Object.assign(SocialPostRoot, {
  SocialPostToolbar,
});

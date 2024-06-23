"use client";
/*
 * Documentation:
 * Social Feed Post — https://app.subframe.com/0404b3bb1ee2/library?component=Social+Feed+Post_b3467520-5ba1-4160-af6b-c0398beac8f4
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
  commentCount?: string;
  likeCount?: string;
  className?: string;
}

const SocialPostToolbar = React.forwardRef<HTMLElement, SocialPostToolbarProps>(
  function SocialPostToolbar(
    {
      commentCount,
      likeCount,
      className,
      ...otherProps
    }: SocialPostToolbarProps,
    ref
  ) {
    return (
      <div
        className={SubframeCore.twClassNames(
          "flex w-full items-center justify-between",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        <SubframeCore.Tooltip.Provider>
          <SubframeCore.Tooltip.Root>
            <SubframeCore.Tooltip.Trigger asChild={true}>
              <Button variant="neutral-tertiary" icon="FeatherMessageCircle">
                {commentCount}
              </Button>
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
              <IconButton icon="FeatherRepeat" />
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
              <Button variant="neutral-tertiary" icon="FeatherHeart">
                {likeCount}
              </Button>
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
              <IconButton icon="FeatherBookmark" />
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
            <IconButton icon="FeatherMoreHorizontal" />
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

interface SocialFeedPostRootProps extends React.HTMLAttributes<HTMLDivElement> {
  avatar?: string;
  name?: string;
  badge?: SubframeCore.IconName;
  handle?: string;
  timestamp?: string;
  commentCount?: string;
  likeCount?: string;
  children?: React.ReactNode;
  preview?: React.ReactNode;
  isThread?: boolean;
  className?: string;
}

const SocialFeedPostRoot = React.forwardRef<
  HTMLElement,
  SocialFeedPostRootProps
>(function SocialFeedPostRoot(
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
    isThread = false,
    className,
    ...otherProps
  }: SocialFeedPostRootProps,
  ref
) {
  return (
    <div
      className={SubframeCore.twClassNames(
        "group/b3467520 flex w-full cursor-pointer items-start border-b border-solid border-neutral-border pt-6 pr-6 pb-6 pl-6 hover:bg-neutral-50",
        { "border-none pt-0 pr-4 pb-0 pl-4": isThread },
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      <div className="flex flex-col items-center self-stretch">
        <div
          className={SubframeCore.twClassNames(
            "hidden w-0.5 grow shrink-0 basis-0 flex-col items-center gap-2 bg-neutral-border",
            { "flex h-4 w-px flex-none": isThread }
          )}
        />
        <Avatar size="large" image={avatar}>
          AB
        </Avatar>
        <div
          className={SubframeCore.twClassNames(
            "hidden w-0.5 grow shrink-0 basis-0 flex-col items-center gap-2 bg-neutral-border",
            { "flex w-px grow shrink-0 basis-0": isThread }
          )}
        />
      </div>
      <div
        className={SubframeCore.twClassNames(
          "flex grow shrink-0 basis-0 flex-col items-start",
          { "pt-4 pr-0 pb-2 pl-0": isThread }
        )}
      >
        <div className="flex w-full flex-col items-start gap-1 pt-1 pr-1 pb-1 pl-3">
          <div className="flex flex-wrap items-center gap-1">
            {name ? (
              <span className="text-body-bold font-body-bold text-default-font">
                {name}
              </span>
            ) : null}
            <SubframeCore.Icon
              className="text-body font-body text-brand-700"
              name={badge}
            />
            <LinkButton>{handle}</LinkButton>
            <span className="text-body font-body text-subtext-color">•</span>
            <LinkButton>{timestamp}</LinkButton>
          </div>
          {children ? (
            <div className="flex w-full flex-col items-start gap-1">
              {children}
            </div>
          ) : null}
          {preview ? (
            <div
              className={SubframeCore.twClassNames(
                "flex w-full flex-col items-start gap-4 pt-4 pb-4",
                { flex: isThread }
              )}
            >
              {preview}
            </div>
          ) : null}
        </div>
        <SocialPostToolbar commentCount={commentCount} likeCount={likeCount} />
      </div>
    </div>
  );
});

export const SocialFeedPost = Object.assign(SocialFeedPostRoot, {
  SocialPostToolbar,
});

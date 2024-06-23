"use client";

import React from "react";
import { SocialNav } from "@/subframe/components/SocialNav";
import { DropdownMenu } from "@/subframe/components/DropdownMenu";
import * as SubframeCore from "@subframe/core";
import { Avatar } from "@/subframe/components/Avatar";
import { IconButton } from "@/subframe/components/IconButton";
import { LinkButton } from "@/subframe/components/LinkButton";
import { Button } from "@/subframe/components/Button";
import { Tabs } from "@/subframe/components/Tabs";
import { SocialFeedCardLarge } from "@/subframe/components/SocialFeedCardLarge";
import { SocialFeedPost } from "@/subframe/components/SocialFeedPost";
import { SocialFeedCardSmall } from "@/subframe/components/SocialFeedCardSmall";
import { SocialFeedImage } from "@/subframe/components/SocialFeedImage";
import { SocialSuggestedCard } from "@/subframe/components/SocialSuggestedCard";

function SocialProfile() {
    return (
        <div className="flex h-full w-full items-start justify-center bg-default-background mobile:pt-0 mobile:pr-0 mobile:pb-12 mobile:pl-0">
            <SocialNav logo="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/y2rsnhq3mex4auk54aye.png">
                <SocialNav.Item selected={true} icon="FeatherHome">
                    Home
                </SocialNav.Item>
                <SocialNav.Item icon="FeatherSearch">Search</SocialNav.Item>
                <SocialNav.Item icon="FeatherBell">Notifications</SocialNav.Item>
                <SocialNav.Item icon="FeatherInbox">Inbox</SocialNav.Item>
                <SocialNav.Item icon="FeatherBookmark">Saved</SocialNav.Item>
                <SocialNav.Item icon="FeatherSettings">Settings</SocialNav.Item>
                <SubframeCore.DropdownMenu.Root>
                    <SubframeCore.DropdownMenu.Trigger asChild={true}>
                        <Avatar image="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/fychrij7dzl8wgq2zjq9.avif">
                            AB
                        </Avatar>
                    </SubframeCore.DropdownMenu.Trigger>
                    <SubframeCore.DropdownMenu.Portal>
                        <SubframeCore.DropdownMenu.Content
                            side="right"
                            align="end"
                            sideOffset={4}
                            asChild={true}
                        >
                            <DropdownMenu>
                                <DropdownMenu.DropdownItem icon="FeatherUser">
                                    Edit profile
                                </DropdownMenu.DropdownItem>
                                <DropdownMenu.DropdownItem icon="FeatherRepeat">
                                    Switch accounts
                                </DropdownMenu.DropdownItem>
                                <DropdownMenu.DropdownItem icon="FeatherArrowRightCircle">
                                    Sign out
                                </DropdownMenu.DropdownItem>
                            </DropdownMenu>
                        </SubframeCore.DropdownMenu.Content>
                    </SubframeCore.DropdownMenu.Portal>
                </SubframeCore.DropdownMenu.Root>
            </SocialNav>
            <div className="flex max-w-[576px] grow shrink-0 basis-0 flex-col items-start self-stretch border-r border-solid border-neutral-border">
                <div className="flex h-20 w-full flex-none items-center gap-2 border-b border-solid border-neutral-border pt-6 pr-6 pb-6 pl-6">
                    <IconButton icon="FeatherArrowLeft" />
                    <span className="grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font">
            @subframeapp
          </span>
                    <IconButton icon="FeatherMoreHorizontal" />
                </div>
                <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-8 pt-12 pr-8 pb-8 pl-8">
                    <div className="flex w-full items-center gap-6">
                        <Avatar
                            size="x-large"
                            image="https://res.cloudinary.com/subframe/image/upload/v1718919568/uploads/3102/mmfbvgi9hwpewyqglgul.png"
                        >
                            AB
                        </Avatar>
                        <div className="flex grow shrink-0 basis-0 items-center gap-4">
                            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                <span className="text-heading-2 font-heading-2 text-default-font">
                  Subframe
                </span>
                                <LinkButton>@subframeapp</LinkButton>
                            </div>
                            <div className="flex items-center gap-1 rounded-full bg-brand-100 pt-1.5 pr-3 pb-1.5 pl-2">
                                <SubframeCore.Icon
                                    className="text-heading-2 font-heading-2 text-brand-700"
                                    name="FeatherVerified"
                                />
                                <span className="whitespace-nowrap text-body-bold font-body-bold text-brand-700">
                  Verified
                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full items-center gap-2">
                        <Button size="large">Follow</Button>
                        <Button variant="brand-secondary" size="large">
                            Message
                        </Button>
                        <Button variant="brand-secondary" size="large">
                            More
                        </Button>
                    </div>
                </div>
                <div className="flex w-full items-end">
                    <div className="flex w-6 flex-none flex-col items-start gap-2 self-stretch border-b border-solid border-neutral-border" />
                    <Tabs>
                        <Tabs.Item className="h-10 grow shrink-0 basis-0" active={true}>
                            Posts
                        </Tabs.Item>
                        <Tabs.Item className="h-10 grow shrink-0 basis-0" active={false}>
                            Replies
                        </Tabs.Item>
                        <Tabs.Item className="h-10 grow shrink-0 basis-0">Media</Tabs.Item>
                    </Tabs>
                    <div className="flex w-6 flex-none flex-col items-start gap-2 self-stretch border-b border-solid border-neutral-border" />
                </div>
                <SocialFeedPost
                    avatar="https://res.cloudinary.com/subframe/image/upload/v1718919568/uploads/3102/mmfbvgi9hwpewyqglgul.png"
                    name="Subframe"
                    handle="@subframeapp"
                    timestamp="Apr 24"
                    commentCount="7"
                    likeCount="83"
                    preview={
                        <SocialFeedCardLarge
                            image="https://res.cloudinary.com/subframe/image/upload/v1713908895/uploads/279/fgotrrosb9jl6bryufsx.avif"
                            title="Subframe – design to code in minutes"
                            subtitle="The best way to build UI, fast."
                            caption="www.subframe.com"
                        />
                    }
                >
          <span className="w-full whitespace-pre-wrap text-body font-body text-default-font">
            {
                "🚨 Big announcement – after two years of beta, Subframe is now open to everyone!\n\nSubframe is the best way to build UI, fast. It's a design tool that lets you visually build UI using real components, then export it as React / Tailwind code 👇"
            }
          </span>
                </SocialFeedPost>
                <SocialFeedPost
                    avatar="https://res.cloudinary.com/subframe/image/upload/v1718919568/uploads/3102/mmfbvgi9hwpewyqglgul.png"
                    name="Subframe"
                    handle="@subframeapp"
                    timestamp="2d"
                    commentCount="2"
                    likeCount="14"
                    preview={
                        <SocialFeedCardSmall
                            icon="FeatherNewspaper"
                            title="Responsive design for mobile breakpoints"
                            caption="help.subframe.com"
                        />
                    }
                >
          <span className="w-full text-body font-body text-default-font">
            Add mobile breakpoints to Subframe 👉
          </span>
                </SocialFeedPost>
                <SocialFeedPost
                    avatar="https://res.cloudinary.com/subframe/image/upload/v1718919568/uploads/3102/mmfbvgi9hwpewyqglgul.png"
                    name="Subframe"
                    handle="@subframeapp"
                    timestamp="Mar 4"
                    commentCount="10"
                    likeCount="43"
                    preview={
                        <SocialFeedImage image="https://res.cloudinary.com/subframe/image/upload/v1713908878/uploads/279/uktn4z8cnfybwdmvu313.avif" />
                    }
                >
          <span className="w-full text-body font-body text-default-font">
            Watch how to get started with Subframe in just a few minutes
          </span>
                </SocialFeedPost>
                <SocialFeedPost
                    avatar="https://res.cloudinary.com/subframe/image/upload/v1718919568/uploads/3102/mmfbvgi9hwpewyqglgul.png"
                    name="Subframe"
                    handle="@subframeapp"
                    timestamp="Jan 7"
                    commentCount="1"
                    likeCount="8"
                >
          <span className="w-full whitespace-pre-wrap text-body font-body text-default-font">
            {
                "Imagine building that dashboard you've been procrastinating in two clicks..."
            }
          </span>
                </SocialFeedPost>
            </div>
            <div className="flex flex-col items-start gap-2 self-stretch pt-6 pr-6 pb-6 pl-6 mobile:hidden">
                <SocialSuggestedCard title="Suggested for you">
                    <div className="flex w-full items-center gap-4">
                        <Avatar image="https://res.cloudinary.com/subframe/image/upload/v1711417514/shared/ubsk7cs5hnnaj798efej.jpg">
                            AB
                        </Avatar>
                        <div className="flex grow shrink-0 basis-0 flex-col items-start">
              <span className="text-body-bold font-body-bold text-default-font">
                Chris Morgan
              </span>
                            <span className="text-caption font-caption text-subtext-color">
                @chrismorgan
              </span>
                        </div>
                        <Button variant="brand-secondary">Follow</Button>
                    </div>
                    <div className="flex w-full items-center gap-4">
                        <Avatar image="https://res.cloudinary.com/subframe/image/upload/v1711417512/shared/btvntvzhdbhpulae3kzk.jpg">
                            AB
                        </Avatar>
                        <div className="flex grow shrink-0 basis-0 flex-col items-start">
              <span className="text-body-bold font-body-bold text-default-font">
                Mark
              </span>
                            <span className="text-caption font-caption text-subtext-color">
                @markmarkmark
              </span>
                        </div>
                        <Button variant="brand-secondary">Follow</Button>
                    </div>
                    <div className="flex w-full items-center gap-4">
                        <Avatar image="https://res.cloudinary.com/dnkpdfdai/image/upload/v1717804669/uploads/1/u9fybvt4qqaupxt4k8os.jpg">
                            AB
                        </Avatar>
                        <div className="flex grow shrink-0 basis-0 flex-col items-start">
              <span className="text-body-bold font-body-bold text-default-font">
                Good Tunes, Inc.
              </span>
                            <span className="text-caption font-caption text-subtext-color">
                @good_tunes
              </span>
                        </div>
                        <Button variant="brand-secondary">Follow</Button>
                    </div>
                </SocialSuggestedCard>
            </div>
        </div>
    );
}

export default SocialProfile;
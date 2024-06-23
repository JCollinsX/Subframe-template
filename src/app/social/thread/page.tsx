"use client";

import React from "react";
import { SocialNav } from "@/subframe/components/SocialNav";
import { DropdownMenu } from "@/subframe/components/DropdownMenu";
import * as SubframeCore from "@subframe/core";
import { Avatar } from "@/subframe/components/Avatar";
import { SocialFeedCardLarge } from "@/subframe/components/SocialFeedCardLarge";
import { SocialPost } from "@/subframe/components/SocialPost";
import { SocialFeedCardSmall } from "@/subframe/components/SocialFeedCardSmall";
import { SocialFeedPost } from "@/subframe/components/SocialFeedPost";
import { Button } from "@/subframe/components/Button";
import { SocialSuggestedCard } from "@/subframe/components/SocialSuggestedCard";

function SocialThread() {
    return (
        <div className="flex h-full w-full items-start justify-center bg-default-background pr-6 pl-6 mobile:pt-0 mobile:pr-0 mobile:pb-12 mobile:pl-0">
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
            <div className="flex max-w-[576px] grow shrink-0 basis-0 flex-col items-start border-r border-solid border-neutral-border">
                <div className="flex h-20 w-full flex-none flex-col items-start justify-center border-b border-solid border-neutral-border pt-6 pr-6 pb-6 pl-6">
          <span className="text-heading-3 font-heading-3 text-default-font">
            Thread
          </span>
                </div>
                <SocialPost
                    avatar="https://res.cloudinary.com/subframe/image/upload/v1718919568/uploads/3102/mmfbvgi9hwpewyqglgul.png"
                    name="Subframe"
                    handle="@subframeapp"
                    timestamp="2d"
                    commentCount="3"
                    likeCount="74"
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
                </SocialPost>
                <SocialFeedPost
                    avatar="https://res.cloudinary.com/subframe/image/upload/v1718919568/uploads/3102/mmfbvgi9hwpewyqglgul.png"
                    name="Subframe"
                    handle="@subframeapp"
                    timestamp="2d"
                    commentCount="2"
                    likeCount="8"
                    preview={
                        <SocialFeedCardSmall
                            title="Product Hunt – the best new products"
                            caption="Product Hunt is a curation of the best new products, every day."
                        />
                    }
                    isThread={true}
                >
          <span className="w-full text-body font-body text-default-font">
            Vote for us on Product Hunt!
          </span>
                </SocialFeedPost>
                <SocialFeedPost
                    avatar="https://res.cloudinary.com/subframe/image/upload/v1711417514/shared/ubsk7cs5hnnaj798efej.jpg"
                    name="Alex Rivera"
                    handle="@alexrr"
                    timestamp="2d"
                    commentCount=""
                    likeCount="4"
                    isThread={true}
                >
          <span className="w-full text-body font-body text-default-font">
            Congrats on launch! Upvoted
          </span>
                </SocialFeedPost>
                <SocialFeedPost
                    avatar="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/fychrij7dzl8wgq2zjq9.avif"
                    name="Amy Jackson"
                    badge={null}
                    handle="@amyjackson32"
                    timestamp="2d"
                    commentCount="1"
                    likeCount="2"
                    isThread={true}
                >
          <span className="w-full text-body font-body text-default-font">
            Subframe was a game changer for us. We went from design/UI being our
            Achilles&#39; heel to it becoming one of the strengths of our
            product.
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

export default SocialThread;
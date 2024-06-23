"use client";

import React from "react";
import { SocialNav } from "@/subframe/components/SocialNav";
import { DropdownMenu } from "@/subframe/components/DropdownMenu";
import * as SubframeCore from "@subframe/core";
import { Avatar } from "@/subframe/components/Avatar";
import { SocialFeedImage } from "@/subframe/components/SocialFeedImage";
import { SocialFeedPost } from "@/subframe/components/SocialFeedPost";
import { SocialFeedCardLarge } from "@/subframe/components/SocialFeedCardLarge";
import { SocialFeedCardSmall } from "@/subframe/components/SocialFeedCardSmall";
import { Button } from "@/subframe/components/Button";
import { SocialSuggestedCard } from "@/subframe/components/SocialSuggestedCard";

function SocialFeed() {
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
      <div className="flex max-w-[576px] grow shrink-0 basis-0 flex-col items-start border-r border-solid border-neutral-border overflow-auto">
        <div className="flex h-20 w-full flex-none items-center border-b border-solid border-neutral-border pt-6 pr-6 pb-6 pl-6">
          <span className="text-heading-3 font-heading-3 text-default-font">
            For You
          </span>
        </div>
        <SocialFeedPost
          avatar="https://res.cloudinary.com/subframe/image/upload/v1718919568/uploads/3102/mmfbvgi9hwpewyqglgul.png"
          name="Subframe"
          handle="@subframeapp"
          timestamp="2h ago"
          commentCount="4"
          likeCount="72"
          preview={
            <SocialFeedImage image="https://res.cloudinary.com/subframe/image/upload/v1713908878/uploads/279/uktn4z8cnfybwdmvu313.avif" />
          }
        >
          <span className="w-full text-body font-body text-default-font">
            Watch how to get started with Subframe in just a few minutes
          </span>
        </SocialFeedPost>
        <SocialFeedPost
          avatar="https://res.cloudinary.com/subframe/image/upload/v1711417512/shared/m0kfajqpwkfief00it4v.jpg"
          name="Dr. Jane Foster"
          handle="@drjanefoster"
          timestamp="6h ago"
          commentCount="9"
          likeCount="34"
          preview={
            <SocialFeedCardLarge
              image="https://res.cloudinary.com/subframe/image/upload/v1711417572/shared/wpt49pnc6srm1zxiyubg.jpg"
              title="Neuroplasticity in Older Adults: A Groundbreaking Study"
              subtitle="New research shows significant improvements in cognitive function and gray matter volume in adults over 60."
              caption="www.nature.com"
            />
          }
        >
          <span className="w-full whitespace-pre-wrap text-body font-body text-default-font">
            {
              "New research alert! 🧠  📊|\n\nOur team's study on neuroplasticity in adults over 60 has been published in @NatureNeurosci.\n\nKey findings:\n1. Cognitive training increased gray matter volume\n2. Improvements sustained at 6-month follow-up\n3. Never too late to teach an old brain new tricks!"
            }
          </span>
        </SocialFeedPost>
        <SocialFeedPost
          avatar="https://res.cloudinary.com/subframe/image/upload/v1711417513/shared/kwut7rhuyivweg8tmyzl.jpg"
          name="Jake Turner"
          badge={null}
          handle="@jaketurner4982"
          timestamp="1d ago"
          commentCount="2"
          likeCount="4"
        >
          <span className="w-full text-body font-body text-default-font">
            Just finished a 5K run #running
          </span>
        </SocialFeedPost>
        <SocialFeedPost
          avatar="https://res.cloudinary.com/subframe/image/upload/v1711417511/shared/t4qorgih4yjwudzjfkxq.png"
          name="Tech Insider"
          handle="@techinsider"
          timestamp="2d ago"
          commentCount="6"
          likeCount="33"
          preview={
            <SocialFeedCardSmall
              icon="FeatherGlobe"
              title="Apple Unveils AI Revolution in iOS 18"
              caption="Cupertino giant set to transform user experience with advanced AI features, including a more intelligent Siri."
            />
          }
        >
          <span className="w-full text-body font-body text-default-font">
            Breaking: Apple announces new AI-powered features coming to iOS 18.
            Get ready for smarter Siri and enhanced photo editing capabilities.
            #AppleNews #AI
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

export default SocialFeed;
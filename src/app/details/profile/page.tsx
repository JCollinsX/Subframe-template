"use client";

import React from "react";
import { ProfileSidebar } from "@/subframe/components/ProfileSidebar";
import { Avatar } from "@/subframe/components/Avatar";
import { Button } from "@/subframe/components/Button";
import { ProfileCard } from "@/subframe/components/ProfileCard";

function ProfileDetailWithCards() {
    return (
        <div className="flex h-full w-full items-center bg-default-background">
            <ProfileSidebar className="mobile:hidden">
                <ProfileSidebar.Item icon="FeatherSearch">Explore</ProfileSidebar.Item>
                <ProfileSidebar.Item icon="FeatherUser" selected={true}>
                    Profile
                </ProfileSidebar.Item>
                <ProfileSidebar.Item icon="FeatherBookmark">Saved</ProfileSidebar.Item>
                <ProfileSidebar.Item icon="FeatherShoppingCart">
                    Shop
                </ProfileSidebar.Item>
            </ProfileSidebar>
            <div className="flex grow shrink-0 basis-0 items-start justify-center gap-4 self-stretch pt-12 pr-12 pb-12 pl-12 mobile:pt-4 mobile:pr-4 mobile:pb-4 mobile:pl-4">
                <div className="flex max-w-[1024px] grow shrink-0 basis-0 flex-col items-start gap-8">
                    <div className="flex h-72 w-full flex-none flex-col items-center justify-end gap-2 overflow-hidden rounded-lg bg-brand-800 relative">
                        <div className="flex w-full items-center gap-4 pt-6 pr-6 pb-6 pl-6 z-10 mobile:flex-col mobile:items-center mobile:justify-end mobile:gap-6">
                            <Avatar
                                size="x-large"
                                image="https://res.cloudinary.com/subframe/image/upload/v1711417514/shared/ubsk7cs5hnnaj798efej.jpg"
                            >
                                AB
                            </Avatar>
                            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1 mobile:flex-col mobile:items-center mobile:justify-start mobile:gap-1">
                <span className="text-heading-2 font-heading-2 text-white mobile:text-heading-1 mobile:font-heading-1">
                  Irvin Z.
                </span>
                                <span className="text-body-bold font-body-bold text-white">
                  San Francisco, CA
                </span>
                            </div>
                            <div className="flex items-center justify-end gap-2 mobile:h-auto mobile:w-full mobile:flex-none">
                                <Button
                                    className="mobile:h-10 mobile:grow mobile:shrink-0 mobile:basis-0"
                                    variant="neutral-secondary"
                                    size="large"
                                >
                                    Message
                                </Button>
                                <Button
                                    className="mobile:h-10 mobile:grow mobile:shrink-0 mobile:basis-0"
                                    variant="neutral-secondary"
                                    size="large"
                                >
                                    Follow
                                </Button>
                            </div>
                        </div>
                        <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-2 absolute inset-0 bg-gradient-to-tr from-transparent to-[rgba(255,255,255,0.4)]" />
                    </div>
                    <div className="flex w-full flex-col items-start gap-4 pt-6 pr-6 pb-6 pl-6">
            <span className="text-heading-2 font-heading-2 text-default-font">
              Recent hikes
            </span>
                        <div className="flex w-full items-center gap-6 mobile:flex-col mobile:gap-6">
                            <ProfileCard
                                image="https://res.cloudinary.com/subframe/image/upload/v1711417570/shared/hwiwt695ljjvbsi83osu.jpg"
                                title="Yosemite"
                            >
                                <ProfileCard.Stat label="Distance" value="12.6 mi" />
                                <ProfileCard.Stat label="Duration" value="7h 23m" />
                            </ProfileCard>
                            <ProfileCard
                                image="https://res.cloudinary.com/subframe/image/upload/v1711417572/shared/wpt49pnc6srm1zxiyubg.jpg"
                                title="Denali"
                            >
                                <ProfileCard.Stat label="Distance" value="8.2 mi" />
                                <ProfileCard.Stat label="Duration" value="5h 10m" />
                            </ProfileCard>
                            <ProfileCard
                                image="https://res.cloudinary.com/subframe/image/upload/v1711417574/shared/zovip13na5pbftpfxwcy.jpg"
                                title="Zion"
                            >
                                <ProfileCard.Stat label="Distance" value="3.9 mi" />
                                <ProfileCard.Stat label="Duration" value="2h 5m" />
                            </ProfileCard>
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-start gap-4 pt-6 pr-6 pb-6 pl-6 mobile:pt-6 mobile:pr-6 mobile:pb-6 mobile:pl-6">
            <span className="text-heading-2 font-heading-2 text-default-font">
              Saved
            </span>
                        <div className="flex w-full items-center gap-6 mobile:flex-col mobile:gap-6">
                            <ProfileCard
                                image="https://res.cloudinary.com/subframe/image/upload/v1711417570/shared/hwiwt695ljjvbsi83osu.jpg"
                                title="Yosemite"
                            >
                                <ProfileCard.Stat label="Distance" value="12.6 mi" />
                                <ProfileCard.Stat label="Duration" value="7h 23m" />
                            </ProfileCard>
                            <ProfileCard
                                image="https://res.cloudinary.com/subframe/image/upload/v1711417572/shared/wpt49pnc6srm1zxiyubg.jpg"
                                title="Denali"
                            >
                                <ProfileCard.Stat label="Distance" value="8.2 mi" />
                                <ProfileCard.Stat label="Duration" value="5h 10m" />
                            </ProfileCard>
                            <ProfileCard
                                image="https://res.cloudinary.com/subframe/image/upload/v1711417574/shared/zovip13na5pbftpfxwcy.jpg"
                                title="Zion"
                            >
                                <ProfileCard.Stat label="Distance" value="3.9 mi" />
                                <ProfileCard.Stat label="Duration" value="2h 5m" />
                            </ProfileCard>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileDetailWithCards;
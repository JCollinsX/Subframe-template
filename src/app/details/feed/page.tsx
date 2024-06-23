"use client";

import React from "react";
import { Badge } from "@/subframe/components/Badge";
import { Avatar } from "@/subframe/components/Avatar";
import { Button } from "@/subframe/components/Button";
import { IconWithBackground } from "@/subframe/components/IconWithBackground";
import { Feed } from "@/subframe/components/Feed";

function DetailsPageWithActivityFeed() {
    return (
        <div className="flex h-full w-full flex-col items-start bg-default-background">
            <div className="container max-w-none flex w-full items-start gap-8 bg-brand-50 pt-16 pb-16 mobile:flex-col mobile:gap-8">
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-8">
                    <div className="flex w-full flex-col items-start gap-1">
            <span className="text-body-bold font-body-bold text-brand-700">
              ID-420
            </span>
                        <span className="w-full text-heading-2 font-heading-2 text-default-font">
              Database transaction error rate is too high
            </span>
                    </div>
                    <div className="flex w-full max-w-[576px] flex-wrap items-start gap-4 mobile:flex-row mobile:flex-wrap mobile:gap-4">
                        <div className="flex min-w-[128px] grow shrink-0 basis-0 flex-col items-start gap-2">
              <span className="text-caption font-caption text-subtext-color">
                Status
              </span>
                            <Badge variant="brand">In Review</Badge>
                        </div>
                        <div className="flex min-w-[128px] grow shrink-0 basis-0 flex-col items-start gap-2">
              <span className="text-caption font-caption text-subtext-color">
                Priority
              </span>
                            <Badge variant="error">High</Badge>
                        </div>
                        <div className="flex min-w-[128px] grow shrink-0 basis-0 flex-col items-start gap-2">
              <span className="text-caption font-caption text-subtext-color">
                Duration
              </span>
                            <span className="text-body-bold font-body-bold text-default-font">
                3hr 19min
              </span>
                        </div>
                        <div className="flex min-w-[128px] grow shrink-0 basis-0 flex-col items-start gap-2">
              <span className="text-caption font-caption text-subtext-color">
                Assigned to
              </span>
                            <div className="flex items-start gap-2">
                                <Avatar
                                    size="x-small"
                                    image="https://res.cloudinary.com/subframe/image/upload/v1711417512/shared/m0kfajqpwkfief00it4v.jpg"
                                >
                                    JS
                                </Avatar>
                                <span className="text-body-bold font-body-bold text-default-font">
                  Emily Jones
                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-end gap-1 mobile:h-auto mobile:w-full mobile:flex-none">
                    <Button
                        className="mobile:h-8 mobile:grow mobile:shrink-0 mobile:basis-0"
                        variant="brand-tertiary"
                        icon={null}
                    >
                        Escalate
                    </Button>
                    <Button
                        className="mobile:h-8 mobile:grow mobile:shrink-0 mobile:basis-0"
                        icon={null}
                    >
                        Resolve
                    </Button>
                </div>
            </div>
            <div className="container max-w-none flex w-full grow shrink-0 basis-0 flex-wrap items-start gap-16 pt-12 pb-12 mobile:flex-col mobile:flex-wrap mobile:gap-16">
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4">
          <span className="text-heading-3 font-heading-3 text-default-font">
            Activity
          </span>
                    <Feed>
                        <Feed.Item
                            leftSlot={
                                <IconWithBackground
                                    variant="success"
                                    size="medium"
                                    icon="FeatherCheck"
                                />
                            }
                            comment={
                                <Feed.Comment>
                                    The source of the incident was found and a fix has been pushed
                                    up
                                </Feed.Comment>
                            }
                            timestamp="1 minute ago"
                        >
              <span className="text-body-bold font-body-bold text-default-font">
                Emily Jones
              </span>
                            <span className="text-body font-body text-subtext-color">
                marked as resolved
              </span>
                        </Feed.Item>
                        <Feed.Item
                            leftSlot={
                                <IconWithBackground
                                    variant="error"
                                    size="medium"
                                    icon="FeatherAlertTriangle"
                                />
                            }
                            timestamp="1 minute ago"
                        >
              <span className="text-body-bold font-body-bold text-default-font">
                John Smith
              </span>
                            <span className="text-body font-body text-subtext-color">
                escalated this task
              </span>
                        </Feed.Item>
                        <Feed.Item
                            leftSlot={
                                <Avatar
                                    variant="warning"
                                    size="medium"
                                    image="https://res.cloudinary.com/subframe/image/upload/v1711417512/shared/m0kfajqpwkfief00it4v.jpg"
                                >
                                    JD
                                </Avatar>
                            }
                            comment={
                                <>
                                    <Feed.Comment>Taking a look now!</Feed.Comment>
                                    <Button variant="neutral-tertiary" size="small" icon={null}>
                                        Reply
                                    </Button>
                                </>
                            }
                            timestamp="21 hours ago"
                        >
              <span className="text-body-bold font-body-bold text-default-font">
                Emily Jones
              </span>
                            <span className="text-body font-body text-subtext-color">
                commented
              </span>
                        </Feed.Item>
                        <Feed.Item
                            leftSlot={
                                <IconWithBackground
                                    variant="brand"
                                    size="medium"
                                    icon="FeatherUserPlus"
                                />
                            }
                            timestamp="3 days ago"
                            isLast={false}
                        >
              <span className="text-body-bold font-body-bold text-default-font">
                John Smith
              </span>
                            <span className="text-body font-body text-subtext-color">
                assigned this task to Emily Jones
              </span>
                        </Feed.Item>
                        <Feed.Item
                            leftSlot={
                                <IconWithBackground
                                    variant="neutral"
                                    size="medium"
                                    icon="FeatherCircleDot"
                                />
                            }
                            timestamp="3 days ago"
                            isLast={true}
                        >
              <span className="text-body-bold font-body-bold text-default-font">
                John Smith
              </span>
                            <span className="text-body font-body text-subtext-color">
                created this task
              </span>
                        </Feed.Item>
                    </Feed>
                </div>
                <div className="flex max-w-[448px] grow shrink-0 basis-0 flex-col items-start gap-4">
          <span className="text-heading-3 font-heading-3 text-default-font">
            Analysis
          </span>
                    <div className="flex w-full max-w-[448px] flex-col items-start gap-8 rounded-lg bg-neutral-50 pt-6 pr-6 pb-6 pl-6">
                        <div className="flex flex-col items-start gap-1">
              <span className="text-body-bold font-body-bold text-default-font">
                Description
              </span>
                            <span className="text-body font-body text-subtext-color">
                The error rate indicates that there are issues with the database
                transactions, which could impact data integrity.
              </span>
                        </div>
                        <div className="flex flex-col items-start gap-1">
              <span className="text-body-bold font-body-bold text-default-font">
                Impact
              </span>
                            <span className="text-body font-body text-subtext-color">
                The high error rate in the database transaction could result in
                performance degradation and data inconsistency.
              </span>
                        </div>
                        <div className="flex flex-col items-start gap-1">
              <span className="text-body-bold font-body-bold text-default-font">
                Investigation
              </span>
                            <span className="text-body font-body text-subtext-color">
                The team will also analyze the database configuration and
                settings to ensure that they are optimized for performance.
              </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailsPageWithActivityFeed;
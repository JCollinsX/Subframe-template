"use client";

import React from "react";
import { Button } from "@/subframe/components/Button";
import { IconWithBackground } from "@/subframe/components/IconWithBackground";
import * as SubframeCore from "@subframe/core";
import { Avatar } from "@/subframe/components/Avatar";

function DashboardWithTiles() {
    return (
        <div className="container max-w-none flex h-full w-full flex-col items-start gap-6 bg-default-background pt-12 pb-12">
            <div className="flex w-full flex-col items-start gap-1">
        <span className="w-full text-heading-2 font-heading-2 text-default-font">
          Dashboard
        </span>
                <span className="w-full text-body-bold font-body-bold text-subtext-color">
          Monday, January 4
        </span>
            </div>
            <div className="flex w-full flex-wrap items-start gap-4">
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4">
                    <div className="flex w-full flex-col items-start rounded-lg border border-solid border-neutral-border bg-default-background shadow-default">
                        <div className="flex w-full flex-col items-start gap-2 pt-4 pr-3 pb-4 pl-6">
                            <div className="flex w-full items-center gap-2">
                <span className="grow shrink-0 basis-0 text-heading-3 font-heading-3 text-default-font">
                  To-do
                </span>
                                <Button variant="brand-tertiary" size="medium" iconRight={null}>
                                    View all
                                </Button>
                            </div>
                        </div>
                        <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-border" />
                        <div className="flex w-full flex-col items-start pt-2 pr-2 pb-2 pl-2">
                            <div className="flex w-full items-center gap-4 pt-4 pr-4 pb-4 pl-4">
                                <IconWithBackground size="medium" icon="FeatherCalendarCheck" />
                                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                  <span className="w-full text-body-bold font-body-bold text-default-font">
                    Review requests
                  </span>
                                    <span className="w-full text-caption font-caption text-subtext-color">
                    Approve new requests in your inbox
                  </span>
                                </div>
                                <span className="text-body font-body text-subtext-color">
                  Today
                </span>
                            </div>
                            <div className="flex w-full items-center gap-4 pt-4 pr-4 pb-4 pl-4">
                                <IconWithBackground size="medium" icon="FeatherReceipt" />
                                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                  <span className="w-full text-body-bold font-body-bold text-default-font">
                    Process invoices
                  </span>
                                    <span className="w-full text-caption font-caption text-subtext-color">
                    You have 1 to review
                  </span>
                                </div>
                                <span className="text-body font-body text-subtext-color">
                  Today
                </span>
                            </div>
                            <div className="flex w-full items-center gap-4 pt-4 pr-4 pb-4 pl-4">
                                <IconWithBackground size="medium" icon="FeatherUploadCloud" />
                                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                  <span className="w-full text-body-bold font-body-bold text-default-font">
                    Upload additional documents{" "}
                  </span>
                                    <span className="w-full text-caption font-caption text-subtext-color">
                    We need a few more details
                  </span>
                                </div>
                                <span className="text-body font-body text-subtext-color">
                  Today
                </span>
                            </div>
                            <div className="flex w-full items-center gap-4 pt-4 pr-4 pb-4 pl-4">
                                <IconWithBackground size="medium" icon="FeatherCreditCard" />
                                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                  <span className="w-full text-body-bold font-body-bold text-default-font">
                    Set up a payment method
                  </span>
                                    <span className="w-full text-caption font-caption text-subtext-color">
                    Avoid delaying invoices and payments
                  </span>
                                </div>
                                <span className="text-body font-body text-subtext-color">
                  Yesterday
                </span>
                            </div>
                            <div className="flex w-full items-center gap-4 pt-4 pr-4 pb-4 pl-4">
                                <IconWithBackground size="medium" icon="FeatherCheckCheck" />
                                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                  <span className="w-full text-body-bold font-body-bold text-default-font">
                    Finish verification
                  </span>
                                    <span className="w-full text-caption font-caption text-subtext-color">
                    Verify your account securely
                  </span>
                                </div>
                                <span className="text-body font-body text-subtext-color">
                  Yesterday
                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-start rounded-lg border border-solid border-neutral-border bg-default-background shadow-default">
                        <div className="flex w-full items-center gap-2 pt-4 pr-4 pb-4 pl-6">
              <span className="grow shrink-0 basis-0 text-heading-3 font-heading-3 text-default-font">
                Upcoming events
              </span>
                            <Button variant="brand-tertiary" size="medium" iconRight={null}>
                                View all
                            </Button>
                        </div>
                        <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-border" />
                        <div className="flex w-full flex-col items-start pt-2 pr-2 pb-2 pl-2">
                            <div className="flex w-full items-center gap-4 pt-4 pr-4 pb-4 pl-4">
                                <IconWithBackground
                                    variant="error"
                                    size="medium"
                                    icon="FeatherCalendar"
                                />
                                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                  <span className="w-full text-body-bold font-body-bold text-default-font">
                    Department Offsite
                  </span>
                                    <span className="w-full text-caption font-caption text-subtext-color">
                    Monday, Nov 13, 2023
                  </span>
                                </div>
                                <span className="text-body font-body text-subtext-color">
                  All-day
                </span>
                            </div>
                            <div className="flex w-full items-center gap-4 pt-4 pr-4 pb-4 pl-4">
                                <IconWithBackground
                                    variant="error"
                                    size="medium"
                                    icon="FeatherCalendar"
                                />
                                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                  <span className="w-full text-body-bold font-body-bold text-default-font">
                    Quartery Review
                  </span>
                                    <span className="w-full text-caption font-caption text-subtext-color">
                    Tuesday, Nov 3, 2023
                  </span>
                                </div>
                                <span className="text-body font-body text-subtext-color">
                  9:00 AM
                </span>
                            </div>
                            <div className="flex w-full items-center gap-4 pt-4 pr-4 pb-4 pl-4">
                                <IconWithBackground
                                    variant="error"
                                    size="medium"
                                    icon="FeatherCalendar"
                                />
                                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                  <span className="w-full text-body-bold font-body-bold text-default-font">
                    Project kick-off
                  </span>
                                    <span className="w-full text-caption font-caption text-subtext-color">
                    Monday, Nov 13, 2023
                  </span>
                                </div>
                                <span className="text-body font-body text-subtext-color">
                  3:00 PM
                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex max-w-[448px] grow shrink-0 basis-0 flex-col items-start gap-4">
                    <div className="flex w-full flex-col items-start rounded-lg border border-solid border-neutral-border bg-default-background shadow-default">
                        <div className="flex w-full items-center gap-2 pt-4 pr-3 pb-4 pl-6">
              <span className="line-clamp-1 grow shrink-0 basis-0 text-heading-3 font-heading-3 text-default-font">
                Updates
              </span>
                            <Button variant="brand-tertiary" size="medium" iconRight={null}>
                                View all
                            </Button>
                        </div>
                        <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-border" />
                        <div className="flex w-full flex-col items-start gap-4 pt-4 pr-4 pb-4 pl-4">
                            <div className="flex w-full items-center gap-4 rounded-lg bg-brand-50 pt-4 pr-4 pb-4 pl-4">
                                <div className="flex h-8 w-8 flex-none items-center justify-center">
                                    <SubframeCore.Icon
                                        className="text-heading-3 font-heading-3 text-brand-700"
                                        name="FeatherUsers"
                                    />
                                </div>
                                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                  <span className="w-full text-body-bold font-body-bold text-default-font">
                    5 new members
                  </span>
                                    <span className="grow shrink-0 basis-0 text-caption font-caption text-subtext-color">
                    1 onboarding now
                  </span>
                                </div>
                            </div>
                            <div className="flex w-full items-center gap-4 rounded-lg bg-error-100 pt-4 pr-4 pb-4 pl-4">
                                <div className="flex h-8 w-8 flex-none items-center justify-center">
                                    <SubframeCore.Icon
                                        className="text-heading-3 font-heading-3 text-error-700"
                                        name="FeatherAlarmClock"
                                    />
                                </div>
                                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                  <span className="w-full text-body-bold font-body-bold text-default-font">
                    3 reminders
                  </span>
                                    <span className="grow shrink-0 basis-0 text-caption font-caption text-subtext-color">
                    2 overdue
                  </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-start rounded-lg border border-solid border-neutral-border bg-default-background shadow-default">
                        <div className="flex w-full items-start gap-2 pt-4 pr-3 pb-4 pl-6">
              <span className="line-clamp-1 grow shrink-0 basis-0 text-heading-3 font-heading-3 text-default-font">
                Departments
              </span>
                            <Button variant="brand-tertiary" size="medium" iconRight={null}>
                                View all
                            </Button>
                        </div>
                        <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-border" />
                        <div className="flex w-full flex-col items-start pt-4 pr-4 pb-4 pl-4">
                            <div className="flex w-full items-center gap-4 rounded-lg pt-2 pr-2 pb-2 pl-2">
                                <div className="flex h-8 w-8 flex-none items-center justify-center">
                                    <SubframeCore.Icon
                                        className="text-heading-3 font-heading-3 text-default-font"
                                        name="FeatherWrench"
                                    />
                                </div>
                                <span className="grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font">
                  Engineering
                </span>
                                <span className="text-body font-body text-subtext-color">
                  12
                </span>
                            </div>
                            <div className="flex w-full items-center gap-4 rounded-lg pt-2 pr-2 pb-2 pl-2">
                                <div className="flex h-8 w-8 flex-none items-center justify-center">
                                    <SubframeCore.Icon
                                        className="text-heading-3 font-heading-3 text-default-font"
                                        name="FeatherPieChart"
                                    />
                                </div>
                                <span className="grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font">
                  Product
                </span>
                                <span className="text-body font-body text-subtext-color">
                  5
                </span>
                            </div>
                            <div className="flex w-full items-center gap-4 rounded-lg pt-2 pr-2 pb-2 pl-2">
                                <div className="flex h-8 w-8 flex-none items-center justify-center">
                                    <SubframeCore.Icon
                                        className="text-heading-3 font-heading-3 text-default-font"
                                        name="FeatherBrush"
                                    />
                                </div>
                                <span className="grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font">
                  Design
                </span>
                                <span className="text-body font-body text-subtext-color">
                  3
                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-start rounded-lg border border-solid border-neutral-border bg-default-background shadow-default">
                        <div className="flex w-full items-center gap-2 pt-4 pr-3 pb-4 pl-6">
              <span className="line-clamp-1 grow shrink-0 basis-0 text-heading-3 font-heading-3 text-default-font">
                Recently joined
              </span>
                            <Button variant="brand-tertiary" size="medium" iconRight={null}>
                                View all
                            </Button>
                        </div>
                        <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-border" />
                        <div className="flex w-full flex-col items-start gap-1 pt-4 pr-4 pb-4 pl-4">
                            <div className="flex w-full items-center gap-4 rounded-lg pt-2 pr-2 pb-2 pl-2">
                                <Avatar image="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/fychrij7dzl8wgq2zjq9.avif">
                                    AB
                                </Avatar>
                                <span className="grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font">
                  Abigail
                </span>
                                <span className="text-body font-body text-subtext-color">
                  Oct 24
                </span>
                            </div>
                            <div className="flex w-full items-center gap-4 rounded-lg pt-2 pr-2 pb-2 pl-2">
                                <Avatar image="https://res.cloudinary.com/subframe/image/upload/v1711417514/shared/ubsk7cs5hnnaj798efej.jpg">
                                    AB
                                </Avatar>
                                <span className="grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font">
                  Jonah
                </span>
                                <span className="text-body font-body text-subtext-color">
                  Nov 5
                </span>
                            </div>
                            <div className="flex w-full items-center gap-4 rounded-lg pt-2 pr-2 pb-2 pl-2">
                                <Avatar image="https://res.cloudinary.com/subframe/image/upload/v1711417513/shared/kwut7rhuyivweg8tmyzl.jpg">
                                    AB
                                </Avatar>
                                <span className="grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font">
                  Michael
                </span>
                                <span className="text-body font-body text-subtext-color">
                  Nov 23
                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardWithTiles;
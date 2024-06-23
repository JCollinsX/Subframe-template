"use client";

import React from "react";
import { IconWithBackground } from "@/subframe/components/IconWithBackground";
import { Badge } from "@/subframe/components/Badge";
import * as SubframeCore from "@subframe/core";
import { Button } from "@/subframe/components/Button";

function CheckoutPaymentCard() {
    return (
        <div className="container max-w-none flex h-full w-full flex-col items-center gap-4 bg-default-background pt-12 pr-6 pb-12 pl-6">
            <div className="flex w-full max-w-[384px] flex-col items-start rounded-lg border border-solid border-neutral-border bg-default-background shadow-default">
                <div className="flex w-full flex-col items-center border-b border-solid border-neutral-border pt-6 pr-6 pb-6 pl-6">
                    <div className="flex w-full flex-col items-center gap-4">
                        <IconWithBackground size="large" icon="FeatherDollarSign" />
                        <div className="flex flex-col items-center gap-2">
                            <div className="flex flex-col items-center gap-1">
                <span className="text-heading-3 font-heading-3 text-default-font">
                  Invoice
                </span>
                                <span className="text-caption font-caption text-subtext-color">
                  #3FK21113-0001
                </span>
                            </div>
                            <span className="text-body font-body text-subtext-color">
                Legal Consulting
              </span>
                        </div>
                        <Badge variant="error">Unpaid</Badge>
                    </div>
                </div>
                <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-4 pt-4 pr-4 pb-4 pl-4">
                    <div className="flex w-full flex-col items-start">
                        <div className="flex w-full items-center justify-between pt-2 pb-2">
                            <div className="flex grow shrink-0 basis-0 items-center gap-2">
                                <SubframeCore.Icon
                                    className="text-body font-body text-neutral-600"
                                    name="FeatherUser"
                                />
                                <span className="text-body font-body text-subtext-color">
                  Full Name
                </span>
                            </div>
                            <span className="text-body-bold font-body-bold text-default-font">
                Irvin Zhan
              </span>
                        </div>
                        <div className="flex w-full items-center justify-between pt-2 pb-2">
                            <div className="flex items-center gap-2">
                                <SubframeCore.Icon
                                    className="text-body font-body text-subtext-color"
                                    name="FeatherMail"
                                />
                                <span className="text-body font-body text-subtext-color">
                  Email
                </span>
                            </div>
                            <span className="text-body-bold font-body-bold text-default-font">
                john.smith@subframe.com
              </span>
                        </div>
                        <div className="flex w-full items-center justify-between pt-2 pb-2">
                            <div className="flex items-center gap-2">
                                <SubframeCore.Icon
                                    className="text-body font-body text-subtext-color"
                                    name="FeatherCalendar"
                                />
                                <span className="text-body font-body text-subtext-color">
                  Due date
                </span>
                            </div>
                            <span className="text-body-bold font-body-bold text-default-font">
                February 24, 2023
              </span>
                        </div>
                        <div className="flex w-full items-center justify-between pt-2 pb-2">
                            <div className="flex items-center gap-2">
                                <SubframeCore.Icon
                                    className="text-body font-body text-subtext-color"
                                    name="FeatherDollarSign"
                                />
                                <span className="text-body font-body text-subtext-color">
                  Plan
                </span>
                            </div>
                            <span className="text-body-bold font-body-bold text-default-font">
                Professional
              </span>
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-start gap-1 rounded-lg bg-neutral-50 pt-4 pr-4 pb-4 pl-4">
            <span className="text-body font-body text-subtext-color">
              Total amount due
            </span>
                        <span className="text-heading-2 font-heading-2 text-default-font">
              $300.99
            </span>
                    </div>
                </div>
                <div className="flex w-full items-start justify-end gap-2 border-t border-solid border-neutral-border pt-4 pr-4 pb-4 pl-4">
                    <Button variant="neutral-tertiary" size="medium" icon={null}>
                        Cancel
                    </Button>
                    <Button size="medium" icon={null}>
                        Pay now
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default CheckoutPaymentCard;
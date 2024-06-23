"use client";

import React from "react";
import { Button } from "@/subframe/components/Button";
import { Alert } from "@/subframe/components/Alert";
import { Tabs } from "@/subframe/components/Tabs";
import { Avatar } from "@/subframe/components/Avatar";
import { PaymentRow } from "@/subframe/components/PaymentRow";
import { IconButton } from "@/subframe/components/IconButton";

function PaymentsList() {
    return (
        <div className="container max-w-none flex h-full w-full flex-col items-center gap-6 bg-default-background pt-12 pr-6 pb-12 pl-6">
            <div className="flex w-full max-w-[1024px] flex-col items-start gap-6">
                <div className="flex w-full flex-col items-center gap-2">
          <span className="w-full text-heading-2 font-heading-2 text-default-font">
            Payments
          </span>
                </div>
                <Alert
                    variant="brand"
                    icon="FeatherDollarSign"
                    title="Schedule invoices with ease"
                    description="Never miss a payment with automated invoice scheduling"
                    actions={<Button variant="brand-tertiary">Try Now</Button>}
                />
                <div className="flex w-full flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background pt-6 pr-6 pb-6 pl-6 shadow-default">
                    <div className="flex w-full items-center justify-between mobile:flex-row mobile:flex-wrap mobile:items-start mobile:justify-end mobile:gap-4">
                        <Tabs className="h-auto w-auto flex-none mobile:h-auto mobile:grow mobile:shrink-0 mobile:basis-0">
                            <Tabs.Item active={true}>All</Tabs.Item>
                            <Tabs.Item active={false}>Scheduled</Tabs.Item>
                            <Tabs.Item>Paid</Tabs.Item>
                        </Tabs>
                        <Button
                            variant="neutral-secondary"
                            size="medium"
                            icon={null}
                            iconRight="FeatherChevronDown"
                        >
                            By due date
                        </Button>
                    </div>
                    <div className="flex w-full flex-col items-start">
                        <PaymentRow
                            name="Acme Hunting Supplies"
                            amount="$99.30"
                            due="Feb 23, 2023"
                            isPaid={false}
                            avatar={
                                <Avatar variant="brand" size="medium" square={true}>
                                    A
                                </Avatar>
                            }
                        />
                        <PaymentRow
                            name="Pluto Labs"
                            amount="$10.99"
                            due="Feb 28, 2023"
                            isPaid={false}
                            avatar={
                                <Avatar variant="success" size="medium" square={true}>
                                    P
                                </Avatar>
                            }
                        />
                        <PaymentRow
                            name="Truewind"
                            amount="$17.99"
                            due="March 4, 2023"
                            avatar={
                                <Avatar variant="neutral" size="medium" square={true}>
                                    T
                                </Avatar>
                            }
                        />
                        <PaymentRow
                            name="Extend"
                            amount="$79.40"
                            due="April 1, 2023"
                            avatar={
                                <Avatar variant="error" size="medium" square={true}>
                                    E
                                </Avatar>
                            }
                        />
                        <PaymentRow
                            name="Pluto Labs"
                            amount="$10.99"
                            due="Feb 28, 2023"
                            isPaid={true}
                            avatar={
                                <Avatar variant="success" size="medium" square={true}>
                                    P
                                </Avatar>
                            }
                        />
                        <PaymentRow
                            name="Extend"
                            amount="$99.30"
                            due="Feb 23, 2023"
                            isPaid={true}
                            avatar={
                                <Avatar variant="error" size="medium" square={true}>
                                    E
                                </Avatar>
                            }
                        />
                        <PaymentRow
                            name="Lightski"
                            amount="$34.20"
                            due="Feb 23, 2023"
                            isPaid={true}
                            avatar={
                                <Avatar variant="warning" size="medium" square={true}>
                                    L
                                </Avatar>
                            }
                        />
                    </div>
                    <div className="flex w-full items-center justify-center gap-2">
                        <IconButton size="medium" icon="FeatherChevronLeft" />
                        <span className="text-body font-body text-subtext-color">
              1 of 3
            </span>
                        <IconButton size="medium" icon="FeatherChevronRight" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentsList;
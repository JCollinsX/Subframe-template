"use client";

import React from "react";
import {IconWithBackground} from "@/subframe/components/IconWithBackground";
import * as SubframeCore from "@subframe/core";
import {Button} from "@/subframe/components/Button";
import {ToggleGroup} from "@/subframe/components/ToggleGroup";
import {LineChart} from "@/subframe/components/LineChart";
import {BarChart} from "@/subframe/components/BarChart";
import {DropdownMenu} from "@/subframe/components/DropdownMenu";
import {Table} from "@/subframe/components/Table";
import {Badge} from "@/subframe/components/Badge";

function DashboardWithAnalytics() {
    return (
        <div
            className="container max-w-none flex h-full w-full flex-col items-start gap-8 bg-default-background pt-12 pb-12">
            <div
                className="flex w-full items-start gap-4 mobile:flex-col mobile:items-center mobile:justify-start mobile:gap-6">
                <IconWithBackground size="medium" icon="FeatherRocket"/>
                <div
                    className="flex grow shrink-0 basis-0 flex-col items-start gap-1 mobile:flex-col mobile:items-center mobile:justify-start mobile:gap-2">
          <span className="text-heading-2 font-heading-2 text-default-font mobile:text-center">
            Deployment Status
          </span>
                    <div
                        className="flex flex-wrap items-start gap-6 mobile:flex-col mobile:flex-wrap mobile:items-center mobile:justify-start mobile:gap-1">
                        <div className="flex items-center gap-1">
                            <SubframeCore.Icon
                                className="text-body font-body text-subtext-color"
                                name="FeatherGauge"
                            />
                            <div className="flex flex-col items-start">
                <span className="text-body font-body text-subtext-color">
                  Service uptime
                </span>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <SubframeCore.Icon
                                className="text-body font-body text-subtext-color"
                                name="FeatherClock"
                            />
                            <span className="text-body font-body text-subtext-color">
                Every 2 min
              </span>
                        </div>
                        <div className="flex items-center gap-1">
                            <SubframeCore.Icon
                                className="text-body font-body text-subtext-color"
                                name="FeatherAlertTriangle"
                            />
                            <div className="flex flex-col items-start">
                <span className="text-body font-body text-subtext-color">
                  No errors
                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="flex w-full flex-wrap items-start gap-2 mobile:flex-col mobile:flex-wrap mobile:items-start mobile:justify-center mobile:gap-2">
                <Button
                    className="mobile:h-8 mobile:w-full mobile:flex-none"
                    variant="brand-secondary"
                    size="medium"
                    icon="FeatherSend"
                >
                    Share report
                </Button>
                <Button
                    className="mobile:h-8 mobile:w-full mobile:flex-none"
                    variant="neutral-secondary"
                    size="medium"
                    icon="FeatherAlertTriangle"
                >
                    View errors
                </Button>
                <Button
                    className="mobile:h-8 mobile:w-full mobile:flex-none"
                    variant="neutral-secondary"
                    size="medium"
                    icon="FeatherPauseCircle"
                >
                    Pause
                </Button>
                <Button
                    className="mobile:h-8 mobile:w-full mobile:flex-none"
                    variant="neutral-secondary"
                    size="medium"
                    icon="FeatherSettings"
                >
                    Configure
                </Button>
            </div>
            <div className="flex w-full flex-wrap items-start gap-4 mobile:flex-col mobile:flex-wrap mobile:gap-4">
                <div
                    className="flex min-w-[160px] grow shrink-0 basis-0 flex-col items-start gap-1 rounded-lg border border-solid border-neutral-border bg-default-background pt-6 pr-6 pb-6 pl-6 shadow-default">
          <span className="line-clamp-1 w-full text-body font-body text-subtext-color">
            Current uptime
          </span>
                    <span className="w-full text-heading-3 font-heading-3 text-default-font">
            4 hours 20 mins
          </span>
                </div>
                <div
                    className="flex min-w-[160px] grow shrink-0 basis-0 flex-col items-start gap-1 rounded-lg border border-solid border-neutral-border bg-default-background pt-6 pr-6 pb-6 pl-6 shadow-default">
          <span className="line-clamp-1 w-full text-body font-body text-subtext-color">
            Last checked
          </span>
                    <span className="w-full text-heading-3 font-heading-3 text-default-font">
            48 seconds ago
          </span>
                </div>
                <div
                    className="flex min-w-[160px] grow shrink-0 basis-0 flex-col items-start gap-1 rounded-lg border border-solid border-neutral-border bg-default-background pt-6 pr-6 pb-6 pl-6 shadow-default">
          <span className="line-clamp-1 w-full text-body font-body text-subtext-color">
            Warnings
          </span>
                    <span className="w-full text-heading-3 font-heading-3 text-default-font">
            0
          </span>
                </div>
            </div>
            <div className="flex w-full items-start gap-6 mobile:flex-col mobile:gap-6">
                <div
                    className="flex grow shrink-0 basis-0 flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background pt-6 pr-6 pb-6 pl-6 shadow-default">
                    <div className="flex w-full items-center gap-2">
            <span className="grow shrink-0 basis-0 text-heading-3 font-heading-3 text-default-font">
              Uptime
            </span>
                        <ToggleGroup>
                            <ToggleGroup.Item icon={null} value="c029a72f">
                                24h
                            </ToggleGroup.Item>
                            <ToggleGroup.Item icon={null} value="2e091e6a">
                                7d
                            </ToggleGroup.Item>
                            <ToggleGroup.Item icon={null} value="5672fee5">
                                1mo
                            </ToggleGroup.Item>
                        </ToggleGroup>
                    </div>
                    <LineChart
                        className="h-64 w-full flex-none mobile:h-auto mobile:w-full mobile:flex-none"
                        categories={["Biology", "Business", "Psychology"]}
                        data={[
                            {Year: "2015", Psychology: 120, Business: 110, Biology: 100},
                            {Year: "2016", Psychology: 130, Business: 95, Biology: 105},
                            {Year: "2017", Psychology: 115, Business: 105, Biology: 110},
                            {Year: "2018", Psychology: 125, Business: 120, Biology: 90},
                            {Year: "2019", Psychology: 110, Business: 130, Biology: 85},
                            {Year: "2020", Psychology: 135, Business: 100, Biology: 95},
                            {Year: "2021", Psychology: 105, Business: 115, Biology: 120},
                            {Year: "2022", Psychology: 140, Business: 125, Biology: 130},
                        ]}
                        index={"Year"}
                    />
                </div>
                <div
                    className="flex grow shrink-0 basis-0 flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background pt-6 pr-6 pb-6 pl-6 shadow-default">
                    <div className="flex w-full items-center gap-2">
            <span className="grow shrink-0 basis-0 text-heading-3 font-heading-3 text-default-font">
              Errors
            </span>
                        <ToggleGroup>
                            <ToggleGroup.Item icon={null} value="01f4eebb">
                                24h
                            </ToggleGroup.Item>
                            <ToggleGroup.Item icon={null} value="962222c6">
                                7d
                            </ToggleGroup.Item>
                            <ToggleGroup.Item icon={null} value="ec99efee">
                                1mo
                            </ToggleGroup.Item>
                        </ToggleGroup>
                    </div>
                    <BarChart
                        className="h-64 w-full flex-none mobile:h-auto mobile:w-full mobile:flex-none"
                        categories={["Biology", "Business", "Psychology"]}
                        data={[
                            {Year: "2015", Psychology: 120, Business: 110, Biology: 100},
                            {Year: "2016", Psychology: 130, Business: 95, Biology: 105},
                            {Year: "2017", Psychology: 115, Business: 105, Biology: 110},
                            {Year: "2018", Psychology: 125, Business: 120, Biology: 90},
                            {Year: "2019", Psychology: 110, Business: 130, Biology: 85},
                            {Year: "2020", Psychology: 135, Business: 100, Biology: 95},
                            {Year: "2021", Psychology: 105, Business: 115, Biology: 120},
                            {Year: "2022", Psychology: 140, Business: 125, Biology: 130},
                        ]}
                        index={"Year"}
                    />
                </div>
            </div>
            <div
                className="flex w-full flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background pt-6 pr-6 pb-6 pl-6 shadow-default">
                <div className="flex w-full items-center gap-2">
          <span className="grow shrink-0 basis-0 text-heading-3 font-heading-3 text-default-font">
            Downtime
          </span>
                    <SubframeCore.DropdownMenu.Root>
                        <SubframeCore.DropdownMenu.Trigger asChild={true}>
                            <Button
                                variant="neutral-secondary"
                                icon={null}
                                iconRight="FeatherChevronDown"
                            >
                                Group by
                            </Button>
                        </SubframeCore.DropdownMenu.Trigger>
                        <SubframeCore.DropdownMenu.Portal>
                            <SubframeCore.DropdownMenu.Content
                                side="bottom"
                                align="end"
                                sideOffset={4}
                                asChild={true}
                            >
                                <DropdownMenu>
                                    <DropdownMenu.DropdownItem icon={null}>
                                        Time Period
                                    </DropdownMenu.DropdownItem>
                                    <DropdownMenu.DropdownItem icon={null}>
                                        Server
                                    </DropdownMenu.DropdownItem>
                                    <DropdownMenu.DropdownItem icon={null}>
                                        Incidents
                                    </DropdownMenu.DropdownItem>
                                </DropdownMenu>
                            </SubframeCore.DropdownMenu.Content>
                        </SubframeCore.DropdownMenu.Portal>
                    </SubframeCore.DropdownMenu.Root>
                </div>
                <div
                    className="flex w-full flex-col items-start gap-6 overflow-hidden overflow-auto mobile:overflow-auto mobile:max-w-full">
                    <Table
                        header={
                            <Table.HeaderRow>
                                <Table.HeaderCell>Time period</Table.HeaderCell>
                                <Table.HeaderCell>Availability</Table.HeaderCell>
                                <Table.HeaderCell>Downtime</Table.HeaderCell>
                                <Table.HeaderCell>Status</Table.HeaderCell>
                            </Table.HeaderRow>
                        }
                    >
                        <Table.Row>
                            <Table.Cell>
                <span className="text-body-bold font-body-bold text-neutral-700">
                  Last 24 hours
                </span>
                            </Table.Cell>
                            <Table.Cell>
                <span className="text-body font-body text-neutral-500">
                  100.00%
                </span>
                            </Table.Cell>
                            <Table.Cell>
                                <span className="text-body font-body text-neutral-500">0s</span>
                            </Table.Cell>
                            <Table.Cell>
                                <Badge>Active</Badge>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                <span className="text-body-bold font-body-bold text-neutral-700">
                  Last 7 days
                </span>
                            </Table.Cell>
                            <Table.Cell>
                <span className="text-body font-body text-neutral-500">
                  99.99%
                </span>
                            </Table.Cell>
                            <Table.Cell>
                <span className="text-body font-body text-neutral-500">
                  1m 10s
                </span>
                            </Table.Cell>
                            <Table.Cell>
                                <Badge>Active</Badge>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                <span className="text-body-bold font-body-bold text-neutral-700">
                  Last 30 days
                </span>
                            </Table.Cell>
                            <Table.Cell>
                <span className="text-body font-body text-neutral-500">
                  99.95%
                </span>
                            </Table.Cell>
                            <Table.Cell>
                <span className="text-body font-body text-neutral-500">
                  2m 30s
                </span>
                            </Table.Cell>
                            <Table.Cell>
                                <Badge>Active</Badge>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                <span className="text-body-bold font-body-bold text-neutral-700">
                  Last 365 days
                </span>
                            </Table.Cell>
                            <Table.Cell>
                <span className="text-body font-body text-neutral-500">
                  99.94%
                </span>
                            </Table.Cell>
                            <Table.Cell>
                <span className="text-body font-body text-neutral-500">
                  4m 20s
                </span>
                            </Table.Cell>
                            <Table.Cell>
                                <Badge>Active</Badge>
                            </Table.Cell>
                        </Table.Row>
                    </Table>
                </div>
                <div className="flex w-full items-center justify-center gap-4">
          <span className="grow shrink-0 basis-0 text-body font-body text-subtext-color">
            Showing 1 – 4 of 8
          </span>
                    <div className="flex items-center justify-center gap-2">
                        <Button variant="neutral-secondary" size="medium" icon={null}>
                            Prev
                        </Button>
                        <Button variant="neutral-secondary" size="medium" iconRight={null}>
                            Next
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardWithAnalytics;
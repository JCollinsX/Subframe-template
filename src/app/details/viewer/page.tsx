"use client";

import React from "react";
import { Breadcrumbs } from "@/subframe/components/Breadcrumbs";
import { Badge } from "@/subframe/components/Badge";
import { Alert } from "@/subframe/components/Alert";
import { IconButton } from "@/subframe/components/IconButton";
import { Loader } from "@/subframe/components/Loader";
import { Button } from "@/subframe/components/Button";

function DocumentViewerWithDetails() {
    return (
        <div className="container max-w-none flex h-full w-full flex-col items-start gap-6 bg-default-background pt-12 pb-12">
            <div className="flex w-full flex-wrap items-center gap-4">
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2">
                    <Breadcrumbs>
                        <Breadcrumbs.Item>Your documents</Breadcrumbs.Item>
                        <Breadcrumbs.Divider />
                        <Breadcrumbs.Item active={true}>Invoices</Breadcrumbs.Item>
                    </Breadcrumbs>
                    <span className="w-full text-heading-2 font-heading-2 text-default-font">
            Medical Invoice #148
          </span>
                </div>
                <Badge>Processing</Badge>
            </div>
            <Alert
                variant="neutral"
                title="We are still processing your doument"
                description="We will let you know by email when it finishes. This page will update its status in realtime."
            />
            <div className="flex w-full grow shrink-0 basis-0 flex-wrap items-center gap-6 mobile:flex-row mobile:flex-wrap mobile:gap-6">
                <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-center self-stretch overflow-hidden rounded-lg border border-solid border-neutral-border bg-default-background shadow-default mobile:h-auto mobile:min-w-[240px] mobile:grow mobile:shrink-0 mobile:basis-0 mobile:self-stretch">
                    <div className="flex w-full flex-wrap items-center gap-4 border-b border-solid border-neutral-border bg-neutral-50 pt-3 pr-4 pb-3 pl-4">
            <span className="line-clamp-1 grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font">
              medical_invoice_148.pdf
            </span>
                        <div className="flex items-center justify-center gap-2">
                            <IconButton size="medium" icon="FeatherChevronLeft" />
                            <span className="text-body font-body text-subtext-color">
                1 of 3
              </span>
                            <IconButton size="medium" icon="FeatherChevronRight" />
                        </div>
                    </div>
                    <div className="flex w-full grow shrink-0 basis-0 flex-col items-center justify-center gap-6 bg-default-background">
                        <Loader size="large" />
                        <div className="flex flex-col items-center justify-center gap-4">
                            <div className="flex flex-col items-center justify-center gap-1">
                <span className="text-heading-3 font-heading-3 text-default-font">
                  Processing
                </span>
                                <span className="text-body font-body text-subtext-color">
                  Extracting insights...
                </span>
                            </div>
                            <Button variant="neutral-secondary">Cancel</Button>
                        </div>
                    </div>
                </div>
                <div className="flex w-96 flex-none flex-col items-start gap-6 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background pt-6 pr-6 pb-6 pl-6 shadow-default mobile:h-auto mobile:grow mobile:shrink-0 mobile:basis-0 mobile:self-stretch">
          <span className="w-full text-heading-3 font-heading-3 text-default-font">
            Audit
          </span>
                    <div className="flex w-full flex-col items-start">
                        <div className="flex w-full items-start gap-4">
                            <div className="flex flex-col items-center self-stretch">
                                <div className="flex h-0.5 w-0.5 flex-none flex-col items-center gap-2 bg-default-background" />
                                <div className="flex h-4 w-4 flex-none flex-col items-start gap-2 rounded-full border-2 border-solid border-brand-600" />
                                <div className="flex w-0.5 grow shrink-0 basis-0 flex-col items-center gap-2 bg-brand-600" />
                            </div>
                            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 pb-6">
                                <div className="flex w-full flex-col items-start">
                  <span className="w-full text-body-bold font-body-bold text-default-font">
                    Document uploaded
                  </span>
                                    <span className="w-full text-body font-body text-default-font">
                    We received your document and are now processing it
                  </span>
                                </div>
                                <span className="text-caption font-caption text-subtext-color">
                  3 hours ago
                </span>
                            </div>
                        </div>
                        <div className="flex w-full items-start gap-4">
                            <div className="flex flex-col items-center self-stretch">
                                <div className="flex h-0.5 w-0.5 flex-none flex-col items-center gap-2 bg-brand-600" />
                                <div className="flex h-4 w-4 flex-none flex-col items-start gap-2 rounded-full border-2 border-solid border-brand-600" />
                                <div className="flex w-0.5 grow shrink-0 basis-0 flex-col items-center gap-2 bg-brand-600" />
                            </div>
                            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 pb-6">
                                <div className="flex w-full flex-col items-start">
                  <span className="w-full text-body-bold font-body-bold text-default-font">
                    Alerts found
                  </span>
                                    <span className="w-full text-body font-body text-default-font">
                    We&#39;ve found 3 red flags that require your attention
                  </span>
                                </div>
                                <span className="w-full text-caption font-caption text-subtext-color">
                  5 min ago
                </span>
                                <Button
                                    variant="neutral-secondary"
                                    size="medium"
                                    iconRight="FeatherChevronRight"
                                >
                                    View details
                                </Button>
                            </div>
                        </div>
                        <div className="flex w-full items-start gap-4">
                            <div className="flex flex-col items-center self-stretch">
                                <div className="flex h-0.5 w-0.5 flex-none flex-col items-center gap-2 bg-brand-600" />
                                <div className="flex h-4 w-4 flex-none flex-col items-start gap-2 rounded-full border-2 border-solid border-brand-primary" />
                                <div className="flex w-0.5 grow shrink-0 basis-0 flex-col items-center gap-2 bg-neutral-200" />
                            </div>
                            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 pb-6">
                                <div className="flex w-full flex-col items-start">
                  <span className="w-full text-body-bold font-body-bold text-default-font">
                    Extracting insights
                  </span>
                                    <span className="w-full text-body font-body text-default-font">
                    Looking for key insights that might be helpful.
                  </span>
                                </div>
                                <span className="w-full text-caption font-caption text-subtext-color">
                  Now
                </span>
                            </div>
                        </div>
                        <div className="flex w-full items-start gap-4">
                            <div className="flex flex-col items-center self-stretch">
                                <div className="flex h-0.5 w-0.5 flex-none flex-col items-center gap-2 bg-neutral-200" />
                                <div className="flex h-4 w-4 flex-none flex-col items-start gap-2 rounded-full border-2 border-solid border-neutral-300" />
                                <div className="flex w-0.5 grow shrink-0 basis-0 flex-col items-center gap-2 bg-neutral-200" />
                            </div>
                            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 pb-6">
                <span className="w-full text-body-bold font-body-bold text-subtext-color">
                  Sending followup email
                </span>
                            </div>
                        </div>
                        <div className="flex w-full items-start gap-4">
                            <div className="flex flex-col items-center self-stretch">
                                <div className="flex h-4 w-4 flex-none flex-col items-start gap-2 rounded-full border-2 border-solid border-neutral-300" />
                            </div>
                            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2">
                <span className="w-full text-body-bold font-body-bold text-subtext-color">
                  Analysis complete
                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DocumentViewerWithDetails;
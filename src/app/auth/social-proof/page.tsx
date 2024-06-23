"use client";

import React from "react";
import { LinkButton } from "@/subframe/components/LinkButton";
import { TextField } from "@/subframe/components/TextField";
import * as SubframeCore from "@subframe/core";
import { Button } from "@/subframe/components/Button";

function SignUpWithSocialProof() {
    return (
        <div className="flex h-full w-full flex-wrap items-start bg-default-background mobile:flex-col mobile:flex-wrap mobile:gap-0">
            <div className="flex max-w-[576px] grow shrink-0 basis-0 flex-col items-center gap-12 self-stretch bg-neutral-800 pt-12 pr-12 pb-12 pl-12 mobile:h-auto mobile:w-full mobile:flex-none">
                <div className="flex w-full max-w-[448px] grow shrink-0 basis-0 flex-col items-start justify-center gap-12 mobile:h-auto mobile:w-full mobile:max-w-[448px] mobile:flex-none">
                    <img
                        className="h-8 flex-none invert"
                        src="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/y2rsnhq3mex4auk54aye.png"
                    />
                    <div className="flex flex-col items-start justify-center gap-16 pb-32 mobile:pt-0 mobile:pr-0 mobile:pb-0 mobile:pl-0">
                        <div className="flex flex-col items-start gap-2">
              <span className="text-heading-2 font-heading-2 text-white">
                A better product is waiting{" "}
              </span>
                            <span className="text-heading-3 font-heading-3 text-brand-200">
                Save effort, time, and money by joining hundreds of leading
                brands.
              </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-8">
                            <img
                                className="w-6 flex-none grayscale"
                                src="https://res.cloudinary.com/subframe/image/upload/v1711417531/shared/fwzpu385itsjirvkop07.png"
                            />
                            <img
                                className="w-6 flex-none grayscale"
                                src="https://res.cloudinary.com/subframe/image/upload/v1711417549/shared/jtjkdxvy1mm2ozvaymwv.png"
                            />
                            <img
                                className="w-6 flex-none grayscale"
                                src="https://res.cloudinary.com/subframe/image/upload/v1711417529/shared/ixjzepxndhkdpah53gix.png"
                            />
                            <img
                                className="w-6 flex-none grayscale"
                                src="https://res.cloudinary.com/subframe/image/upload/v1711417554/shared/wbkksiezhpupflka2y4z.png"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex grow shrink-0 basis-0 flex-col items-center justify-center gap-6 self-stretch border-l border-solid border-neutral-border pt-12 pr-12 pb-12 pl-12">
                <div className="flex w-full max-w-[448px] flex-col items-start justify-center gap-8">
                    <div className="flex w-full flex-col items-start gap-1">
            <span className="w-full text-heading-2 font-heading-2 text-default-font">
              Get started today
            </span>
                        <div className="flex w-full flex-wrap items-start gap-2">
              <span className="text-body font-body text-subtext-color">
                Already have an account?
              </span>
                            <LinkButton
                                variant="brand"
                                icon={null}
                                iconRight="FeatherChevronRight"
                            >
                                Sign In
                            </LinkButton>
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-start justify-center gap-4">
                        <TextField
                            className="h-auto w-full flex-none"
                            label=""
                            helpText=""
                            icon="FeatherBuilding"
                        >
                            <TextField.Input placeholder="Company" />
                        </TextField>
                        <TextField
                            className="h-auto w-full flex-none"
                            label=""
                            helpText=""
                            icon="FeatherMail"
                        >
                            <TextField.Input placeholder="Email address" />
                        </TextField>
                        <TextField
                            className="h-auto w-full flex-none"
                            label=""
                            helpText=""
                            icon="FeatherLock"
                        >
                            <TextField.Input type="password" placeholder="Password" />
                        </TextField>
                        <div className="flex w-full flex-wrap items-start gap-2 pt-2 pr-2 pb-2 pl-2 mobile:flex-col mobile:flex-wrap mobile:gap-2">
                            <div className="flex grow shrink-0 basis-0 flex-col items-start justify-center gap-2">
                                <div className="flex items-center gap-1">
                                    <SubframeCore.Icon
                                        className="text-body font-body text-success-700"
                                        name="FeatherCheck"
                                    />
                                    <span className="text-caption font-caption text-default-font">
                    Mixed case letters
                  </span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <SubframeCore.Icon
                                        className="text-body font-body text-success-700"
                                        name="FeatherCheck"
                                    />
                                    <span className="text-caption font-caption text-default-font">
                    Minimum 8 characters
                  </span>
                                </div>
                            </div>
                            <div className="flex grow shrink-0 basis-0 flex-col items-start justify-center gap-2">
                                <div className="flex items-center gap-1">
                                    <SubframeCore.Icon
                                        className="text-body font-body text-success-700"
                                        name="FeatherCheck"
                                    />
                                    <span className="text-caption font-caption text-default-font">
                    Includes special characters
                  </span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <SubframeCore.Icon
                                        className="text-body font-body text-success-700"
                                        name="FeatherCheck"
                                    />
                                    <span className="text-caption font-caption text-default-font">
                    Does not contain email
                  </span>
                                </div>
                            </div>
                        </div>
                        <Button
                            disabled={false}
                            variant="brand-primary"
                            size="medium"
                            icon={null}
                            iconRight={null}
                            loading={false}
                        >
                            Sign up
                        </Button>
                    </div>
                    <div className="flex flex-wrap items-start gap-1">
            <span className="text-caption font-caption text-subtext-color">
              By signing up you agree to the
            </span>
                        <LinkButton variant="brand" size="small" icon={null}>
                            Terms of Service
                        </LinkButton>
                        <span className="text-caption font-caption text-subtext-color">
              and
            </span>
                        <LinkButton variant="brand" size="small" icon={null}>
                            Privacy Policy
                        </LinkButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpWithSocialProof;
"use client";

import React from "react";
import { IconWithBackground } from "@/subframe/components/IconWithBackground";
import { Button } from "@/subframe/components/Button";
import { Badge } from "@/subframe/components/Badge";

function OnboardingChecklist() {
    return (
        <div className="container max-w-none flex h-full w-full flex-col items-center justify-center bg-default-background pt-12 pb-12">
            <div className="flex w-full max-w-[576px] flex-col items-center justify-center gap-6">
                <img
                    className="h-8 w-8 flex-none"
                    src="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/y2rsnhq3mex4auk54aye.png"
                />
                <div className="flex flex-col items-center gap-1">
          <span className="text-heading-2 font-heading-2 text-default-font">
            Getting started
          </span>
                    <span className="text-body font-body text-subtext-color">
            2 of 5 completed
          </span>
                </div>
                <div className="flex w-full flex-col items-start gap-4">
                    <div className="flex w-full items-center gap-4 rounded-lg border border-solid border-neutral-border bg-default-background pt-4 pr-4 pb-4 pl-4 shadow-default">
                        <IconWithBackground size="medium" icon="FeatherUserCircle2" />
                        <div className="flex grow shrink-0 basis-0 flex-col items-start justify-center">
              <span className="w-full text-body-bold font-body-bold text-subtext-color">
                Set up your profile
              </span>
                            <span className="w-full text-caption font-caption text-subtext-color">
                Add your name and profile picture to personalize your experience
              </span>
                        </div>
                        <Button
                            className="hidden"
                            variant="brand-tertiary"
                            size="medium"
                            iconRight="FeatherChevronRight"
                        >
                            Action
                        </Button>
                        <Badge variant="success">Completed</Badge>
                    </div>
                    <div className="flex w-full items-center gap-4 rounded-lg border border-solid border-neutral-border bg-default-background pt-4 pr-4 pb-4 pl-4 shadow-default">
                        <IconWithBackground size="medium" icon="FeatherLayoutGrid" />
                        <div className="flex grow shrink-0 basis-0 flex-col items-start justify-center">
              <span className="w-full text-body-bold font-body-bold text-subtext-color">
                Connect your apps
              </span>
                            <span className="w-full text-caption font-caption text-subtext-color">
                Integrate your existing platforms for a seamless workflow
              </span>
                        </div>
                        <Button
                            className="hidden"
                            variant="brand-tertiary"
                            size="medium"
                            iconRight="FeatherChevronRight"
                        >
                            Action
                        </Button>
                        <Badge variant="success">Completed</Badge>
                    </div>
                    <div className="flex w-full items-center gap-4 rounded-lg border border-solid border-neutral-border bg-default-background pt-4 pr-4 pb-4 pl-4 shadow-default">
                        <IconWithBackground size="medium" icon="FeatherSettings" />
                        <div className="flex grow shrink-0 basis-0 flex-col items-start justify-center">
              <span className="w-full text-body-bold font-body-bold text-default-font">
                Customize settings
              </span>
                            <span className="w-full text-caption font-caption text-subtext-color">
                Adjust notifications, themes, and other preferences
              </span>
                        </div>
                        <Button
                            variant="brand-tertiary"
                            size="medium"
                            iconRight="FeatherChevronRight"
                        >
                            Start
                        </Button>
                        <Badge className="hidden" variant="success">
                            Completed
                        </Badge>
                    </div>
                    <div className="flex w-full items-center gap-4 rounded-lg border border-solid border-neutral-border bg-default-background pt-4 pr-4 pb-4 pl-4 shadow-default">
                        <IconWithBackground size="medium" icon="FeatherGraduationCap" />
                        <div className="flex grow shrink-0 basis-0 flex-col items-start justify-center">
              <span className="w-full text-body-bold font-body-bold text-default-font">
                Explore tutorials
              </span>
                            <span className="w-full text-caption font-caption text-subtext-color">
                Learn the ins and outs of the platform with tips and tricks
              </span>
                        </div>
                        <Button
                            variant="brand-tertiary"
                            size="medium"
                            iconRight="FeatherChevronRight"
                        >
                            Start
                        </Button>
                        <Badge className="hidden" variant="success">
                            Completed
                        </Badge>
                    </div>
                    <div className="flex w-full items-center gap-4 rounded-lg border border-solid border-neutral-border bg-default-background pt-4 pr-4 pb-4 pl-4 shadow-default">
                        <IconWithBackground size="medium" icon="FeatherRocket" />
                        <div className="flex grow shrink-0 basis-0 flex-col items-start justify-center">
              <span className="w-full text-body-bold font-body-bold text-default-font">
                Launch your first project
              </span>
                            <span className="w-full text-caption font-caption text-subtext-color">
                Begin your first project to experience the full potential of our
                platform
              </span>
                        </div>
                        <Button
                            variant="brand-tertiary"
                            size="medium"
                            iconRight="FeatherChevronRight"
                        >
                            Start
                        </Button>
                        <Badge className="hidden" variant="success">
                            Completed
                        </Badge>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Button
                        disabled={false}
                        variant="brand-tertiary"
                        size="large"
                        icon={null}
                        iconRight={null}
                        loading={false}
                    >
                        Remind me later
                    </Button>
                    <Button
                        disabled={false}
                        variant="brand-primary"
                        size="medium"
                        icon={null}
                        iconRight={null}
                        loading={false}
                    >
                        Done
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default OnboardingChecklist;
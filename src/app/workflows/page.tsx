"use client";

import React from "react";
import { Stepper } from "@/subframe/components/Stepper";
import { TextField } from "@/subframe/components/TextField";
import { TextArea } from "@/subframe/components/TextArea";
import { Checkbox } from "@/subframe/components/Checkbox";
import { RadioGroup } from "@/subframe/components/RadioGroup";
import { Button } from "@/subframe/components/Button";

function CardFormWizard() {
    return (
        <div className="container max-w-none flex h-full w-full flex-col items-center gap-4 bg-default-background pt-12 pb-12">
            <div className="flex w-full max-w-[576px] flex-col items-start gap-12">
                <div className="flex w-full flex-col items-center">
          <span className="text-heading-2 font-heading-2 text-default-font">
            Set up your account
          </span>
                    <span className="text-body font-body text-subtext-color">
            Subheader explaining what this section is for, no more than a
            sentence.
          </span>
                </div>
                <Stepper>
                    <Stepper.Step
                        variant="active"
                        firstStep={true}
                        stepNumber="1"
                        label="Create profile"
                    />
                    <Stepper.Step
                        variant="default"
                        stepNumber="2"
                        label="Customize feed"
                    />
                    <Stepper.Step
                        lastStep={true}
                        stepNumber="3\n"
                        label="Upload project"
                    />
                </Stepper>
                <div className="flex w-full flex-col items-start gap-6">
                    <div className="flex w-full flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background pt-4 pr-6 pb-6 pl-6 shadow-default">
                        <div className="flex w-full flex-col items-start">
              <span className="w-full text-heading-3 font-heading-3 text-default-font">
                Public profile
              </span>
                            <span className="w-full text-body font-body text-subtext-color">
                This is how you&#39;ll appear to other users
              </span>
                        </div>
                        <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-6">
                            <div className="flex w-full items-start gap-4">
                                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4">
                                    <TextField
                                        className="h-auto w-full flex-none"
                                        label="Username"
                                        helpText=""
                                    >
                                        <TextField.Input placeholder="Text Placeholder" />
                                    </TextField>
                                </div>
                            </div>
                            <div className="flex w-full items-start gap-4">
                                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4">
                                    <TextField
                                        className="h-auto w-full flex-none"
                                        label="Display Name"
                                        helpText=""
                                    >
                                        <TextField.Input placeholder="Text Placeholder" />
                                    </TextField>
                                </div>
                            </div>
                            <div className="flex w-full items-start gap-4">
                                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4">
                                    <TextArea
                                        className="h-auto min-h-[96px] w-full flex-none"
                                        label="About"
                                        helpText=""
                                    >
                                        <TextArea.Input placeholder="Multiline Placeholder" />
                                    </TextArea>
                                </div>
                            </div>
                            <div className="flex w-full items-start gap-4">
                                <div className="flex flex-col items-start gap-4">
                                    <Checkbox label="Show my online status" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-start gap-6 rounded-lg border border-solid border-neutral-border bg-default-background pt-4 pr-6 pb-6 pl-6 shadow-default">
                        <div className="flex w-full flex-col items-start">
              <span className="w-full text-heading-3 font-heading-3 text-default-font">
                Profile privacy
              </span>
                            <span className="w-full text-body font-body text-subtext-color">
                Configure who sees your profile
              </span>
                        </div>
                        <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-6">
                            <div className="flex w-full items-start gap-4">
                                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2">
                                    <RadioGroup label="Profile Visibility" helpText="">
                                        <div className="flex flex-col items-start gap-2">
                                            <RadioGroup.Option label="Public" value="2052d703" />
                                            <RadioGroup.Option
                                                label="Mutual connections"
                                                value="92575113"
                                            />
                                            <RadioGroup.Option
                                                label="Your connections"
                                                value="5ce8a4e3"
                                            />
                                        </div>
                                    </RadioGroup>
                                </div>
                            </div>
                            <div className="flex w-full items-start gap-4">
                                <div className="flex flex-col items-start gap-4">
                                    <Checkbox label="Show up in search results" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-full items-start justify-between">
                    <Button variant="neutral-secondary" size="medium">
                        Back
                    </Button>
                    <Button size="medium">Next</Button>
                </div>
            </div>
        </div>
    );
}

export default CardFormWizard;
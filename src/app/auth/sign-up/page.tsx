"use client";

import React from "react";
import { LinkButton } from "@/subframe/components/LinkButton";
import { OAuthSocialButton } from "@/subframe/components/OAuthSocialButton";
import { TextField } from "@/subframe/components/TextField";
import { Button } from "@/subframe/components/Button";
import { Avatar } from "@/subframe/components/Avatar";

function SignUpWithQuote() {
    return (
        <div className="flex h-full w-full flex-col items-start bg-default-background">
            <div className="flex w-full grow shrink-0 basis-0 flex-wrap items-start mobile:flex-col mobile:flex-wrap mobile:gap-0">
                <div className="flex grow shrink-0 basis-0 flex-col items-center justify-center gap-6 self-stretch pt-12 pr-12 pb-12 pl-12">
                    <img
                        className="h-6 flex-none"
                        src="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/y2rsnhq3mex4auk54aye.png"
                    />
                    <div className="flex w-full max-w-[448px] flex-col items-center justify-center gap-8">
                        <div className="flex w-full flex-col items-center justify-center gap-2">
              <span className="text-heading-2 font-heading-2 text-default-font">
                Sign up to start your journey
              </span>
                            <div className="flex flex-wrap items-center justify-center gap-1">
                <span className="text-body font-body text-subtext-color">
                  By signing up you agree to the
                </span>
                                <LinkButton variant="brand" size="medium" icon={null}>
                                    Terms of Service
                                </LinkButton>
                                <span className="text-body font-body text-subtext-color">
                  and
                </span>
                                <LinkButton variant="brand" size="medium" icon={null}>
                                    Privacy Policy
                                </LinkButton>
                            </div>
                        </div>
                        <div className="flex w-full flex-col items-start justify-center gap-2">
                            <OAuthSocialButton
                                className="h-10 w-full flex-none"
                                logo="https://res.cloudinary.com/subframe/image/upload/v1711417516/shared/z0i3zyjjqkobzuaecgno.svg"
                            >
                                Sign in with Google
                            </OAuthSocialButton>
                            <OAuthSocialButton
                                className="h-10 w-full flex-none"
                                logo="https://res.cloudinary.com/subframe/image/upload/v1711417564/shared/zhcrzoah8kty6cup8zud.png"
                            >
                                Sign in with Slack
                            </OAuthSocialButton>
                            <OAuthSocialButton
                                className="h-10 w-full flex-none"
                                logo="https://res.cloudinary.com/subframe/image/upload/v1711417561/shared/kplo8lv2zjit3brqmadv.png"
                            >
                                Sign in with Apple
                            </OAuthSocialButton>
                        </div>
                        <div className="flex w-full items-center gap-2">
                            <div className="flex h-px grow shrink-0 basis-0 flex-col items-center gap-2 bg-neutral-border" />
                            <span className="text-body font-body text-subtext-color">
                or continue with email
              </span>
                            <div className="flex h-px grow shrink-0 basis-0 flex-col items-center gap-2 bg-neutral-border" />
                        </div>
                        <div className="flex w-full flex-col items-start justify-center gap-6">
                            <TextField
                                className="h-auto w-full flex-none"
                                label="Email address"
                                helpText=""
                                icon={null}
                            >
                                <TextField.Input placeholder="Enter your work email" />
                            </TextField>
                            <Button
                                className="h-10 w-full flex-none"
                                disabled={false}
                                variant="brand-primary"
                                size="large"
                                icon={null}
                                iconRight={null}
                                loading={false}
                            >
                                Continue
                            </Button>
                        </div>
                        <div className="flex flex-wrap items-start gap-2">
              <span className="text-body font-body text-subtext-color">
                Already have an account?
              </span>
                            <LinkButton variant="brand" icon={null}>
                                Sign In
                            </LinkButton>
                        </div>
                    </div>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-center gap-12 self-stretch bg-brand-50 pt-12 pr-12 pb-12 pl-12">
                    <div className="flex w-full max-w-[448px] grow shrink-0 basis-0 flex-col items-center justify-center gap-8">
                        <Avatar
                            size="x-large"
                            image="https://res.cloudinary.com/subframe/image/upload/v1711417514/shared/ubsk7cs5hnnaj798efej.jpg"
                        >
                            HW
                        </Avatar>
                        <div className="flex w-full flex-col items-center gap-6">
              <span className="text-heading-3 font-heading-3 text-brand-800 text-center">
                &quot;In less than a week I&#39;ve already saved hours upon
                hours of grunt work – it&#39;s doesn&#39;t get much better than
                this for the price!&quot;
              </span>
                            <div className="flex flex-wrap items-center justify-center gap-2">
                <span className="text-body-bold font-body-bold text-brand-800">
                  Howard Wayne
                </span>
                                <span className="text-body font-body text-brand-800">–</span>
                                <span className="text-body font-body text-brand-800">
                  Founder, Parachute Inc.
                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpWithQuote;
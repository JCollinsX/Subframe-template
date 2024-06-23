"use client";

import React from "react";
import { OAuthSocialButton } from "@/subframe/components/OAuthSocialButton";
import { TextField } from "@/subframe/components/TextField";
import { Button } from "@/subframe/components/Button";

function SimpleSignInCard() {
    return (
        <div className="container max-w-none flex h-full w-full flex-col items-center justify-center gap-2 bg-neutral-50">
            <div className="flex w-full max-w-[384px] flex-col items-center justify-center gap-8 rounded-lg border border-solid border-neutral-border bg-white pt-12 pr-12 pb-12 pl-12">
                <img
                    className="w-40 flex-none"
                    src="https://res.cloudinary.com/subframe/image/upload/v1711417518/shared/fdb8rlpzh1gds6vzsnt0.svg"
                />
                <div className="flex w-full flex-col items-start gap-6">
                    <div className="flex w-full flex-col items-start gap-4">
                        <OAuthSocialButton
                            className="h-10 w-full flex-none"
                            logo="https://res.cloudinary.com/subframe/image/upload/v1711417516/shared/z0i3zyjjqkobzuaecgno.svg"
                        >
                            Sign in with Google
                        </OAuthSocialButton>
                        <OAuthSocialButton
                            className="h-10 w-full flex-none"
                            logo="https://res.cloudinary.com/subframe/image/upload/v1711417561/shared/kplo8lv2zjit3brqmadv.png"
                        >
                            Sign in with Apple
                        </OAuthSocialButton>
                    </div>
                    <div className="flex w-full items-center justify-center gap-2">
                        <div className="flex h-px grow shrink-0 basis-0 flex-col items-center gap-2 bg-neutral-border" />
                        <span className="text-caption font-caption text-subtext-color">
              or
            </span>
                        <div className="flex h-px grow shrink-0 basis-0 flex-col items-center gap-2 bg-neutral-border" />
                    </div>
                    <div className="flex w-full flex-col items-start gap-6">
                        <TextField
                            className="h-auto w-full flex-none"
                            variant="outline"
                            label="Email"
                            helpText=""
                        >
                            <TextField.Input placeholder="Your email address..." />
                        </TextField>
                        <TextField
                            className="h-auto w-full flex-none"
                            variant="outline"
                            label="Password"
                            helpText=""
                        >
                            <TextField.Input type="password" placeholder="Your password..." />
                        </TextField>
                    </div>
                </div>
                <Button className="h-10 w-full flex-none" size="large" icon={null}>
                    Sign in
                </Button>
            </div>
        </div>
    );
}

export default SimpleSignInCard;
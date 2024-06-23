"use client";

import React from "react";
import { IconButton } from "@/subframe/components/IconButton";
import { TextField } from "@/subframe/components/TextField";
import { ChatList } from "@/subframe/components/ChatList";
import { ChatHeader } from "@/subframe/components/ChatHeader";
import { ChatReceived } from "@/subframe/components/ChatReceived";
import { ChatSent } from "@/subframe/components/ChatSent";

function MessengerChatInbox() {
    return (
        <div className="flex h-full w-full items-start bg-default-background mobile:flex-col mobile:gap-0">
            <div className="flex max-w-[384px] grow shrink-0 basis-0 flex-col items-start self-stretch border-r border-solid border-neutral-border mobile:h-auto mobile:w-full mobile:flex-none">
                <div className="flex w-full flex-col items-center gap-1 pt-4 pr-4 pb-2 pl-4">
                    <div className="flex w-full items-center gap-4">
                        <div className="flex grow shrink-0 basis-0 items-center gap-4 pt-2 pr-2 pb-2 pl-2">
              <span className="grow shrink-0 basis-0 text-heading-3 font-heading-3 text-default-font">
                Messages
              </span>
                        </div>
                        <IconButton variant="brand-tertiary" icon="FeatherPenSquare" />
                    </div>
                    <div className="flex w-full flex-col items-center gap-4 pt-2 pr-2 pb-2 pl-2">
                        <TextField
                            className="h-auto w-full flex-none"
                            variant="filled"
                            label=""
                            helpText=""
                            icon="FeatherSearch"
                        >
                            <TextField.Input placeholder="Search" />
                        </TextField>
                    </div>
                </div>
                <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-4 overflow-hidden pt-4 pr-4 pb-4 pl-4 overflow-auto">
                    <ChatList>
                        <ChatList.ChatListItem
                            avatar="https://res.cloudinary.com/subframe/image/upload/v1711417514/shared/ubsk7cs5hnnaj798efej.jpg"
                            name="Warren Daniels"
                            message="Just sent the reports, take a look"
                            timestamp="Just now"
                            unread={true}
                        />
                        <ChatList.ChatListItem
                            avatar="https://res.cloudinary.com/subframe/image/upload/v1711417512/shared/btvntvzhdbhpulae3kzk.jpg"
                            name="Ivan Smith"
                            message="See you there"
                            timestamp="1 hour ago"
                            replied={false}
                            selected={true}
                        />
                        <ChatList.ChatListItem
                            avatar="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/fychrij7dzl8wgq2zjq9.avif"
                            name="Amy Bowen"
                            message="Let's get working on it tomorrow"
                            timestamp="3 hours ago"
                            replied={true}
                        />
                        <ChatList.ChatListItem
                            avatar="https://res.cloudinary.com/subframe/image/upload/v1711417513/shared/kwut7rhuyivweg8tmyzl.jpg"
                            name="Barry Jackson"
                            message="Let me know what you think"
                            timestamp="Yesterday"
                            replied={false}
                            unread={true}
                        />
                        <ChatList.ChatListItem
                            avatar="https://res.cloudinary.com/subframe/image/upload/v1711417512/shared/m0kfajqpwkfief00it4v.jpg"
                            name="Lisa McKinley"
                            message="awesome, can't wait!"
                            timestamp="3 days ago"
                            replied={false}
                        />
                    </ChatList>
                </div>
            </div>
            <div className="flex grow shrink-0 basis-0 flex-col items-start self-stretch mobile:h-auto mobile:w-full mobile:flex-none mobile:border-t mobile:border-solid mobile:border-neutral-border">
                <div className="flex w-full items-center border-b border-solid border-neutral-border pt-6 pr-6 pb-6 pl-6">
                    <ChatHeader
                        name="Ivan Smith"
                        subtitle="ivan@subframe.com"
                        buttons={
                            <>
                                <IconButton variant="brand-tertiary" icon="FeatherVideo" />
                                <IconButton variant="brand-tertiary" icon="FeatherPhone" />
                            </>
                        }
                    />
                </div>
                <div className="flex w-full grow shrink-0 basis-0 flex-col items-center justify-end overflow-hidden overflow-auto">
                    <div className="container max-w-none flex w-full grow shrink-0 basis-0 flex-col items-center gap-4 overflow-hidden pt-12 pb-12 overflow-auto">
                        <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-2" />
                        <div className="flex w-full flex-col items-center justify-end gap-8">
                            <ChatReceived
                                avatar="https://res.cloudinary.com/subframe/image/upload/v1711417512/shared/btvntvzhdbhpulae3kzk.jpg"
                                initials="IS"
                                name="Ivan Smith"
                                message="👋 Hey! What are you thinking for lunch today? I was hoping to get something quick so I can get back to work."
                                time="11:11am"
                            />
                            <ChatSent
                                name="You"
                                message="How does Thai sound? I know a pretty good place."
                                timestamp="11:21am"
                            />
                            <ChatReceived
                                avatar="https://res.cloudinary.com/subframe/image/upload/v1711417512/shared/btvntvzhdbhpulae3kzk.jpg"
                                initials="IS"
                                name="Ivan Smith"
                                message="I'd be open to it! Is it walkable from the office?"
                                time="11:24am"
                            />
                            <ChatSent
                                name="You"
                                message="Totally is. Let me wrap up this report real fast and I'll meet you at your desk in 15min."
                                timestamp="11:25am"
                            />
                            <ChatReceived
                                avatar="https://res.cloudinary.com/subframe/image/upload/v1711417512/shared/btvntvzhdbhpulae3kzk.jpg"
                                initials="IS"
                                name="Ivan Smith"
                                message="See you there "
                                time="11:26am"
                            />
                        </div>
                    </div>
                    <div className="container max-w-none flex w-full items-end gap-2 pt-1 pb-8">
                        <div className="flex items-end">
                            <IconButton variant="brand-tertiary" icon="FeatherPlusCircle" />
                            <IconButton variant="brand-tertiary" icon="FeatherImage" />
                            <IconButton variant="brand-tertiary" icon="FeatherSmile" />
                        </div>
                        <TextField
                            className="h-auto grow shrink-0 basis-0"
                            variant="filled"
                            label=""
                            helpText=""
                        >
                            <TextField.Input placeholder="Type your message..." />
                        </TextField>
                        <IconButton variant="brand-primary" icon="FeatherSend" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MessengerChatInbox;
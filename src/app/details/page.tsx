"use client";

import React from "react";
import * as SubframeCore from "@subframe/core";
import { IconButton } from "@/subframe/components/IconButton";
import { TextField } from "@/subframe/components/TextField";
import { TreeView } from "@/subframe/components/TreeView";
import { Avatar } from "@/subframe/components/Avatar";
import { DropdownMenu } from "@/subframe/components/DropdownMenu";
import { Button } from "@/subframe/components/Button";
import { Table } from "@/subframe/components/Table";

function ListDetailPageWithTree() {
    return (
        <div className="flex h-full w-full items-start gap-12 bg-default-background pt-12 pr-12 pb-12 pl-12 mobile:flex-col mobile:gap-12 mobile:pt-6 mobile:pr-6 mobile:pb-6 mobile:pl-6">
            <div className="flex w-64 flex-none flex-col items-start gap-2 self-stretch overflow-auto mobile:h-auto mobile:w-full mobile:flex-none">
                <div className="flex w-full items-center gap-2 pt-2 pb-2 pl-2">
                    <SubframeCore.Icon
                        className="text-heading-2 font-heading-2 text-default-font"
                        name="FeatherLibrary"
                    />
                    <span className="grow shrink-0 basis-0 text-heading-3 font-heading-3 text-default-font">
            Your library
          </span>
                    <IconButton variant="brand-secondary" />
                </div>
                <TextField
                    className="h-auto w-full flex-none"
                    variant="filled"
                    label=""
                    helpText=""
                    icon="FeatherSearch"
                >
                    <TextField.Input placeholder="Search" />
                </TextField>
                <TreeView className="mobile:hidden">
                    <TreeView.Item label="Daily Discover" icon="FeatherGlobe2" />
                    <TreeView.Item label="New Releases" icon="FeatherStar" />
                    <TreeView.Item label="Liked Songs" icon="FeatherPin" />
                    <TreeView.Folder label="My Playlists">
                        <TreeView.Item
                            selected={true}
                            label="Chill Vibes Only\n\n"
                            icon="FeatherListMusic"
                        />
                        <TreeView.Item label="Morning Boost\n\n" icon="FeatherListMusic" />
                        <TreeView.Item
                            label="Late Night Grooves\n\n"
                            icon="FeatherListMusic"
                        />
                    </TreeView.Folder>
                    <TreeView.Folder className="h-40 w-full flex-none" label="Shared">
                        <TreeView.Item
                            label="Sunday Brunch Tunes\n\n"
                            icon="FeatherListMusic"
                        />
                        <TreeView.Item
                            label="Road Trip Jams\n\n\n\n\n\n"
                            icon="FeatherListMusic"
                        />
                        <TreeView.Item
                            label="Serotonin Sunrise\n\n"
                            icon="FeatherListMusic"
                        />
                    </TreeView.Folder>
                </TreeView>
            </div>
            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-8 self-stretch rounded-lg bg-neutral-50 pt-12 pr-12 pb-12 pl-12 overflow-auto mobile:h-auto mobile:w-full mobile:flex-none mobile:rounded-none mobile:border-none mobile:bg-transparent mobile:pt-0 mobile:pr-0 mobile:pb-0 mobile:pl-0 mobile:shadow-none">
                <div className="flex w-full items-end gap-6 mobile:flex-col mobile:items-center mobile:justify-start mobile:gap-6">
                    <div className="flex h-40 w-40 flex-none flex-col items-center justify-center gap-2 overflow-hidden rounded-lg shadow-overlay">
                        <img
                            className="w-full grow shrink-0 basis-0"
                            src="https://res.cloudinary.com/subframe/image/upload/v1711417515/shared/cdnbniyuqjnplaj2zbjw.png"
                        />
                    </div>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start gap-6 mobile:items-center mobile:justify-start">
                        <div className="flex w-full flex-col items-start gap-2 mobile:items-center mobile:justify-start">
              <span className="text-caption-bold font-caption-bold text-default-font">
                Playlist
              </span>
                            <span className="w-full text-heading-1 font-heading-1 text-default-font mobile:text-center">
                Chill Vibes Only
              </span>
                            <span className="line-clamp-1 w-full text-body font-body text-default-font mobile:text-center">
                Laid-back tracks, expertly curated
              </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                            <div className="flex items-center gap-2">
                                <Avatar
                                    size="small"
                                    image="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/fychrij7dzl8wgq2zjq9.avif"
                                >
                                    AB
                                </Avatar>
                                <span className="text-body-bold font-body-bold text-default-font">
                  Emily
                </span>
                            </div>
                            <span className="text-body font-body text-subtext-color">•</span>
                            <span className="text-caption font-caption text-subtext-color">
                7 songs
              </span>
                            <span className="text-body font-body text-subtext-color">•</span>
                            <span className="text-caption font-caption text-subtext-color">
                3 days ago
              </span>
                        </div>
                    </div>
                </div>
                <div className="flex w-full items-center justify-between">
                    <div className="flex items-center gap-4">
                        <IconButton
                            variant="brand-primary"
                            size="large"
                            icon="FeatherPlay"
                        />
                        <IconButton variant="brand-tertiary" icon="FeatherShuffle" />
                        <IconButton
                            variant="brand-tertiary"
                            icon="FeatherArrowDownCircle"
                        />
                        <SubframeCore.DropdownMenu.Root>
                            <SubframeCore.DropdownMenu.Trigger asChild={true}>
                                <IconButton
                                    variant="brand-tertiary"
                                    icon="FeatherMoreHorizontal"
                                />
                            </SubframeCore.DropdownMenu.Trigger>
                            <SubframeCore.DropdownMenu.Portal>
                                <SubframeCore.DropdownMenu.Content
                                    side="bottom"
                                    align="start"
                                    sideOffset={4}
                                    asChild={true}
                                >
                                    <DropdownMenu>
                                        <DropdownMenu.DropdownItem icon="FeatherShare">
                                            Share
                                        </DropdownMenu.DropdownItem>
                                        <DropdownMenu.DropdownItem icon="FeatherEdit2">
                                            Rename
                                        </DropdownMenu.DropdownItem>
                                        <DropdownMenu.DropdownItem icon="FeatherTrash">
                                            Delete
                                        </DropdownMenu.DropdownItem>
                                    </DropdownMenu>
                                </SubframeCore.DropdownMenu.Content>
                            </SubframeCore.DropdownMenu.Portal>
                        </SubframeCore.DropdownMenu.Root>
                    </div>
                    <div className="flex items-center gap-2">
                        <IconButton size="small" icon="FeatherSearch" />
                        <SubframeCore.DropdownMenu.Root>
                            <SubframeCore.DropdownMenu.Trigger asChild={true}>
                                <Button
                                    variant="neutral-tertiary"
                                    size="small"
                                    iconRight="FeatherChevronDown"
                                >
                                    Sort
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
                                            Title
                                        </DropdownMenu.DropdownItem>
                                        <DropdownMenu.DropdownItem icon={null}>
                                            Artist
                                        </DropdownMenu.DropdownItem>
                                        <DropdownMenu.DropdownItem icon={null}>
                                            Album
                                        </DropdownMenu.DropdownItem>
                                        <DropdownMenu.DropdownItem icon={null}>
                                            Date added
                                        </DropdownMenu.DropdownItem>
                                    </DropdownMenu>
                                </SubframeCore.DropdownMenu.Content>
                            </SubframeCore.DropdownMenu.Portal>
                        </SubframeCore.DropdownMenu.Root>
                    </div>
                </div>
                <div className="flex w-full flex-col items-start gap-8 overflow-auto">
                    <Table
                        header={
                            <Table.HeaderRow>
                                <Table.HeaderCell>Title</Table.HeaderCell>
                                <Table.HeaderCell>Artist</Table.HeaderCell>
                                <Table.HeaderCell>Date added</Table.HeaderCell>
                            </Table.HeaderRow>
                        }
                    >
                        <Table.Row>
                            <Table.Cell>
                                <div className="flex grow shrink-0 basis-0 items-center gap-2">
                  <span className="line-clamp-1 w-8 flex-none text-body font-body text-subtext-color text-center">
                    1
                  </span>
                                    <Avatar
                                        image="https://res.cloudinary.com/dnkpdfdai/image/upload/v1717804669/uploads/1/u9fybvt4qqaupxt4k8os.jpg"
                                        square={true}
                                    >
                                        AB
                                    </Avatar>
                                    <div className="flex grow shrink-0 basis-0 flex-col items-start">
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                      adore u
                    </span>
                                        <span className="text-caption font-caption text-default-font">
                      adore u
                    </span>
                                    </div>
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                <span className="whitespace-nowrap text-caption font-caption text-neutral-500">
                  Fred Again...
                </span>
                            </Table.Cell>
                            <Table.Cell>
                <span className="whitespace-nowrap text-caption font-caption text-neutral-500">
                  1 hour ago
                </span>
                            </Table.Cell>
                            <Table.Cell>
                                <div className="flex grow shrink-0 basis-0 items-center justify-end">
                                    <SubframeCore.DropdownMenu.Root>
                                        <SubframeCore.DropdownMenu.Trigger asChild={true}>
                                            <IconButton size="medium" icon="FeatherMoreHorizontal" />
                                        </SubframeCore.DropdownMenu.Trigger>
                                        <SubframeCore.DropdownMenu.Portal>
                                            <SubframeCore.DropdownMenu.Content
                                                side="bottom"
                                                align="end"
                                                sideOffset={8}
                                                asChild={true}
                                            >
                                                <DropdownMenu>
                                                    <DropdownMenu.DropdownItem icon="FeatherShare">
                                                        Share
                                                    </DropdownMenu.DropdownItem>
                                                    <DropdownMenu.DropdownItem icon="FeatherStar">
                                                        Favorite
                                                    </DropdownMenu.DropdownItem>
                                                    <DropdownMenu.DropdownItem icon="FeatherPlusCircle">
                                                        Add to playlist
                                                    </DropdownMenu.DropdownItem>
                                                    <DropdownMenu.DropdownItem icon="FeatherMinusCircle">
                                                        Remove
                                                    </DropdownMenu.DropdownItem>
                                                </DropdownMenu>
                                            </SubframeCore.DropdownMenu.Content>
                                        </SubframeCore.DropdownMenu.Portal>
                                    </SubframeCore.DropdownMenu.Root>
                                </div>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <div className="flex grow shrink-0 basis-0 items-center gap-2">
                  <span className="line-clamp-1 w-8 flex-none text-body font-body text-subtext-color text-center">
                    2
                  </span>
                                    <Avatar
                                        image="https://res.cloudinary.com/dnkpdfdai/image/upload/v1717804020/uploads/1/omsl3rzba4x4sle4dxkr.png"
                                        square={true}
                                    >
                                        AB
                                    </Avatar>
                                    <div className="flex grow shrink-0 basis-0 flex-col items-start">
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                      Teenage Birdsong
                    </span>
                                        <span className="text-caption font-caption text-default-font">
                      Sixteen Oceans
                    </span>
                                    </div>
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                <span className="whitespace-nowrap text-caption font-caption text-neutral-500">
                  Four Tet
                </span>
                            </Table.Cell>
                            <Table.Cell>
                <span className="whitespace-nowrap text-caption font-caption text-neutral-500">
                  1 day ago
                </span>
                            </Table.Cell>
                            <Table.Cell>
                                <div className="flex grow shrink-0 basis-0 items-center justify-end">
                                    <SubframeCore.DropdownMenu.Root>
                                        <SubframeCore.DropdownMenu.Trigger asChild={true}>
                                            <IconButton size="medium" icon="FeatherMoreHorizontal" />
                                        </SubframeCore.DropdownMenu.Trigger>
                                        <SubframeCore.DropdownMenu.Portal>
                                            <SubframeCore.DropdownMenu.Content
                                                side="bottom"
                                                align="end"
                                                sideOffset={8}
                                                asChild={true}
                                            >
                                                <DropdownMenu>
                                                    <DropdownMenu.DropdownItem icon="FeatherShare">
                                                        Share
                                                    </DropdownMenu.DropdownItem>
                                                    <DropdownMenu.DropdownItem icon="FeatherStar">
                                                        Favorite
                                                    </DropdownMenu.DropdownItem>
                                                    <DropdownMenu.DropdownItem icon="FeatherPlusCircle">
                                                        Add to playlist
                                                    </DropdownMenu.DropdownItem>
                                                    <DropdownMenu.DropdownItem icon="FeatherMinusCircle">
                                                        Remove
                                                    </DropdownMenu.DropdownItem>
                                                </DropdownMenu>
                                            </SubframeCore.DropdownMenu.Content>
                                        </SubframeCore.DropdownMenu.Portal>
                                    </SubframeCore.DropdownMenu.Root>
                                </div>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <div className="flex grow shrink-0 basis-0 items-center gap-2">
                  <span className="line-clamp-1 w-8 flex-none text-body font-body text-subtext-color text-center">
                    3
                  </span>
                                    <Avatar
                                        image="https://res.cloudinary.com/dnkpdfdai/image/upload/v1717804036/uploads/1/ckf41z16dsoj11zglsmp.jpg"
                                        square={true}
                                    >
                                        AB
                                    </Avatar>
                                    <div className="flex grow shrink-0 basis-0 flex-col items-start">
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                      Curls
                    </span>
                                        <span className="text-caption font-caption text-default-font">
                      Ribbons
                    </span>
                                    </div>
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                <span className="whitespace-nowrap text-caption font-caption text-neutral-500">
                  Bibio
                </span>
                            </Table.Cell>
                            <Table.Cell>
                <span className="whitespace-nowrap text-caption font-caption text-neutral-500">
                  1 day ago
                </span>
                            </Table.Cell>
                            <Table.Cell>
                                <div className="flex grow shrink-0 basis-0 items-center justify-end">
                                    <SubframeCore.DropdownMenu.Root>
                                        <SubframeCore.DropdownMenu.Trigger asChild={true}>
                                            <IconButton size="medium" icon="FeatherMoreHorizontal" />
                                        </SubframeCore.DropdownMenu.Trigger>
                                        <SubframeCore.DropdownMenu.Portal>
                                            <SubframeCore.DropdownMenu.Content
                                                side="bottom"
                                                align="end"
                                                sideOffset={8}
                                                asChild={true}
                                            >
                                                <DropdownMenu>
                                                    <DropdownMenu.DropdownItem icon="FeatherShare">
                                                        Share
                                                    </DropdownMenu.DropdownItem>
                                                    <DropdownMenu.DropdownItem icon="FeatherStar">
                                                        Favorite
                                                    </DropdownMenu.DropdownItem>
                                                    <DropdownMenu.DropdownItem icon="FeatherPlusCircle">
                                                        Add to playlist
                                                    </DropdownMenu.DropdownItem>
                                                    <DropdownMenu.DropdownItem icon="FeatherMinusCircle">
                                                        Remove
                                                    </DropdownMenu.DropdownItem>
                                                </DropdownMenu>
                                            </SubframeCore.DropdownMenu.Content>
                                        </SubframeCore.DropdownMenu.Portal>
                                    </SubframeCore.DropdownMenu.Root>
                                </div>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <div className="flex grow shrink-0 basis-0 items-center gap-2">
                  <span className="line-clamp-1 w-8 flex-none text-body font-body text-subtext-color text-center">
                    4
                  </span>
                                    <Avatar
                                        image="https://res.cloudinary.com/dnkpdfdai/image/upload/v1717804047/uploads/1/if24ckber8tix9mpgook.png"
                                        square={true}
                                    >
                                        AB
                                    </Avatar>
                                    <div className="flex grow shrink-0 basis-0 flex-col items-start">
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                      Say That
                    </span>
                                        <span className="text-caption font-caption text-default-font">
                      Anything in Return
                    </span>
                                    </div>
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                <span className="whitespace-nowrap text-caption font-caption text-neutral-500">
                  Toro y Moi
                </span>
                            </Table.Cell>
                            <Table.Cell>
                <span className="whitespace-nowrap text-caption font-caption text-neutral-500">
                  3 days ago
                </span>
                            </Table.Cell>
                            <Table.Cell>
                                <div className="flex grow shrink-0 basis-0 items-center justify-end">
                                    <SubframeCore.DropdownMenu.Root>
                                        <SubframeCore.DropdownMenu.Trigger asChild={true}>
                                            <IconButton size="medium" icon="FeatherMoreHorizontal" />
                                        </SubframeCore.DropdownMenu.Trigger>
                                        <SubframeCore.DropdownMenu.Portal>
                                            <SubframeCore.DropdownMenu.Content
                                                side="bottom"
                                                align="end"
                                                sideOffset={8}
                                                asChild={true}
                                            >
                                                <DropdownMenu>
                                                    <DropdownMenu.DropdownItem icon="FeatherShare">
                                                        Share
                                                    </DropdownMenu.DropdownItem>
                                                    <DropdownMenu.DropdownItem icon="FeatherStar">
                                                        Favorite
                                                    </DropdownMenu.DropdownItem>
                                                    <DropdownMenu.DropdownItem icon="FeatherPlusCircle">
                                                        Add to playlist
                                                    </DropdownMenu.DropdownItem>
                                                    <DropdownMenu.DropdownItem icon="FeatherMinusCircle">
                                                        Remove
                                                    </DropdownMenu.DropdownItem>
                                                </DropdownMenu>
                                            </SubframeCore.DropdownMenu.Content>
                                        </SubframeCore.DropdownMenu.Portal>
                                    </SubframeCore.DropdownMenu.Root>
                                </div>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <div className="flex grow shrink-0 basis-0 items-center gap-2">
                  <span className="line-clamp-1 w-8 flex-none text-body font-body text-subtext-color text-center">
                    6
                  </span>
                                    <Avatar
                                        image="https://res.cloudinary.com/dnkpdfdai/image/upload/v1717804835/uploads/1/lakhpwystrvyicm8owgq.webp"
                                        square={true}
                                    >
                                        AB
                                    </Avatar>
                                    <div className="flex grow shrink-0 basis-0 flex-col items-start">
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                      We Don&#39;t Wanna Talk
                    </span>
                                        <span className="text-caption font-caption text-default-font">
                      Nowhere
                    </span>
                                    </div>
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                <span className="whitespace-nowrap text-caption font-caption text-neutral-500">
                  Friday Pilots Club
                </span>
                            </Table.Cell>
                            <Table.Cell>
                <span className="whitespace-nowrap text-caption font-caption text-neutral-500">
                  5 days ago
                </span>
                            </Table.Cell>
                            <Table.Cell>
                                <div className="flex grow shrink-0 basis-0 items-center justify-end">
                                    <SubframeCore.DropdownMenu.Root>
                                        <SubframeCore.DropdownMenu.Trigger asChild={true}>
                                            <IconButton size="medium" icon="FeatherMoreHorizontal" />
                                        </SubframeCore.DropdownMenu.Trigger>
                                        <SubframeCore.DropdownMenu.Portal>
                                            <SubframeCore.DropdownMenu.Content
                                                side="bottom"
                                                align="end"
                                                sideOffset={8}
                                                asChild={true}
                                            >
                                                <DropdownMenu>
                                                    <DropdownMenu.DropdownItem icon="FeatherShare">
                                                        Share
                                                    </DropdownMenu.DropdownItem>
                                                    <DropdownMenu.DropdownItem icon="FeatherStar">
                                                        Favorite
                                                    </DropdownMenu.DropdownItem>
                                                    <DropdownMenu.DropdownItem icon="FeatherPlusCircle">
                                                        Add to playlist
                                                    </DropdownMenu.DropdownItem>
                                                    <DropdownMenu.DropdownItem icon="FeatherMinusCircle">
                                                        Remove
                                                    </DropdownMenu.DropdownItem>
                                                </DropdownMenu>
                                            </SubframeCore.DropdownMenu.Content>
                                        </SubframeCore.DropdownMenu.Portal>
                                    </SubframeCore.DropdownMenu.Root>
                                </div>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <div className="flex grow shrink-0 basis-0 items-center gap-2">
                  <span className="line-clamp-1 w-8 flex-none text-body font-body text-subtext-color text-center">
                    5
                  </span>
                                    <Avatar
                                        image="https://res.cloudinary.com/dnkpdfdai/image/upload/v1717804056/uploads/1/zc0uqczcflx9bajj6dih.png"
                                        square={true}
                                    >
                                        AB
                                    </Avatar>
                                    <div className="flex grow shrink-0 basis-0 flex-col items-start">
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                      Time (You and I)
                    </span>
                                        <span className="text-caption font-caption text-default-font">
                      Mordechai
                    </span>
                                    </div>
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                <span className="whitespace-nowrap text-caption font-caption text-neutral-500">
                  Khruangbin
                </span>
                            </Table.Cell>
                            <Table.Cell>
                <span className="whitespace-nowrap text-caption font-caption text-neutral-500">
                  1 week ago
                </span>
                            </Table.Cell>
                            <Table.Cell>
                                <div className="flex grow shrink-0 basis-0 items-center justify-end">
                                    <SubframeCore.DropdownMenu.Root>
                                        <SubframeCore.DropdownMenu.Trigger asChild={true}>
                                            <IconButton size="medium" icon="FeatherMoreHorizontal" />
                                        </SubframeCore.DropdownMenu.Trigger>
                                        <SubframeCore.DropdownMenu.Portal>
                                            <SubframeCore.DropdownMenu.Content
                                                side="bottom"
                                                align="end"
                                                sideOffset={8}
                                                asChild={true}
                                            >
                                                <DropdownMenu>
                                                    <DropdownMenu.DropdownItem icon="FeatherShare">
                                                        Share
                                                    </DropdownMenu.DropdownItem>
                                                    <DropdownMenu.DropdownItem icon="FeatherStar">
                                                        Favorite
                                                    </DropdownMenu.DropdownItem>
                                                    <DropdownMenu.DropdownItem icon="FeatherPlusCircle">
                                                        Add to playlist
                                                    </DropdownMenu.DropdownItem>
                                                    <DropdownMenu.DropdownItem icon="FeatherMinusCircle">
                                                        Remove
                                                    </DropdownMenu.DropdownItem>
                                                </DropdownMenu>
                                            </SubframeCore.DropdownMenu.Content>
                                        </SubframeCore.DropdownMenu.Portal>
                                    </SubframeCore.DropdownMenu.Root>
                                </div>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <div className="flex grow shrink-0 basis-0 items-center gap-2">
                  <span className="line-clamp-1 w-8 flex-none text-body font-body text-subtext-color text-center">
                    6
                  </span>
                                    <Avatar
                                        image="https://res.cloudinary.com/dnkpdfdai/image/upload/v1717804065/uploads/1/yjdbvrgfcnaacqrmkvl5.png"
                                        square={true}
                                    >
                                        AB
                                    </Avatar>
                                    <div className="flex grow shrink-0 basis-0 flex-col items-start">
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                      Awake
                    </span>
                                        <span className="text-caption font-caption text-default-font">
                      Awake
                    </span>
                                    </div>
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                <span className="whitespace-nowrap text-caption font-caption text-neutral-500">
                  Tycho
                </span>
                            </Table.Cell>
                            <Table.Cell>
                <span className="whitespace-nowrap text-caption font-caption text-neutral-500">
                  2 weeks ago
                </span>
                            </Table.Cell>
                            <Table.Cell>
                                <div className="flex grow shrink-0 basis-0 items-center justify-end">
                                    <SubframeCore.DropdownMenu.Root>
                                        <SubframeCore.DropdownMenu.Trigger asChild={true}>
                                            <IconButton size="medium" icon="FeatherMoreHorizontal" />
                                        </SubframeCore.DropdownMenu.Trigger>
                                        <SubframeCore.DropdownMenu.Portal>
                                            <SubframeCore.DropdownMenu.Content
                                                side="bottom"
                                                align="end"
                                                sideOffset={8}
                                                asChild={true}
                                            >
                                                <DropdownMenu>
                                                    <DropdownMenu.DropdownItem icon="FeatherShare">
                                                        Share
                                                    </DropdownMenu.DropdownItem>
                                                    <DropdownMenu.DropdownItem icon="FeatherStar">
                                                        Favorite
                                                    </DropdownMenu.DropdownItem>
                                                    <DropdownMenu.DropdownItem icon="FeatherPlusCircle">
                                                        Add to playlist
                                                    </DropdownMenu.DropdownItem>
                                                    <DropdownMenu.DropdownItem icon="FeatherMinusCircle">
                                                        Remove
                                                    </DropdownMenu.DropdownItem>
                                                </DropdownMenu>
                                            </SubframeCore.DropdownMenu.Content>
                                        </SubframeCore.DropdownMenu.Portal>
                                    </SubframeCore.DropdownMenu.Root>
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default ListDetailPageWithTree;
'use client';

import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Notifications } from "./notifications";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { useEffect, useRef, useState } from "react";
import { updateDocument } from "@/lib/actions/room.actions";
import { ActiveCollaborators } from "./active-colaborators";
import { ShareModal } from "./share-modal";
import { Input } from "./ui/input";

export const Header = ({
  className,
  roomId,
  roomMetadata,
  currentUserType,
  users,
}: HeaderProps) => {
  const [documentTitle, setDocumentTitle] = useState(roomMetadata?.title);
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const updateTitleHandler = async (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      setLoading(true);

      try {
        if (documentTitle !== roomMetadata?.title) {
          const updatedDocument = await updateDocument(
            roomId as string,
            documentTitle as string
          );

          if (updatedDocument) {
            setEditing(false);
          }
        }
      } catch (error) {
        console.error("Error notification:", error);
      }

      setLoading(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setEditing(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editing]);
  return (
    <div className={cn("header", className)}>
      <Link href="/" className="md:w-[150px]">
        <Image
          src="/assets/icons/logo.svg"
          alt="file"
          width={120}
          height={32}
          className="hidden md:block"
        />
        <Image
          src="/assets/icons/logo-icon.svg"
          alt="file"
          width={32}
          height={32}
          className="mr-2 md:hidden"
        />
      </Link>
      {roomId ? (
        <>
          <div
            ref={containerRef}
            className="flex w-fit items-center justify-center gap-2 lg:flex-1"
          >
            {editing && !loading ? (
              <Input
                type="text"
                value={documentTitle}
                ref={inputRef}
                placeholder="Enter title"
                onChange={(e) => setDocumentTitle(e.target.value)}
                onKeyDown={(e) => updateTitleHandler(e)}
                disabled={!editing}
                className="document-title-input"
              />
            ) : (
              <>
                <p className="document-title">{documentTitle}</p>
              </>
            )}

            {/* Edit icon trigger */}
            {currentUserType === "editor" && !editing && (
              <Image
                src="/assets/icons/edit.svg"
                alt="edit"
                width={24}
                height={24}
                onClick={() => setEditing(true)}
                className="cursor-pointer"
              />
            )}

            {/* View only user indicator */}
            {currentUserType !== "editor" && !editing && (
              <p className="view-only-tag">View only</p>
            )}

            {/* Saving title indicator */}
            {loading && <p className="text-sm text-gray-400">saving...</p>}
          </div>

          {/* Collaborators & Actions */}
          <div className="flex w-[150px] justify-end gap-2 sm:gap-3 ">
            <ActiveCollaborators />
            <ShareModal
              roomId={roomId as string}
              collaborators={users as User[]}
              creatorId={roomMetadata?.creatorId as string}
              currentUserType={currentUserType as UserType}
            />
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </>
      ) : (
        <div className="flex items-center gap-2 lg:gap-4">
          {/* Title text & Input field */}

          <Notifications />
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      )}
    </div>
  );
};

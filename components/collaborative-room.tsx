"use client";

import { SignedIn, UserButton } from "@clerk/nextjs";
import { RoomProvider, ClientSideSuspense } from "@liveblocks/react/suspense";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { updateDocument } from "@/lib/actions/room.actions";

import { Editor } from "@/components/editor";
import { Header } from "@/components/header";
import { Loader } from "@/components/loader";

import { ActiveCollaborators } from "./active-colaborators";
import { ShareModal } from "./share-modal";
import { Input } from "./ui/input";

export function CollaborativeRoom({
  roomId,
  roomMetadata,
  users,
  currentUserType,
}: CollaborativeRoomProps) {
  const [documentTitle, setDocumentTitle] = useState(roomMetadata.title);
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
        if (documentTitle !== roomMetadata.title) {
          const updatedDocument = await updateDocument(roomId, documentTitle);

          if (updatedDocument) {
            setEditing(false);
          }
        }
      } catch (error) {
        console.log("Error notif:", error);
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
    <RoomProvider id={roomId}>
      <ClientSideSuspense fallback={<Loader />}>
        <div className="collaborative-room">
          <Header roomId={roomId} roomMetadata={roomMetadata} currentUserType={currentUserType} users={users}/>
          


          <Editor roomId={roomId} currentUserType={currentUserType} />
        </div>
      </ClientSideSuspense>
    </RoomProvider>
  );
}

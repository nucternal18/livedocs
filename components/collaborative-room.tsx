"use client";

import { RoomProvider, ClientSideSuspense } from "@liveblocks/react/suspense";

import { Editor } from "@/components/editor";
import { Header } from "@/components/header";
import { Loader } from "@/components/loader";

export function CollaborativeRoom({
  roomId,
  roomMetadata,
  users,
  currentUserType,
}: CollaborativeRoomProps) {
  return (
    <RoomProvider id={roomId}>
      <ClientSideSuspense fallback={<Loader />}>
        <div className="collaborative-room">
          <Header
            roomId={roomId}
            roomMetadata={roomMetadata}
            currentUserType={currentUserType}
            users={users}
          />

          <Editor roomId={roomId} currentUserType={currentUserType} />
        </div>
      </ClientSideSuspense>
    </RoomProvider>
  );
}

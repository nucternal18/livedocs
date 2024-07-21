import { Liveblocks } from "@liveblocks/node";

const { LIVEBLOCKS_SECRET_KEY } = process.env;

export const liveblocks = new Liveblocks({
  secret: LIVEBLOCKS_SECRET_KEY! ,
});

import SanityClient from "@sanity/client";
import  ImageUrlBuilder  from "@sanity/image-url";

export const client = SanityClient({
  projectId: "bjewmit5",
  dataset: "production",
  apiVersion: "2022-07-26",
  useCdn: true,
  token:
    "skTHQVz8ub0ISi3T8SmuZmhrBw5v58uYAN9tHm7M31aLNqD3GeG2VpAeSF9r2gyafRQjR47bx2ORo2xZZBs7a6WTw0iBNRV3O3E60mOUIQt8HZe28Uqg40KSngVAiMH4F7JAlUNETOHeP9SKQS5TFLQxwjCkbKunWBtrBgTw6tdG5pEWs4r7",
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

import { defineConfig } from "tinacms";
import { defaultFields } from "./templates";
import { emptyFields } from "./templates";
import { contact_informationFields } from "./templates";
import { landing_pageFields } from "./templates";
import { personFields } from "./templates";
import { postFields } from "./templates";
import { postsFields } from "./templates";
import { projectFields } from "./templates";
import { redirectFields } from "./templates";
import { sponsorsFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "85abcbff-dde7-4e4a-b40b-a41f33ea951c", // Get this from tina.io
  token: "9f7cce545bd3edbe61cae9d98f030c1bc47586c6", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "./",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Home",
        name: "home",
        path: ".",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "string",
            name: "heading",
            label: "Hero Heading",
          },
          {
            type: "string",
            name: "sub_heading",
            label: "Hero Sub heading",
          },
          {
            type: "image",
            name: "banner_image",
            label: "Hero Image",
          },
          {
            type: "object",
            name: "hero_button",
            label: "EDIT THE BIG BUTTON IN THE MIDDLE OF THE PIC GALLERY HERE",
            fields: [
              {
                type: "string",
                name: "text",
                label: "Text",
              },
              {
                type: "string",
                name: "href",
                label: "Link",
              },
            ],
          },
          {
            type: "image",
            name: "img_carousel",
            nameOverride: "img-carousel",
            label: "Hero Carousel",
            list: true,
          },
          {
            type: "string",
            name: "textline",
            label: "Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "services",
            label: "Services",
            list: true,
            fields: [
              {
                type: "string",
                name: "heading",
                label: "Heading",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
              },
              {
                type: "image",
                name: "icon",
                label: "Icon",
              },
            ],
          },
          {
            type: "object",
            name: "img_gallery",
            nameOverride: "img-gallery",
            label: "Image Gallery",
            fields: [
              {
                type: "string",
                name: "columns",
                label: "Number of Columns",
              },
              {
                type: "image",
                name: "images",
                label: "Gallery Images",
                list: true,
              },
            ],
          },
          {
            type: "boolean",
            name: "show_news",
            label: "Show News?",
          },
          {
            type: "boolean",
            name: "show_staff",
            label: "Show Staff?",
          },
          {
            type: "string",
            name: "layout",
            label: "Layout",
          },
        ],
      },
      {
        format: "md",
        label: "About",
        name: "about",
        path: ".",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "about",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "md",
        label: "Our Team",
        name: "our_team",
        path: ".",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "team",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "md",
        label: "Join",
        name: "join",
        path: ".",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "join",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "md",
        label: "Sponsors, Contact Info, Other Variables",
        name: "sponsors__contact_info__other_variables",
        path: "_data",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
        ui: {
          allowedActions: {
            create: false,
          },
        },
      },
    ],
  },
});

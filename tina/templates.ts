import type { TinaField } from "tinacms";
export function defaultFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      ui: {
        component: "textarea",
      },
      required: true,
    },
    {
      type: "datetime",
      name: "publish_date",
      label: "Publish Date",
      required: true,
    },
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
  ] as TinaField[];
}
export function emptyFields() {
  return [] as TinaField[];
}
export function contact_informationFields() {
  return [
    {
      type: "object",
      name: "social_media",
      label: "Social Media Icons",
      list: true,
      fields: [
        {
          type: "string",
          name: "name",
          label: "Hover Text",
        },
        {
          type: "image",
          name: "icon",
          label: "Icon",
        },
        {
          type: "string",
          name: "url",
          label: "Website",
        },
      ],
    },
    {
      type: "string",
      name: "email",
      label: "Email",
    },
    {
      type: "string",
      name: "phone",
      label: "Phone",
    },
    {
      type: "string",
      name: "address_1",
      label: "Address 1",
    },
    {
      type: "string",
      name: "address_2",
      label: "Address 2",
    },
    {
      type: "string",
      name: "city",
      label: "City",
    },
    {
      type: "string",
      name: "state",
      label: "State",
    },
    {
      type: "string",
      name: "postal_code",
      label: "Postal code",
    },
    {
      type: "string",
      name: "country",
      label: "Country",
    },
  ] as TinaField[];
}
export function landing_pageFields() {
  return [
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
  ] as TinaField[];
}
export function personFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Name",
    },
    {
      type: "string",
      name: "sub_heading",
      label: "Sub Heading",
    },
    {
      type: "image",
      name: "thumbnail",
      label: "Thumbnail",
    },
    {
      type: "string",
      name: "role",
      label: "Departments",
      list: true,
    },
    {
      type: "string",
      name: "email",
      label: "Email",
    },
    {
      type: "string",
      name: "linkedin",
      label: "Linkedin",
    },
    {
      type: "string",
      name: "layout",
      label: "Layout",
    },
  ] as TinaField[];
}
export function postFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "sub_heading",
      label: "Sub Heading",
    },
    {
      type: "datetime",
      name: "date",
      label: "Publish Date",
    },
    {
      type: "string",
      name: "tags",
      label: "Tags",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "image",
      name: "banner_image",
      label: "Banner Image",
    },
    {
      type: "string",
      name: "related_posts",
      label: "Related Posts",
      list: true,
    },
    {
      type: "string",
      name: "layout",
      label: "Layout",
    },
  ] as TinaField[];
}
export function postsFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "Layout",
    },
  ] as TinaField[];
}
export function projectFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "sub_heading",
      label: "Sub Heading",
    },
    {
      type: "image",
      name: "banner_image",
      label: "Banner Image",
    },
    {
      type: "string",
      name: "tags",
      label: "Tags",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "string",
      name: "slug",
      label: "Slug",
    },
  ] as TinaField[];
}
export function redirectFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Link",
      required: true,
    },
    {
      type: "string",
      name: "metatitle",
      label: "Title",
    },
    {
      type: "string",
      name: "href",
      label: "To",
      required: true,
    },
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
  ] as TinaField[];
}
export function sponsorsFields() {
  return [
    {
      type: "object",
      name: "sponsors",
      label: "List of Sponsors",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "card",
          label: "Card style classes",
        },
        {
          type: "string",
          name: "classes",
          label: "Column classes",
        },
        {
          type: "object",
          name: "sponsorlist",
          label: "Sponsors",
          list: true,
          fields: [
            {
              type: "string",
              name: "name",
              label: "Name of Sponsor",
            },
            {
              type: "image",
              name: "image",
              label: "Logo",
            },
            {
              type: "string",
              name: "url",
              label: "Website",
            },
            {
              type: "boolean",
              name: "dark",
              label: "Logo is all white?",
            },
          ],
        },
      ],
    },
    {
      type: "image",
      name: "sponsortiers",
      label: "Sponsor Tier List",
    },
  ] as TinaField[];
}

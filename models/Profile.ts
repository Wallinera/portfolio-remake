import {
  InferSchemaType,
  Model,
  Schema,
  model,
  models,
} from "mongoose";

const siteDocumentSchema = new Schema(
  {
    kind: {
      type: String,
      enum: ["cv", "certificate"],
      required: true,
    },
    label: {
      type: String,
      required: true,
      trim: true,
    },
    href: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    _id: false,
  },
);

const socialLinkSchema = new Schema(
  {
    label: {
      type: String,
      required: true,
      trim: true,
    },
    href: {
      type: String,
      required: true,
      trim: true,
    },
    displayLabel: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    _id: false,
  },
);

const profileSchema = new Schema(
  {
    key: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      default: "portfolio-profile",
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      trim: true,
    },
    heroQuote: {
      type: String,
      required: true,
      trim: true,
    },
    introduction: {
      type: String,
      required: true,
      trim: true,
    },
    sidebarSummary: {
      type: String,
      required: true,
      trim: true,
    },
    aboutParagraphs: [
      {
        type: String,
        required: true,
        trim: true,
      },
    ],
    email: {
      type: String,
      required: true,
      trim: true,
    },
    avatarSrc: {
      type: String,
      required: true,
      trim: true,
    },
    logoSrc: {
      type: String,
      required: true,
      trim: true,
    },
    documents: {
      type: [siteDocumentSchema],
      default: [],
    },
    socialLinks: {
      type: [socialLinkSchema],
      default: [],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export type ProfileDocument = InferSchemaType<typeof profileSchema>;

export const ProfileModel =
  (models.Profile as Model<ProfileDocument>) ||
  model<ProfileDocument>("Profile", profileSchema);

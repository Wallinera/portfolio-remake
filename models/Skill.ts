import {
  InferSchemaType,
  Model,
  Schema,
  model,
  models,
} from "mongoose";

const certificateSchema = new Schema(
  {
    kind: {
      type: String,
      enum: ["cv", "certificate"],
      default: "certificate",
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

const skillSchema = new Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    level: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    categoryKey: {
      type: String,
      required: true,
      trim: true,
    },
    categoryLabel: {
      type: String,
      required: true,
      trim: true,
    },
    categoryAccent: {
      type: String,
      required: true,
      trim: true,
    },
    categoryIcon: {
      type: String,
      required: true,
      trim: true,
    },
    special: {
      type: Boolean,
      default: false,
    },
    order: {
      type: Number,
      default: 0,
    },
    certificate: {
      type: certificateSchema,
      default: null,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

skillSchema.index({ categoryKey: 1, order: 1 });

export type SkillDocument = InferSchemaType<typeof skillSchema>;

export const SkillModel =
  (models.Skill as Model<SkillDocument>) ||
  model<SkillDocument>("Skill", skillSchema);

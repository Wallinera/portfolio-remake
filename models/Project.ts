import {
  InferSchemaType,
  Model,
  Schema,
  model,
  models,
} from "mongoose";

const projectThemeSchema = new Schema(
  {
    accent: {
      type: String,
      required: true,
      trim: true,
    },
    accentText: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    _id: false,
  },
);

const projectSchema = new Schema(
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
    summary: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    notes: {
      type: String,
      required: true,
      trim: true,
    },
    technologies: [
      {
        type: String,
        trim: true,
      },
    ],
    liveUrl: {
      type: String,
      required: true,
      trim: true,
    },
    imageSrc: {
      type: String,
      required: true,
      trim: true,
    },
    imageAlt: {
      type: String,
      required: true,
      trim: true,
    },
    order: {
      type: Number,
      default: 0,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: projectThemeSchema,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

projectSchema.index({ order: 1 });

export type ProjectDocument = InferSchemaType<typeof projectSchema>;

export const ProjectModel =
  (models.Project as Model<ProjectDocument>) ||
  model<ProjectDocument>("Project", projectSchema);

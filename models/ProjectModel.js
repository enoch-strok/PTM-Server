const mongoose = require('mongoose');

const SubProjectSchema = mongoose.Schema({
        subProjectName: { type: String },
        subProjectDescription: {type: String},
    },
    {
        timestamps: true,
    }
);

const ProjectSchema = new mongoose.Schema(
        {
            projectName: { type: String },
            projectDescription: { type: String},
            projectStatus: {type: String},
            progress: {type: Number},
            subProject: [SubProjectSchema]
        },
        {
            timestamps: true,
        }
    );

module.exports.Project = mongoose.model('Project', ProjectSchema);
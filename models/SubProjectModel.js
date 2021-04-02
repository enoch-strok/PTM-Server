const mongoose = require('mongoose');



const SubProjectSchema2 = new mongoose.Schema(
        {
            projectParentId: { type: String },
            projectName: { type: String },
            projectDescription: { type: String},
            projectStatus: {type: String},
            progress: {type: Number}
        },
        {
            timestamps: true,
        }
    );

module.exports.SubProject = mongoose.model('SubProject', SubProjectSchema2);
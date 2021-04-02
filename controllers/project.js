const { Project } = require("../models/ProjectModel");
const { SubProject } = require("../models/SubProjectModel");
const ex = module.exports;


ex.add = (req, res) => {
    Project.create(req.body)
        .then(project => res.json(project))
        .then(console.log(req.body))
        .catch(err => res.json({
            "error": err,
            "message": "Something went Wrong"
        }));
}

ex.addSubProject = (req, res) => {
    SubProject.create(req.body)
        .then(project => res.json(project))
        .then(console.log(req.body))
        .catch(err => res.json({
            "error": err,
            "message": "Something went Wrong"
        }));
}

ex.showAllProject = (req, res) => {
    
    Project.find()
        .then(project => res.json(project))
        .catch(err => res.json(err));
};

ex.deleteProject = (req, res) => {
    Project.deleteOne({ _id: req.params.id })
    .then(deleteConfirmation => res.json(deleteConfirmation))
    .catch(err => res.json(err))
};


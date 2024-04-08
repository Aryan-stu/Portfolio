const mongoose = require('mongoose');

const introSchema = new mongoose.Schema({
    welcomeText: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const aboutSchema = new mongoose.Schema({
    imageUrl: {
        type: String,
        required: true
    },
    description1: {
        type: String,
        required: true
    },
    description2: {
        type: String,
        required: true
    },
    skills: {
        type: Array,
        required: true
    }
});

const experienceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    period: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    technologies: {  // Typo: Should be "technologies"
        type: Array,
        required: true
    }
});

const contactSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Gender: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Mobile: {
        type: String,
        required: true
    },
    Age: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    cvUrl: {
        type: String,
        required: true
    }
});

module.exports = {
    Intro: mongoose.model("intros", introSchema),
    About: mongoose.model("abouts", aboutSchema), // Corrected schema
    Experience: mongoose.model("experiences", experienceSchema), // Corrected schema
    Project: mongoose.model("projects", projectSchema), // Corrected schema
    Contact: mongoose.model("contacts", contactSchema) // Corrected schema
};

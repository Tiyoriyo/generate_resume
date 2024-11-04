export const inputStructure = {
  personalInformation: {
    title: "Personal Information",
    fields: {
      fullName: {
        label: "Full Name",
        type: "text",
      },
      professionalTitle: {
        label: "Professional Title",
        type: "text",
      },
      phoneNumber: {
        label: "Phone Number",
        type: "tel",
      },
      email: {
        label: "Email Address",
        type: "email",
      },
      linkedInProfile: {
        label: "LinkedIn Profile",
        type: "url",
      },
      portfolio: {
        label: "Portfolio",
        type: "url",
      },
    },
  },
  professionalSummary: {
    title: "Professional Summary",
    fields: {
      summary: {
        label: "Summary",
        type: "textarea",
      },
    },
  },
  workExperience: {
    title: "Work Experience",
    fields: {
      jobTitle: {
        label: "Job Title",
        type: "text",
      },
      companyName: {
        label: "Company Name",
        type: "text",
      },
      location: {
        label: "Location",
        type: "text",
      },
      startDate: {
        label: "Start Date",
        type: "date",
      },
      endDate: {
        label: "End Date",
        type: "date",
      },
      responsibilities: {
        label: "Responsibilities / Achievements",
        type: "textarea",
      },
    },
  },
  educationCertifications: {
    title: "Education & Certifications",
    fields: {
      degree: {
        label: "Degree / Certification",
        type: "text",
      },
      institution: {
        label: "Institution / Issuer",
        type: "text",
      },
      graduationDate: {
        label: "Graduation / Issue Date",
        type: "date",
      },
      achievements: {
        label: "Achievements / Honors",
        type: "textarea",
      },
    },
  },
  skills: {
    title: "Skills",
    fields: {
      skill: {
        label: "Skills",
        type: "text",
      },
    },
  },
};

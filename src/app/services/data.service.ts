import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  

techStack = [
  {
    name: "HTML",
    imgWhite: "./../../assets/icons/html_default.svg",
    imgPrimary: "",
    img4c:"",
  },
  {
    name: "CSS",
    imgWhite: "./../../assets/icons/css_default.svg",
    imgPrimary: "",
    img4c:"",
  },
  {
    name: "JavaScript",
    imgWhite: "./../../assets/icons/javascript_default.svg",
    imgPrimary: "",
    img4c:"",
  },
  {
    name: "Material Design",
    imgWhite: "./../../assets/icons/materialdesign_default.svg",
    imgPrimary: "",
    img4c:"",
  },
  {
    name: "TypeScript",
    imgWhite: "./../../assets/icons/typescript_default.svg",
    imgPrimary: "",
    img4c:"",
  },
  {
    name: "Angular",
    imgWhite: "./../../assets/icons/angular_default.svg",
    imgPrimary: "",
    img4c:"",
  },
  {
    name: "Firebase",
    imgWhite: "./../../assets/icons/firebase_default.svg",
    imgPrimary: "",
    img4c:"",
  },
  {
    name: "Git",
    imgWhite: "./../../assets/icons/git_default.svg",
    imgPrimary: "",
    img4c:"",
  },
  {
    name: "Rest-Api",
    imgWhite: "./../../assets/icons/restapi_default.svg",
    imgPrimary: "",
    img4c:"",
  },
  {
    name: "Scrum",
    imgWhite: "./../../assets/icons/scrum_default.svg",
    imgPrimary: "",
    img4c:"",
  },
  {
    name: "Growth Mindest",
    imgWhite: "",
    imgPrimary: "./../../assets/icons/growthmindset_default.svg",
    img4c:"",
  }
]

interestStack = [
  {
    name: "React",
    imgWhite: "",
    imgPrimary: "",
    img4c:"./../../assets/icons/react_color_default.svg",
  },
  {
    name: "Vue Js",
    imgWhite: "",
    imgPrimary: "",
    img4c:"./../../assets/icons/vuejs_color_default.svg",
  }
]

projectIndex:number = 0;

  projects = [
    {
      hover: false,
      number: "01",
      name: "Join",
      img_preview: "preview_screen_striped_bg_join.svg",
      img_frame: "preview_screen_join.png",
      about: [
          "Ein Aufgaben Management Tool inspiriert von einem Kanban System. Erstelle und organisiere Aufgaben per Drag & Drop Funktionen, weise Benutzer und Kategorien zu.", 
          "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories."
        ],
      url: "http://www.google.de",
      technologies: [
        {
          tech: "CSS",
          icon: "css_default.svg"
        },
        {
          tech: "HTML",
          icon: "html_default.svg"
        },
        {
          tech: "Firebase",
          icon: "firebase_default.svg"
        },
        {
          tech: "Angular",
          icon: "angular_default.svg"
        },
        {
          tech: "TypeScript",
          icon: "typescript_default.svg"
        }
      ]
    },
    {
      hover: false,
      number: "02",
      name: "El Pollo Loco",
      img_preview: "preview_screen_striped_bg_loco.svg",
      img_frame: "preview_screen_loco.png",
      about: [
        "Springen, rennen und werfen. Dieses Spiel basiert auf Objektorientierung. Hilf Pepe Münzen und Tabasco Salsa einzusammeln, um gegen die verrückten Hennen zu kämpfen.", 
        "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen."
      ],
      url: "http://www.google.de",
      technologies: [
        {
          tech: "JavaScript",
          icon: "javascript_default.svg"
        },
        {
          tech: "HTML",
          icon: "html_default.svg"
        },
        {
          tech: "CSS",
          icon: "css_default.svg"
        }
      ]
    },
    {
      hover: false,
      number: "03",
      name: "DABubble",
      img_preview: "preview_screen_striped_bg_DAbubble.svg",
      img_frame: "preview_screen_DAbubble.png",
      about: [
        "Diese App ist ein Slack-Klon. Sie revolutioniert die Teamkommunikation und Zusammenarbeit durch ihre intuitive Benutzeroberfläche, Echtzeit-Messaging und eine solide Kanalanordnung.", 
        "This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization."
      ],
      url: "http://www.google.de",
      technologies: [
        {
          tech: "JavaScript",
          icon: "javascript_default.svg"
        },
        {
          tech: "HTML",
          icon: "html_default.svg"
        },
        {
          tech: "CSS",
          icon: "css_default.svg"
        }
      ]
    }
  ];

}

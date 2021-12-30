import Analytics from "./assets/Analytics";
import Default from "./assets/Default";
import Statatics from "./assets/Statatics";
import Data from "./assets/Data";
import Chart from "./assets/Chart";
import User from "./assets/User";
import Customber from "./assets/Customber";
import Kanban from "./assets/Kanban";
import Mail from './assets/Mail';
import Calender from './assets/Calender'
import Chat from './assets/Chat'
import Components from './assets/Components';
import Plugins from './assets/Plugins'
import Layouts from './assets/Layouts'
import Table from './assets/Tables'
import ApexChart from './assets/ApexChart'
import FormValidation from './assets/FormValidation'
import FormWizards from './assets/FormsWizard';
import Basic from './assets/Basic'
import Advance from './assets/Advance'
import Authentication from './assets/Authentication'
import Pricing from './assets/Pricing'
import Maintanance from './assets/Maintanance'
import Landing from './assets/Landing'
import ContactUs from './assets/ContactUs'

export const Dashboard = [
  {
    icon: <Default />,
    title: "Default",
    path: "defualt"
  },
  {
    icon: <Analytics />,
    title: "Analytics",
    path: "analytics"
  },
];

export const Widget = [
  {
    icon: <Statatics />,
    title: "Statatics",
    path: "statatics"
  },
  {
    icon: <Data />,
    title: "Data",
    path: "data"
  },
  {
    icon: <Chart />,
    title: "Chart",
    path: "chart"
  },
];

export const Application = [
  {
    icon: <User />,
    title: "Users",
    items: [
      {
        title: "Social Profile",
        path:"socialprofile"
      },
      {
        title: "Account Profile",
        items: [
          {
            title: "Profile 1",
            path:"profile1"
          },
          {
            title: "Profile 2",
            path:"profile2"
          },
          {
            title: "Profile 3",
            path:"profile3"
          },
        ],
      },
      {
        title: "Cards",
        items: [
          {
            title: "Style 01",
            path:"cardstyle1"
          },
          {
            title: "Style 02",
            path:"cardstyle1"
          },
          {
            title: "Style 03",
            path:"cardstyle1"
          },
        ],
      },
      {
        title: "List",
        items: [
          {
            title: "Style 01",
            path:"liststyle1"
          },
          {
            title: "Style 02",
            path:"liststyle1"
          },
        ],
      },
    ],
  },
  {
    icon: <Customber />,
    title: "Customber",
    items: [
      {
        title: "Customber List",
        path:"customber"
      },
      {
        title: "Order List",
        path:"orderlist"
      },
      {
        title: "Order Details",
        path:"orderdetails"
      },
      {
        title: "Product",
        path:"product"
      },
      {
        title: "Product Review",
        path:"producereview"
      },
    ],
  },
  {
    icon: <Chat />,
    title: "Chat",
    path:"chat"
  },
  {
    icon: <Kanban />,
    title: "Kanban",
    path:"kanban"
  },
  {
    icon: <Mail />,
    title: "Mail",
    path:"mail"
  },
  {
    icon: <Calender />,
    title: "Calender",
    path:"calender"
  },

];
export const Forms = [
  {
    icon: <Components />,
    title: "Components",
    items: [
      {
        title: "Autocomplate",
        path:"autocomplate"
      },
      {
        title: "Button",
        path:"autocomplate"
      },
      {
        title: "Checkbox",
        path:"autocomplate"
      },
      {
        title: "Date & Time",
        path:"autocomplate"
      },
      {
        title: "Radio",
        path:"autocomplate"
      },
      {
        title: "Slider",
        path:"autocomplate"
      },
      {
        title: "Switch",
        path:"autocomplate"
      },
      {
        title: "Text Field",
        path:"autocomplate"
      }
    ]
  },
  {
    icon: <Plugins />,
    title: "Plugins",
    items: [
      {
        title: "Autocomplate",
        path:"autocomplate"
      },
      {
        title: "Mask",
        path:"autocomplate"
      },
      {
        title: "Clipboard",
        path:"autocomplate"
      },
      {
        title: "reCaptch",
        path:"autocomplate"
      },
      {
        title: "Wysiwug Editor",
        path:"autocomplate"
      },
      {
        title: "Modal",
        path:"autocomplate"
      },
      {
        title: "Tooltip",
        path:"autocomplate"
      }
    ]
  },
  {
    icon: <Layouts />,
    title: "Layouts",
    items: [
      {
        title: "Layouts",
        path:"autocomplate"
      },
      {
        title: "Multi Column Forms",
        path:"autocomplate"
      },
      {
        title: "Action Bar",
        path:"autocomplate"
      },
      {
        title: "Sticky Action Bar",
        path:"autocomplate"
      }
    ]
  },
  {
    icon: <Table />,
    title: "Table",
    items: [
      {
        title: "Basic Table",
        path:"autocomplate"
      },
      {
        title: "Dense Table",
        path:"autocomplate"
      },
      {
        title: "Enhanced Table",
        path:"autocomplate"
      },
      {
        title: "Data Table",
        path:"autocomplate"
      },
      {
        title: "CustomTable",
        path:"autocomplate"
      },
      {
        title: "Fixed Header",
        path:"autocomplate"
      },
      {
        title: "Collapse Table",
        path:"autocomplate"
      }
    ]
  },
  {
    icon: <ApexChart />,
    title: "ApexChart",
    path:"autocomplate"
  },
  {
    icon: <FormValidation />,
    title: "Form Validation",
    path:"autocomplate"
  },
  {
    icon: <FormWizards />,
    title: "Form Wizards",
    path:"autocomplate"
  },
];
export const Ui_elemets = [
  {
    icon: <Basic />,
    title: "Basic",
    items: [
      {
        title: "Accordion",
        path:"autocomplate"
      },
      {
        title: "Avtar",
        path:"autocomplate"
      },
      {
        title: "Badges",
        path:"autocomplate"
      },
      {
        title: "Breadcrumb",
        path:"autocomplate"
      },
      {
        title: "Cards",
        path:"autocomplate"
      },
      {
        title: "Chip",
        path:"autocomplate"
      },
      {
        title: "List",
        path:"autocomplate"
      },
      {
        title: "Tabs",
        path:"autocomplate"
      }
    ]
  },
  {
    icon: <Advance />,
    title: "Advance",
    items: [
      {
        title: "Alert",
        path:"autocomplate"
      },
      {
        title: "Dialog",
        path:"autocomplate"
      },
      {
        title: "Pagination",
        path:"autocomplate"
      },
      {
        title: "Process",
        path:"autocomplate"
      },
      {
        title: "Rating",
        path:"autocomplate"
      },
      {
        title: "Snackbar",
        path:"autocomplate"
      },
      {
        title: "Skeleton",
        path:"autocomplate"
      },
      {
        title: "Speeddial",
        path:"autocomplate"
      },
      {
        title: "Timeline",
        path:"autocomplate"
      },
      {
        title: "Toggle Button",
        path:"autocomplate"
      },
      {
        title: "Treeview",
        path:"autocomplate"
      }
    ]
  }
];
export const Pages = [
  {
    icon: <Authentication />,
    title: "Authentication",
    items: [
      {
        title: "Authentication 1",
        items: [
          {
            title: "Login",
            path:"autocomplate"
          },
          {
            title: "Register",
            path:"autocomplate"
          },
          {
            title: "Forgot Password",
            path:"autocomplate"
          },
          {
            title: "Check Mail",
            path:"autocomplate"
          },
          {
            title: "Reset Password",
            path:"autocomplate"
          },
          {
            title: "Code Verification",
            path:"autocomplate"
          }
        ]
      },
      {
        title: "Authentication 2",
        items: [
          {
            title: "Login",
            path:"autocomplate"
          },
          {
            title: "Register",
            path:"autocomplate"
          },
          {
            title: "Forgot Password",
            path:"autocomplate"
          },
          {
            title: "Check Mail",
            path:"autocomplate"
          },
          {
            title: "Reset Password",
            path:"autocomplate"
          },
          {
            title: "Code Verification",
            path:"autocomplate"
          }
        ]
      },
      {
        title: "Authentication 3",
        items: [
          {
            title: "Login",
            path:"autocomplate"
          },
          {
            title: "Register",
            path:"autocomplate"
          },
          {
            title: "Forgot Password",
            path:"autocomplate"
          },
          {
            title: "Check Mail",
            path:"autocomplate"
          },
          {
            title: "Reset Password",
            path:"autocomplate"
          },
          {
            title: "Code Verification",
            path:"autocomplate"
          }
        ]
      },
    ]
  },
  {
    icon: <Pricing />,
    title: "Pricing",
    items: [
      {
        title: "Price 01"
      },
      {
        title: "Price 01"
      }
    ]
  },
  {
    icon: <Maintanance />,
    title: "Maintanance",
    items: [
      {
        title: "Error 404"
      },
      {
        title: "Coming Soon",
        items: [
          {
            title: "Coming Soon 01"
          },
          {
            title: "Coming Soon 02"
          }
        ]
      },
      {
        title: "Under Constuction"
      }
    ]
  },
  {
    icon: <Landing />,
    title: "Landing"
  },
  {
    icon: <ContactUs />,
    title: "Contact Us"
  }
];

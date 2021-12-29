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

export const Dashboard = [
  {
    icon: <Default />,
    title: "Default",
  },
  {
    icon: <Analytics />,
    title: "Analytics",
  },
];

export const Widget = [
  {
    icon: <Statatics />,
    title: "Statatics",
  },
  {
    icon: <Data />,
    title: "Data",
  },
  {
    icon: <Chart />,
    title: "Chart",
  },
];

export const Application = [
  {
    icon: <User />,
    title: "Users",
    items: [
      {
        title: "Social Profile",
      },
      {
        title: "Account Profile",
        items: [
          {
            title: "Profile 1",
          },
          {
            title: "Profile 1",
          },
          {
            title: "Profile 1",
          },
        ],
      },
      {
        title: "Cards",
        items: [
          {
            title: "Style 01",
          },
          {
            title: "Style 02",
          },
          {
            title: "Style 03",
          },
        ],
      },
      {
        title: "List",
        items: [
          {
            title: "Style 01",
          },
          {
            title: "Style 02",
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
      },
      {
        title: "Order List",
      },
      {
        title: "Order Details",
      },
      {
        title: "Product",
      },
      {
        title: "Product Review",
      },
    ],
  },
  {
    icon: <Chat />,
    title: "Chat"
  },
  {
    icon: <Kanban />,
    title: "Kanban"
  },
  {
    icon: <Mail />,
    title: "Mail"
  },
  {
    icon: <Calender />,
    title: "Calender"
  },

];
export const Forms = [
  {
    icon: <Components />,
    title: "Components",
    items:[
      {
        title:"Autocomplate"
      },
      {
        title:"Button"
      },
      {
        title:"Checkbox"
      },
      {
        title:"Date & Time"
      },
      {
        title:"Radio"
      },
      {
        title:"Slider"
      },
      {
        title:"Switch"
      },
      {
        title:"Text Field"
      }
    ]
  },
  {
    icon: <Plugins />,
    title: "Plugins",
  },
  {
    icon: <Layouts />,
    title: "Layouts",
  },
  {
    icon: <Table />,
    title: "Table",
  },
  {
    icon: <ApexChart />,
    title: "ApexChart",
  },
  {
    icon: <FormValidation />,
    title: "Form Validation",
  },
  {
    icon: <FormWizards />,
    title: "Form Wizards",
  },
];
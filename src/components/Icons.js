import Analytics from "./assets/Analytics";
import Default from "./assets/Default";
import Statatics from "./assets/Statatics";
import Data from "./assets/Data";
import Chart from "./assets/Chart";
import User from "./assets/User";
import Customber from "./assets/Customber";

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
];

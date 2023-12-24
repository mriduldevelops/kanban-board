import noPriorityIcon from "./assets/asset 13.svg";
import HighPriorityIcon from "./assets/asset 12.svg";
import UrgentPriorityIcon from "./assets/asset 10.svg";
import MediumPriorityIcon from "./assets/asset 6.svg";
import LowPriorityIcon from "./assets/asset 8.svg";
import BacklogIcon from "./assets/asset 3.svg";
import TodoIcon from "./assets/asset 9.svg";
import InProgressIcon from "./assets/asset 11.svg";
import DoneIcon from "./assets/asset 14.svg";
import CancelledIcon from "./assets/asset 15.svg";
export const prioritydata = [
  {
    id: 1,
    icon: noPriorityIcon,
    status: "No Priority",
    priority: 0,
  },
  {
    id: 2,
    icon: LowPriorityIcon,
    status: "Low",
    priority: 1,
  },
  {
    id: 3,
    icon: MediumPriorityIcon,
    status: "Medium",
    priority: 2,
  },
  {
    id: 4,
    icon: HighPriorityIcon,
    status: "High",
    priority: 3,
  },
  {
    id: 5,
    icon: UrgentPriorityIcon,
    status: "Urgent",
    priority: 4,
  },
];


export const statusdata = [
    {
      id: 1,
      icon: noPriorityIcon,
      status: "Backlog",
      priority: 0,
    },
    {
      id: 2,
      icon: LowPriorityIcon,
      status: "Todo",
      priority: 1,
    },
    {
      id: 3,
      icon: MediumPriorityIcon,
      status: "In progress",
      priority: 2,
    },
    {
      id: 4,
      icon: HighPriorityIcon,
      status: "Done",
      priority: 3,
    },
    {
      id: 5,
      icon: UrgentPriorityIcon,
      status: "Cancelled",
      priority: 4,
    },
  ];
  
  export const priorityIcon={
    0: noPriorityIcon,
    1: LowPriorityIcon,
    2: MediumPriorityIcon,
    3: HighPriorityIcon,
    4: UrgentPriorityIcon
  }

  export const statusIcon = {
    ["Backlog"]: BacklogIcon,
    ["Todo"]: TodoIcon,
    ["In progress"]: InProgressIcon,
    ["Done"]: DoneIcon,
    ["Cancelled"]: CancelledIcon,
  };
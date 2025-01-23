import { Href } from "@/Constant";
import { TaskData } from "@/Data/Applications/Task";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setActiveTab } from "@/Redux/Reducer/TaskSlice";
import { NavClassType } from "@/Types/TaskType";
import Link from "next/link";
import { NavItem } from "reactstrap";

export const TaskViewData :React.FC<NavClassType>= ({ activeToggle }) => {
  const { activeTab } = useAppSelector((state) => state.task);
  const dispatch = useAppDispatch();
  const tabHandler = (tab: string) => {
    dispatch(setActiveTab(tab));
    activeToggle(tab);
  };

  return (
    <>
      {TaskData.map((item) => (
        <NavItem key={item.id}>
          <Link href={Href} className={activeTab === item.activeTab ? "active" : ""} onClick={() => tabHandler(item.activeTab)}>
            <span className="title">{item.title}</span>
          </Link>
        </NavItem>
      ))}
    </>
  );
};

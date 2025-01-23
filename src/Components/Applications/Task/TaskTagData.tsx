import { Href } from "@/Constant";
import { TaskTagDataList } from "@/Data/Applications/Task";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setActiveTab } from "@/Redux/Reducer/TaskSlice";
import { NavClassType } from "@/Types/TaskType";
import Link from "next/link";
import { NavItem } from "reactstrap";

export const TaskTagData :React.FC<NavClassType> = ({ activeToggle }) => {
  const dispatch = useAppDispatch();
  const { activeTab } = useAppSelector((state) => state.task);
  const tabHandler = (tab: string) => {
    dispatch(setActiveTab(tab));
    activeToggle(tab);
  };

  return (
    <>
      {TaskTagDataList.map((item) => (
        <NavItem key={item.id}>
          <Link href={Href} className={activeTab === item.activeTab ? "show" : ""} onClick={() => tabHandler(item.activeTab)}>
            <span className="title"> {item.title}</span>
          </Link>
        </NavItem>
      ))}
    </>
  );
};

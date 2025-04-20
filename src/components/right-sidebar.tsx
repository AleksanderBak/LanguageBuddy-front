import { MdOutlineCreateNewFolder } from "react-icons/md";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const models = [
  "gpt-4.1-mini",
  "gpt-4.1-nano",
  "gpt-4.5-preview",
  "gpt-4.5-turbo",
  "gpt-4.5-turbo-16k",
  "gpt-4.5-turbo-32k",
  "gpt-4.5-turbo-64k",
];

const roles = ["Traveler", "Workmate", "Priest", "Tester", "Developer"];

const savedProfiles = [
  "Tester - 1",
  "Thomas - Adventurer",
  "Adam - Developer",
  "Priest - 1",
  "Xawdwd",
  "Tester - 1",
  "Thomas - Adventurer",
  "Adam - Developer",
  "Priest - 1",
  "Xawdwd",
];

export interface selectProps {
  label: string;
  defaultValue?: string;
  options: string[];
}

const SidebarSelect = ({ label, defaultValue, options }: selectProps) => {
  return (
    <div className="flex flex-col gap-1">
      <Label
        className="text-secondary-200 pl-1 font-semibold"
        htmlFor="model-select"
      >
        {label}
      </Label>
      <div id="model-select">
        <Select defaultValue={defaultValue}>
          <SelectTrigger className="text-secondary-200 border-secondary-950 w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="text-secondary-200 bg-secondary-900 border-secondary-950">
            {options.map((option) => {
              return (
                <SelectItem
                  className="hover:bg-secondary-950"
                  key={option}
                  value={option}
                >
                  {option}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

const SavedProfilesList = ({ savedProfiles }: { savedProfiles: string[] }) => {
  return (
    <div className="mx-2 my-4 flex flex-col gap-2">
      <Label
        className="text-secondary-200 flex h-8 w-full items-center p-2 select-none"
        htmlFor="saved-profiles"
      >
        Saved Profiles
      </Label>
      <ul
        className="flex max-h-60 flex-col gap-2 overflow-y-scroll"
        id="saved-profiles"
      >
        {savedProfiles.map((profile) => {
          return (
            <li
              key={profile}
              className="hover:bg-secondary-900 hover:text-secondary-300 text-secondary-200 flex h-8 w-[90%] items-center rounded-lg p-2 select-none hover:cursor-pointer"
            >
              {profile}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const RightSidebar = () => {
  return (
    <div className="bg-default-background hidden h-full w-1/4 max-w-[300px] flex-col md:flex md:justify-between">
      <div>
        <div className="bg-secondary-900 flex flex-col gap-4 p-2 pb-4">
          <h1 className="text-primary-300 text-center text-2xl">
            Thomas - Traveler
          </h1>
          <SidebarSelect
            options={models}
            label="Model"
            defaultValue={models[1]}
          />
          <SidebarSelect options={roles} label="Role" defaultValue={roles[0]} />
        </div>
        <SavedProfilesList savedProfiles={savedProfiles} />
      </div>
      <div>
        <a className="text-secondary-200 bg-secondary-900 hover:bg-secondary-950 m-4 flex items-center justify-center gap-2 rounded-lg p-2 transition-all duration-200 ease-in-out select-none hover:cursor-pointer">
          <MdOutlineCreateNewFolder size={28} />
          New Profile
        </a>
      </div>
    </div>
  );
};

export default RightSidebar;

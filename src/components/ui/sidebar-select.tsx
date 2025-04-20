import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export interface selectProps {
  label: string;
  defaultValue?: string;
  options: string[];
}

const SidebarSelect = ({ label, defaultValue, options }: selectProps) => {
  return (
    <div className="flex flex-col gap-1">
      <Label
        className="text-secondary-200 font-semibold"
        htmlFor="model-select"
      >
        {label}
      </Label>
      <div id="model-select">
        <Select defaultValue={defaultValue}>
          <SelectTrigger className="text-secondary-200 w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="text-secondary-200 bg-secondary-900">
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

export default SidebarSelect;

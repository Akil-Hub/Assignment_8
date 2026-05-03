"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Sort = ({ onSort }) => {
  return (
    <Select onValueChange={onSort}>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Filter / Sort" />
      </SelectTrigger>
      <SelectContent>
        
        <SelectGroup>
          <SelectLabel>Price Range</SelectLabel>
          <SelectItem value="range-0-100000">Under 1,00,000</SelectItem>
          <SelectItem value="range-100000-200000">1,00,000 – 2,00,000</SelectItem>
          <SelectItem value="range-200000-300000">2,00,000 – 3,00,000</SelectItem>
          <SelectItem value="range-300000-999999999">Above 3,00,000</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Sort;
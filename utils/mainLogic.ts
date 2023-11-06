"use client"

import { useEffect, useState } from "react";
import type CountryData from "@/interfaces/countryData.interface";
import sortedData from "./sortedData";

function MainLogic(cmData: CountryData[]) {
  const [filteredData, setFilteredData] = useState(sortedData(cmData));
  const [selectedTags, setSelectedTags] = useState(["all"]);

  const setTag = (tag: string) => {
    if (tag === "all") setSelectedTags(["all"]);
    else if (selectedTags.indexOf(tag) !== -1)
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    else
      setSelectedTags([...selectedTags.filter((t) => t !== "all"), ...[tag]]);
  };

  const filterByName = (filterValue: string) => {
    if (filterValue !== "")
      setFilteredData(
        sortedData(cmData).filter((elem: any) => {
          return (
            elem.name.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1
          );
        })
      );
    else setFilteredData(sortedData(cmData));
  };

  useEffect(() => {
    if (selectedTags.indexOf("all") === -1 && selectedTags.length > 0) {
      setFilteredData(
        sortedData(cmData).filter((elem: any) =>
          selectedTags.every((tag) =>
            elem.tags.map((e: string) => e.toLowerCase()).includes(tag)
          )
        )
      );
    } else setFilteredData(sortedData(cmData));
  }, [selectedTags]);

  return { filteredData, selectedTags, setTag, filterByName };
}

export default MainLogic;

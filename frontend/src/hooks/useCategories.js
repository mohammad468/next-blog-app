import { getCategoryAPI } from "@/services/categoryService";
import { useQuery } from "@tanstack/react-query";

export function useCategories() {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoryAPI,
  });

  const { categories: rowCategories = [] } = data || {};

  const categories = rowCategories.map((item) => ({
    label: item.title,
    value: item._id,
  }));


  const transformedCategories = rowCategories.map((item) => ({
    label: item.title,
    value: item.englishTitle,
  }));

  return { isLoading, categories, transformedCategories };
}

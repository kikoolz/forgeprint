import ModelsGrid from "@/app/components/ModelsGrid";
import type { CategoryPageProps } from "@/app/types";
import { getCategoryBySlug } from "@/app/lib/categories";
import { getModels } from "@/app/lib/models";

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryName } = await params;
  const category = getCategoryBySlug(categoryName);

  // Fetch models for the category if needed
  const models = await getModels({ category: categoryName });
  return (
    <div className="container mx-auto">
      <ModelsGrid title={`${category.displayName}`} models={models} />
    </div>
  );
}

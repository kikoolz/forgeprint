import Image from "next/image";
import { FaRegHeart } from "react-icons/fa6";
import { getModelById } from "@/app/lib/models";
import Pill from "@/app/components/Pill";
import type { ModelDetailPageProps } from "@/app/types";

export default async function ModelDetailPage({
  params,
}: ModelDetailPageProps) {
  const { id } = await params;
  const model = await getModelById(id);

  if (!model) {
    return (
      <div className="text-center mt-10 text-gray-600">Model not found.</div>
    );
  }

  return (
    <div className="max-w-4xl px-4 py-10 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image */}
        <div className="relative aspect-square w-full">
          <Image
            src="/3dhero.png"
            alt={model.name}
            width={350}
            height={400}
            className="absolute inset-0 object-cover w-full h-full rounded-lg"
          />
        </div>

        {/* Model Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {model.name}
          </h1>
          <p className="text-gray-700 mb-4">{model.description}</p>

          <Pill>{model.category}</Pill>

          <div
            className="flex items-center mt-4 text-gray-600"
            aria-label={`${model.likes} likes`}
          >
            <FaRegHeart className="w-5 h-5 mr-2 text-gray-400" />
            <span>{model.likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client'
import Link from "next/link";
import { FaCog, FaLifeRing } from "react-icons/fa";
import ApiModelSelector from "@/app/components/ApiModelSelector";

interface SettingsBarProps {
  selectedApi: string;
  setSelectedApi: (api: string) => void;
  selectedModel: string;
  setSelectedModel: (model: string) => void;
  onSettingsClick: () => void;
}

export default function SettingsBar({
  selectedApi,
  setSelectedApi,
  selectedModel,
  setSelectedModel,
  onSettingsClick
}: SettingsBarProps) {
  return (
    <div className="flex justify-between items-center px-4 py-2 border-b border-gray-700 text-sm">
      <ApiModelSelector
        selectedApi={selectedApi}
        setSelectedApi={setSelectedApi}
        selectedModel={selectedModel}
        setSelectedModel={setSelectedModel}
      />
      <div className="flex items-center gap-3">
        <button
          onClick={onSettingsClick}
          className="flex items-center gap-1 bg-transparent text-white border border-white px-3 py-2 rounded-full hover:bg-gray-600">
          Settings <FaCog />
        </button>
        <Link href="help" className="flex items-center gap-1 text-white text-sm hover:underline">
          Help <FaLifeRing />
        </Link>
      </div>
    </div>
  );
}
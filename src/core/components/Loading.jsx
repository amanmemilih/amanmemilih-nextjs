"use client";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white/80 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="w-8 h-8 border-4 border-gray-200 rounded-full animate-spin border-t-blue-500" />
    </div>
  );
}

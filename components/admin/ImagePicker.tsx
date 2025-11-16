"use client";

import { useState, useRef } from "react";

interface ImagePickerProps {
  value: string;
  onChange: (url: string) => void;
  label?: string;
}

export default function ImagePicker({ value, onChange, label = "Image URL" }: ImagePickerProps) {
  const [uploading, setUploading] = useState(false);
  const [showMediaLibrary, setShowMediaLibrary] = useState(false);
  const [mediaItems, setMediaItems] = useState<any[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return;

    setUploading(true);
    try {
      const formData = new FormData();
      Array.from(files).forEach((file) => {
        formData.append("files", file);
      });

      const response = await fetch("/api/admin/media/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        if (data.data && data.data.length > 0) {
          onChange(data.data[0].url);
        }
      } else {
        const error = await response.json();
        alert(error.error || "Failed to upload image");
      }
    } catch (error) {
      console.error("Error uploading:", error);
      alert("Failed to upload image");
    } finally {
      setUploading(false);
    }
  };

  const fetchMediaItems = async () => {
    try {
      const response = await fetch("/api/admin/media");
      if (response.ok) {
        const data = await response.json();
        setMediaItems(data.data || []);
      }
    } catch (error) {
      console.error("Error fetching media:", error);
    }
  };

  const handleOpenMediaLibrary = () => {
    setShowMediaLibrary(true);
    fetchMediaItems();
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="flex gap-2 mb-2">
        <input
          type="url"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Image URL or upload from computer"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={(e) => handleFileUpload(e.target.files)}
          className="hidden"
        />
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
          className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 font-medium"
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
        <button
          type="button"
          onClick={handleOpenMediaLibrary}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-medium"
        >
          Media Library
        </button>
      </div>

      {value && (
        <div className="mt-2">
          <img
            src={value}
            alt="Preview"
            className="max-w-xs h-32 object-cover rounded-lg border border-gray-300"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
      )}

      {showMediaLibrary && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[80vh] overflow-hidden flex flex-col">
            <div className="p-4 border-b flex items-center justify-between">
              <h3 className="text-xl font-semibold">Select Image</h3>
              <button
                onClick={() => setShowMediaLibrary(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              {mediaItems.length === 0 ? (
                <div className="text-center text-gray-500 py-8">
                  <p>No images found. Upload images in the Media Library first.</p>
                </div>
              ) : (
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {mediaItems
                    .filter((item) => item.category === "image")
                    .map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          onChange(item.url);
                          setShowMediaLibrary(false);
                        }}
                        className={`border-2 rounded-lg overflow-hidden transition-all ${
                          value === item.url
                            ? "border-primary-600 ring-2 ring-primary-200"
                            : "border-gray-200 hover:border-primary-400"
                        }`}
                      >
                        <div className="aspect-square bg-gray-100">
                          <img
                            src={item.url}
                            alt={item.alt_text || item.filename}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </button>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


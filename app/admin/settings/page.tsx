"use client";

import { useState, useEffect } from "react";

interface Setting {
  id: string;
  key: string;
  value: string;
  type: string;
  category: string;
  description?: string;
}

export default function SettingsPage() {
  const [settings, setSettings] = useState<Setting[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const response = await fetch("/api/admin/settings");
      if (response.ok) {
        const data = await response.json();
        setSettings(data.data || []);
      }
    } catch (error) {
      console.error("Error fetching settings:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (setting: Setting, newValue: string) => {
    setSaving(true);
    try {
      const response = await fetch(`/api/admin/settings/${setting.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ value: newValue }),
      });

      if (response.ok) {
        fetchSettings();
      }
    } catch (error) {
      console.error("Error saving setting:", error);
    } finally {
      setSaving(false);
    }
  };

  const categories = ["all", "general", "seo", "social", "contact", "email"];

  const filteredSettings =
    activeCategory === "all"
      ? settings
      : settings.filter((s) => s.category === activeCategory);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Site Settings</h1>
        <p className="text-gray-600">Configure your site settings</p>
      </div>

      <div className="bg-white rounded-lg shadow-md">
        <div className="border-b border-gray-200 p-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium capitalize ${
                  activeCategory === cat
                    ? "bg-primary-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6">
          {filteredSettings.length === 0 ? (
            <div className="text-center text-gray-500 py-8">
              <p>No settings found in this category.</p>
              <p className="text-sm mt-2">
                Settings are created automatically when needed, or you can add them via the API.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredSettings.map((setting) => (
                <SettingItem
                  key={setting.id}
                  setting={setting}
                  onSave={handleSave}
                  saving={saving}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function SettingItem({
  setting,
  onSave,
  saving,
}: {
  setting: Setting;
  onSave: (setting: Setting, value: string) => void;
  saving: boolean;
}) {
  const [value, setValue] = useState(setting.value || "");

  useEffect(() => {
    setValue(setting.value || "");
  }, [setting.value]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(setting, value);
  };

  return (
    <form onSubmit={handleSubmit} className="border-b border-gray-200 pb-6 last:border-0">
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {setting.key.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
        </label>
        {setting.description && (
          <p className="text-xs text-gray-500 mb-2">{setting.description}</p>
        )}
      </div>
      <div className="flex gap-2">
        {setting.type === "boolean" ? (
          <select
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        ) : setting.type === "json" ? (
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            rows={3}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 font-mono text-sm"
          />
        ) : (
          <input
            type={setting.type === "number" ? "number" : "text"}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
          />
        )}
        <button
          type="submit"
          disabled={saving || value === setting.value}
          className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Save
        </button>
      </div>
    </form>
  );
}

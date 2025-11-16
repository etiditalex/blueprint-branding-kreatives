"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description?: string;
  image_url: string;
  url?: string;
  technologies?: string[];
  featured: boolean;
  display_order: number;
  created_at: string;
}

export default function PortfolioPage() {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [syncMessage, setSyncMessage] = useState("");

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch("/api/admin/portfolio");
      if (response.ok) {
        const data = await response.json();
        setItems(data.data || []);
      }
    } catch (error) {
      console.error("Error fetching portfolio:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this item?")) return;

    try {
      const response = await fetch(`/api/admin/portfolio/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setItems(items.filter((item) => item.id !== id));
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("Failed to delete item");
    }
  };

  const handleToggleFeatured = async (item: PortfolioItem) => {
    try {
      const response = await fetch(`/api/admin/portfolio/${item.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ featured: !item.featured }),
      });

      if (response.ok) {
        fetchItems();
      }
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  const handleSyncPortfolio = async () => {
    if (!confirm("This will import all existing portfolio items from the website. Continue?")) return;

    setSyncing(true);
    setSyncMessage("");
    try {
      const response = await fetch("/api/admin/portfolio/sync", {
        method: "POST",
      });

      if (response.ok) {
        const data = await response.json();
        setSyncMessage(
          `Successfully synced ${data.synced} items. ${data.skipped} items were skipped (already exist).`
        );
        fetchItems();
        setTimeout(() => setSyncMessage(""), 5000);
      } else {
        const error = await response.json();
        setSyncMessage(`Error: ${error.error || "Failed to sync portfolio"}`);
        setTimeout(() => setSyncMessage(""), 5000);
      }
    } catch (error) {
      console.error("Error syncing portfolio:", error);
      setSyncMessage("Failed to sync portfolio");
      setTimeout(() => setSyncMessage(""), 5000);
    } finally {
      setSyncing(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Portfolio Items</h1>
          <p className="text-gray-600">Manage your portfolio items</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleSyncPortfolio}
            disabled={syncing}
            className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium disabled:opacity-50"
          >
            {syncing ? "Syncing..." : "Sync All Items"}
          </button>
          <Link
            href="/admin/portfolio/new"
            className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
          >
            + New Item
          </Link>
        </div>
      </div>

      {syncMessage && (
        <div className={`mb-4 p-4 rounded-lg ${
          syncMessage.includes("Error") || syncMessage.includes("Failed")
            ? "bg-red-50 border border-red-200 text-red-700"
            : "bg-green-50 border border-green-200 text-green-700"
        }`}>
          {syncMessage}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.length === 0 ? (
          <div className="col-span-full bg-white rounded-lg shadow-md p-8 text-center text-gray-500">
            <p>No portfolio items found. Click "Sync All Items" to import existing items or create a new item.</p>
          </div>
        ) : (
          items.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 bg-gray-200">
                {item.image_url && (
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                )}
                {item.featured && (
                  <div className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded text-xs font-medium">
                    Featured
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{item.category}</p>
                {item.description && (
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>
                )}
                <div className="flex items-center gap-2 mb-3">
                  <button
                    onClick={() => handleToggleFeatured(item)}
                    className={`text-xs px-2 py-1 rounded ${
                      item.featured
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {item.featured ? "Featured" : "Not Featured"}
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    href={`/admin/portfolio/${item.id}`}
                    className="flex-1 text-center px-3 py-2 bg-primary-600 text-white rounded hover:bg-primary-700 text-sm font-medium"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm font-medium"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

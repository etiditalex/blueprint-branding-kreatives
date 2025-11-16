"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Page {
  id: string;
  slug: string;
  title: string;
  is_published: boolean;
  template: string;
  display_order: number;
  created_at: string;
}

export default function PagesPage() {
  const [pages, setPages] = useState<Page[]>([]);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [syncMessage, setSyncMessage] = useState("");

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    try {
      const response = await fetch("/api/admin/pages");
      if (response.ok) {
        const data = await response.json();
        setPages(data.data || []);
      }
    } catch (error) {
      console.error("Error fetching pages:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this page?")) return;

    try {
      const response = await fetch(`/api/admin/pages/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setPages(pages.filter((page) => page.id !== id));
      }
    } catch (error) {
      console.error("Error deleting page:", error);
      alert("Failed to delete page");
    }
  };

  const handleTogglePublish = async (page: Page) => {
    try {
      const response = await fetch(`/api/admin/pages/${page.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ is_published: !page.is_published }),
      });

      if (response.ok) {
        fetchPages();
      }
    } catch (error) {
      console.error("Error updating page:", error);
    }
  };

  const handleSyncPages = async () => {
    if (!confirm("This will import all existing website pages into the database. Continue?")) return;

    setSyncing(true);
    setSyncMessage("");
    try {
      const response = await fetch("/api/admin/pages/sync", {
        method: "POST",
      });

      if (response.ok) {
        const data = await response.json();
        setSyncMessage(
          `Successfully synced ${data.synced} pages. ${data.skipped} pages were skipped (already exist).`
        );
        fetchPages();
        setTimeout(() => setSyncMessage(""), 5000);
      } else {
        const error = await response.json();
        setSyncMessage(`Error: ${error.error || "Failed to sync pages"}`);
        setTimeout(() => setSyncMessage(""), 5000);
      }
    } catch (error) {
      console.error("Error syncing pages:", error);
      setSyncMessage("Failed to sync pages");
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
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Pages</h1>
          <p className="text-gray-600">Manage all website pages</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleSyncPages}
            disabled={syncing}
            className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium disabled:opacity-50"
          >
            {syncing ? "Syncing..." : "Sync All Pages"}
          </button>
          <Link
            href="/admin/pages/new"
            className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
          >
            + New Page
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

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Slug</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Template</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Created</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {pages.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                  No pages found. Click "Sync All Pages" to import existing pages or create a new page.
                </td>
              </tr>
            ) : (
              pages.map((page) => (
                <tr key={page.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{page.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {page.slug ? `/${page.slug}` : '/'}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleTogglePublish(page)}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        page.is_published
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {page.is_published ? "Published" : "Draft"}
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {page.template}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(page.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end gap-3">
                      <Link
                        href={`/admin/pages/${page.id}`}
                        className="text-primary-600 hover:text-primary-900"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(page.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

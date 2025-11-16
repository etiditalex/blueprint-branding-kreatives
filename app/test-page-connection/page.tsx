"use client";

import { useState, useEffect } from "react";

export default function TestPageConnection() {
  const [pages, setPages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [testSlug, setTestSlug] = useState("");
  const [testResult, setTestResult] = useState<any>(null);

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    try {
      const response = await fetch("/api/pages");
      if (response.ok) {
        const data = await response.json();
        setPages(data.data || []);
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Failed to fetch pages");
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const testPage = async (slug: string) => {
    setTestResult(null);
    try {
      const response = await fetch(`/api/pages/${slug}`);
      const data = await response.json();
      setTestResult(data);
    } catch (err: any) {
      setTestResult({ error: err.message });
    }
  };

  const publishedPages = pages.filter((p) => p.is_published);
  const draftPages = pages.filter((p) => !p.is_published);

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Test Page Connection
          </h1>

          {loading && <p className="text-gray-600">Loading...</p>}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
              <strong>Error:</strong> {error}
            </div>
          )}

          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Test Page by Slug</h2>
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={testSlug}
                onChange={(e) => setTestSlug(e.target.value)}
                placeholder="Enter page slug (e.g., my-page)"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
              />
              <button
                onClick={() => testPage(testSlug)}
                className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
              >
                Test
              </button>
            </div>
            {testResult && (
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Result:</h3>
                <pre className="bg-gray-100 p-4 rounded overflow-auto text-xs">
                  {JSON.stringify(testResult, null, 2)}
                </pre>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Published Pages ({publishedPages.length})
              </h2>
              {publishedPages.length === 0 ? (
                <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-3 rounded">
                  <strong>⚠️ No published pages!</strong>
                  <p className="text-sm mt-2">
                    Pages must be published (is_published = true) to appear on
                    the frontend.
                  </p>
                </div>
              ) : (
                <ul className="space-y-2">
                  {publishedPages.map((page) => (
                    <li key={page.id} className="border-b pb-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <a
                            href={`/${page.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 hover:text-primary-800 font-medium"
                          >
                            /{page.slug || "(no slug)"}
                          </a>
                          <p className="text-sm text-gray-600">{page.title}</p>
                          <button
                            onClick={() => testPage(page.slug)}
                            className="text-xs text-blue-600 hover:text-blue-800 mt-1"
                          >
                            Test API
                          </button>
                        </div>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                          Published
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Draft Pages ({draftPages.length})
              </h2>
              {draftPages.length === 0 ? (
                <p className="text-gray-500">No draft pages</p>
              ) : (
                <ul className="space-y-2">
                  {draftPages.map((page) => (
                    <li key={page.id} className="border-b pb-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-gray-600 font-medium">
                            /{page.slug || "(no slug)"}
                          </span>
                          <p className="text-sm text-gray-600">{page.title}</p>
                          <p className="text-xs text-red-600 mt-1">
                            ⚠️ Not published - won't show on frontend
                          </p>
                        </div>
                        <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">
                          Draft
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              All Pages (Raw Data)
            </h2>
            <pre className="bg-gray-100 p-4 rounded overflow-auto text-xs max-h-96">
              {JSON.stringify(pages, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}


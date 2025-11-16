"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  published: boolean;
  published_at?: string;
  created_at: string;
}

export default function BlogPostsPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [syncMessage, setSyncMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/admin/blog");
      if (response.ok) {
        const data = await response.json();
        setPosts(data.data || []);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return;

    try {
      const response = await fetch(`/api/admin/blog/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setPosts(posts.filter((post) => post.id !== id));
      }
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Failed to delete post");
    }
  };

  const handleTogglePublish = async (post: BlogPost) => {
    try {
      const response = await fetch(`/api/admin/blog/${post.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          published: !post.published,
          published_at: !post.published ? new Date().toISOString() : null,
        }),
      });

      if (response.ok) {
        fetchPosts();
      }
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const handleSyncPosts = async () => {
    if (!confirm("This will import all existing blog posts from the website. Continue?")) return;

    setSyncing(true);
    setSyncMessage("");
    try {
      const response = await fetch("/api/admin/blog/sync", {
        method: "POST",
      });

      if (response.ok) {
        const data = await response.json();
        setSyncMessage(
          `Successfully synced ${data.synced} posts. ${data.skipped} posts were skipped (already exist).`
        );
        fetchPosts();
        setTimeout(() => setSyncMessage(""), 5000);
      } else {
        const error = await response.json();
        setSyncMessage(`Error: ${error.error || "Failed to sync posts"}`);
        setTimeout(() => setSyncMessage(""), 5000);
      }
    } catch (error) {
      console.error("Error syncing posts:", error);
      setSyncMessage("Failed to sync posts");
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
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Blog Posts</h1>
          <p className="text-gray-600">Manage your blog posts and articles</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleSyncPosts}
            disabled={syncing}
            className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium disabled:opacity-50"
          >
            {syncing ? "Syncing..." : "Sync All Posts"}
          </button>
          <Link
            href="/admin/posts/new"
            className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
          >
            + New Post
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Created
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {posts.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                  No posts found. Click "Sync All Posts" to import existing posts or create a new post.
                </td>
              </tr>
            ) : (
              posts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{post.title}</div>
                      {post.excerpt && (
                        <div className="text-sm text-gray-500 truncate max-w-md">
                          {post.excerpt}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleTogglePublish(post)}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        post.published
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {post.published ? "Published" : "Draft"}
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(post.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end gap-3">
                      <Link
                        href={`/admin/posts/${post.id}`}
                        className="text-primary-600 hover:text-primary-900"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(post.id)}
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


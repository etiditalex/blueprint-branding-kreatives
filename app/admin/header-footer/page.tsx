"use client";

import { useState, useEffect, useRef } from "react";
import ImagePicker from "@/components/admin/ImagePicker";

interface HeaderContent {
  id: string;
  logo_url: string;
  logo_alt_text: string;
  logo_width?: number;
  logo_height?: number;
  cta_text: string;
  cta_url: string;
}

interface FooterContent {
  id: string;
  company_name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  social_links: any;
  copyright_text: string;
}

export default function HeaderFooterPage() {
  const [header, setHeader] = useState<HeaderContent | null>(null);
  const [footer, setFooter] = useState<FooterContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState<"header" | "footer">("header");

  const [headerForm, setHeaderForm] = useState({
    logo_url: "",
    logo_alt_text: "",
    logo_width: 70,
    logo_height: 70,
    cta_text: "",
    cta_url: "",
  });

  const [footerForm, setFooterForm] = useState({
    company_name: "",
    description: "",
    address: "",
    phone: "",
    email: "",
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "",
    copyright_text: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [headerRes, footerRes] = await Promise.all([
        fetch("/api/admin/header"),
        fetch("/api/admin/footer"),
      ]);

      if (headerRes.ok) {
        const headerData = await headerRes.json();
        if (headerData.data && headerData.data.length > 0) {
          const headerContent = headerData.data[0];
          setHeader(headerContent);
          setHeaderForm({
            logo_url: headerContent.logo_url || "",
            logo_alt_text: headerContent.logo_alt_text || "",
            logo_width: headerContent.logo_width || 70,
            logo_height: headerContent.logo_height || 70,
            cta_text: headerContent.cta_text || "",
            cta_url: headerContent.cta_url || "",
          });
        }
      }

      if (footerRes.ok) {
        const footerData = await footerRes.json();
        if (footerData.data && footerData.data.length > 0) {
          const footerContent = footerData.data[0];
          setFooter(footerContent);
          const socialLinks = footerContent.social_links || {};
          setFooterForm({
            company_name: footerContent.company_name || "",
            description: footerContent.description || "",
            address: footerContent.address || "",
            phone: footerContent.phone || "",
            email: footerContent.email || "",
            facebook: socialLinks.facebook || "",
            twitter: socialLinks.twitter || "",
            instagram: socialLinks.instagram || "",
            linkedin: socialLinks.linkedin || "",
            copyright_text: footerContent.copyright_text || "",
          });
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleHeaderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const url = header
        ? `/api/admin/header/${header.id}`
        : "/api/admin/header";
      const method = header ? "PATCH" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(headerForm),
      });

      if (response.ok) {
        fetchData();
        alert("Header updated successfully!");
      }
    } catch (error) {
      console.error("Error saving header:", error);
      alert("Failed to save header");
    } finally {
      setSaving(false);
    }
  };

  const handleFooterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const socialLinks = {
        facebook: footerForm.facebook,
        twitter: footerForm.twitter,
        instagram: footerForm.instagram,
        linkedin: footerForm.linkedin,
      };

      const url = footer
        ? `/api/admin/footer/${footer.id}`
        : "/api/admin/footer";
      const method = footer ? "PATCH" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...footerForm,
          social_links: socialLinks,
        }),
      });

      if (response.ok) {
        fetchData();
        alert("Footer updated successfully!");
      }
    } catch (error) {
      console.error("Error saving footer:", error);
      alert("Failed to save footer");
    } finally {
      setSaving(false);
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
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Header & Footer</h1>
        <p className="text-gray-600">Manage header and footer content</p>
      </div>

      <div className="bg-white rounded-lg shadow-md">
        <div className="border-b border-gray-200">
          <div className="flex">
            <button
              onClick={() => setActiveTab("header")}
              className={`px-6 py-4 font-medium ${
                activeTab === "header"
                  ? "text-primary-600 border-b-2 border-primary-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Header
            </button>
            <button
              onClick={() => setActiveTab("footer")}
              className={`px-6 py-4 font-medium ${
                activeTab === "footer"
                  ? "text-primary-600 border-b-2 border-primary-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Footer
            </button>
          </div>
        </div>

        <div className="p-6">
          {activeTab === "header" ? (
            <form onSubmit={handleHeaderSubmit} className="space-y-6">
              <div>
                <ImagePicker
                  label="Logo"
                  value={headerForm.logo_url}
                  onChange={(url) => setHeaderForm({ ...headerForm, logo_url: url })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Logo Alt Text
                </label>
                <input
                  type="text"
                  value={headerForm.logo_alt_text}
                  onChange={(e) =>
                    setHeaderForm({ ...headerForm, logo_alt_text: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Logo Width (px)
                  </label>
                  <input
                    type="number"
                    min="20"
                    max="200"
                    value={headerForm.logo_width}
                    onChange={(e) =>
                      setHeaderForm({ ...headerForm, logo_width: parseInt(e.target.value) || 70 })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Logo Height (px)
                  </label>
                  <input
                    type="number"
                    min="20"
                    max="200"
                    value={headerForm.logo_height}
                    onChange={(e) =>
                      setHeaderForm({ ...headerForm, logo_height: parseInt(e.target.value) || 70 })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>
              {headerForm.logo_url && (
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">Preview:</p>
                  <div className="inline-block border border-gray-300 rounded p-2 bg-white">
                    <img
                      src={headerForm.logo_url}
                      alt={headerForm.logo_alt_text || "Logo preview"}
                      style={{
                        width: `${headerForm.logo_width}px`,
                        height: `${headerForm.logo_height}px`,
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CTA Text
                  </label>
                  <input
                    type="text"
                    value={headerForm.cta_text}
                    onChange={(e) =>
                      setHeaderForm({ ...headerForm, cta_text: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CTA URL
                  </label>
                  <input
                    type="url"
                    value={headerForm.cta_url}
                    onChange={(e) =>
                      setHeaderForm({ ...headerForm, cta_url: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={saving}
                className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50"
              >
                {saving ? "Saving..." : "Save Header"}
              </button>
            </form>
          ) : (
            <form onSubmit={handleFooterSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={footerForm.company_name}
                    onChange={(e) =>
                      setFooterForm({ ...footerForm, company_name: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={footerForm.email}
                    onChange={(e) =>
                      setFooterForm({ ...footerForm, email: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={footerForm.description}
                  onChange={(e) =>
                    setFooterForm({ ...footerForm, description: e.target.value })
                  }
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <textarea
                  value={footerForm.address}
                  onChange={(e) =>
                    setFooterForm({ ...footerForm, address: e.target.value })
                  }
                  rows={2}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={footerForm.phone}
                    onChange={(e) =>
                      setFooterForm({ ...footerForm, phone: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Copyright Text
                  </label>
                  <input
                    type="text"
                    value={footerForm.copyright_text}
                    onChange={(e) =>
                      setFooterForm({ ...footerForm, copyright_text: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Social Media Links</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Facebook
                    </label>
                    <input
                      type="url"
                      value={footerForm.facebook}
                      onChange={(e) =>
                        setFooterForm({ ...footerForm, facebook: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Twitter
                    </label>
                    <input
                      type="url"
                      value={footerForm.twitter}
                      onChange={(e) =>
                        setFooterForm({ ...footerForm, twitter: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Instagram
                    </label>
                    <input
                      type="url"
                      value={footerForm.instagram}
                      onChange={(e) =>
                        setFooterForm({ ...footerForm, instagram: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      LinkedIn
                    </label>
                    <input
                      type="url"
                      value={footerForm.linkedin}
                      onChange={(e) =>
                        setFooterForm({ ...footerForm, linkedin: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                disabled={saving}
                className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50"
              >
                {saving ? "Saving..." : "Save Footer"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

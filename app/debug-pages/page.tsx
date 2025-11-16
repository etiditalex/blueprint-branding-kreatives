import { createServerClient } from '@/backend/lib/supabase';
import Link from 'next/link';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function DebugPages() {
  let pages: any[] = [];
  let error = null;

  try {
    const supabase = createServerClient();
    
    const { data, error: dbError } = await supabase
      .from('pages')
      .select('*')
      .order('created_at', { ascending: false });

    if (dbError) {
      error = dbError.message;
    } else {
      pages = data || [];
    }
  } catch (e: any) {
    error = e.message;
  }

  const publishedPages = pages.filter(p => p.is_published);
  const draftPages = pages.filter(p => !p.is_published);

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Debug: All Pages in Database</h1>
          
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
              <strong>Error:</strong> {error}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Published Pages ({publishedPages.length})
              </h2>
              {publishedPages.length === 0 ? (
                <p className="text-gray-500">No published pages found</p>
              ) : (
                <ul className="space-y-2">
                  {publishedPages.map((page) => (
                    <li key={page.id} className="border-b pb-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <Link 
                            href={`/${page.slug}`}
                            className="text-primary-600 hover:text-primary-800 font-medium"
                          >
                            /{page.slug || '(no slug)'}
                          </Link>
                          <p className="text-sm text-gray-600">{page.title}</p>
                        </div>
                        <div className="text-xs text-gray-500">
                          {page.is_published ? (
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Published</span>
                          ) : (
                            <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">Draft</span>
                          )}
                        </div>
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
                <p className="text-gray-500">No draft pages found</p>
              ) : (
                <ul className="space-y-2">
                  {draftPages.map((page) => (
                    <li key={page.id} className="border-b pb-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-gray-600 font-medium">
                            /{page.slug || '(no slug)'}
                          </span>
                          <p className="text-sm text-gray-600">{page.title}</p>
                        </div>
                        <div className="text-xs text-gray-500">
                          <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">Draft</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">All Pages (Raw Data)</h2>
            <pre className="bg-gray-100 p-4 rounded overflow-auto text-xs">
              {JSON.stringify(pages, null, 2)}
            </pre>
          </div>

          <div className="mt-6">
            <Link 
              href="/"
              className="text-primary-600 hover:text-primary-800"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


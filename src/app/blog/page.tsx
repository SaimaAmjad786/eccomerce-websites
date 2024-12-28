import Link from "next/link";
import TopBar from "../components/navbar";
import Header from "../components/header";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Blog Post 1",
      author: "Author 1",
      date: "December 9, 2024",
      category: "Design",
      excerpt: "This is a brief excerpt from the blog post.",
      imgSrc: "/blog1.jpg",
      link: "/",
    },
    {
      id: 2,
      title: "Blog Post 2",
      author: "Author 2",
      date: "December 8, 2024",
      category: "Technology",
      excerpt: "This is another brief excerpt from the second blog post.",
      imgSrc: "/blog2.jpg",
      link: "/",
    },
    {
      id: 3,
      title: "Blog Post 3",
      author: "Author 3",
      date: "December 7, 2024",
      category: "Travel",
      excerpt: "Exploring the beauty of travel in this blog post.",
      imgSrc: "/blog3.jpg",
      link: "/",
    },
  ];

  return (
    <>
      <TopBar />
      <Header />

      {/* Breadcrumb Header */}
      <header className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <p className="text-sm text-gray-500">
            Home / Page / <span className="text-pink-500">Blog Page</span>
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap -mx-4">
            {/* Main Blog Posts */}
            <div className="w-full lg:w-8/12 px-4">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="mb-8 bg-white p-6 rounded-lg shadow-md"
                >
                  <img
                    className="w-full h-64 object-cover rounded-lg"
                    src={post.imgSrc}
                    alt={`Image for ${post.title}`}
                  />
                  <div className="mt-4">
                    <div className="text-sm text-gray-500">
                      <span>{post.author}</span> • <span>{post.date}</span> •{' '}
                      <span>{post.category}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mt-2">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-gray-600">{post.excerpt}</p>
                    <Link
                      href={post.link}
                      className="text-pink-500 hover:underline mt-2 block"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-4/12 px-4">
              {/* Search Section */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-semibold mb-4">Search</h3>
                <input
                  type="text"
                  placeholder="Search here"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* Categories Section */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-blue-500 hover:underline">
                      Design (21)
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-blue-500 hover:underline">
                      Technology (15)
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-blue-500 hover:underline">
                      Travel (9)
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Recent Posts Section */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
                <ul className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <li key={post.id} className="flex items-center">
                      <img
                        src={post.imgSrc}
                        alt={`Thumbnail for ${post.title}`}
                        className="w-12 h-12 rounded-lg mr-4"
                      />
                      <div>
                        <Link
                          href={post.link}
                          className="text-blue-500 hover:underline"
                        >
                          {post.title}
                        </Link>
                        <p className="text-sm text-gray-500">{post.date}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags Section */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-200 rounded-lg text-sm">
                    Design
                  </span>
                  <span className="px-3 py-1 bg-gray-200 rounded-lg text-sm">
                    Technology
                  </span>
                  <span className="px-3 py-1 bg-gray-200 rounded-lg text-sm">
                    Travel
                  </span>
                  <span className="px-3 py-1 bg-gray-200 rounded-lg text-sm">
                    Fashion
                  </span>
                  <span className="px-3 py-1 bg-gray-200 rounded-lg text-sm">
                    Food
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


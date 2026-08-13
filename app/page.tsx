import Link from 'next/link'

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h2 className="text-5xl font-bold text-gray-900">
          Welcome to Prayer Connect
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Share your prayer requests with a compassionate community. Find support, encouragement, and intercession from believers around the world.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-prayer-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-prayer-700 transition">
            Share a Prayer Request
          </button>
          <button className="border-2 border-prayer-600 text-prayer-600 px-8 py-3 rounded-lg font-semibold hover:bg-prayer-50 transition">
            View Requests
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
          <div className="text-4xl mb-4">📝</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Share Requests</h3>
          <p className="text-gray-600">
            Post your prayer requests and let the community know how to intercede for you.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
          <div className="text-4xl mb-4">🤝</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Community Support</h3>
          <p className="text-gray-600">
            Connect with others, offer encouragement, and pray together for answered prayers.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
          <div className="text-4xl mb-4">✨</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Testimonies</h3>
          <p className="text-gray-600">
            Celebrate answered prayers and share how God has moved in your life.
          </p>
        </div>
      </div>

      {/* Recent Requests Section */}
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Recent Prayer Requests</h3>
        <div className="space-y-4">
          <div className="border-l-4 border-prayer-600 pl-4 py-2">
            <p className="font-semibold text-gray-900">Strength During a Difficult Time</p>
            <p className="text-gray-600 text-sm">2 hours ago • 12 prayers</p>
          </div>
          <div className="border-l-4 border-prayer-600 pl-4 py-2">
            <p className="font-semibold text-gray-900">Healing and Recovery</p>
            <p className="text-gray-600 text-sm">5 hours ago • 28 prayers</p>
          </div>
          <div className="border-l-4 border-prayer-600 pl-4 py-2">
            <p className="font-semibold text-gray-900">Guidance in Career Decision</p>
            <p className="text-gray-600 text-sm">1 day ago • 45 prayers</p>
          </div>
        </div>
        <button className="mt-6 text-prayer-600 font-semibold hover:text-prayer-700">
          View All Requests →
        </button>
      </div>
    </div>
  )
}

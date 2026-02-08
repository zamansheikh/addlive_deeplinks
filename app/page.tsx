import Link from 'next/link';
import Image from 'next/image';

// Sample Data
const sampleUsers = [
  { id: '68e7d830efe28c18be990137', name: 'Zaman Sheikh', avatar: 'https://i.pravatar.cc/150?u=100005' },
  { id: '68e7a8bc3fe8a330c1ec65c8', name: 'Sarah Connor', avatar: 'https://i.pravatar.cc/150?u=100006' },
  { id: '68e7c0b0c8b545ae23f35240', name: 'John Doe', avatar: 'https://i.pravatar.cc/150?u=100007' },
  { id: '68e7f97fefe28c18be99039b', name: 'Mystery Guest', avatar: 'https://i.pravatar.cc/150?u=100008' },
];

const sampleRooms = [
  { id: '68e7d830efe28c18be990137', title: 'Late Night Chill 🌙', host: 'Zaman' },
  { id: 'room_abc_123', title: 'Music & Vibes 🎵', host: 'DJ Alice' },
  { id: 'room_xyz_789', title: 'Tech Talk 🚀', host: 'Dev Team' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-blue-600 tracking-tight sm:text-5xl">
            AddaLive
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Deep Linking Test Console
          </p>
          <p className="mt-2 text-sm text-gray-400">
            Clicking these buttons will attempt to open the app via Deep Links.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {/* User Profiles Section */}
          <div className="bg-white p-6 rounded-2xl shadow-xl flex flex-col">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">
                👤
              </span>
              User Profiles
            </h2>
            <div className="space-y-4 flex-1">
              {sampleUsers.map((user) => (
                <div key={user.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors border border-gray-100">
                  <div className="flex items-center space-x-4">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{user.name}</p>
                      <p className="text-xs text-gray-500">ID: {user.id}</p>
                    </div>
                  </div>
                  <Link
                    href={`/profile/${user.id}`}
                    className="bg-white text-blue-600 hover:bg-blue-600 hover:text-white border border-blue-200 font-medium py-2 px-4 rounded-lg transition-all text-sm shadow-sm"
                  >
                    Open Profile
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Audio Rooms Section */}
          <div className="bg-white p-6 rounded-2xl shadow-xl flex flex-col">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="bg-purple-100 text-purple-600 p-2 rounded-lg mr-3">
                🎙️
              </span>
              Audio Rooms
            </h2>
            <div className="space-y-4 flex-1">
              {sampleRooms.map((room) => (
                <div key={room.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-purple-50 transition-colors border border-gray-100">
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">{room.title}</p>
                    <p className="text-xs text-gray-500">Host: {room.host}</p>
                    <p className="text-[10px] text-gray-400 font-mono mt-1 w-20 truncate">{room.id}</p>
                  </div>
                  <Link
                    href={`/room/${room.id}`}
                    className="bg-white text-purple-600 hover:bg-purple-600 hover:text-white border border-purple-200 font-medium py-2 px-4 rounded-lg transition-all text-sm shadow-sm ml-4"
                  >
                    Join Room
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12 bg-white p-8 rounded-2xl shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">How it works</h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="font-bold text-gray-900 mb-2">1. Click Link</div>
              Next.js page intercepts the request at <code>/profile/:id</code> or <code>/room/:id</code>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="font-bold text-gray-900 mb-2">2. Redirect</div>
              Page attempts to redirect to <code>zigoliveapp.xyz/...</code> which the app listens to.
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="font-bold text-gray-900 mb-2">3. Fallback</div>
              If app doesn't open within 2.5s, redirects to Play Store.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

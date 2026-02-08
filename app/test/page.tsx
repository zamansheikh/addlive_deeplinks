import Link from 'next/link';
import Image from 'next/image';

// Real User IDs from logs
const testUsers = [
  { id: '68e7d830efe28c18be990137', name: 'User A (Current User)', avatar: 'https://ui-avatars.com/api/?name=User+A&background=0D8ABC&color=fff' },
  { id: '68e7a8bc3fe8a330c1ec65c8', name: 'User B', avatar: 'https://ui-avatars.com/api/?name=User+B&background=random' },
  { id: '68e7c0b0c8b545ae23f35240', name: 'User C', avatar: 'https://ui-avatars.com/api/?name=User+C&background=random' },
  { id: '68e7f97fefe28c18be99039b', name: 'User D', avatar: 'https://ui-avatars.com/api/?name=User+D&background=random' },
];

export default function DeepLinkTestPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Deep Link Test Console
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Use these buttons to test deep linking with real user IDs.
          </p>
          <div className="mt-4">
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
              &larr; Back to Home
            </Link>
          </div>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-md mt-8">
          <ul role="list" className="divide-y divide-gray-200">
            {testUsers.map((user) => (
              <li key={user.id}>
                <div className="px-4 py-4 sm:px-6 hover:bg-gray-50 transition duration-150 ease-in-out">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center min-w-0">
                      <div className="flex-shrink-0">
                        <img
                          className="h-12 w-12 rounded-full"
                          src={user.avatar}
                          alt={user.name}
                        />
                      </div>
                      <div className="ml-4 truncate">
                        <div className="flex text-sm font-medium text-blue-600 truncate">
                          {user.name}
                        </div>
                        <div className="flex mt-1 text-sm text-gray-500 font-mono">
                          <span className="truncate">ID: {user.id}</span>
                        </div>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <a
                        href={`https://zigoliveapp.xyz/profile/${user.id}`}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Open Profile
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <div className="flex">
                <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                        Ensure the app is installed on the device you are testing on. If the app is not installed, these links may error out or go to the fallback URL.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

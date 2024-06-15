import { Github } from 'lucide-react';
import Link from 'next/link';

function GithubLink() {
  return (
    <Link
      href="https://github.com/mrjasonroy/rsc-revalidate-tag/tree/main"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 rounded-full bg-gray-900 p-3 text-white hover:bg-gray-800"
      prefetch={false}
    >
      <Github className="h-6 w-6" />
    </Link>
  );
}
export { GithubLink };

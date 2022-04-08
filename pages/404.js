import Link from 'next/link';

export default function Custom404() {
  return (
    <div>
      <img className="w-[45rem] mx-auto" src="/images/not-found.jpg" alt="" />

      <div className="text-center mb-4 mt-4">
        <h2>
          Go{' '}
          <Link href="/" passHref>
            <a className="text-blue-600">Home page</a>
          </Link>
        </h2>
      </div>
    </div>
  );
}

'use client';

import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const instanceRef = useRef<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    const loadPSPDFKit = async () => {
      if (container) {
        try {
          console.log('Loading PSPDFKit...');
          const PSPDFKit = await import('pspdfkit');
          console.log('PSPDFKit loaded successfully');

          // Unload any existing instance
          if (instanceRef.current) {
            PSPDFKit.default.unload(container);
          }

          console.log('Initializing viewer...');
          instanceRef.current = await PSPDFKit.default.load({
            container,
            document: '/pspdfkit-demo/pspdfkit-web-demo.pdf',
            baseUrl: '/pspdfkit-demo/pspdfkit-lib',
            licenseKey: process.env.NEXT_PUBLIC_PSPDFKIT_LICENSE_KEY
          });
          console.log('Viewer initialized successfully');
        } catch (error) {
          console.error('Error loading PSPDFKit:', error);
          setError(error instanceof Error ? error.message : 'Failed to load PDF viewer');
        }
      }
    };

    loadPSPDFKit();

    return () => {
      if (container && instanceRef.current) {
        import('pspdfkit').then((PSPDFKit) => {
          PSPDFKit.default.unload(container);
        });
      }
    };
  }, []);

  if (error) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4">
        <div className="text-red-500">
          <h1 className="text-xl font-bold mb-2">Error Loading PDF Viewer</h1>
          <p>{error}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="w-full h-screen" ref={containerRef} />
    </main>
  );
}

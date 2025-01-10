'use client';

import { useEffect, useRef } from 'react';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const instanceRef = useRef<any>(null);

  useEffect(() => {
    const container = containerRef.current;

    const loadPSPDFKit = async () => {
      if (container) {
        // Dynamically import PSPDFKit
        const PSPDFKit = await import('pspdfkit');

        // Unload any existing instance
        if (instanceRef.current) {
          PSPDFKit.default.unload(container);
        }

        // Load the PDF viewer
        try {
          instanceRef.current = await PSPDFKit.default.load({
            container,
            document: '/pspdfkit-demo/pspdfkit-web-demo.pdf',
            baseUrl: '/pspdfkit-demo/pspdfkit-lib'
          });
        } catch (error) {
          console.error('Error loading PSPDFKit:', error);
        }
      }
    };

    loadPSPDFKit();

    // Cleanup on unmount
    return () => {
      if (container && instanceRef.current) {
        import('pspdfkit').then((PSPDFKit) => {
          PSPDFKit.default.unload(container);
        });
      }
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="w-full h-screen" ref={containerRef} />
    </main>
  );
}

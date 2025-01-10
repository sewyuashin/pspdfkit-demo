'use client';

import { useEffect, useRef } from 'react';
import type PSPDFKit from 'pspdfkit';

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container && typeof window !== 'undefined') {
      import('pspdfkit').then((PSPDFKit) => {
        const instance = PSPDFKit.default;
        
        if (instance) {
          instance.unload(container);
        }

        instance.load({
          container,
          document: '/pspdfkit-web-demo.pdf',
          baseUrl: `${window.location.protocol}//${window.location.host}/`,
        }).catch(console.error);
      });
    }

    return () => {
      if (container) {
        import('pspdfkit').then((PSPDFKit) => {
          PSPDFKit.default.unload(container);
        });
      }
    };
  }, []);

  return <div ref={containerRef} style={{ height: '100vh' }} />;
};

export default App;

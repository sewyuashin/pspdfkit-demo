# PSPDFKit Next.js Demo

This is a demo project showcasing the integration of PSPDFKit with Next.js, demonstrating how to create a powerful PDF viewer application using modern web technologies.

## Features

- PDF document viewing with PSPDFKit
- Responsive layout with Tailwind CSS
- Modern UI with Next.js App Router
- Full TypeScript support
- Automatic deployment with Vercel

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (version 18.x)
- npm (version 10.x)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/sewyuashin/pspdfkit-demo.git
cd pspdfkit-demo
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
pspdfkit-demo/
├── public/
│   ├── pspdfkit-lib/     # PSPDFKit library assets
│   └── pspdfkit-web-demo.pdf  # Sample PDF file
├── src/
│   └── app/
│       ├── layout.tsx    # Root layout component
│       └── page.tsx      # Main page component
└── package.json
```

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [PSPDFKit](https://pspdfkit.com/) - PDF viewer library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- PSPDFKit for providing the PDF viewer library
- Next.js team for the amazing framework
- Vercel for hosting capabilities

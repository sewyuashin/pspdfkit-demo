# PSPDFKit Next.js Demo

This is a demo project showcasing the integration of PSPDFKit with Next.js, demonstrating how to create a powerful PDF viewer application using modern web technologies.

## Features

- PDF document viewing
- Responsive layout
- Modern UI with Next.js and Tailwind CSS
- TypeScript support

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (version 16.x or higher)
- npm (version 8.x or higher)

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

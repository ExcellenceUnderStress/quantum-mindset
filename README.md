# Quantum Mindset

A Next.js React project exploring mindset transformation and personal development.

## 🚀 Features

- Modern React/Next.js architecture
- Responsive design with custom CSS
- Component-based structure
- Optimized for performance
- AWS-ready deployment configuration

## 🛠️ Tech Stack

- **Framework:** Next.js
- **Frontend:** React.js
- **Styling:** CSS/SCSS
- **Deployment:** AWS Amplify
- **Version Control:** Git/GitHub

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/ExcellenceUnderStress/quantum-mindset.git
cd quantum-mindset
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 AWS Deployment

This project is configured for AWS Amplify deployment with the included `amplify.yml` build specification.

### Deploy to AWS Amplify

1. **Connect to AWS Amplify:**
   - Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
   - Click "New app" → "Host web app"
   - Connect your GitHub repository

2. **Configure Build Settings:**
   - The `amplify.yml` file is already configured
   - AWS Amplify will automatically detect and use it

3. **Environment Variables (if needed):**
   - Add any required environment variables in the Amplify console
   - Go to App settings → Environment variables

4. **Deploy:**
   - AWS Amplify will automatically build and deploy your app
   - You'll get a live URL for your application

### Alternative AWS Deployment Options

- **AWS S3 + CloudFront:** For static hosting
- **AWS EC2:** For server-based deployment
- **AWS Lambda:** For serverless deployment

## 📁 Project Structure

```
quantum-mindset/
├── pages/                 # Next.js pages
├── src/
│   ├── components/        # React components
│   ├── layouts/          # Layout components
│   └── styles/           # Component styles
├── public/               # Static assets
│   ├── css/             # Global styles
│   ├── images/          # Images and icons
│   └── webfonts/        # Font files
├── amplify.yml          # AWS Amplify build config
└── package.json         # Dependencies and scripts
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🔗 Links

- **Repository:** [https://github.com/ExcellenceUnderStress/quantum-mindset](https://github.com/ExcellenceUnderStress/quantum-mindset)
- **Live Demo:** (Will be available after AWS deployment)

---

Built with ❤️ using Next.js and deployed on AWS

# Imagify - AI Text to Image Generator

A beautiful and modern React application that transforms text prompts into stunning AI-generated images. Built with React 19, Vite, Tailwind CSS, and integrated with multiple AI services.

## Features

- 🎨 **AI-Powered Image Generation** - Generate images from text using OpenAI DALL-E or Google Gemini
- 💳 **Credit System** - Purchase and manage credits for image generation
- 📱 **Responsive Design** - Works perfectly on desktop and mobile devices
- 🎭 **Beautiful UI** - Modern design with glassmorphism effects and animations
- 📚 **Image History** - Keep track of all your generated images
- 💾 **Download Support** - Download generated images in high quality
- 🔄 **Mock Service** - Works without API keys for demonstration

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up API Keys (Optional)

Create a `.env` file in the root directory and add your API keys:

```env
# For OpenAI DALL-E
VITE_OPENAI_API_KEY=your_openai_api_key_here

# For Google Gemini
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

**Note:** If you don't have API keys, the app will automatically use the mock service for demonstration purposes.

### 3. Run the Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 4. Build for Production
```bash
npm run build
```

## API Configuration

### OpenAI DALL-E
- **API Key**: Get from [OpenAI Platform](https://platform.openai.com/api-keys)
- **Models**: dall-e-3, dall-e-2
- **Sizes**: 1024x1024, 1024x1792, 1792x1024

### Google Gemini
- **API Key**: Get from [Google AI Studio](https://makersuite.google.com/app/apikey)
- **Model**: gemini-2.0-flash-exp-image-generation
- **Endpoint**: https://generativelanguage.googleapis.com/v1beta

### Mock Service (Default)
- No API key required
- Uses Lorem Picsum for realistic mock images
- Perfect for testing and demonstration

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Main navigation header
│   ├── Navbar.jsx      # Hero section navigation
│   ├── FloatingCards.jsx
│   ├── MagicalCards.jsx
│   └── ...
├── pages/              # Page components
│   ├── Home.jsx        # Landing page with image generation
│   ├── Result.jsx      # Generated image display
│   ├── BuyCredit.jsx   # Credit purchase page
│   └── PricingSection.jsx
├── context/            # React context for state management
│   └── AppContext.jsx
├── hooks/              # Custom React hooks
│   └── useImageGeneration.js
├── services/           # API services
│   └── imageGenerationService.js
└── assets/             # Static assets and icons
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Technologies Used

- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **ESLint** - Code linting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Support

For support and questions:
- Create an issue on GitHub
- Check the documentation
- Review the API documentation for your chosen AI service

---

**Made with ❤️ for the AI generation community**

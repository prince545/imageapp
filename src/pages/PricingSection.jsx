export default function PricingSection({ theme = "dark" }) {
  const plans = [
    {
      title: "Starter",
      price: "$0",
      description: "Perfect for trying out basic image generation",
      features: [
        "10 image generations per month",
        "Basic image resolution (512x512)",
        "Standard generation speed",
        "Access to 5 preset styles",
        "Community support",
      ],
      buttonText: "Start for free",
      highlight: false,
    },
    {
      title: "Creator",
      price: "$15",
      description: "For regular users creating content",
      features: [
        "200 image generations per month",
        "High resolution (1024x1024)",
        "Faster generation speed",
        "Access to all 20+ styles",
        "Custom style presets",
        "Background removal tool",
        "Priority support",
      ],
      buttonText: "Subscribe now",
      highlight: true,
      badge: "Most Popular",
    },
    {
      title: "Professional",
      price: "$49",
      description: "For power users and small businesses",
      features: [
        "Unlimited generations",
        "Ultra HD resolution (2048x2048)",
        "Fastest generation speed",
        "Advanced editing tools",
        "Commercial usage rights",
        "API access",
        "Dedicated support",
      ],
      buttonText: "Get Professional",
      highlight: false,
    },
  ];

  return (
    <section className={`${theme === "dark" ? "text-white" : "text-gray-800"} py-20 px-4`}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-6 flex flex-col shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:-translate-y-2 cursor-pointer group ${
                plan.highlight
                  ? `${theme === "dark" ? "bg-indigo-600" : "bg-indigo-500 text-white"} border-4 border-indigo-300 relative`
                  : theme === "dark" ? "bg-gray-800 hover:bg-gray-700" : "bg-white border border-gray-200 hover:border-indigo-300"
              }`}
            >
              {plan.badge && (
                <div className={`absolute -top-4 right-4 ${
                  theme === "dark" ? "bg-yellow-400 text-black" : "bg-indigo-600 text-white"
                } text-xs font-bold px-3 py-1 rounded-full`}>
                  {plan.badge}
                </div>
              )}
              <h3 className="text-xl font-semibold mb-1">{plan.title}</h3>
              <p className={`text-sm mb-4 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                {plan.description}
              </p>
              <div className="text-3xl font-bold mb-4">{plan.price}
                <span className={`text-sm font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                  /month
                </span>
              </div>
              <ul className={`text-sm text-left space-y-2 mb-6 ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}>
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className={theme === "dark" ? "text-green-400" : "text-indigo-600"}>✓</span> {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-auto py-2 px-4 rounded font-semibold transition-all duration-300 transform group-hover:scale-105 ${
                  plan.highlight
                    ? theme === "dark"
                      ? "bg-white text-indigo-600 hover:bg-gray-200 hover:shadow-lg"
                      : "bg-white text-indigo-600 hover:bg-gray-100 hover:shadow-lg"
                    : theme === "dark"
                    ? "bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg"
                    : "bg-indigo-600 hover:bg-indigo-700 text-white hover:shadow-lg"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
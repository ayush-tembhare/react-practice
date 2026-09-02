import Page1 from './Components/Page1'

const App = () => {
  const cards = [
    {
      image: "https://images.unsplash.com/photo-1600275669439-14e40452d20b",
      description:
        "Customers are happy with the product and likely to continue using it.",
      status: "Satisfied"
    },
    {
      image: "https://images.unsplash.com/photo-1687976474460-fb49c6b2f54c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Customers are interested in the product but still exploring their options.",
      status: "Interested"
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1661602218148-961ffdeddd5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtpbmclMjBwcm9mZXNzb2lufGVufDB8fDB8fHww",
      description:
        "Customers are showing strong interest and may be ready to take the next step.",
      status: "Highly Interested"
    },
    {
      image: "https://images.unsplash.com/photo-1546979859-b7d45d499dd6?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Customers are carefully comparing features, pricing, and available alternatives.",
      status: "Comparing"
    },
    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
      description:
        "Customers need more information or assistance before making a final decision.",
      status: "Needs Support"
    },
    {
      image: "https://images.unsplash.com/photo-1627826436180-178c3b10767c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmtpbmclMjBwcm9mZXNzb2lufGVufDB8fDB8fHww",
      description:
        "Customers are currently not interested and are unlikely to convert at this stage.",
      status: "Not Interested"
    }
  ];

  return (
    <div>
          <Page1 cards={cards}/>
    </div>
  )
}

export default App
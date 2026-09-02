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
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
      description:
        "Customers are interested in the product but still exploring their options.",
      status: "Interested"
    },
    {
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
      description:
        "Customers are showing strong interest and may be ready to take the next step.",
      status: "Highly Interested"
    },
    {
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902",
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
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
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
"use client"
import React,{useState} from 'react'

const Faq = () => {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      title: "What is PheonixSwap?",
      description:
        "Leap is a first of its kind Modular Binance Smart Chain built using BSC as a Layer. As a Layer 3 chain, Leap settles on Bsc One benefiting from its EVM+ Compatibility",
      content: () => <Textfaq1 description={faqs[0].description} />,
    },
    {
        title: "Can pheonix talk to other Orbit chains?",
        description:
          "dummy 2 description",
        content: () => <Textfaq1 description={faqs[1].description} />, 
      },
      {
        title: "How does PheonixSwap fit into Binance Chain future?",
        description:
          "dummy 3 descrtiption",
        content: () => <Textfaq1 description={faqs[2].description} />, 
      },
      {
        title: "What is Pheonix vision?",
        description:
          "dummy 4 description",
        content: () => <Textfaq1 description={faqs[3].description} />, 
      },
      {
        title: "Who is behind PheonixSwap?",
        description:
          "dummy 5 description",
        content: () => <Textfaq1 description={faqs[4].description} />,
      },
  ];

  const toggleFaq = (index:number) => {
    setActiveFaq(index === activeFaq ? null : index);
  };

  return (
    <div className="flex flex-col m-10">
      {faqs.map((faq, index) => (
        <div
          key={faq.title}
          className={`backdrop-filter backdrop-blur-md bg-white bg-opacity-[3%] p-4 rounded-lg text-white my-3 cursor-pointer pr-5 border border-gray-700 ${
            activeFaq === index ? 'active' : ''
          }`}
          onClick={() => toggleFaq(index)}
        >
          <p className="font-zendots sm:text-sm relative">{faq.title}</p>
          {activeFaq === index && faq.content()}
        </div>
      ))}
    </div>
  );
};

function Textfaq1({ description }:{ description: string }) {
  return (
    <p className="text-xs sm:text-[10px] pt-2">{description}</p>
  );
}

export default Faq

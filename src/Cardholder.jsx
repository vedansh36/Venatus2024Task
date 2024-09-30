import "./vematus.css";
import Maincard from "./Maincard";
const data = [
  {
    heading: "Convert with email automations",
    imgURL: "/s1.png",
    content:
      "Boost orders and customer lifetime value by dynamically personalizing emails based on browsing and purchase data.",
    buttonText: "Explore marketing sutomations",
    color:"#ff9f01",
  },
  {heading:"Create faster with generative AI",
    imgURL:"/s2.png",
    content:"Effortlessly create on-brand content with generative AI tools and choose from expertly designed templates.",
    buttonText:"Explore AI tools",
    color:"#fff",
  },
  {heading:"Refine with segmentation",
    imgURL:"/s3.png",
    content:"Target cutomers with advanced logic like spend amounts,buying behaviour,and predicated attributes",
    buttonText:"Explore audience management",
    color:"#fdc360",
  },
  {heading:"Optimize with analytics & reporting",
    imgURL:"/s4.png",
    content:"Analyze performance with custom reports,funnel visualiztion,and industry benchmarking",
    buttonText:"Explore analytics & reporting",
    color:"#fbe6bf",
  },
];
export default function Carddholder() {
  return (
    <>
    <div className="main-section">
        {data.map((d)=>(
            <Maincard heading={d.heading} imgURL={d.imgURL} color={d.color} content={d.content} buttonText={d.buttonText} />
        ))}
    </div>
    </>
  );
}

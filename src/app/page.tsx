import Image from "next/image";
import people from "../../public/Assets/people.png"
import CardWrapper from "./components/CardWrapper";
import cardData from "./utils/cardData";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center p-4">
      <div>
        <div className="container mx-auto gap-20 flex items-center justify-between">
          <div className="flex gap-5">
            <div className="flex-1 h-700 w-470 bg-gray py-10 px-6">
              <h2 className="text-3xl">Who <span className="text-blue">We Are</span></h2>
              <div className="w-36 h-1 bg-blue mb-4"></div>
              <h3 className="leading-10 text-2xl pb-5">MORE THEN 10+ YEARS
                PROVIDE IT SOLUTION</h3>
              <p className="pb-5 text-lg">Our focus is primarily on software development,
                crafting custom solutions that align with our
                clients unique requirements.</p>
              <p className="pb-5 text-lg">Our team of experienced developers works
                closely with each client to their business goals and objectives.</p>
              <button className="bg-blue leading-7 text-lg rounded-md text-white p-2">
                Our Service
              </button>
            </div>
            <div className="flex-1">
              <Image
                src={people}
                height={700}
                width={470}
                alt="Your Name"
                className="pb-4"
              />
            </div>
            <div className="flex-1 h-700 w-470 bg-gray py-10 px-6">
              <h2 className="text-3xl">ABOUT <span className="text-blue">TRANSCODE</span></h2>
              <div className="w-36 h-1 bg-blue mb-4"></div>
              <p className="pb-5 text-lg">Welcome to Transcode Solutions– where
                innovation meets excellence.</p>
              <p className="text-lg">
                Transcode Solutions is dedicated to transforming the digital realm with advanced software solutions. As a leading IT firm, we specialize in crafting customized software services to suit each clients specific requirements. Our experienced team utilizes cutting-edge technologies and industry standards to bring concepts to life. Our goal is to equip businesses for success in the digital era by offering innovative, scalable,and cost-efficient solutions. Fueled by a commitment to excellence, we aim to surpass expectations and deliver concrete outcomes.
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto gap-20 mt-10 text-center">
          <h3 className="font-bold text-3xl mb-6">Driving rapid change with software solutions for enhanced <span className="text-blue">flexibility and expansion, focusing on scalability and fostering growth.</span></h3>
          <p className="text-lg mb-6">Utilizing cutting-edge software solutions, we are driving rapid transformation to enhance flexibility and accommodate expansion within our organization. Our primary focus lies in scalability, ensuring that oursystems can easily handle increased demand and growth</p>
          <div className="flex text-center ">
            <div className="flex flex-col	items-center gap-4 mx-auto">
              <div className="w-24 h-24 bg-gray rounded-full flex items-center justify-center shadow-blue">
                <h3 className=" text-black  text-3xl	 font-extrabold">
                  5+
                </h3>
              </div>
              <h3 className="text-2xl mt-2">Years of Experience</h3>
            </div>
            <div className="flex flex-col	items-center gap-4 mx-auto">
              <div className="w-24 h-24 bg-gray rounded-full flex items-center justify-center shadow-blue">
                <h3 className=" text-black  text-3xl	 font-extrabold">
                  70+
                </h3>
              </div>
              <h3 className="text-2xl mt-2">Talented IT Professionals</h3>
            </div>
            <div className="flex flex-col	items-center gap-4 mx-auto">
              <div className="w-24 h-24 bg-gray rounded-full flex items-center justify-center shadow-blue">
                <h3 className=" text-black  text-3xl	 font-extrabold">
                  100+
                </h3>
              </div>
              <h3 className="text-2xl mt-2">Successful Projects</h3>
            </div>
            <div className="flex flex-col	items-center gap-4 mx-auto">
              <div className="w-24 h-24 bg-gray rounded-full flex items-center justify-center shadow-blue">
                <h3 className=" text-black  text-3xl	 font-extrabold">
                  30+
                </h3>
              </div>
              <h3 className="text-2xl mt-2">Countries Served</h3>
            </div>
          </div>
          <div className="mt-14">
            <div className="mb-10">
              <h3 className="text-3xl font-extrabold mb-4">What <span className="text-blue">We Do</span></h3>
              <p className="text-3xl text-gray">OUR SPECIALIZED SERVICES ARE TAILORED EXCLUSIVELY FOR YOUR BUSINESS NEEDS.</p>
            </div>
            <div className="container mx-auto pt-24">
              <div className="flex flex-wrap justify-center gap-9 mb-4">
                {cardData.map((data, index) => (
                  <CardWrapper key={index} {...data} />
                ))}
              </div>
            </div>
          </div>
          {/* <div className="">
            <h3 className="text-3xl font-extrabold mb-10"><span className="text-blue">OUR TECHNOLOGY</span> EXPERTISE</h3>
            <div className="flex">
              <div className="flex-1">
                <Link href="/webdevelopment">
                  <span className="hover:underline text-3xl font-medium text-blue">Web Development</span>
                </Link>
              </div>
              <div className="flex-1">
                <Link href="/mobiledevelopment">
                  <span className="hover:underline text-3xl font-medium text-black">Mobile Development</span>
                </Link>
              </div>
              <div className="flex-1">
                <Link href="/database">
                  <span className="hover:underline text-3xl font-medium text-black">Database</span>
                </Link>
              </div>
              <div className="flex-1">
                <Link href="/design">
                  <span className="hover:underline text-3xl font-medium text-black">UI/UX Design</span>
                </Link>
              </div>
            </div>            
          </div> */}
          <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
              <li className="me-2" role="presentation">
                <button className="inline-block p-4 border-b-2 rounded-t-lg" id="webdevelopment-tab" data-tabs-target="#webdevelopment" type="button" role="tab" aria-controls="webdevelopment" aria-selected="false">
           Web Development
                </button>
              </li>
              <li className="me-2" role="presentation">
                <button className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="mobiledevelopment-tab" data-tabs-target="#mobiledevelopment" type="button" role="tab" aria-controls="mobiledevelopment" aria-selected="false">
                  Mobile Development
                </button>
              </li>
              <li className="me-2" role="presentation">
                <button className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="database-tab" data-tabs-target="#database" type="button" role="tab" aria-controls="database" aria-selected="false">
                  Database
                </button>
              </li>
              <li role="presentation">
                <button className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="design-tab" data-tabs-target="#design" type="button" role="tab" aria-controls="design" aria-selected="false">
                  UI/UX Design
                </button>
              </li>
            </ul>
          </div>
          <div id="default-tab-content">
            <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="webdevelopment" role="tabpanel" aria-labelledby="webdevelopment-tab">
              <p className="text-sm text-gray-500 dark:text-gray-400">Content for Web Development.</p>
            </div>
            <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="mobiledevelopment" role="tabpanel" aria-labelledby="mobiledevelopment-tab">
              <p className="text-sm text-gray-500 dark:text-gray-400">Content for Mobile Development.</p>
            </div>
            <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="database" role="tabpanel" aria-labelledby="database-tab">
              <p className="text-sm text-gray-500 dark:text-gray-400">Content for Database.</p>
            </div>
            <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="design" role="tabpanel" aria-labelledby="design-tab">
              <p className="text-sm text-gray-500 dark:text-gray-400">Content for UI/UX Design.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}



